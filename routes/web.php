<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DataController;

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
    return view('auth.login');
});
Auth::routes(['verify' => true]);

Route::group(['middleware' => ['auth']], function () {
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
    Route::resource('contacts', App\Http\Controllers\ContactController::class);
    Route::get('/contacts/{id}/delete', [App\Http\Controllers\ContactController::class, 'destroy']);
    Route::get('/contacts-export', [App\Http\Controllers\ContactController::class, 'exportContacts']);
    Route::post('/contacts-import', [App\Http\Controllers\ContactController::class, 'importContacts']);
});