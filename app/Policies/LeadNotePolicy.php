<?php

namespace App\Policies;

use App\Models\LeadNote;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class LeadNotePolicy
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
        return optional($user->permissions()->where('permission_id',91)->first())->id>0;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, LeadNote $leadNote)
    {
        return optional($user->permissions()->where('permission_id',92)->first())->id>0;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        return optional($user->permissions()->where('permission_id',93)->first())->id>0;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, LeadNote $leadNote)
    {
        return optional($user->permissions()->where('permission_id',94)->first())->id>0;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, LeadNote $leadNote)
    {
        return optional($user->permissions()->where('permission_id',95)->first())->id>0;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, LeadNote $leadNote)
    {
        return optional($user->permissions()->where('permission_id',95)->first())->id>0;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\LeadNote  $leadNote
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, LeadNote $leadNote)
    {
        return optional($user->permissions()->where('permission_id',95)->first())->id>0;
    }
}
