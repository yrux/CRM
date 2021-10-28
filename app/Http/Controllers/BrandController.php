<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BrandResource;
use App\Models\Brand;
use Illuminate\Support\Facades\Gate;
use App\Http\Requests\BrandRequest;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny',Brand::class);
        if($request->user()->role_id==1){
            $brand = Brand::orderBy('id','desc');
        }else{
            $brand = Brand::where('company_id',$request->user()->id)->orderBy('id','desc');
        }
        $brand = $brand->paginate(10);
        $brand->load('users');
        $brand->load('users.user');
        return BrandResource::collection($brand);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BrandRequest $request)
    {
        Gate::authorize('create',Brand::class);
        $brand = Brand::create($request->only(['brand_name','brand_code','company_id']));
        return new BrandResource($brand);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $brand)
    {
        Gate::authorize('view',$brand);
        return new BrandResource($brand);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BrandRequest $request, Brand $brand)
    {
        Gate::authorize('update',$brand);
        $brand->update($request->only('brand_name','brand_code','company_id'));
        return new BrandResource($brand);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $brand)
    {
        Gate::authorize('delete',$brand);
        $brand->delete();
        return response()->json(null, 204);
    }
}
