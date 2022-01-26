<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MarketingBudget extends Model
{
    use HasFactory;
    protected $appends = ['for_period_formatted','for_period_formatted_i', 'remaining_spending'];
    protected $fillable = [
        'brand_id','company_id','max_spendings','for_period','required_leads',
    ];
    public function getForPeriodFormattedAttribute(){
        return date('F Y', strtotime($this->for_period));
    }
    public function getForPeriodFormattedIAttribute(){
        return date('Y-m', strtotime($this->for_period));
    }
    public function spendings(){
        return $this->hasMany(MarketingBudgetSpending::class);
    }
    public function getRemainingSpendingAttribute(){
        $spent = $this->spendings->sum('spending');
        $budget = $this->max_spendings;
        return ($budget-$spent);
    }
}
