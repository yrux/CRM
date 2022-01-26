<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarketingBudgetSpending extends Model
{
    use HasFactory;
    protected $fillable = [
        'marketing_budget_id','spending','date'
    ];
    public function marketing_budget(){
        return $this->belongsTo(MarketingBudget::class);
    }
}
