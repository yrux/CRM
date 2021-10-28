<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BrandRequest extends FormRequest
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
        $id = intval(optional($this->route('brand'))->id);
        return [
            'brand_code'=>'required|max:20|unique:App\Models\Brand,brand_code'.($id>0?(','.$id.',id'):''),
            'brand_name'=>'required|max:255',
            'file'=>'sometimes|required|image',
        ];
    }
}
