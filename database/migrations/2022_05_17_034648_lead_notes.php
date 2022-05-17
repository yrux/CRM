<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\{Permission, RolePermission};
class LeadNotes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lead_notes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->text('note');
            $table->integer('lead_id');
            $table->timestamps();
        });
        $p1 = Permission::create([
            'name'=>'lead-note-list',
            'title'=>'Lead Note List',
        ]);
        $p2 = Permission::create([
            'name'=>'lead-note-view',
            'title'=>'Lead Note View',
        ]);
        $p3 = Permission::create([
            'name'=>'lead-note-create',
            'title'=>'Lead Note Create',
        ]);
        $p4 = Permission::create([
            'name'=>'lead-note-update',
            'title'=>'Lead Note Update',
        ]);
        $p5 = Permission::create([
            'name'=>'lead-note-delete',
            'title'=>'Lead Note Delete',
        ]);
        $data = [];
        $roles = [1,2,3,4,5];
        foreach($roles as $role){
            $data[] = ['role_id'=>$role,'permission_id'=>$p1->id];
            $data[] = ['role_id'=>$role,'permission_id'=>$p2->id];
            $data[] = ['role_id'=>$role,'permission_id'=>$p3->id];
            $data[] = ['role_id'=>$role,'permission_id'=>$p4->id];
            $data[] = ['role_id'=>$role,'permission_id'=>$p5->id];
        }
        RolePermission::insert($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lead_notes');
        Permission::where('name','lead-note-list')->delete();
        Permission::where('name','lead-note-view')->delete();
        Permission::where('name','lead-note-create')->delete();
        Permission::where('name','lead-note-update')->delete();
        Permission::where('name','lead-note-delete')->delete();
    }
}
