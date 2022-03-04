<?php

namespace App\Http\Controllers;

use App\Http\Requests\CrmUpdateRequest;
use App\Http\Resources\CrmUpdateResource;
use App\Models\CrmUpdate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Repositories\ListRepository;
class CrmUpdateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $listRep;
    public function __construct(ListRepository $listRep)
    {
        $this->listRep = $listRep;
        $this->listRep->bindModel(CrmUpdate::class);
    }
    public function index()
    {
        Gate::authorize('viewAny',CrmUpdate::class);
        $query = $this->listRep->listFilteredQuery(['message'])
        ->select('crm_updates.*');
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return CrmUpdateResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CrmUpdateRequest $request)
    {
        Gate::authorize('create',CrmUpdate::class);
        $crmUpdate = CrmUpdate::create($request->only('is_new','message'));
        return new CrmUpdateResource($crmUpdate);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CrmUpdate  $crmUpdate
     * @return \Illuminate\Http\Response
     */
    public function show(CrmUpdate $crmUpdate)
    {
        Gate::authorize('view',$crmUpdate);
        return new CrmUpdateResource($crmUpdate);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CrmUpdate  $crmUpdate
     * @return \Illuminate\Http\Response
     */
    public function update(CrmUpdateRequest $request, CrmUpdate $crmUpdate)
    {
        Gate::authorize('update',$crmUpdate);
        $crmUpdate->update($request->only('is_new','message'));
        return new CrmUpdateResource($crmUpdate);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CrmUpdate  $crmUpdate
     * @return \Illuminate\Http\Response
     */
    public function destroy(CrmUpdate $crmUpdate)
    {
        Gate::authorize('delete',$crmUpdate);
        $crmUpdate->delete();
        return response()->json(null, 204);
    }
}
