<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class MonthYearExist implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    protected $model;
    protected $company_id;
    protected $brand_id;
    protected $id;
    public function __construct($model, $company_id, $brand_id, $id)
    {
        $this->model = $model;
        $this->company_id = $company_id;
        $this->brand_id = $brand_id;
        $this->id = $id;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if($this->id==0){
            return $this->model->whereMonth($attribute, date('m',strtotime($value)))
            ->whereYear($attribute, date('Y',strtotime($value)))
            ->where('company_id',$this->company_id)
            ->where('brand_id',$this->brand_id)->count()==0;
        }else{
            return $this->model->whereMonth($attribute, date('m',strtotime($value)))
            ->whereYear($attribute, date('Y',strtotime($value)))
            ->where('company_id',$this->company_id)
            ->where('brand_id',$this->brand_id)
            ->where('id','<>',$this->id)->count()==0;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute column have month and day already present in database';
    }
}
