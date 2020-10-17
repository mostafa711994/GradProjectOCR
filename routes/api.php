<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/register', 'UserController@apiRegister');
Route::post('/login', 'LoginController@Login');
Route::post('/upload', 'OcrController@store');
Route::get('/pic', 'ProfilePicController@index');
Route::post('/profilePic', 'ProfilePicController@store');
Route::post('/password/email', 'ForgotPasswordController@sendResetLinkEmail');
Route::post('/reset', 'ResetPasswordController@reset');

Route::get('/admin', 'DashboardController@index');
Route::get('/admin/topbar/user/{user}', 'DashboardController@topbar');

Route::get('/admin/users', 'UserController@index');
Route::post('/admin/users/store', 'UserController@store');
Route::get('/admin/users/edit/user/{user}', 'UserController@edit');
Route::post('/admin/users/update/user/{user}', 'UserController@update');
Route::get('/admin/users/delete/user/{user}', 'UserController@delete');
Route::get('/admin/ocr', 'OcrController@index');

Route::get('/admin/plans', 'PlanController@index');
Route::post('/admin/plans/store', 'PlanController@store');
Route::get('/admin/plans/edit/plan/{plan}', 'PlanController@edit');
Route::post('/admin/plans/update/plan/{plan}', 'PlanController@update');
Route::get('/admin/plans/delete/plan/{plan}', 'PlanController@destroy');

Route::get('/profile/{user}', 'UserController@show');
Route::post('/user/{user}/plan/{plan}', 'UserController@choosePlan');

Route::get('/admin/feedback', 'FeedbackController@index');
Route::post('/feedback/store', 'FeedbackController@store');

