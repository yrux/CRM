<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskCommentUserNotification extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'task_id','user_id'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function task(){
        return $this->belongsTo(ProjectTask::class,'task_id');
    }
}