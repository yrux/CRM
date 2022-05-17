<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeadNote extends Model
{
    use HasFactory;
    protected $with = ['user','files'];
    protected $appends = ['created_at_formatted'];
    protected $fillable = [
        'user_id','note','lead_id'
    ];
    public function lead(){
        return $this->belongsTo(Lead::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
    public function files(){
        return $this->morphMany(File::class,'fileable');
    }
}
