<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();

Route::group(['middleware' => ['auth']], function () {
	Route::view('/','champion_list');
	Route::view('/datatable','datatable');
	Route::resource('/champion','ChampionController')->only(['index','store','show','edit','destroy']);
	Route::put('/champion/updateChamp','ChampionController@updateChamp');
	Route::get('/images/{filename}',function ($filename) {
	    $file = \Storage::disk('public')->get($filename);
	    return response($file, 200)->header('Content-Type', 'image/png');
	});
});