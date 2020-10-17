<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $fillable  =['name','email','message','user_id'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
