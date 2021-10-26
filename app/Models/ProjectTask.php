<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTask extends Model
{
    use HasFactory;
    protected $with = ['files'];
    protected $fillable = [
        'project_id','task_description','due_date','status','assiged_on','assigned_by','project_tag',
    ];
    public function assigned_on_user(){
        return $this->belongsTo(User::class,'assiged_on','id');
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
}
