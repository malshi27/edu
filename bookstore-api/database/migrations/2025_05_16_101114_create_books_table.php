<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         schema::create('books', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('image'); // store image filename or URL
        $table->string('type')->nullable(); // textbook, private, etc.
        $table->string('language')->nullable();
        $table->string('grade')->nullable();
        $table->string('subject')->nullable();
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
};
