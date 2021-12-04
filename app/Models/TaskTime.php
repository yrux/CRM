<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskTime extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $appends = ['total_hours'];
    protected $fillable = [
        'task_id','date','start_time','end_time','user_id'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function task(){
        return $this->belongsTo(ProjectTask::class,'task_id');
    }
    public function getTotalHoursAttribute(){
        $t1 = date('h:i a');
        $t2 = date('h:i a');
        if($this->start_time!=''){
            $t1 = $this->start_time;
        }
        if($this->end_time!=''){
            $t2 = $this->end_time;
        }
        $date1 = new \DateTime($t1);
        $date2 = new \DateTime($t2);
        $interval = $date1->diff($date2);
        return ($interval->h+($interval->m/60));
    }
}
