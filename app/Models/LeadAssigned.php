<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeadAssigned extends Model
{
    use HasFactory;
    protected $table='lead_assigned';
    protected $appends = ['created_at_formatted'];
    protected $with = ['user'];
    protected $fillable = [
        'lead_id','user_id'
    ];
    const UPDATED_AT = null;
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function lead(){
        return $this->belongsTo(Lead::class,'lead_id');
    }
    public function getCreatedAtFormattedAttribute(){
        return date('Y-m-d h:i a',strtotime($this->created_at));
    }
}
