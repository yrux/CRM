<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\{RolePermission, Role};
class AddPermissions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        RolePermission::create([
            'role_id'=>4,
            'permission_id'=>41
        ]);
        RolePermission::create([
            'role_id'=>4,
            'permission_id'=>42
        ]);
        RolePermission::create([
            'role_id'=>4,
            'permission_id'=>43
        ]);
        RolePermission::create([
            'role_id'=>4,
            'permission_id'=>44
        ]);
        RolePermission::create([
            'role_id'=>4,
            'permission_id'=>45
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
