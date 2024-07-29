<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AppEmployee>
 */
class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_name' => fake()->userName(),
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->email(),
            'birthdate' => fake()->dateTimeBetween('-50 years', '-20 years')->format('Y-m-d'),
            'basic_salary' => fake()->numberBetween(500000,10000000),
            'status' => fake()->randomElement(['Karyawan Tetap', 'Magang']),
            'group' => fake()->randomElement(['A', 'B', 'C']),
            'description' => fake()->realText(200),
        ];
    }
}
