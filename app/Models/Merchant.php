<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Casts\Json;
class Merchant extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_id','merchant_details','merchant_type',
    ];
    public function company(){
        return $this->belongsTo(Company::class);
    }
    protected $casts = [
        'merchant_details' => Json::class,
    ];
}
