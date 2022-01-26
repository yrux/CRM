<?php

namespace App\Http\Requests;

use App\Models\MarketingBudget;
use Illuminate\Foundation\Http\FormRequest;
use App\Rules\MonthYearExist;
use Illuminate\Validation\Rule;
class MarketingBudgetRequest extends FormRequest
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
        $id = 0;
        if(isset(request()->route()->parameters()['marketing_budget'])){
            $id=request()->route()->parameters()['marketing_budget']->id;
        }
        return [
            'brand_id'=>['required'],
            'max_spendings'=>'required',
            'required_leads'=>'required',
            'for_period'=>['required', 'date', new MonthYearExist(new MarketingBudget, $this->user()->company_id, $this->brand_id, $id)],
        ];
    }
}
