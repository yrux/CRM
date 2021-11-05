<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTask extends Model
{
    use HasFactory;
    protected $appends = ['due_type','created_at_formatted'];
    protected $with = ['files','comments'];
    protected $fillable = [
        'project_id','task_description','due_date','status','assigned_on','assigned_by','project_tag','title'
    ];
    public function assigned_on_user(){
        return $this->belongsTo(User::class,'assigned_on','id');
    }
    public function assigned_by_user(){
        return $this->belongsTo(User::class,'assigned_by','id');
    }
    public function project(){
        return $this->belongsTo(Project::class);
    }
    public function comments(){
        return $this->hasMany(TaskComment::class,'task_id');
    }
    public function files(){
        return $this->morphMany(File::class,'fileable');
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
}
