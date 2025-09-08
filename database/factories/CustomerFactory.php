<?php

namespace Database\Factories;

use App\Models\CustomerGroup;
use App\Models\Region;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => 'CUST' . fake()->unique()->numerify('######'),
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'city' => fake()->city(),
            'postal_code' => fake()->postcode(),
            'customer_group_id' => CustomerGroup::factory(),
            'region_id' => Region::factory(),
            'credit_limit' => fake()->randomFloat(2, 0, 50000),
            'payment_terms' => fake()->randomElement([0, 7, 14, 30, 45, 60]),
            'notes' => fake()->optional()->paragraph(),
            'status' => fake()->randomElement(['active', 'inactive']),
            'email_verified_at' => fake()->optional()->dateTime(),
        ];
    }
}