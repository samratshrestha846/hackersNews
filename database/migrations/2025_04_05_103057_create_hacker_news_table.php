<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('hacker_news', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('story_id')->unique();
            $table->string('title');
            $table->text('url')->nullable();
            $table->string('by');
            $table->integer('score');
            $table->timestamp('time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hacker_news');
    }
};
