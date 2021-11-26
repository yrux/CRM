<?php

namespace App\Http\Controllers;

use App\Models\{Payment, Lead, User};
use Illuminate\Http\Request;
use App\Http\Requests\PaymentRequest;
use App\Http\Resources\PaymentResource;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Lead $lead, Request $request)
    {
        $payments = $lead->payments()->with('project')->orderBy('id', 'desc');
        if(!empty($request->project_id)){
            $payments = $payments->where('project_id',$_GET['project_id']);
        }
        if(!empty($request->unpaid)){
            $payments = $payments->whereIn('status',[0,2]);
        }
        $payments = $payments->get();
        return PaymentResource::collection($payments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Lead $lead, PaymentRequest $request)
    {
        $payment = $lead->payments()->create($request->only('amount', 'description', 'status', 'merchant','payment_type','project_id'));
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
        $payment->update($request->only('amount', 'description', 'status', 'merchant','payment_type','project_id'));
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
    public function getBrand(Payment $payment)
    {
        return $payment->lead->brand->only('brand_name', 'brand_code', 'image_url');
    }
    public function checkEmail(Payment $payment, Request $request)
    {
        if ($payment->lead->email == $request->email) {
            if ($payment->merchant == 'stripe') {
                $stripe_keys = $payment->lead->brand->company->merchants()->where('merchant_type', 'stripe')->first();
                $stripe = new \Stripe\StripeClient($stripe_keys->merchant_details->sk);
                \Stripe\Stripe::setApiKey($stripe_keys->merchant_details->sk);
                $stripeCustomerCheck = \collect($stripe->customers->all(['limit' => 1, 'email' => $payment->lead->email])->data)->where('email', $payment->lead->email)->first();
                if (!$stripeCustomerCheck) {
                    $stripeCustomerCheck = $stripe->customers->create([
                        'description' => $payment->lead->first_name . ' ' . $payment->lead->last_name,
                        'email' => $payment->lead->email,
                        // 'payment_method' => 'card',
                    ]);
                }
                $intent = $stripe->setupIntents->create(
                    [
                        'customer' => $stripeCustomerCheck->id,
                        'payment_method_types' => ['card'],
                    ]
                );
                // return $session;
                return [
                    'client_secret' => $intent->client_secret,
                    'stripe_pk' => $stripe_keys->merchant_details->pk,
                    'type' => $payment->merchant,
                    'success_url' => route('payment.link.success', [$payment])
                    //'stripe_sk' => $stripe_keys->merchant_details->sk
                ];
            }
        } else {
            abort(404);
        }
    }
    public function stripeSuccess(Payment $payment, Request $request)
    {
        if ($payment->status != 1) {
            $stripe_keys = $payment->lead->brand->company->merchants()->where('merchant_type', 'stripe')->first();
            $stripe = new \Stripe\StripeClient($stripe_keys->merchant_details->sk);
            \Stripe\Stripe::setApiKey($stripe_keys->merchant_details->sk);
            $res = $stripe->setupIntents->retrieve(
                $_GET['setup_intent'],
                []
            );
            switch ($res->status) {
                case 'succeeded':
                    $payment_methods = $stripe->paymentMethods->all(
                        ['customer' => $res->customer, 'type' => 'card']
                    );
                    $original_amount = ($payment->amount);
                    $amount_first = round(($original_amount - 3), 0);
                    // 2nd transaction
                    $rand = round(floatVal('1.' . rand(10, 90)), 0);
                    // $rand = $rand;
                    // 3rd transaction
                    $rand2 = round(($original_amount - ($amount_first + $rand)), 0);
                    // dd($amount_first, $rand, $rand2);
                    try {
                        $payment_1 = \Stripe\PaymentIntent::create([
                            'amount' => ($amount_first * 100),
                            'currency' => 'usd',
                            'customer' => $res->customer,
                            'payment_method' => $payment_methods->data[0]->id,
                            'off_session' => true,
                            'confirm' => true,
                        ]);
                    } catch (\Stripe\Exception\CardException $e) {
                        // Error code will be authentication_required if authentication is needed
                        echo 'Error code is:' . $e->getError()->code;
                        $payment_intent_id = $e->getError()->payment_intent->id;
                        $payment_intent = \Stripe\PaymentIntent::retrieve($payment_intent_id);
                    }

                    try {
                        $payment_2 = \Stripe\PaymentIntent::create([
                            'amount' => ($rand * 100),
                            'currency' => 'usd',
                            'customer' => $res->customer,
                            'payment_method' => $payment_methods->data[0]->id,
                            'off_session' => true,
                            'confirm' => true,
                        ]);
                    } catch (\Stripe\Exception\CardException $e) {
                        // Error code will be authentication_required if authentication is needed
                        echo 'Error code is:' . $e->getError()->code;
                        $payment_intent_id = $e->getError()->payment_intent->id;
                        $payment_intent = \Stripe\PaymentIntent::retrieve($payment_intent_id);
                    }
                    try {
                        $payment_3 = \Stripe\PaymentIntent::create([
                            'amount' => ($rand2 * 100),
                            'currency' => 'usd',
                            'customer' => $res->customer,
                            'payment_method' => $payment_methods->data[0]->id,
                            'off_session' => true,
                            'confirm' => true,
                        ]);
                    } catch (\Stripe\Exception\CardException $e) {
                        // Error code will be authentication_required if authentication is needed
                        echo 'Error code is:' . $e->getError()->code;
                        $payment_intent_id = $e->getError()->payment_intent->id;
                        $payment_intent = \Stripe\PaymentIntent::retrieve($payment_intent_id);
                    }
                    //$payment_methods->data[0]->id
                    $payment->status = 1;
                    $payment->save();
                    $user = User::create([
                        'company_id'=>$payment->lead->brand->company->id,
                        'email'=>$payment->lead->email,
                        'name'=>$payment->lead->first_name.' '.$payment->lead->last_name,
                        'password'=>Hash::make('12345678'),
                        'role_id'=>6,
                    ]);
                    // dd($payment->lead->id, $user);
                    $lead_update = Lead::find($payment->lead->id);
                    $lead_update->user_id = $user->id;
                    $lead_update->save();
                    break;
                case 'processing':
                    $payment->status = 2;
                    $payment->save();
                    break;
                case 'requires_payment_method':
                    $payment->status = 2;
                    $payment->save();
                    break;
            }
        }
        return view('welcome');
    }
}
