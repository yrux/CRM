<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted','payment_status_text','payment_link'];
    protected $payment_status_arr = [0=>'Pending/Waiting',1=>'Paid',2=>'Failed'];
    protected $fillable = [
        'lead_id','amount','status','merchant','description',
    ];
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
    public function lead(){
        return $this->belongsTo(Lead::class);
    }
    public function getPaymentStatusTextAttribute(){
        return isset($this->payment_status_arr[$this->status])?$this->payment_status_arr[$this->status]:'';
    }
    public function getPaymentLinkAttribute(){
        return route('payment.link',$this->id);
    }
}
