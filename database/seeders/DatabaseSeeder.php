<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Company;
use App\Models\Customer;
use App\Models\CustomerGroup;
use App\Models\Item;
use App\Models\Region;
use App\Models\Supplier;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@businesspro.com',
        ]);

        // Create test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Create company profile
        Company::factory()->create([
            'name' => 'Business Pro Solutions',
            'description' => 'Your complete business management solution',
            'email' => 'info@businesspro.com',
        ]);

        // Create basic master data
        $units = [
            ['name' => 'Pieces', 'code' => 'PCS', 'symbol' => 'pcs'],
            ['name' => 'Kilograms', 'code' => 'KG', 'symbol' => 'kg'],
            ['name' => 'Liters', 'code' => 'LTR', 'symbol' => 'L'],
            ['name' => 'Boxes', 'code' => 'BOX', 'symbol' => 'box'],
        ];

        foreach ($units as $unitData) {
            Unit::create(array_merge($unitData, [
                'description' => 'Unit of measure: ' . $unitData['name'],
                'is_active' => true,
            ]));
        }

        $customerGroups = [
            ['name' => 'Retail', 'discount_percentage' => 0],
            ['name' => 'Wholesale', 'discount_percentage' => 10],
            ['name' => 'VIP', 'discount_percentage' => 15],
            ['name' => 'Corporate', 'discount_percentage' => 20],
        ];

        foreach ($customerGroups as $groupData) {
            CustomerGroup::create(array_merge($groupData, [
                'description' => 'Customer group: ' . $groupData['name'],
                'is_active' => true,
            ]));
        }

        // Create regions
        Region::factory(10)->create();

        // Create brands
        Brand::factory(20)->create();

        // Create categories
        Category::factory(15)->create();

        // Create items
        Item::factory(50)->create();

        // Create customers
        Customer::factory(100)->create();

        // Create suppliers
        Supplier::factory(25)->create();
    }
}
