<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $with = ['files'];
    protected $appends = ['created_at_formatted'];
    protected $fillable = [
        'company_id','brand_id','project_id','title','description','status',
    ];
    public function company(){
        return $this->hasOne(User::class,'id','company_id');
    }
    public function brand(){
        return $this->hasOne(Brand::class,'id','brand_id');
    }
    public function users(){
        return $this->hasMany(ProjectUser::class,'project_id','id');
    }
    public function tasks(){
        return $this->hasMany(ProjectTask::class,'project_id','id');
    }
    public function payments(){
        return $this->hasMany(Payment::class,'project_id','id');
    }
    public function files(){
        return $this->morphMany(File::class,'fileable');
    }
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
}
