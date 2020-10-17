<?php

namespace App;

use App\Notifications\passwordResetNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
//    use Notifiable;
//
//    /**
//     * The attributes that are mass assignable.
//     *
//     * @var array
//     */
//    protected $fillable = [
//        'name', 'email', 'password',
//    ];
//
//    /**
//     * The attributes that should be hidden for arrays.
//     *
//     * @var array
//     */
//    protected $hidden = [
//        'password', 'remember_token',
//    ];
//
//    /**
//     * The attributes that should be cast to native types.
//     *
//     * @var array
//     */
//    protected $casts = [
//        'email_verified_at' => 'datetime',
//    ];

    use Notifiable;

    protected $fillable =[
        'first_name','last_name','username','email','password','address','api_token','phone_number','plan_id','image_id','role'
    ];

    protected $hidden = [
        'password','remember_token'
    ];




    public function Ocrs(){
        return $this->hasMany(Ocr::class);
    }

    public function plan(){
        return $this->belongsTo(Plan::class);
    }

    public function image(){
        return $this->belongsTo(Image::class);
    }


  }

