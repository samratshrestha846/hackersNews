<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Cybersecurity', 'Hacking', 'Data Breaches', 'Vulnerabilities', 'Privacy',
            'Malware', 'Cryptography', 'Penetration Testing', 'Ethical Hacking', 'Network Security'
        ];

        foreach ($categories as $index => $name) {
            Category::updateOrCreate(
                ['slug' => Str::slug($name)],
                [
                    'title' => $name,
                    'order' => $index + 1,
                    'is_active' => true,
                ]
            );
        }
    }
}
