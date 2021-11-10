<?php

namespace App\Policies;

use App\Models\BriefForm;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BriefFormPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        return optional($user->permissions()->where('permission_id',31)->first())->id>0;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, BriefForm $briefForm)
    {
        return optional($user->permissions()->where('permission_id',34)->first())->id>0;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return optional($user->permissions()->where('permission_id',32)->first())->id>0;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, BriefForm $briefForm)
    {
        return optional($user->permissions()->where('permission_id',33)->first())->id>0;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, BriefForm $briefForm)
    {
        return optional($user->permissions()->where('permission_id',35)->first())->id>0;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, BriefForm $briefForm)
    {
        return optional($user->permissions()->where('permission_id',35)->first())->id>0;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\BriefForm  $briefForm
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, BriefForm $briefForm)
    {
        return optional($user->permissions()->where('permission_id',35)->first())->id>0;
    }
}
