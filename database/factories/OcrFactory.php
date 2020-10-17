<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Ocr;
use Faker\Generator as Faker;

$factory->define(Ocr::class, function (Faker $faker) {
    $userTDs = \App\User::all()->pluck('id')->toArray();

    return [
        'name'=>$faker->unique()->text(10),
        'extension'=>$faker->text(10),
        'ip_address'=>$faker->text(10),
        'mac_address'=>$faker->text(10),
        'user_id'=>$userTDs[array_rand($userTDs)],

    ];
});
