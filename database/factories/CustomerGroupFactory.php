<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CustomerGroup>
 */
class CustomerGroupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement(['Retail', 'Wholesale', 'VIP', 'Corporate', 'Partner']),
            'description' => fake()->sentence(),
            'discount_percentage' => fake()->randomFloat(2, 0, 25),
            'is_active' => true,
        ];
    }
}