<?php

namespace App\Http\Controllers;

use App\Models\{MarketingBudget, MarketingBudgetSpending};
use Illuminate\Http\Request;
use App\Http\Resources\MarketingBudgetSpendingResource;
use App\Http\Requests\MarketingBudgetSpendingRequest;

class MarketingBudgetSpendingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(MarketingBudget $marketingBudget, Request $request)
    {
        $data = $marketingBudget->spendings();
        if(isset($_GET['sortCol'])){
            $data = $data->orderBy($_GET['sortCol'],($_GET['sortByDesc']==1?'desc':'asc'));
        }else{
            $data = $data->orderBy('marketing_budget_spendings.id','desc');
        }
        if(!empty($_GET['search'])){
            $data = $data->Where(
                function($query) {
                $q = $_GET['search'];
                $query->orWhere('marketing_budget_spendings.spending', 'like', '%'.$q.'%')
                ->orWhere('marketing_budget_spendings.date', 'like', '%'.$q.'%');
            });
        }
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $data=$data->paginate($_GET['perpage']);
        }else{
            $data=$data->get();
        }
        return MarketingBudgetSpendingResource::collection($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MarketingBudget $marketingBudget, MarketingBudgetSpendingRequest $request)
    {
        // return;
        $arr = $request->only('spending','date');
        $spending = $marketingBudget->spendings()->create($arr);
        return new MarketingBudgetSpendingResource($spending);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MarketingBudget  $marketingBudget
     * @return \Illuminate\Http\Response
     */
    public function update(MarketingBudget $marketingBudget, MarketingBudgetSpending $spending, MarketingBudgetSpendingRequest $request)
    {
        $spending->update($request->only('spending'));
        return new MarketingBudgetSpendingResource($spending);
    }
}
