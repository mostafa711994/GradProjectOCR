<?php

namespace App\Http\Controllers;

use App\Feedback;
use App\Ocr;
use App\Plan;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DashboardController extends Controller
{
    public function index(){

        return response()->json(['user'=>User::count(),'plan'=>Plan::count(),'ocr'=>Ocr::count(),'feedback'=>Feedback::count()]);

    }

    public function topbar($apiToken){


        $user = User::where('api_token','=',$apiToken)->first();

        if($user->image_id !== null){
            $user->image->name;
        }

        return $user;

    }



}
