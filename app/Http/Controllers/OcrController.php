<?php

namespace App\Http\Controllers;

use App\Ocr;
use App\User;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class OcrController extends Controller
{



    public function index()
    {
       $ocr = Ocr::all();

       return $ocr;
    }


    public function create()
    {
        //
    }



    public function store(Request $request)
    {

        $ip = $_SERVER["REMOTE_ADDR"];
        $MAC = exec('getmac');
        $MAC = strtok($MAC, ' ');
        $image = $request->file('image');
        $extension = $image->getClientOriginalExtension();
        $imageName = sha1(time());
        $file = Storage::disk('public')->put('/uploads/' . $imageName . '.' . $extension, File::get($image));
        $api_token = $request->get('apiToken');
        $user = User::where('api_token' , '=' , $api_token)->first();

        $user_id = $user->id;

        $data = new Ocr();
        $data->name = $imageName . '.' . $extension;
        $data->extension = $extension;
        $data->ip_address = $ip;
        $data->mac_address = $MAC;
        $data->user_id = $user_id;
        if($data->save()){
            return response()->json([$data]);
        }else{
            return response()->json->withErrors(['You have to login or sign up first']);
        }


    }


    public function show(Ocr $ocr)
    {
        //
    }


    public function edit(Ocr $ocr)
    {
        //
    }


    public function update(Request $request, Ocr $ocr)
    {
        //
    }


    public function destroy(Ocr $ocr)
    {
        //
    }
}
