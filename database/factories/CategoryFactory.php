<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            'Electronics', 'Clothing', 'Books', 'Home & Garden',
            'Sports & Outdoors', 'Toys & Games', 'Health & Beauty',
            'Automotive', 'Food & Beverages', 'Office Supplies'
        ];
        
        $name = fake()->randomElement($categories);
        
        return [
            'name' => $name,
            'code' => strtoupper(substr($name, 0, 3)) . fake()->numerify('###'),
            'description' => fake()->sentence(),
            'parent_id' => null,
            'image' => null,
            'is_active' => fake()->boolean(90),
        ];
    }
}