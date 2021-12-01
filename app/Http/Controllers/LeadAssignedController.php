<?php

namespace App\Http\Controllers;

use App\Models\{Lead, LeadAssigned};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\LeadAssignedResource;


class LeadAssignedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Lead $lead, Request $request)
    {
        Gate::authorize('viewAny',LeadAssigned::class);
        $assigned = $lead->assigned()->orderBy('id','desc')->get();
        return LeadAssignedResource::collection($assigned);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Lead $lead, Request $request)
    {
        $lead->assigned()->where('user_id',$request->user_id)->delete();
        Gate::authorize('create',LeadAssigned::class);
        $assigned = $lead->assigned()->create(['user_id'=>$request->user_id]);
        return new LeadAssignedResource($assigned);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Http\Response
     */
    public function show(Lead $lead, LeadAssigned $assigned)
    {
        Gate::authorize('view',$assigned);
        return new LeadAssignedResource($assigned);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Http\Response
     */
    public function update(Lead $lead, LeadAssigned $assigned, Request $request)
    {
        $lead->assigned()->where('user_id',$request->user_id)->where('id','<>',$assigned->id)->delete();
        Gate::authorize('update',$assigned);
        $assigned->user_id = $request->user_id;
        $assigned->save();
        return new LeadAssignedResource($assigned);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lead $lead, LeadAssigned $assigned)
    {
        Gate::authorize('delete',$assigned);
        $assigned->delete();
        return response()->json(null, 204);
    }
}
