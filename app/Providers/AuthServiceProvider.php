<?php

namespace App\Providers;

use App\Policies\{CompanyPolicy, BrandPolicy, BrandUserPolicy, UserPolicy, TaskCommentPolicy, BriefFormPolicy, DepartmentPolicy};
use App\Models\{Company, Brand, BrandUser, BriefForm, User, TaskComment, Department};
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Company::class => CompanyPolicy::class,
        Brand::class => BrandPolicy::class,
        User::class => UserPolicy::class,
        BrandUser::class => BrandUserPolicy::class,
        TaskComment::class => TaskCommentPolicy::class,
        BriefForm::class => BriefFormPolicy::class,
        Department::class => DepartmentPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        if (! $this->app->routesAreCached()) {
            // Passport::routes();
            Passport::tokensExpireIn(now()->addDays(15));
            Passport::refreshTokensExpireIn(now()->addDays(30));
            Passport::personalAccessTokensExpireIn(now()->addMonths(6));
        }
        // Gate::guessPolicyNamesUsing(function ($modelClass) {
        //     // Return the name of the policy class for the given model...
        // });
    }
}
