<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Company extends Model
{
    use HasFactory;
    protected $appends = ['company_email','image_url'];
    protected $table = 'company';
    protected $fillable = [
        'company_name','user_id'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function getCompanyEmailAttribute(){
        return isset($this->user)?$this->user->email:'N/A';
    }
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return asset($this->image->url);
        }else{
            return config('app.noimage');
        }
    }
}
