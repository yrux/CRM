<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventRequest;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Repositories\ListRepository;
use DB;
class EventController extends Controller
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
        $this->listRep->bindModel(Event::class);
    }
    public function index(Request $request)
    {
        Gate::authorize('viewAny',Event::class);
        // name: this.names[this.rnd(0, this.names.length - 1)],
        // start: first,
        // end: second,
        // color: this.colors[this.rnd(0, this.colors.length - 1)],
        // timed: !allDay,
        $event = $this->listRep->listFilteredQuery(['event_date','event_time','title','description'])
        ->select('events.title as name',DB::raw("CONCAT(events.event_date,' ',events.event_time) as start"))->where('user_id',$request->user()->id)
        ->where('event_date','>=',$request->start)
        ->where('event_date','<=',$request->end);
        if(isset($_GET['perpage'])&&intval($_GET['perpage'])>0){
            $event=$event->paginate($_GET['perpage']);
        }else{
            $event=$event->get();
        }
        return EventResource::collection($event);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EventRequest $request)
    {
        Gate::authorize('create',Event::class);
        $arr = $request->only(['title','event_date','event_time','description']);
        $arr['user_id'] = $request->user()->id;
        $event = Event::create($arr);
        return new EventResource($event);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        Gate::authorize('view',$event);
        return new EventResource($event);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(EventRequest $request, Event $event)
    {
        Gate::authorize('update',$event);
        $event->update($request->only('title','event_date','event_time','description'));
        return new EventResource($event);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        Gate::authorize('delete',$event);
        $event->delete();
        return response()->json(null, 204);
    }
}
