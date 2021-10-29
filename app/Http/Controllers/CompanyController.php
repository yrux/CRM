<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CompanyRequest;
use App\Http\Resources\CompanyResource;
use App\Models\{Company, User};
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Gate;
class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Gate::authorize('viewAny',Company::class);
        return CompanyResource::collection(Company::orderBy('id','desc')->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyRequest $request)
    {
        Gate::authorize('create',Company::class);
        $company = Company::create($request->only('company_name'));
        $arr = $request->except(['company_name']);
        $arr['name'] = $company->company_name;
        $arr['password'] = Hash::make($arr['password']);
        $arr['company_id'] = $company->id;
        $arr['role_id'] = 2;
        $user = User::create($arr);
        $company->user_id = $user->id;
        $company->save();
        $company->load('user');
        return new CompanyResource($company);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        Gate::authorize('view',$company);
        $company->load('user');
        return new CompanyResource($company);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CompanyRequest $request, Company $company)
    {
        Gate::authorize('update',$company);
        $company->update($request->only(['company_name']));
        $arr = [
            'name'=>$request->company_name,
            'email'=>$request->email,
        ];
        if(isset($request->password)){
            if(strlen($request->password)<60){
                $arr['password'] = Hash::make($request->password);
            }
        }
        $company->user()->update($arr);
        $company->load('user');
        return new CompanyResource($company);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        Gate::authorize('delete',$company);
        $company->user()->delete();
        $company->delete();
        return response()->json(null, 204);
    }
    public function getallusers(Request $request){
        return User::where('company_id',$request->user()->company_id)->whereIn('role_id',[4,5])->orderBy('id','desc')->select('id','email','name')->get();
    }
}
