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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->string('barcode')->nullable();
            $table->string('sku')->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('brand_id')->nullable();
            $table->unsignedBigInteger('unit_id');
            $table->string('variant')->nullable();
            $table->json('images')->nullable()->comment('Up to 5 images');
            $table->decimal('cost_price', 15, 2)->default(0);
            $table->json('retail_prices')->nullable()->comment('15 levels of retail prices');
            $table->json('agent_prices')->nullable()->comment('15 levels of agent prices');
            $table->enum('status', ['for_sale', 'not_for_sale', 'purchase_only', 'assembled_item'])->default('for_sale');
            $table->decimal('discount_percentage', 5, 2)->default(0);
            $table->decimal('discount_amount', 15, 2)->default(0);
            $table->decimal('net_price', 15, 2)->default(0);
            $table->decimal('stock_quantity', 15, 3)->default(0);
            $table->decimal('minimum_stock', 15, 3)->default(0);
            $table->boolean('display_on_website')->default(false);
            $table->json('marketplace_links')->nullable();
            $table->decimal('weight', 10, 3)->nullable();
            $table->string('dimensions')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            
            $table->index('code');
            $table->index('barcode');
            $table->index('sku');
            $table->index('name');
            $table->index('category_id');
            $table->index('brand_id');
            $table->index('unit_id');
            $table->index('status');
            $table->index('is_active');
            $table->index('display_on_website');
            
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
            $table->foreign('brand_id')->references('id')->on('brands')->onDelete('set null');
            $table->foreign('unit_id')->references('id')->on('units')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};