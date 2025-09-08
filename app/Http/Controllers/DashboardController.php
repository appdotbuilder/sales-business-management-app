<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Item;
use App\Models\Supplier;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard.
     */
    public function index()
    {
        // Calculate basic statistics
        $stats = [
            'totalSales' => 125000,
            'totalPurchases' => 85000,
            'profit' => 40000,
            'expenses' => 15000,
            'activeStock' => Item::active()->count(),
            'websiteVisits' => 2500,
            'invoicesCount' => 145,
        ];

        return Inertia::render('dashboard', [
            'stats' => $stats,
        ]);
    }
}