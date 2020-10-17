<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('first_name', 50)->nullable(false);
            $table->string('last_name', 50)->nullable(false);
            $table->string('username', 50)->unique()->nullable(false);
            $table->boolean('role')->default(false);
            $table->string('email', 125)->unique()->nullable(false);
            $table->string('password', 100)->nullable(false);
            $table->string('api_token', 60)
                ->unique()
                ->nullable()
                ->default(null);
            $table->text('address')->nullable(true);
            $table->string('phone_number', 25)->nullable(true);
            $table->unsignedInteger('image_id')->nullable();
            $table->unsignedInteger('plan_id')->nullable();
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('image_id')->references('id')
                ->on('images')
                ->onUpdate('CASCADE')
                ->onDelete('SET NULL');

            $table->foreign('plan_id')->references('id')
                ->on('plans')
                ->onUpdate('CASCADE')
                ->onDelete('SET NULL');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
