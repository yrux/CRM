<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BrandUserAssignRequest extends FormRequest
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
        $id = intval(optional($this->route('user'))->id);
        return [
            'user_email'=>'required|max:255|unique:App\Models\User,email|unique:App\Models\BrandUser,user_email'.($id>0?(','.$id):''),
            'user_name'=>'required|max:255',
            'user_id'=>'required',
        ];
    }
}
