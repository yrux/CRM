<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BriefForm extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_id','user_id','form_name','form_description','form_fields',
    ];
    public function user(){
        return $this->hasOne(User::class,'id','user_id');
    }
    public function company(){
        return $this->belongsTo(Company::class);
    }
}
