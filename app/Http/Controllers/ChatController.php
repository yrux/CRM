<?php

namespace App\Http\Controllers;

use App\Models\{ChatHead, Chat, File};
use Illuminate\Http\Request;
use App\Repositories\{ChatRepository, FileRepository};
class ChatController extends Controller
{
    protected $chat;
    protected $file;
    public function __construct(ChatRepository $chat, FileRepository $file)
    {
        $this->chat = $chat;
        $this->file = $file;
    }
    public function index(Request $request){
        $data=$this->chat->findBySenders($request->user()->id, $request->user_id);
        if(!$data){
            $data=$this->chat->insert($request->user()->id, $request->user_id);
        }
        return $data;
    }
    public function chatHistory(ChatHead $ChatHead){
        $res = $ChatHead->messages()->orderBy('id','desc');
        if(!empty($_GET['search'])){
            $q = $_GET['search'];
            $res = $res->where('message','like','%'.$q.'%');
        }
        $res = $res->cursorPaginate(10);
        $data = array_reverse($res->items());
        return [
            'result'=>$data,
            'next_page_url'=>$res->nextPageUrl(),
        ];
    }
    public function chatSend(Request $request, ChatHead $ChatHead){
        $chat_id = $ChatHead->messages()->create([
            'message'=>$request->message,
            'user_id'=>$request->user()->id,
        ]);
        if($request->attachements){
            foreach($request->attachements as $attachement){
                $this->file->updateRefById($attachement, $chat_id->id);
            }
        }
    }
}
