<?php

namespace App\Http\Controllers;

use App\Models\{ProjectTask, Project, User};
use Illuminate\Http\Request;
use App\Http\Resources\ProjectTaskResource;
use App\Repositories\FileRepository;
use App\Http\Requests\ProjectTaskRequest;
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
        $task = $project->tasks()->create($arr);
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
    public function destroy(Project $project, ProjectTask $task)
    {
        $task->delete();
        return response()->json(null, 204);
    }

    public function updateStatus(Project $project, ProjectTask $task, $status){
        $task->status = $status;
        $task->save();
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
            $query = ProjectTask::where('assigned_by',$request->user()->id);
        }
        if(optional($request)->type!=''){
            if($request->type=='overdue'){
                $query = $query->where('project_tasks.due_date','<',date('Y-m-d'));
            }
            if($request->type=='today'){
                // dd(date('Y-m-d'));
                $query = $query->where('project_tasks.due_date',date('Y-m-d'));
            }
            if($request->type=='upcomming'){
                $query = $query->where('project_tasks.due_date','>',date('Y-m-d'));
            }
        }
        $query->leftJoin('projects','project_tasks.project_id','projects.id');
        $query->leftJoin('users as assigned_user','project_tasks.assigned_on','assigned_user.id');
        $query->leftJoin('users as developer_user','project_tasks.developer_id','developer_user.id');
        $query->select('project_tasks.task_type','project_tasks.title as task_title','customers.name as customer_name','projects.id as project_id_root','customers.email as customer_email','projects.title','projects.project_id','project_tasks.id','project_tasks.due_date','project_tasks.created_at','assigned_user.name as assigned_user_name','assigned_user.email as assigned_user_email','developer_user.name as developer_name','developer_user.email as developer_email');
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
                ->orWhere('developer_user.name', 'like', '%'.$q.'%')
                ->orWhere('developer_user.email', 'like', '%'.$q.'%')
                ->orWhere('projects.project_id', 'like', '%'.$q.'%');
            });
        }
        if(intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return $query;
    }
    public function usersSummary(Project $project){
        $tasks = $project->tasks->groupBy('assigned_on');
        $tasks_summary = [];
        foreach($tasks as $key=>$value){
            $tasks_summary[$key] = [];
            $tasks_summary[$key] = ['user'=>User::find($key),'count'=>count($value)];
        }
        return $tasks_summary;
    }
}
