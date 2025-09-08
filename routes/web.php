<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ShopController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Public company profile
Route::get('/company', [CompanyController::class, 'show'])->name('company.profile');

// E-commerce shop
Route::get('/shop', [ShopController::class, 'index'])->name('shop.index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Items Management
    Route::resource('items', ItemController::class);
    
    // Customers Management
    Route::resource('customers', CustomerController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
