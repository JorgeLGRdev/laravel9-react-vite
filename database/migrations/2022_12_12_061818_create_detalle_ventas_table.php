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
        Schema::create('detalle_ventas', function (Blueprint $table) {
            $table->id();
            $table->double('precio');
            $table->integer('cantidad');
            $table->double('monto');

            $table->unsignedBigInteger('id_Producto');
            $table->foreign('id_Producto')->references('id')->on('products');
            $table->unsignedBigInteger('id_Venta');
            $table->foreign('id_Venta')->references('id')->on('ventas');

            $table->softDeletes();
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
        Schema::dropIfExists('detalle_ventas');
    }
};
