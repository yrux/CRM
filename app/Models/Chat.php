<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted'];
    protected $with = ['files'];
    protected $fillable = [
        'chat_head_id','message','user_id'
    ];
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
