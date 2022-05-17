<?php

namespace App\Http\Controllers;

use App\Http\Requests\LeadNoteRequest;
use App\Http\Resources\LeadNoteResource;
use App\Models\{Lead, LeadNote};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Repositories\{ListRepository, FileRepository};

class LeadNoteController extends Controller
{
    protected $listRep;
    protected $file;
    public function __construct(ListRepository $listRep, FileRepository $file)
    {
        $this->listRep = $listRep;
        $this->listRep->bindModel(LeadNote::class);
        $this->file = $file;
    }
    public function index(Lead $lead)
    {
        Gate::authorize('viewAny',LeadNote::class);
        $query = $this->listRep->listFilteredQuery(['note'])
        ->select('lead_notes.*')->where('lead_id',$lead->id);
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $query=$query->paginate($_GET['perpage']);
        }else{
            $query=$query->get();
        }
        return LeadNoteResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Lead $lead, LeadNoteRequest $request)
    {
        Gate::authorize('create',LeadNote::class);
        $arr = $request->only('note');
        $arr['user_id'] = $request->user()->id;
        $lead_note = $lead->notes()->create($arr);
        if($request->attachements){
            foreach($request->attachements as $attachement){
                $this->file->updateRefById($attachement, $lead_note->id);
            }
        }
        return new LeadNoteResource($lead_note);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Http\Response
     */
    public function show(LeadNote $leadNote)
    {
        Gate::authorize('view',$leadNote);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Http\Response
     */
    public function update(LeadNoteRequest $request, LeadNote $leadNote)
    {
        Gate::authorize('update',$leadNote);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Http\Response
     */
    public function destroy(LeadNote $leadNote)
    {
        Gate::authorize('delete',$leadNote);
    }
}
