<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = $this->faker->sentence(6);

        $imagePath = public_path('images/blog-list-01.jpg');
        $destinationPath = 'uploads/News/blog-list-01.jpg'; // No need for full path, Storage handles this

        if (file_exists($imagePath)) {
            Storage::disk('uploads')->put($destinationPath, file_get_contents($imagePath));
        }

        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'image' => $destinationPath,
            'short_description' => $this->faker->text(150),
            'description' => $this->faker->paragraphs(5, true),
            'is_active' => $this->faker->boolean(80),
            'is_featured' => $this->faker->boolean(30),
        ];
    }
}
