<?php

namespace App\Http\Controllers;

use App\Models\{ProjectTask, TaskComment, User, TaskCommentUserNotification};
use Illuminate\Http\Request;
use App\Http\Resources\TaskCommentResource;
use Illuminate\Support\Facades\Gate;
use App\Repositories\FileRepository;
use App\Notifications\taskComment as taskCommentNotification;

class TaskCommentController extends Controller
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
    public function index(ProjectTask $task)
    {
        return TaskCommentResource::collection($task->comments()->orderBy('id','asc')->paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, ProjectTask $task)
    {
        $task->comment_notifications()->delete();
        $comment = $task->comments()->create([
            'user_id'=>$request->user()->id,
            'comment'=>$request->comment,
            'is_internal'=>$request->is_internal,
        ]);
        if($request->attachements){
            $this->file->create($request->attachements, 'task_comments', $comment->id, 2);
        }
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
        return new TaskCommentResource($comment);
    }
    public function destroy(ProjectTask $task, TaskComment $comment)
    {
        //$comment->user_id==$request->user()->id
        Gate::authorize('delete',[$comment,$task]);
        $comment->delete();
        return response()->json(null, 204);
    }
}
