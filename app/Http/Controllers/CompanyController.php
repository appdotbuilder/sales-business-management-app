<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Item;
use Inertia\Inertia;

class CompanyController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show()
    {
        $company = Company::where('is_active', true)->first();
        
        if (!$company) {
            $company = Company::create([
                'name' => 'Business Pro Solutions',
                'description' => 'Your complete business management solution',
                'email' => 'info@businesspro.com',
                'phone' => '+1 (555) 123-4567',
                'address' => '123 Business Street, Suite 100, Business City, BC 12345',
                'website' => 'https://businesspro.com',
                'history' => 'Founded with a vision to revolutionize business management, Business Pro Solutions has been serving companies of all sizes with comprehensive software solutions. Our platform integrates sales, inventory, customer management, and accounting into one powerful system.',
                'is_active' => true,
            ]);
        }

        $featuredItems = Item::with(['category', 'brand'])
            ->where('display_on_website', true)
            ->where('is_active', true)
            ->where('status', 'for_sale')
            ->take(8)
            ->get();

        return Inertia::render('company/profile', [
            'company' => $company,
            'featuredItems' => $featuredItems,
        ]);
    }
}