<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{CompanyController, BriefFormController, UserBriefController};
use App\Http\Controllers\FileController;
use App\Http\Controllers\{MarketingBudgetController, MarketingBudgetSpendingController};
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\{LeadController, PaymentController, LeadMessageController, LeadAssignedController, LeadTypeController};
use App\Http\Controllers\{BrandController, BrandUserController};
use App\Http\Controllers\{UserController, ChatController, CrmUpdateController, EventController, LeadNoteController};
use App\Http\Controllers\{ProjectController, ProjectTaskController, ProjectUserController, TaskCommentController, TaskTimeController};
use App\Http\Controllers\Auth\ApiAuthController;

// Route::post('/filecheck', function(Request $request){
//     $data = $request->file('file')->store('images', 's3');
//     dd($data);
// });

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
    Route::post('/check-tokens', [ApiAuthController::class,'checkTokens']);
    //guest apis
    Route::post('payments/{payment}', [PaymentController::class,'checkEmail']);
    Route::post('payments-getbrand/{payment}', [PaymentController::class,'getBrand']);
});


Route::group(['middleware' => ['cors', 'json.response','auth:api']], function () {
    Route::post('/logout', [ApiAuthController::class,'logout'])->name('logout.api');
    Route::put('/updateprofile', [ApiAuthController::class,'updateprofile']);

    /*Company resource*/
    Route::apiResource('company', CompanyController::class);
    Route::apiResource('events', EventController::class);
    Route::apiResource('crm-updates', CrmUpdateController::class);
    Route::apiResource('departments', DepartmentController::class);
    Route::apiResource('brief-form', BriefFormController::class);
    Route::apiResource('user-briefs', UserBriefController::class);
    Route::apiResource('lead_type', LeadTypeController::class);
    Route::apiResource('leads', LeadController::class);
    Route::apiResource('leads.payments', PaymentController::class);
    Route::apiResource('leads.assigned', LeadAssignedController::class);
    Route::apiResource('leads.notes', LeadNoteController::class);
    Route::post('leads/{lead}/{status}', [LeadController::class,'updateStatus']);
    Route::post('leads-create-user/{lead}', [LeadController::class,'createUser']);
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

    Route::apiResource('marketing_budgets', MarketingBudgetController::class);
    Route::get('/current-budget', [MarketingBudgetController::class,'currentMonthBudget']);
    Route::apiResource('marketing_budgets.spendings', MarketingBudgetSpendingController::class);
});
Route::middleware('auth:api')->get('/me', function (Request $request) {
    $notificationsCount = $request->user()->unreadNotifications()->count();
    $user = $request->user();
    $user->notification_count = $notificationsCount;
    return $user;
});
Route::middleware('auth:api')->get('/notifications', function (Request $request) {
    $notifications = $request->user()->notifications()->paginate(50);
    $request->user()->notifications()->paginate(50)->markAsRead();
    return $notifications;
});
