<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;
    protected $fillable = [
        'brand_name','brand_code','company_id',
    ];
    public function users(){
        return $this->hasMany(BrandUser::class,'brand_id','id');
    }
}
