<?php

namespace App\Http\Controllers;

use App\Models\{ProjectTask, Project};
use Illuminate\Http\Request;
use App\Http\Resources\ProjectTaskResource;
class ProjectTaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Project $project)
    {
        return ProjectTaskResource::collection($project->tasks()->orderBy('id','asc')->paginate(25));
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
}
