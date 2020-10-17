<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable =[
        'name','price','trials','id'
    ];

    public function users(){
        return $this->hasMany(User::class);
    }

}
