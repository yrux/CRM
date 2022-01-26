<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddLeadTypeColumnInLeadTbl extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('leads', function (Blueprint $table) {
            $table->integer('lead_type')->default(0);
        });
    }
}
