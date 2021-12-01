<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserRequest;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Gate::authorize('viewAny',User::class);
        $user = User::leftJoin('roles','users.role_id','=','roles.id')
        ->leftJoin('departments','users.department_id','=','departments.id');
        if(isset($_GET['sortCol'])){
            $user = $user->orderBy($_GET['sortCol'],($_GET['sortByDesc']==1?'desc':'asc'));
        }else{
            $user = $user->orderBy('users.id','desc');
        }
        if(!empty($_GET['search'])){
            $user = $user->Where(
                function($query) {
                $q = $_GET['search'];
                $query->orWhere('users.name', 'like', '%'.$q.'%')->orWhere('users.email', 'like', '%'.$q.'%')
                ->orWhere('roles.title', 'like', '%'.$q.'%')->orWhere('roles.name', 'like', '%'.$q.'%')
                ->orWhere('departments.department_name', 'like', '%'.$q.'%');
            });
        }
        if(!empty($_GET['role_id'])){
            $user = $user->where('role_id',$_GET['role_id']);
        }
        if(!empty($_GET['department_id'])){
            $user = $user->where('department_id',$_GET['department_id']);
        }
        $user=$user->select('users.id','users.email','users.name','roles.title as role_name','users.department_id','departments.department_name');
        if($request->user()->role_id!=1){
            $user=$user->where('users.company_id',$request->user()->company_id);
        }
        $user=$user->where('users.id','<>',$request->user()->id);
        if(intval($_GET['perpage'])>0){
            $user=$user->paginate($_GET['perpage']);
        }else{
            $user=$user->get();
        }
        return UserResource::collection($user);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        Gate::authorize('create',User::class);
        $user = User::create($request->only('name','email','role_id','password','company_id','department_id'));
        $user->password = Hash::make($user->password);
        $user->save();
        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        Gate::authorize('view',$user);
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        Gate::authorize('update',$user);
        $user->update($request->only('name','email','role_id','company_id'));
        if($request->password!=''){
            $user->password = Hash::make($request->password);
            $user->save();
        }
        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        Gate::authorize('delete',$user);
        $user->delete();
        return response()->json(null, 204);
    }
}
