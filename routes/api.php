<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\{BrandController, BrandUserController};
use App\Http\Controllers\{UserController, ChatController};
use App\Http\Controllers\{ProjectController, ProjectTaskController, ProjectUserController, TaskCommentController};
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
    Route::put('/updateprofile', [ApiAuthController::class,'updateprofile']);

    /*Company resource*/
    Route::apiResource('company', CompanyController::class);
    Route::get('/company/user/getallusers', [CompanyController::class,'getallusers']);
    Route::apiResource('brand', BrandController::class);
    Route::apiResource('brand/{brand}/user', BrandUserController::class);
    Route::post('brand/{brand}/assign-user', [BrandUserController::class,'assignUser']);

    // Route::apiResource('brand/{brand}/customer', BrandCustomerController::class);
    Route::apiResource('project', ProjectController::class);
    Route::apiResource('project/{project}/u', ProjectUserController::class);
    //task
    Route::apiResource('project/{project}/task', ProjectTaskController::class);
    Route::post('/project/{project}/{task}/status/{status}', [ProjectTaskController::class,'updateStatus']);
    Route::apiResource('task/{task}/comment', TaskCommentController::class);
    //task end
    Route::apiResource('file', FileController::class)->only([
        'store', 'destroy'
    ]);
    Route::post('/file/{table}/{id}/{type}', [FileController::class,'findByTable']);
    Route::apiResource('user', UserController::class);
    Route::post('/chat', [ChatController::class,'index']);
    Route::get('/chat-history/{ChatHead}', [ChatController::class,'chatHistory']);
    Route::post('/chat-send/{ChatHead}', [ChatController::class,'chatSend']);
});
Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});
