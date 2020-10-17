<?php

namespace App\Http\Controllers;

use App\Image;
use App\Plan;
use App\Profile_Pic;
use App\ProfilePic;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function apiRegister(Request $request)
    {

        $request->validate([
            'first_name' =>'required',
            'last_name' =>'required',
            'username' => 'required|string|unique:users|max:50',
            'email' => 'required|email|unique:users|max:125',
            'password' =>'required',
            'phone_number' => 'required|numeric'
        ]);
        
        $data = $request->all();
        $first_name = $data['first_name'];
        $last_name = $data['last_name'];
        $username = $data['username'];
        $email = $data['email'];
        $api_token = Str::random(60);
        $phone_number = $data['phone_number'];
        $address = $data['address'];
        $password = $data['password'];
        $newPassword = Hash::make($password);


        $user = new User();
        $user->first_name = $first_name;
        $user->last_name = $last_name;
        $user->username = $username;
        $user->email = $email;
        $user->password = $newPassword;
        $user->api_token = $api_token;
        $user->address = $address;
        $user->phone_number = $phone_number;
        $user->plan_id = 1;
        $user->save();

        return response()->json([$user]);
    }



    public function index(){

        $user = User::all();

        return $user;

    }


    public function store(Request $request){

        $request->validate([
            'first_name' =>'required',
            'last_name' =>'required',
            'username' => 'required|string|unique:users|max:50',
            'email' => 'required|email|unique:users|max:125',
            'password' =>'required',
            'phone_number' => 'required|numeric',
            'role' =>'required',
        ]);


        $addUser =  User::create([
            'first_name' =>$request->first_name,
            'last_name' =>$request->last_name,
            'username' => $request->username,
            'email' => $request->email,
            'api_token' => Str::random(60),
            'password' =>Hash::make($request->password),
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'role' => $request->role,
            'plan_id' => 1
        ]);
         return response()->json($addUser);




    }

    public function edit($id){

        $user = User::find($id)->only('role');

        return $user;


    }

    public function update(Request $request,$id){

        $request->validate([
            'role' => 'required|boolean'
        ]);
        $user = User::find($id);
        $user->role = $request->role;
        $user->save();

        return $user;



    }

    public function delete($apiToken){

        $user = User::where('api_token',$apiToken)->first();
        $user->delete();

        return response()->json([$user]);

    }

    public function show($apiToken){


        $user = User::where('api_token','=',$apiToken)->first();

      if($user->image_id !== null){
          $user->image->name;
      }
      if($user->plan_id !== null){
          $user->plan->name;

      }

        return $user;

    }

    public function choosePlan(Request $request,$apiToken,$id){

        $user = User::where('api_token','=',$apiToken)->first();

        $data = $request->all();

        $plan = Plan::where('id','=',$id)->first();

        $data['plan_id'] = $plan->id;

        $user->update($data);


        return $user;

    }

}



























