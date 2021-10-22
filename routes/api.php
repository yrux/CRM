<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\BrandUserController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\ApiAuthController;
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

Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', [ApiAuthController::class,'login'])->name('login.api');
});
Route::group(['middleware' => ['cors', 'json.response','auth:api']], function () {
    Route::post('/logout', [ApiAuthController::class,'logout'])->name('logout.api');

    /*Company resource*/
    Route::apiResource('company', CompanyController::class);
    Route::apiResource('brand', BrandController::class);
    Route::apiResource('brand/{brand}/user', BrandUserController::class);
    Route::apiResource('user', UserController::class);
});
Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});
