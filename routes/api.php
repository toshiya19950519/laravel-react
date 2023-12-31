<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['middleware' => 'api'], function(){
    Route::get('posts', 'App\Http\Controllers\Api\PostController@index');
    Route::post('post/create', 'App\Http\Controllers\Api\PostController@create');
    Route::post('edit', 'App\Http\Controllers\Api\PostController@edit');
    Route::post('update', 'App\Http\Controllers\Api\PostController@update');
    Route::post('delete', 'App\Http\Controllers\Api\PostController@delete');
});
