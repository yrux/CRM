<?php

namespace App\Http\Controllers;

use App\Models\MarketingBudget;
use App\Models\Lead;
use Illuminate\Http\Request;
use App\Http\Resources\MarketingBudgetResource;
use Illuminate\Support\Facades\Gate;
use App\Http\Requests\MarketingBudgetRequest;
use DB;
class MarketingBudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny',MarketingBudget::class);
        $data = MarketingBudget::where('marketing_budgets.company_id',$request->user()->company_id);
        if(isset($_GET['sortCol'])){
            $data = $data->orderBy($_GET['sortCol'],($_GET['sortByDesc']==1?'desc':'asc'));
        }else{
            $data = $data->orderBy('marketing_budgets.id','desc');
        }
        $data = $data->leftJoin('brands',function($join){
            $join->on('marketing_budgets.brand_id','=','brands.id');
        });
        $data = $data->leftJoin(DB::raw('(SELECT COUNT(*) AS leads_count, MONTH(created_at) AS lead_month, YEAR(created_at) AS lead_year, brand_id AS lead_brand FROM leads
        GROUP BY MONTH(created_at), YEAR(created_at), brand_id) AS total_leads'), 
        function($join)
        {
            $join->on('total_leads.lead_month', '=', DB::raw('MONTH(for_period)'));
            $join->on('total_leads.lead_year','=',DB::raw('YEAR(for_period)'));
            $join->on('total_leads.lead_brand','=','brand_id');
        });
        if(!empty($_GET['search'])){
            $data = $data->Where(
                function($query) {
                $q = $_GET['search'];
                $query->orWhere('marketing_budgets.for_period', 'like', '%'.$q.'%')
                ->orWhere('marketing_budgets.max_spendings', 'like', '%'.$q.'%')
                ->orWhere('marketing_budgets.brand_id', 'like', '%'.$q.'%')
                ->orWhere('brands.brand_name', 'like', '%'.$q.'%')
                ->orWhere('brands.brand_code', 'like', '%'.$q.'%');
            });
        }
        if(!empty($_GET['brand_id'])){
            $data = $data->where('marketing_budgets.brand_id',intval($_GET['brand_id']));
        }
        $data = $data->select('marketing_budgets.*','brands.brand_name','brands.brand_code', DB::raw('IFNULL(leads_count,0) AS leads_count'));
        if(intval($_GET['perpage'])>0){
            $data=$data->paginate($_GET['perpage']);
        }else{
            $data=$data->get();
        }
        return MarketingBudgetResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MarketingBudgetRequest $request)
    {
        Gate::authorize('create',MarketingBudget::class);
        $arr = $request->only('brand_id','max_spendings','for_period','required_leads');
        $arr['company_id'] = $request->user()->company_id;
        $budget = MarketingBudget::create($arr);
        return new MarketingBudgetResource($budget);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MarketingBudget  $marketingBudget
     * @return \Illuminate\Http\Response
     */
    public function show(MarketingBudget $marketingBudget)
    {
        Gate::authorize('view',$marketingBudget);
        return new MarketingBudgetResource($marketingBudget);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MarketingBudget  $marketingBudget
     * @return \Illuminate\Http\Response
     */
    public function update(MarketingBudgetRequest $request, MarketingBudget $marketingBudget)
    {
        Gate::authorize('update',$marketingBudget);
        $marketingBudget->update($request->only('brand_id','max_spendings','for_period','required_leads'));
        return new MarketingBudgetResource($marketingBudget);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MarketingBudget  $marketingBudget
     * @return \Illuminate\Http\Response
     */
    public function destroy(MarketingBudget $marketingBudget)
    {
        Gate::authorize('delete',$marketingBudget);
        $marketingBudget->delete();
        return response()->json(null, 204);
    }

    public function currentMonthBudget(Request $request){
        $month = date('m');
        $year = date('Y');
        if(!empty($_GET['period'])){
            $year = date('Y',strtotime($_GET['period']));
            $month = date('m',strtotime($_GET['period']));
        }
        $data = MarketingBudget::where('marketing_budgets.company_id', $request->user()->company_id)
        ->whereMonth('for_period', $month)
        ->whereYear('for_period', $year)
        ->leftJoin(DB::raw('(SELECT COUNT(*) AS leads_count, MONTH(leads.created_at) AS lead_month, YEAR(leads.created_at) AS lead_year, leads.brand_id AS lead_brand FROM leads
        GROUP BY MONTH(leads.created_at), YEAR(leads.created_at), leads.brand_id) AS total_leads'), 
        function($join)
        {
           $join->on('total_leads.lead_month', '=', DB::raw('MONTH(for_period)'));
           $join->on('total_leads.lead_year','=',DB::raw('YEAR(for_period)'));
           $join->on('total_leads.lead_brand','=','brand_id');
        })
        ->leftJoin('brands',function($join){
            $join->on('marketing_budgets.brand_id','=','brands.id');
        })
        ->select('marketing_budgets.*','brands.brand_name','brands.brand_code',DB::raw('IFNULL(leads_count,0) AS leads_count'))
        ->get();
        $brand_id = [];
        foreach($data as $dat){
            $brand_id[]=$dat->brand_id;
        }
        $lead_summary = Lead::whereMonth('created_at',$month)->whereYear('created_at',$year)->whereIn('brand_id',$brand_id)->select(DB::raw('COUNT(leads.id) as leads_summary_count'),'lead_type','brand_id')->groupByRaw('lead_type, brand_id')
        ->get()->groupBy('brand_id');
        return response()->json(['marketing_budgets'=>$data,'lead_summary'=>$lead_summary], 200);
    }
}
