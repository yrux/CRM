<?php

namespace App\Http\Controllers;

use App\Models\{Payment, Lead};
use Illuminate\Http\Request;
use App\Http\Requests\PaymentRequest;
use App\Http\Resources\PaymentResource;
use Illuminate\Support\Facades\Gate;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Lead $lead, Request $request)
    {
        return PaymentResource::collection($lead->payments()->orderBy('id','desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Lead $lead, PaymentRequest $request)
    {
        $payment = $lead->payments()->create($request->only('amount','description','status','merchant'));
        return new PaymentResource($payment);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Lead $lead, Payment $payment, Request $request)
    {
        return new PaymentResource($payment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Lead $lead, Payment $payment, PaymentRequest $request)
    {
        $payment->update($request->only('amount','description','status','merchant'));
        return new PaymentResource($payment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lead $lead, Payment $payment, Request $request)
    {
        $payment->delete();
        return response()->json(null, 204);
    }
}
