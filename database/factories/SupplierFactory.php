<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Supplier>
 */
class SupplierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => 'SUPP' . fake()->unique()->numerify('######'),
            'name' => fake()->company(),
            'contact_person' => fake()->name(),
            'address' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->companyEmail(),
            'npwp' => fake()->numerify('##.###.###.#-###.###'),
            'notes' => fake()->optional()->paragraph(),
            'status' => fake()->randomElement(['active', 'inactive']),
        ];
    }
}