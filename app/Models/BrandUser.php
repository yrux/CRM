<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrandUser extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id','brand_id','is_owner','user_email',
    ];
}
