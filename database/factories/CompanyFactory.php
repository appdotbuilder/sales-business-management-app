<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Company>
 */
class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'description' => fake()->paragraph(),
            'history' => fake()->paragraphs(3, true),
            'address' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->companyEmail(),
            'website' => fake()->url(),
            'npwp' => fake()->numerify('##.###.###.#-###.###'),
            'siup' => fake()->numerify('####/##/###'),
            'bank_accounts' => [
                [
                    'bank_name' => 'Bank Central Asia',
                    'account_number' => fake()->numerify('##########'),
                    'account_name' => fake()->company(),
                ],
            ],
            'legal_info' => fake()->paragraph(),
            'is_active' => true,
        ];
    }
}