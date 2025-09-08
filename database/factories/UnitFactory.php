<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Unit>
 */
class UnitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $units = [
            ['name' => 'Pieces', 'code' => 'PCS', 'symbol' => 'pcs'],
            ['name' => 'Kilograms', 'code' => 'KG', 'symbol' => 'kg'],
            ['name' => 'Grams', 'code' => 'GR', 'symbol' => 'g'],
            ['name' => 'Liters', 'code' => 'LTR', 'symbol' => 'L'],
            ['name' => 'Boxes', 'code' => 'BOX', 'symbol' => 'box'],
            ['name' => 'Packs', 'code' => 'PACK', 'symbol' => 'pack'],
        ];
        
        $unit = fake()->randomElement($units);
        
        return [
            'name' => $unit['name'],
            'code' => $unit['code'],
            'symbol' => $unit['symbol'],
            'description' => fake()->sentence(),
            'is_active' => true,
        ];
    }
}