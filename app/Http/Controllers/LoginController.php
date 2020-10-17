<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function Login(Request $request)
    {

        $data = $request->all();
        $username = $data['username'];
        $password = $data['password'];

        if (Auth::attempt(['username' => $username, 'password' => $password])) {
            $api_token = sha1(time());
            $user = Auth::user();
            $user->api_token = $api_token;
            $user->save();

            return response()->json(['username' => $username, 'api_token' => $api_token,'role' => $user->role]);

        }else{
            return response()->json->withErrors(['Username or Email  Not Correct']);
        }

    }

    public function logout($request)
    {
//        Auth::logout();
    }
}
