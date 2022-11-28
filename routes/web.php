<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('react');
});


Route::controller(ProductoController::class)->group(function (){
    Route::get('/productos', 'index');
    Route::post('/producto', 'store');
    Route::get('/producto/{id}', 'show');
    Route::put('/producto/{id}', 'update');
    Route::delete('/producto/{id}', 'destroy'); 
});
