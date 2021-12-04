<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{CompanyController, BriefFormController, UserBriefController};
use App\Http\Controllers\FileController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\{LeadController, PaymentController, LeadMessageController, LeadAssignedController};
use App\Http\Controllers\{BrandController, BrandUserController};
use App\Http\Controllers\{UserController, ChatController};
use App\Http\Controllers\{ProjectController, ProjectTaskController, ProjectUserController, TaskCommentController, TaskTimeController};
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

    //guest apis
    Route::post('payments/{payment}', [PaymentController::class,'checkEmail']);
    Route::post('payments-getbrand/{payment}', [PaymentController::class,'getBrand']);
});


Route::group(['middleware' => ['cors', 'json.response','auth:api']], function () {
    Route::post('/logout', [ApiAuthController::class,'logout'])->name('logout.api');
    Route::put('/updateprofile', [ApiAuthController::class,'updateprofile']);

    /*Company resource*/
    Route::apiResource('company', CompanyController::class);
    Route::apiResource('departments', DepartmentController::class);
    Route::apiResource('brief-form', BriefFormController::class);
    Route::apiResource('user-briefs', UserBriefController::class);
    Route::apiResource('leads', LeadController::class);
    Route::apiResource('leads.payments', PaymentController::class);
    Route::apiResource('leads.assigned', LeadAssignedController::class);
    Route::post('leads/{lead}/{status}', [LeadController::class,'updateStatus']);
    // Route::post('leads/{lead}/user/{user}', [LeadController::class,'assignUser']);
    Route::get('/company/user/getallusers', [CompanyController::class,'getallusers']);
    Route::apiResource('brand', BrandController::class);
    Route::apiResource('brand/{brand}/user', BrandUserController::class);
    Route::get('/brands/me', [BrandUserController::class,'myBrands']);
    Route::post('brand/{brand}/assign-user', [BrandUserController::class,'assignUser']);

    // Route::apiResource('brand/{brand}/customer', BrandCustomerController::class);
    Route::apiResource('project', ProjectController::class);
    Route::apiResource('project/{project}/u', ProjectUserController::class);
    //task
    Route::apiResource('project/{project}/task', ProjectTaskController::class);
    
    Route::post('/task-validate', [ProjectTaskController::class,'validateTask']);
    Route::get('/tasks', [ProjectTaskController::class,'allTasks']);
    Route::get('/task/{project}/usersSummary', [ProjectTaskController::class,'usersSummary']);
    Route::post('/project/{project}/{task}/status/{status}', [ProjectTaskController::class,'updateStatus']);
    Route::post('/task/{task}/mark-comments-read', [ProjectTaskController::class,'markCommentsread']);
    Route::post('/task/{task}/update-time', [TaskTimeController::class,'updateTime']);
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

    //lead messages
    Route::get('/lead-messages/{lead}', [LeadMessageController::class,'chatHistory']);
    Route::post('/lead-message-send/{lead}', [LeadMessageController::class,'chatSend']);

    //support home widgets
    Route::get('/unseen-lead-messages', [LeadMessageController::class,'unseenMessages']);
});
Route::middleware('auth:api')->get('/me', function (Request $request) {
    return $request->user();
});
