<?php

namespace App\Http\Controllers;
use App\Models\{BrandUser, Brand, Project, ProjectUser};
use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;
use Illuminate\Support\Facades\Gate;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny',Project::class);
        $data = Project::where('company_id',$request->user()->company_id);
        if($request->user()->role_id==3){
            //$data = $data->where('brand_id',);
        }
        if($request->user()->role_id==4){
            //$data = $data->where('brand_id',);
        }
        return ProjectResource::collection($data->paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Gate::authorize('create',Project::class);
        $arr = $request->only('title','description','brand_id');
        // dd($request->user()->brand);
        //$request->user()->brand->id
        $arr['company_id'] = $request->user()->company_id;
        $brand = Brand::find($request->brand_id);
        $arr['project_id'] = $brand->brand_code.'-'.time();
        $project = Project::create($arr);
        $project->project_id = $project->project_id.'-'.$project->id;
        $project->save();
        $brand_users = BrandUser::where('brand_id',$request->brand_id)->where('is_owner',1)->where('user_id','<>',$request->user()->id)->get();
        ProjectUser::create([
            'project_id'=>$project->id,
            'user_id'=>$request->user()->id,
            'role_id'=>$request->user()->role_id
        ]);
        foreach($brand_users as $brand_user){
            ProjectUser::create([
                'project_id'=>$project->id,
                'user_id'=>$brand_user->user_id,
                'role_id'=>$brand_user->user->role_id
            ]);
        }
        return new ProjectResource($project);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        Gate::authorize('update',$project);
        return new ProjectResource($project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        Gate::authorize('delete',$project);
        $project->delete();
        return response()->json(null, 204);
    }
}
