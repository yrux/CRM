<?php
namespace App\Http\Controllers;
use App\Models\{ProjectTask, TaskTime};
use Illuminate\Http\Request;

class TaskTimeController extends Controller
{
    public function updateTime(Request $req, ProjectTask $task)
    {
        //stopping other timers of the same user
        TaskTime::where('user_id',$req->user()->id)
        ->whereNull('end_time')->where('task_id','<>',$task->id)->update([
            'end_time'=>date('h:i:s')
        ]);
        //adding current task timer
        $lastTime = TaskTime::where('task_id',$task->id)->whereNull('end_time')->where('user_id',$req->user()->id)->orderBy('id','desc')->first();
        if($lastTime){
            if($lastTime->id>0){
                $time = TaskTime::find($lastTime->id);
                $time->end_time = date('h:i:s');
                $time->save();
                return response()->json(['status'=>1,'data'=>'timer stopped']);
            }
        }
        $time = new TaskTime;
        $time->date = date('Y-m-d');
        $time->task_id = $task->id;
        $time->user_id = $req->user()->id;
        $time->start_time = date('h:i:s');
        $time->save();
        return response()->json(['status'=>1,'data'=>'timer started']);
    }
}
