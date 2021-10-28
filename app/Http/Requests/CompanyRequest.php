<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
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
        $id = intval(optional($this->route('company'))->id);
        $user_id = intval(optional($this->route('company'))->user_id);
        return [
            'company_name'=>'required|max:255|unique:App\Models\Company,company_name'.($id>0?(','.$id):''),
            'email'=>'required|email|max:255|unique:App\Models\User,email'.($user_id>0?(','.$user_id):''),
            'password'=>'sometimes|required|max:200',
            'file'=>'sometimes|required|image',
        ];
    }
}
