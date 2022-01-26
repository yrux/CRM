<?php

namespace App\Http\Controllers;

use App\Models\LeadType;
use Illuminate\Http\Request;
use App\Http\Resources\LeadTypeResource;
use Illuminate\Support\Facades\Gate;
use App\Http\Requests\LeadTypeRequest;

class LeadTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Gate::authorize('viewAny',LeadType::class);
        $data = LeadType::where('company_id',$request->user()->company_id);
        if(isset($_GET['sortCol'])){
            $data = $data->orderBy($_GET['sortCol'],($_GET['sortByDesc']==1?'desc':'asc'));
        }else{
            $data = $data->orderBy('id','desc');
        }
        if(!empty($_GET['search'])){
            $data = $data->Where(
                function($query) {
                $q = $_GET['search'];
                $query->orWhere('type', 'like', '%'.$q.'%');
            });
        }
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $data=$data->paginate($_GET['perpage']);
        }else{
            $data=$data->get();
        }
        return LeadTypeResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LeadTypeRequest $request)
    {
        Gate::authorize('create',LeadType::class);
        $arr = $request->only('type');
        $arr['company_id'] = $request->user()->company_id;
        $budget = LeadType::create($arr);
        return new LeadTypeResource($budget);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LeadType  $leadType
     * @return \Illuminate\Http\Response
     */
    public function show(LeadType $leadType)
    {
        Gate::authorize('view',$leadType);
        return new LeadTypeResource($leadType);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LeadType  $leadType
     * @return \Illuminate\Http\Response
     */
    public function update(LeadTypeRequest $request, LeadType $leadType)
    {
        Gate::authorize('update',$leadType);
        $leadType->update($request->only('type'));
        return new LeadTypeResource($leadType);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LeadType  $leadType
     * @return \Illuminate\Http\Response
     */
    public function destroy(LeadType $leadType)
    {
        Gate::authorize('delete',$leadType);
        $leadType->delete();
        return response()->json(null, 204);
    }
}
