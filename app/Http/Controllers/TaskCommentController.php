<?php

namespace App\Http\Controllers;

use App\Models\{ProjectTask, TaskComment};
use Illuminate\Http\Request;
use App\Http\Resources\TaskCommentResource;
use Illuminate\Support\Facades\Gate;
use App\Repositories\FileRepository;

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
        $comment = $task->comments()->create([
            'user_id'=>$request->user()->id,
            'comment'=>$request->comment
        ]);
        $this->file->create($request->attachements, 'task_comments', $comment->id, 2);
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
