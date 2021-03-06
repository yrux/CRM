<?php

namespace App\Http\Controllers;

use App\Models\{ProjectTask, Project, User, TaskComment, TaskCommentUserNotification};
use Illuminate\Http\Request;
use App\Http\Resources\ProjectTaskResource;
use App\Repositories\FileRepository;
use App\Http\Requests\ProjectTaskRequest;
use DB;
use App\Notifications\taskAssigned;
use App\Notifications\taskComment as taskCommentNotification;
class ProjectTaskController extends Controller
{
    protected $file;
    public function __construct(FileRepository $file)
    {
        $this->file = $file;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Project $project)
    {
        $tasks = $project->tasks();
        $user = $request->user();
        if($user->role_id==4||$user->role_id==5){
            $tasks = $tasks->where('assigned_by',$request->user()->id);
            if(!empty($_GET['user_id'])){
                $tasks = $tasks->where('assigned_on',$_GET['user_id']);
            }
        }
        if($user->role_id==7){
            $tasks = $tasks->where('assigned_on',$request->user()->id);
        }
        if($user->role_id==8){
            $tasks = $tasks->where('developer_id',$request->user()->id);
        }
        $tasks = $tasks->orderBy('id','desc')->with('assigned_on_user','developer_user')->paginate(25);
        return ProjectTaskResource::collection($tasks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Project $project)
    {
        $arr = $request->except(['__token']);
        $arr['assigned_by'] = $request->user()->id;
        $manager = User::find($request->assigned_on);
        $task = $project->tasks()->create($arr);
        $manager->notify(new taskAssigned($task));
        if($request->attachements){
            $this->file->create($request->attachements, 'project_tasks', $task->id, 2);
        }
        return new ProjectTaskResource($task);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectTask  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project, ProjectTask $task)
    {
        return new ProjectTaskResource($task);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectTask  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project, ProjectTask $task)
    {
        if(isset($request->assigned_on)){
            if($task->assigned_on!=$request->assigned_on){
                $manager = User::find($request->assigned_on);
                $manager->notify(new taskAssigned($task));
            }
        }
        if(isset($request->developer_id)){
            if($task->developer_id!=$request->developer_id){
                $manager = User::find($request->developer_id);
                $manager->notify(new taskAssigned($task, true));
            }
        }
        $arr = $request->except(['__token']);
        $task->update($arr);
        return new ProjectTaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectTask  $projectTask
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project, ProjectTask $task){
        $task->delete();
        return response()->json(null, 204);
    }

    public function updateStatus(Request $request, Project $project, ProjectTask $task, $status){
        // TaskComment, TaskCommentUserNotification
        $task->status = $status;
        $task->save();
        $statusText = '';
        //0=opened,1=inprogress,2=closed/completed,3=onhold
        if($status==0){
            $statusText=$request->user()->name.' Re-Opened the task';
        }
        if($status==1){
            $statusText=$request->user()->name. ' updated the task status to In Progress';
        }
        if($status==2){
            $statusText=$request->user()->name.' Closed the task';
        }
        if($status==3){
            $statusText=$request->user()->name.'put the task On Hold';
        }
        $comment = TaskComment::create([
            'task_id'=>$task->id,
            'user_id'=>$request->user()->id,
            'is_internal'=>0,
            'comment'=>$statusText,
        ]);
        $userIds = [$task->assigned_on,$task->developer_id,$task->assigned_by];
        foreach($userIds as $userId){
            if($userId!=$comment->user_id){
                if(intval($userId)>0){
                    $user = User::find($userId);
                    if($user){
                        TaskCommentUserNotification::create([
                            'user_id'=>$user->id,
                            'task_id'=>$comment->task_id
                        ]);
                        $user->notify(new taskCommentNotification($comment));
                    }
                }
            }
        }
        return response()->json(null, 200);
    }
    public function validateTask(ProjectTaskRequest $request){
        return response()->json(null,200);
    }
    public function allTasks(Request $request){
        if($request->user()->role_id==7){
            $query = ProjectTask::where('assigned_on',$request->user()->id);
        }
        else if($request->user()->role_id==8){
            $query = ProjectTask::where('developer_id',$request->user()->id);
        }
        else{
            if($request->user()->role_id!=10){
                $query = ProjectTask::where('assigned_by',$request->user()->id);
            }else{
                $query = ProjectTask::whereRaw(DB::raw('1=1'));
            }
        }
        if(optional($request)->type!=''){
            if($request->type=='overdue'){
                $query = $query->where('project_tasks.due_date','<',date('Y-m-d'))
                ->whereIn('project_tasks.status',[0,1]);
            }
            if($request->type=='today'){
                // dd(date('Y-m-d'));
                $query = $query->where('project_tasks.due_date',date('Y-m-d'))
                ->whereIn('project_tasks.status',[0,1]);
            }
            if($request->type=='upcomming'){
                $query = $query->where('project_tasks.due_date','>',date('Y-m-d'))
                ->whereIn('project_tasks.status',[0,1]);
            }
        }
        $query->leftJoin('projects','project_tasks.project_id','projects.id');
        $query = $query->where('projects.company_id',$request->user()->company_id);
        $query->leftJoin('users as assigned_user','project_tasks.assigned_on','assigned_user.id');
        $query->leftJoin('users as assigned_by_user','project_tasks.assigned_by','assigned_by_user.id');
        $query->leftJoin('users as developer_user','project_tasks.developer_id','developer_user.id');
        $query = $query->leftJoin(DB::raw('(SELECT start_time, end_time,task_id FROM task_times WHERE end_time IS NULL GROUP BY task_times.task_id) AS task_time'), 
        function($join)
        {
           $join->on('task_time.task_id', '=', 'project_tasks.id');
        });
        // echo date('h:i:s');
        $query = $query->leftJoin(DB::raw("(SELECT SEC_TO_TIME(SUM(TIMEDIFF(IFNULL(task_times.end_time,STR_TO_DATE('".date('h:i:s')."','%h:%i:%s')),task_times.start_time))) AS total_time_on_task,task_times.task_id FROM task_times
        GROUP BY task_times.task_id) AS task_sum_time"), 
        function($join)
        {
           $join->on('task_sum_time.task_id', '=', 'project_tasks.id');
        });

        $query->select(
            DB::raw('CASE WHEN IFNULL(task_time.start_time,0)=0 THEN 0 ELSE 1 END AS task_started'),
            DB::raw("IFNULL(task_sum_time.total_time_on_task,'00:00:00') as total_time_on_task"),
            'project_tasks.task_type','project_tasks.title as task_title','customers.name as customer_name','projects.id as project_id_root','customers.email as customer_email','projects.title','projects.project_id','project_tasks.id','project_tasks.due_date'
            ,'project_tasks.created_at','assigned_user.name as assigned_user_name','assigned_user.email as assigned_user_email',
            'assigned_by_user.email as assigned_by_user_email','assigned_by_user.name as assigned_by_user_name',
            'developer_user.name as developer_name','developer_user.email as developer_email','project_tasks.status');
        $query = $query->leftJoin('project_users',function($join){
            $join->on('projects.id','=','project_users.project_id')->where('project_users.role_id',6);
        });
        $query = $query->leftJoin('users as customers',function($join){
            $join->on('project_users.user_id','=','customers.id')->where('customers.role_id',6);
        });
        if(isset($_GET['sortCol'])){
            $query = $query->orderBy($_GET['sortCol'],($_GET['sortByDesc']==1?'desc':'asc'));
        }else{
            $query = $query->orderBy('project_tasks.id','desc');
        }
        if(!empty($_GET['search'])){
            $query = $query->Where(
                function($query) {
                $q = $_GET['search'];
                $query
                ->orWhere('projects.title', 'like', '%'.$q.'%')
                ->orWhere('project_tasks.id', 'like', '%'.$q.'%')
                ->orWhere('customers.name', 'like', '%'.$q.'%')
                ->orWhere('customers.email', 'like', '%'.$q.'%')
                ->orWhere('assigned_user.name', 'like', '%'.$q.'%')
                ->orWhere('assigned_user.email', 'like', '%'.$q.'%')
                ->orWhere('assigned_by_user.name', 'like', '%'.$q.'%')
                ->orWhere('assigned_by_user.email', 'like', '%'.$q.'%')
                ->orWhere('developer_user.name', 'like', '%'.$q.'%')
                ->orWhere('developer_user.email', 'like', '%'.$q.'%')
                ->orWhere('projects.project_id', 'like', '%'.$q.'%');
            });
        }
        if(intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            if(!empty($_GET['getCount'])){
                $query=$query->count('project_tasks.id');
            }else{
                $query=$query->get();
            }
        }
        return $query;
    }
    public function usersSummary(Project $project, Request $request){
        $tasks = $project->tasks()->where('assigned_by',$request->user()->id)->get()->groupBy('assigned_on');
        $tasks_summary = [];
        foreach($tasks as $key=>$value){
            $tasks_summary[$key] = [];
            $tasks_summary[$key] = ['user'=>User::find($key),'count'=>count($value)];
        }
        return $tasks_summary;
    }
    public function markCommentsread(Request $request, ProjectTask $task){
        return $task->comment_notifications()->delete();
    }
}
