<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;
    protected $appends = ['full_url'];
    protected $fillable = [
        'url', 'fileable_id', 'fileable_type', 'table_name',
    ];
    public function fileable()
    {
        return $this->morphTo();
    }
    public function getFullUrlAttribute()
    {
        return asset('storage/' . $this->url);
    }
}
