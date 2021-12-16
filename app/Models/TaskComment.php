<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskComment extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted'];
    protected $with = ['user','files'];
    protected $fillable = [
        'task_id','comment','user_id','is_internal',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function task(){
        return $this->belongsTo(ProjectTask::class,'task_id');
    }
    public function files(){
        return $this->morphMany(File::class,'fileable');
    }
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
}
