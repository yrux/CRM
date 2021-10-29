<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatHead extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id','sender_id'
    ];
    public function messages(){
        return $this->hasMany(Chat::class);
    }
}
