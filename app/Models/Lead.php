<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Casts\Json;
class Lead extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted','lead_status_text','brand_code'];
    protected $with = ['brand'];
    protected $lead_status_arr = [0=>'pending',1=>'success',2=>'junk',3=>'followup'];
    protected $fillable = [
        'brand_id','first_name','last_name','email','phone','message','lead_status','custom_fields','company','user_id','assigned_to'
    ];
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
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
    public function assigned(){
        return $this->belongsTo(User::class,'assigned_to');
    }
    public function payments(){
        return $this->hasMany(Payment::class);
    }
    public function getLeadStatusTextAttribute(){
        return isset($this->lead_status_arr[$this->lead_status])?$this->lead_status_arr[$this->lead_status]:'';
    }
    protected $casts = [
        'custom_fields' => Json::class,
    ];
}
