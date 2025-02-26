<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\News;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 20 fake news articles
        News::factory(20)->create()->each(function ($news) {
            // Attach random categories (1 to 3 per news)
            $categories = Category::inRandomOrder()->limit(rand(1, 3))->pluck('id');
            $news->categories()->attach($categories);

            // Attach random tags (2 to 5 per news)
            $tags = Tag::inRandomOrder()->limit(rand(2, 5))->pluck('id');
            $news->tags()->attach($tags);
        });
    }
}
