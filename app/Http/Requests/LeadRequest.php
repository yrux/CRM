<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeadRequest extends FormRequest
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
        return [
            'first_name'=>'required|max:100',
            'last_name'=>'required|max:100',
            'company'=>'max:255',
            // 'email'=>'required|max:255|email|unique',
            'email'=>'required|max:255|email|unique:App\Models\Lead,email',
            'brand_id'=>'required|exists:brands,id',
            'phone'=>'max:20',
            'lead_type'=>'required',
        ];
    }
}
