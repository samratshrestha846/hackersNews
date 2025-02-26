<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'Zero-Day', 'Ransomware', 'Phishing', 'DDoS', 'Brute Force',
            'IoT Security', 'Bug Bounty', 'Cyber Warfare', 'AI Security', 'Dark Web'
        ];

        foreach ($tags as $name) {
            Tag::updateOrCreate(
                ['slug' => Str::slug($name)],
                [
                    'title' => $name,
                    'is_active' => true,
                ]
            );
        }
    }
}
