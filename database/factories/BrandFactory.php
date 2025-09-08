<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Brand>
 */
class BrandFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->company();
        
        return [
            'name' => $name,
            'code' => strtoupper(substr($name, 0, 3)) . fake()->numerify('###'),
            'description' => fake()->sentence(),
            'logo' => null,
            'is_active' => fake()->boolean(90),
        ];
    }
}