<?php

namespace App\Policies;

use App\Models\LeadAssigned;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class LeadAssignedPolicy
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
        return optional($user->permissions()->where('permission_id',41)->first())->id>0;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, LeadAssigned $leadAssigned)
    {
        return optional($user->permissions()->where('permission_id',44)->first())->id>0;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return optional($user->permissions()->where('permission_id',42)->first())->id>0;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, LeadAssigned $leadAssigned)
    {
        return optional($user->permissions()->where('permission_id',43)->first())->id>0;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, LeadAssigned $leadAssigned)
    {
        return optional($user->permissions()->where('permission_id',45)->first())->id>0;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, LeadAssigned $leadAssigned)
    {
        return optional($user->permissions()->where('permission_id',45)->first())->id>0;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadAssigned  $leadAssigned
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, LeadAssigned $leadAssigned)
    {
        return optional($user->permissions()->where('permission_id',45)->first())->id>0;
    }
}
