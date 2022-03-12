<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use App\Models\{RolePermission, Role, Permission};
class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->references('id')->on('users');
            $table->date('event_date');
            $table->time('event_time');
            $table->string('title',255);
            $table->timestamps();
        });
        $permissions = ['Event List','Event View','Event Create','Event Edit','Event Delete'];
        $role = Role::all();
        foreach($permissions as $permission){
            $permissionRow = Permission::create([
                'name'=>Str::slug($permission, '-'),
                'title'=>$permission,
            ]);
            foreach($role as $rol){
                RolePermission::create([
                    'role_id'=>$rol->id,
                    'permission_id'=>$permissionRow->id
                ]);
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
