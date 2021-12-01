<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\DepartmentResource;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny',Department::class);
        $department = Department::where('company_id',$request->user()->company_id)->with('image')->orderBy('id','desc')->get();
        return DepartmentResource::collection($department);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Gate::authorize('create',Department::class);
        $arr = $request->only(['department_name']);
        $arr['company_id'] = $request->user()->company_id;
        $department = Department::create($arr);
        if($request->image){
            $this->file->create($request->image, 'departments', $department->id, 1);
        }
        return new DepartmentResource($department);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        Gate::authorize('view',$department);
        $department->load('image');
        return new DepartmentResource($department);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        Gate::authorize('update',$department);
        $department->update($request->only('department_name'));
        if($request->image){
            $this->file->create($request->image, 'departments', $department->id, 1);
        }
        return new DepartmentResource($department);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department)
    {
        Gate::authorize('delete',$department);
        $department->delete();
        return response()->json(null, 204);
    }
}
