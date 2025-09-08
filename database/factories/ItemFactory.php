<?php

namespace Database\Factories;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Unit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->words(3, true);
        
        return [
            'code' => 'ITM' . fake()->unique()->numerify('######'),
            'barcode' => fake()->ean13(),
            'sku' => strtoupper(fake()->lexify('???')) . fake()->numerify('###'),
            'name' => ucwords($name),
            'description' => fake()->paragraph(),
            'category_id' => Category::factory(),
            'brand_id' => Brand::factory(),
            'unit_id' => Unit::factory(),
            'variant' => fake()->optional()->randomElement(['Small', 'Medium', 'Large', 'Red', 'Blue', 'Green']),
            'images' => null,
            'cost_price' => fake()->randomFloat(2, 10, 1000),
            'retail_prices' => [
                'level_1' => fake()->randomFloat(2, 15, 1200),
                'level_2' => fake()->randomFloat(2, 20, 1300),
            ],
            'agent_prices' => [
                'level_1' => fake()->randomFloat(2, 12, 1100),
                'level_2' => fake()->randomFloat(2, 14, 1150),
            ],
            'status' => fake()->randomElement(['for_sale', 'not_for_sale', 'purchase_only', 'assembled_item']),
            'discount_percentage' => fake()->randomFloat(2, 0, 20),
            'discount_amount' => fake()->randomFloat(2, 0, 100),
            'net_price' => fake()->randomFloat(2, 10, 1000),
            'stock_quantity' => fake()->randomFloat(3, 0, 1000),
            'minimum_stock' => fake()->randomFloat(3, 5, 50),
            'display_on_website' => fake()->boolean(70),
            'marketplace_links' => null,
            'weight' => fake()->randomFloat(3, 0.1, 10),
            'dimensions' => fake()->numerify('##') . 'x' . fake()->numerify('##') . 'x' . fake()->numerify('##') . ' cm',
            'is_active' => fake()->boolean(90),
        ];
    }
}