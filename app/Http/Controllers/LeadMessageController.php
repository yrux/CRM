<?php

namespace App\Http\Controllers;

use App\Models\{LeadMessage, File, Lead, LeadAssigned};
use Illuminate\Http\Request;
use App\Repositories\{FileRepository};
use DB;
class LeadMessageController extends Controller
{
    protected $file;
    public function __construct(FileRepository $file)
    {
        $this->file = $file;
    }
    public function chatHistory(Lead $lead, Request $request){
        $res = $lead->messages()->orderBy('id','desc');
        if(!empty($_GET['search'])){
            $q = $_GET['search'];
            $res = $res->where('message','like','%'.$q.'%');
        }
        $res = $res->cursorPaginate(10);
        $data = array_reverse($res->items());
        $cur_uid = $request->user()->id;
        foreach($data as $dat){
            if($dat->user_id!=$cur_uid&&$dat->is_seen==0){
                $message = LeadMessage::find($dat->id);
                $message->is_seen=1;
                $message->save();
            }
        }
        return [
            'result'=>$data,
            'next_page_url'=>$res->nextPageUrl(),
        ];
    }
    public function chatSend(Request $request, Lead $lead){
        $chat_id = $lead->messages()->create([
            'message'=>$request->message,
            'user_id'=>$request->user()->id,
        ]);
        if($request->attachements){
            foreach($request->attachements as $attachement){
                $this->file->updateRefById($attachement, $chat_id->id);
            }
        }
    }
    public function unseenMessages(Request $request){
        $uid = $request->user()->id;
        return LeadMessage::where('lead_assigned.user_id',$uid)->where('lead_messages.is_seen',0)
        ->leftJoin('leads','leads.id','lead_messages.lead_id')
        ->leftJoin('brands','brands.id','leads.brand_id')
        ->leftJoin('lead_assigned',function($join) use($uid) {
            $join->on('lead_assigned.lead_id','=','lead_messages.lead_id')->where('lead_assigned.user_id',$uid);
        })
        ->select(DB::raw('COUNT(lead_messages.id) AS unseen_count'),'lead_messages.lead_id','leads.email','leads.email','leads.first_name','leads.last_name','leads.phone','brands.brand_name','brands.brand_code')
        ->orderBy('lead_messages.created_at','desc')
        ->groupBy('lead_messages.lead_id')
        ->get();
    }
}
