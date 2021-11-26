<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted','payment_status_text','payment_link','payment_type_text'];
    protected $with = [];
    protected $payment_status_arr = [0=>'Pending/Waiting',1=>'Paid',2=>'Failed'];
    protected $payment_type_arr = ['sell'=>'Sell','upsell'=>'UpSell','bonus'=>'Bonus'];
    protected $fillable = [
        'lead_id','amount','status','merchant','description','payment_type','project_id',
    ];
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
    public function lead(){
        return $this->belongsTo(Lead::class);
    }
    public function project(){
        return $this->belongsTo(Project::class);
    }
    public function getPaymentStatusTextAttribute(){
        return isset($this->payment_status_arr[$this->status])?$this->payment_status_arr[$this->status]:'';
    }
    public function getPaymentTypeTextAttribute(){
        return isset($this->payment_type_arr[$this->payment_type])?$this->payment_type_arr[$this->payment_type]:'';
    }
    public function getPaymentLinkAttribute(){
        return route('payment.link',$this->id);
    }
}
