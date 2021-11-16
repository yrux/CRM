<?php

namespace App\Http\Controllers;

use App\Models\{Lead, User};
use Illuminate\Http\Request;
use App\Http\Requests\LeadRequest;
use App\Http\Resources\LeadResource;
use Illuminate\Support\Facades\Gate;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function filtersLead(Request $request){
        // Gate::authorize('viewAny',Lead::class);
        // $leads = Lead::orderBy('id','desc');
        if(isset($_GET['sortCol'])){
            $leads = Lead::orderBy($_GET['sortCol'],($_GET['sortByDesc']==1?'desc':'asc'));
        }else{
            $leads = Lead::orderBy('leads.id','desc');
        }
        if($request->user()->role_id==2){
            //leads from company
            $leads = $leads->whereIn('brand_id',$request->user()->companybrands->pluck('id'));
        }else if($request->user()->role_id==4){
            $leads = $leads->where('assigned_to',$request->user()->id);
        }else if($request->user()->role_id==5){
            $leads = $leads->where('assigned_to',$request->user()->id);
        }
        if(!empty($_GET['search'])){
            $leads = $leads->Where(
                function($query) {
                $q = $_GET['search'];
                $query->orWhere('leads.first_name', 'like', '%'.$q.'%')
                ->orWhere('leads.last_name', 'like', '%'.$q.'%')
                ->orWhere('leads.company', 'like', '%'.$q.'%')
                ->orWhere('leads.email', 'like', '%'.$q.'%')
                ->orWhere('leads.phone', 'like', '%'.$q.'%')
                ->orWhere('leads.message', 'like', '%'.$q.'%');
            });
        }
        return $leads;
    }
    public function index(Request $request)
    {
        $brands = [];
        if($request->user()->role_id==2){
            $brands = $request->user()->companybrands;
        }
        $new = $this->filtersLead($request);
        $followup =$this->filtersLead($request);
        $paid = $this->filtersLead($request);
        $junk = $this->filtersLead($request);

        $new = $new->where('lead_status',0);
        $new = $new->paginate(intval(isset($_GET['perpage'])?$_GET['perpage']:0)>0?$_GET['perpage']:25);
        $paid = $paid->where('lead_status',1);
        $paid = $paid->paginate(intval(isset($_GET['perpage'])?$_GET['perpage']:0)>0?$_GET['perpage']:25);
        $junk = $junk->where('lead_status',2);
        $junk = $junk->paginate(intval(isset($_GET['perpage'])?$_GET['perpage']:0)>0?$_GET['perpage']:25);
        $followup = $followup->where('lead_status',3);
        $followup = $followup->paginate(intval(isset($_GET['perpage'])?$_GET['perpage']:0)>0?$_GET['perpage']:25);
        $max_page_arr = [$new->lastPage(), $paid->lastPage(), $junk->lastPage(), $followup->lastPage()];
        $maxPage = max($max_page_arr);
        return [
            'junk'=>LeadResource::collection($junk),
            'new'=>LeadResource::collection($new),
            'paid'=>LeadResource::collection($paid),
            'followup'=>LeadResource::collection($followup),
            'maxPage'=>$maxPage,
            'brands'=>$brands,
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LeadRequest $request)
    {
        $lead = Lead::create($request->only('brand_id','first_name','last_name','company','email','phone','message','custom_fields'));
        return new LeadResource($lead);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function show(Lead $lead)
    {
        $lead->totalPaid = $lead->payments()->where('status',1)->sum('amount');
        return new LeadResource($lead);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function update(LeadRequest $request, Lead $lead)
    {
        $lead->update($request->only(['brand_id','first_name','last_name','company','email','phone','message','custom_fields']));
        return new LeadResource($lead);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lead $lead)
    {
        $lead->user()->delete();
        $lead->delete();
        return response()->json(null, 204);
    }
    public function updateStatus(Lead $lead, $status)
    {
        $lead->lead_status = $status;
        $lead->save();
        return response()->json(null, 204);
    }
    public function assignUser(Lead $lead, User $user){
        $lead->assigned_to = $user->id;
        $lead->save();
        return response()->json(null, 204);
    }
}
