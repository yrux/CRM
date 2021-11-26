<?php

namespace App\Http\Requests;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
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
            'amount'=>'required|gt:0',
            'merchant'=>'required',
            'description'=>'max:555',
            'payment_type' => [
                'required',
                Rule::in(['sell', 'upsell', 'bonus']),
            ],
            // 'project_id' => 'required_if:payment_type,upsell',
        ];
    }
}
