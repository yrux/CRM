<?php

namespace App\Http\Controllers;

use App\Models\{ProjectUser, Project, User};
use Illuminate\Http\Request;
use App\Http\Resources\ProjectUserResource;
use App\Http\Requests\ProjectUserRequest;
class ProjectUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Project $project)
    {
        return ProjectUserResource::collection($project->users()->paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProjectUserRequest $request, Project $project)
    {
        $user = User::find($request->user_id);
        $project_user = $project->users()->create([
            'user_id'=>$user->id,
            'role_id'=>$user->role_id
        ]);
        return new ProjectUserResource($project_user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProjectUser  $projectUser
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project, ProjectUser $user)
    {
        return new ProjectUserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProjectUser  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project, ProjectUser $user)
    {
        $user = User::find($request->user_id);
        $user->update([
            'user_id'=>$user->id,
            'role_id'=>$user->role_id
        ]);
        return new ProjectUserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProjectUser  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProjectUser $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
}
