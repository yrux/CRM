<?php

namespace App\Http\Controllers;

use App\Models\{UserBrief, BriefForm, User};
use Illuminate\Http\Request;
use App\Http\Resources\UserBriefResource;
use App\Notifications\BriefSubmit;
class UserBriefController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $role = $request->user()->role_id;
        $user_briefs = UserBrief::orderBy('id','desc');
        if($role==6){
            $user_briefs = $user_briefs->where('user_id',$request->user()->id);
        }else{
            $user_briefs = $user_briefs->where('user_id',$_GET['user_id']);
        }
        $user_briefs = $user_briefs->get();
        return UserBriefResource::collection($user_briefs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $arr = $request->only('form_name','user_id','brand_id');
        $form = BriefForm::find($request->form_id);
        $arr['form_fields'] = $form->form_fields;
        $arr['sender_id'] = $request->user()->id;
        $user_briefs = UserBrief::create($arr);
        //send mail to user here
        $message = 'New Brief has been sent, Kindly fill it up';
        $customer = User::find($user_briefs->user_id);
        $customer->notify(new BriefSubmit($user_briefs, $message));
        return new UserBriefResource($user_briefs);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserBrief  $userBrief
     * @return \Illuminate\Http\Response
     */
    public function show(UserBrief $userBrief)
    {
        return new UserBriefResource($userBrief);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserBrief  $userBrief
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserBrief $userBrief)
    {
        $arr = $request->only('form_fields');
        $arr['status'] = 1;
          $userBrief->update($arr);
        //send mail to user here
        $message = $request->user()->name.' has filled the brief';
        $sender = User::find($userBrief->sender_id);
        $sender->notify(new BriefSubmit($userBrief, $message));
        return new UserBriefResource($userBrief);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserBrief  $userBrief
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserBrief $userBrief)
    {
        $userBrief->delete();
        return response()->json(null, 204);
    }
}
