<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Laravel\Sanctum\HasApiTokens;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{

    use HasApiTokens, HasFactory, Notifiable;

    protected $with = ['permissions'];
    protected $appends = ['image_url'];

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'api_token',
        'company_id',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function permissions()
    {
        return $this->hasManyThrough(RolePermission::class, Role::class,'id','role_id','role_id');
    }
    public function brands(){
        return $this->hasManyThrough(BrandUser::class, Brand::class,'id','user_id');
    }
    public function companybrands(){
        return $this->hasMany(Brand::class,'company_id','company_id');
    }
    public function userbrands(){
        return $this->hasMany(BrandUser::class);
    }
    public function brandsAssigned(){
        return $this->hasMany(BrandUser::class);
    }
    public function projects(){
        return $this->hasMany(ProjectUser::class);
    }
    public function image(){
        return $this->morphOne(File::class,'fileable');
    }
    public function getImageUrlAttribute(){
        if($this->image){
            return asset($this->image->url);
        }else{
            return 'https://randomuser.me/api/portraits/men/85.jpg';
        }
    }
    public function role(){
        return $this->hasOne(Role::class,'id','role_id');
    }
    // public function getRoleNameAttribute(){
    //     return $this->role->title;
    // }
}
