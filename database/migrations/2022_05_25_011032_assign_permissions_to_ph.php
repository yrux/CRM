<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\RolePermission;

class AssignPermissionsToPh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        RolePermission::create([
            'role_id'=>10,
            'permission_id'=>21,
        ]);
        RolePermission::create([
            'role_id'=>10,
            'permission_id'=>25,
        ]);
        RolePermission::create([
            'role_id'=>10,
            'permission_id'=>61,
        ]);
        RolePermission::create([
            'role_id'=>10,
            'permission_id'=>62,
        ]);
        RolePermission::create([
            'role_id'=>10,
            'permission_id'=>63,
        ]);
        RolePermission::create([
            'role_id'=>10,
            'permission_id'=>64,
        ]);
        RolePermission::create([
            'role_id'=>10,
            'permission_id'=>65,
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        RolePermission::where('role_id',10)->whereIn('permission_id',[21,25,61,62,63,64,65])->delete();
    }
}
