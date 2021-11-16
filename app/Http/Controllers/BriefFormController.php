<?php

namespace App\Http\Controllers;

use App\Models\BriefForm;
use Illuminate\Http\Request;
use App\Http\Requests\BriefFormRequest;
use Illuminate\Support\Facades\Gate;
use App\Http\Resources\BriefFormResource;
class BriefFormController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Gate::authorize('viewAny',BriefForm::class);
        if(empty($_GET['all'])){
            $forms = BriefForm::where('company_id',$request->user()->company_id)->where('user_id',$request->user()->id)->orderBy('id','desc')->paginate(20);
        }else{
            $forms = BriefForm::where('company_id',$request->user()->company_id)->orderBy('id','desc')->get();
        }
        return BriefFormResource::collection($forms);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BriefFormRequest $request)
    {
        Gate::authorize('create',BriefForm::class);
        $arr = $request->except(['__token']);
        $arr['company_id'] = $request->user()->company_id;
        $arr['user_id'] = $request->user()->id;
        $form = BriefForm::create($arr);
        return new BriefFormResource($form);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Http\Response
     */
    public function show(BriefForm $briefForm)
    {
        Gate::authorize('view',$briefForm);
        return new BriefFormResource($briefForm);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Http\Response
     */
    public function update(BriefFormRequest $request, BriefForm $briefForm)
    {
        Gate::authorize('update',$briefForm);
        $arr = $request->except(['__token']);
        $arr['company_id'] = $request->user()->company_id;
        $arr['user_id'] = $request->user()->id;
        $briefForm->update($arr);
        return new BriefFormResource($briefForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Http\Response
     */
    public function destroy(BriefForm $briefForm)
    {
        Gate::authorize('delete',$briefForm);
        $briefForm->delete();
        return response()->json(null, 204);
    }
}
