<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crm_updates', function (Blueprint $table) {
            $table->id();
            $table->text('message');
            $table->text('is_new');
            $table->timestamps();
        });
        // Schema::create('crm_update_views', function (Blueprint $table) {
        //     $table->id();
        //     $table->unsignedBigInteger('user_id');
        //     $table->foreign('user_id')->references('id')->on('users');
        //     $table->integer('crm_update_id');
        //     // $table->foreignId('crm_update_id')->constrained('crm_updates')->onDelete('cascade');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crm_updates');
        // Schema::dropIfExists('crm_updates_responses');
    }
}
