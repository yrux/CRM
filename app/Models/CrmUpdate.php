<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrmUpdate extends Model
{
    use HasFactory;
    protected $appends = ['created_at_formatted'];
    protected $fillable = [
        'message','is_new',
    ];
    public function getCreatedAtFormattedAttribute(){
        return $this->created_at->diffForHumans();
    }
}
