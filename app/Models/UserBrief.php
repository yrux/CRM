<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBrief extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted','updated_at_formatted','status_text','brand_code'];
    protected $status_arr = [0=>'pending',1=>'filled'];
    protected $fillable = [
        'form_name','form_fields','user_id','sender_id','brand_id','status'
    ];
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
    public function getUpdatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->updated_at));
    }
    public function getBrandCodeAttribute(){
        return $this->brand->brand_code;
    }
    public function brand(){
        return $this->belongsTo(Brand::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function sender(){
        return $this->belongsTo(User::class,'sender_id');
    }
    public function getStatusTextAttribute(){
        return isset($this->status_arr[$this->status])?$this->status_arr[$this->status]:'';
    }
}
