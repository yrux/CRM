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
    protected $appends = ['image_url','company_name'];
    // protected $with = ['company'];
    public function company(){
        return $this->belongsTo(Company::class);
    }
    public function users(){
        return $this->hasMany(BrandUser::class,'brand_id','id');
    }
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return $this->image->full_url;
        }else{
            return config('app.noimage');
        }
    }
    public function getCompanyNameAttribute(){
        return $this->company->company_name;
    }
}
