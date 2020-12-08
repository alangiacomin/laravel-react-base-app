<?php

use App\Http\Controllers\Api\v1\ElementController;
use App\Http\Controllers\Api\v1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('v1')->group(function () {
    Route::get('/elements', [ElementController::class, 'list'])->name('route.elements');
    Route::get('/user', [UserController::class, 'user']);
    Route::post('/logout', [UserController::class, 'logout']);
});


Route::get('/{any}', function () {
    abort(404);
})->where('any', '.*');
