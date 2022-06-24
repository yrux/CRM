<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Http\Resources\UserResource;
use App\Http\Requests\ProfileRequest;
use DB;

class ApiAuthController extends Controller
{
    public function login (Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);
            } else {
                $response = ["message" => "Password mismatch"];
                return response($response, 422);
            }
        } else {
            $response = ["message" =>'User does not exist'];
            return response($response, 422);
        }
    }
    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }
    public function updateprofile(ProfileRequest $request){
        $arr = [
            'name'=>$request->name,
            'email'=>$request->email,
        ];
        if(isset($request->password)){
            if(strlen($request->password)<60){
                $arr['password'] = Hash::make($request->password);
            }
        }
        $data = User::where('id',$request->user()->id)->update($arr);
        return new UserResource(User::find($request->user()->id));
    }
    public function checkTokens(Request $request){
        $users = [];
        foreach($request->tokens as $token){
            $token_parts = explode('.', $token);
            $token_header = $token_parts[1];
            $token_header_json = base64_decode($token_header);
            $token_header_array = json_decode($token_header_json, true);
            $token_id = $token_header_array['jti'];
            $user_id = DB::table('oauth_access_tokens')->where('id', $token_id)->first();
            $user = User::find($user_id->user_id);
            $user->token = $token;
            $users[] = $user;
        }
        return response()->json(['accounts'=>$users]);
    }
}
