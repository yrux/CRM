<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;
class ProjectTask extends Model
{
    use HasFactory;
    protected $appends = ['due_type','created_at_formatted','updated_at_formatted','task_type_text','unseen_comments'];
    protected $with = ['files','comments'];
    protected $task_type_arr = ['initial'=>'Initial','revision'=>'Revision','innerpages'=>'Inner Pages','redraw'=>'ReDraw'];
    protected $fillable = [
        'project_id','task_description','due_date','status','assigned_on', 'developer_id','assigned_by','project_tag','title','task_type'
    ];
    public function assigned_on_user(){
        return $this->belongsTo(User::class,'assigned_on','id');
    }
    public function assigned_by_user(){
        return $this->belongsTo(User::class,'assigned_by','id');
    }
    public function developer_user(){
        return $this->belongsTo(User::class,'developer_id','id');
    }
    public function project(){
        return $this->belongsTo(Project::class);
    }
    public function comments(){
        if(Auth::user()->role_id==7){
            return $this->hasMany(TaskComment::class,'task_id');
        }
        else if(Auth::user()->role_id==8){
            return $this->hasMany(TaskComment::class,'task_id')->where('is_internal',1);
        }
        else{
            return $this->hasMany(TaskComment::class,'task_id')->where('is_internal',0);
        }
    }
    public function comment_notifications(){
        return $this->hasMany(TaskCommentUserNotification::class,'task_id')->where('user_id',Auth::user()->id);
    }
    public function files(){
        return $this->morphMany(File::class,'fileable');
    }
    public function getUnseenCommentsAttribute(){
        return $this->comment_notifications()->count();
    }
    public function getTaskTypeTextAttribute(){
        return isset($this->task_type_arr[$this->task_type])?$this->task_type_arr[$this->task_type]:'';
    }
    public function getDueTypeAttribute(){
        $actual = strtotime(date('Y-m-d',strtotime($this->due_date)));
        $today = strtotime(date('Y-m-d'));
        if($today==$actual){
            return 'Today';
        }
        if($today>$actual){
            return 'Overdue';
        }
        if($today<$actual){
            return 'Upcomming';
        }
        return 'N/A';
    }
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
    public function getUpdatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->updated_at));
    }
}
