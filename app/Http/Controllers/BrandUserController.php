<?php

namespace App\Http\Controllers;

use App\Models\BrandUser;
use App\Models\Brand;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\BrandUserResource;
use Illuminate\Support\Facades\Gate;
use App\Http\Requests\{BrandUserRequest, BrandUserAssignRequest};
use Illuminate\Support\Facades\Hash;

class BrandUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Brand $brand)
    {
        Gate::authorize('viewAny',[BrandUser::class,$brand]);
        return BrandUserResource::collection($brand->users()->paginate(25));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BrandUserRequest $request, Brand $brand)
    {
        Gate::authorize('create',[BrandUser::class,$brand]);
        $user = User::create([
            'name'=>$request->user_name,
            'email'=>$request->user_email,
            'password'=>Hash::make(config('app.defaultpw')),
            'company_id'=>$request->user()->company_id,
            'role_id'=>$request->role,
        ]);
        $brand_user = $brand->users()->create([
            'user_id'=>$user->id,
            'is_owner'=>$request->is_owner,
            'user_email'=>$request->user_email,
            'user_name'=>$request->user_name,
        ]);
        return new BrandUserResource($brand_user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BrandUser  $user
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $brand, BrandUser $user)
    {
        return new BrandUserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BrandUser  $user
     * @return \Illuminate\Http\Response
     */
    public function update(BrandUserRequest $request,Brand $brand, BrandUser $user)
    {
        $user->update($request->only(['user_id','is_owner','user_email','user_name']));
        return new BrandUserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BrandUser  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $brand, BrandUser $user)
    {
        $user->delete();
        return response()->json(null, 204);
    }
    public function assignUser(BrandUserAssignRequest $request, Brand $brand){
        $brand_user = $brand->users()->create([
            'user_id'=>$request->user_id,
            'is_owner'=>$request->is_owner,
            'user_email'=>$request->user_email,
            'user_name'=>$request->user_name,
        ]);
        return new BrandUserResource($brand_user);
    }
    public function myBrands(Request $request){
        $brands = $request->user()->userbrands()->with('brand')->get();
        return $brands;
    }
}
