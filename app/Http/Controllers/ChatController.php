<?php

namespace App\Http\Controllers;

use App\Models\ChatHead;
use Illuminate\Http\Request;
use App\Repositories\ChatRepository;
class ChatController extends Controller
{
    protected $chat;
    public function __construct(ChatRepository $chat)
    {
        $this->chat = $chat;
    }
    public function index(Request $request){
        $data=$this->chat->findBySenders($request->user()->id, $request->user_id);
        if(!$data){
            $data=$this->chat->insert($request->user()->id, $request->user_id);
        }
        return $data;
    }
    public function chatHistory(ChatHead $ChatHead){
        $res = $ChatHead->messages()->orderBy('id','desc')->cursorPaginate(2);
        $data = array_reverse($res->items());
        return [
            'result'=>$data,
            'next_page_url'=>$res->nextPageUrl(),
        ];
    }
}
