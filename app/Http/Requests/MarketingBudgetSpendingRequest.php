<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Carbon;

class MarketingBudgetSpendingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $marketing_budget_id = request()->route()->parameters()['marketing_budget'];
        $date_carbon = Carbon::parse($marketing_budget_id->for_period);
        $end_of_month = $date_carbon->endOfMonth()->format('Y-m-d');
        $start_of_month = $date_carbon->startOfMonth()->format('Y-m-d');
        $id = 0;
        $maxSpending = $marketing_budget_id->remaining_spending;
        if(isset(request()->route()->parameters()['spending'])){
            $id=request()->route()->parameters()['spending']->id;
            $maxSpending+=request()->route()->parameters()['spending']->spending;
        }
        $arr = [
            'spending'=>'required|numeric|max:'.$maxSpending,
        ];
        if($id==0){
            $arr['date'] = [
                'required',
                'date',
                // Rule::unique('marketing_budget_spendings')->where(function ($query) use ($marketing_budget_id) {
                //     return $query->where('marketing_budget_id', $marketing_budget_id->id);
                // }), 
                'after_or_equal:'.$start_of_month,'before_or_equal:'.$end_of_month
            ];
        }
        return $arr;
    }
}
