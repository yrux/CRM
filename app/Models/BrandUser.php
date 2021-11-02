<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id','brand_id','is_owner','user_email','user_name',
    ];
    public function user(){
        return $this->hasOne(User::class,'id','user_id');
    }
    public function brand(){
        return $this->belongsTo(Brand::class);
    }
}
