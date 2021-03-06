<?php

namespace App\Http\Controllers;

use App\Models\{Lead, User, Brand, LeadAssigned};
use Illuminate\Http\Request;
use App\Http\Requests\LeadRequest;
use App\Http\Resources\LeadResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;

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
            $leads = $leads->leftJoin('lead_assigned','leads.id','=','lead_assigned.lead_id')
            ->where('lead_assigned.user_id',$request->user()->id);
        }else if($request->user()->role_id==5){
            $leads = $leads->leftJoin('lead_assigned','leads.id','=','lead_assigned.lead_id')
            ->where('lead_assigned.user_id',$request->user()->id);
        }
        if(!empty($_GET['brand_id'])){
            $leads = $leads->where('brand_id',$_GET['brand_id']);
        }
        $leads = $leads->leftJoin('lead_types','leads.lead_type','=','lead_types.id');
        if(!empty($_GET['search'])){
            $leads = $leads->Where(
                function($query) {
                $q = $_GET['search'];
                $query->orWhere('leads.first_name', 'like', '%'.$q.'%')
                ->orWhere('leads.last_name', 'like', '%'.$q.'%')
                ->orWhere('leads.company', 'like', '%'.$q.'%')
                ->orWhere('leads.email', 'like', '%'.$q.'%')
                ->orWhere('leads.phone', 'like', '%'.$q.'%')
                ->orWhere('leads.message', 'like', '%'.$q.'%')
                ->orWhere('lead_types.type', 'like', '%'.$q.'%');
            });
        }
        return $leads->select('leads.*');
    }
    public function index(Request $request)
    {
        $brands = [];
        if($request->user()->role_id==2||$request->user()->role_id==9){
            $brands = $request->user()->companybrands;
        }elseif($request->user()->role_id==4){
            $brand_id = $request->user()->userbrands->pluck('brand_id');
            $brands = Brand::whereIn('id',$brand_id)->get();
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
        $arr = $request->only('brand_id','first_name','last_name','company','email','phone','message','custom_fields','lead_type');
        $arr['marketing_user_id'] = $request->user()->id;
        $lead = Lead::create($arr);
        if($request->user()->role_id==4){
            $lead->assigned()->create([
                'user_id'=>$request->user()->id
            ]);
        }
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
        $lead->update($request->only(['brand_id','first_name','last_name','company','email','phone','message','custom_fields','lead_type']));
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
    public function createUser(Lead $lead){
        if(intval($lead->user_id)==0){
            $user = User::create([
                'company_id'=>$lead->brand->company->id,
                'email'=>$lead->email,
                'name'=>$lead->first_name.' '.$lead->last_name,
                'password'=>Hash::make('12345678'),
                'role_id'=>6,
            ]);
            $lead->user_id = $user->id;
            $lead->save();
            return response()->json($lead, 200);
        }else{
            return response()->json($lead, 200);
        }
    }
}
