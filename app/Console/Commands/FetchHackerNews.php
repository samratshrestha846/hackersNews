<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use App\Models\HackerNews;

class FetchHackerNews extends Command
{
    protected $signature = 'hackernews:fetch';
    protected $description = 'Fetch and update Hacker News stories daily';

    public function handle()
    {
        $categories = ['topstories', 'beststories', 'newstories'];
        $baseUrl = 'https://hacker-news.firebaseio.com/v0';

        foreach ($categories as $category) {
            $response = Http::get("$baseUrl/$category.json");

            if ($response->failed()) {
                $this->error("Failed to fetch $category");
                continue;
            }

            $ids = array_slice($response->json(), 0, 50);
            foreach ($ids as $id) {
                $storyResponse = Http::get("$baseUrl/item/$id.json");

                if ($storyResponse->ok()) {
                    $data = $storyResponse->json();

                    HackerNews::updateOrCreate(
                        ['story_id' => $data['id']],
                        [
                            'title' => $data['title'] ?? 'Untitled',
                            'url' => $data['url'] ?? null,
                            'by' => $data['by'] ?? 'Anonymous',
                            'score' => $data['score'] ?? 0,
                            'time' => now()->setTimestamp($data['time']),
                        ]
                    );
                }
            }
        }

        $this->info('Hacker News stories updated.');
    }
}
