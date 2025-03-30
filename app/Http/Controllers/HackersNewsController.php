<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class HackersNewsController extends Controller
{
    protected $baseUrl = 'https://hacker-news.firebaseio.com/v0';

    public function index($category = 'top', $page = 1)
    {
        $pageSize = 20;

        $categoryEndpoints = [
            'top' => 'topstories',
            'best' => 'beststories',
            'new' => 'newstories',
        ];

        if (!array_key_exists($category, $categoryEndpoints)) {
            $category = 'top';
        }

        // Cache key for category stories
        $cacheKey = "hackernews_category_{$category}";

        // Try to get from cache
        $storyIds = Cache::get($cacheKey);

        if (!$storyIds) {
            $response = Http::get("{$this->baseUrl}/{$categoryEndpoints[$category]}.json");

            if ($response->failed()) {
                return response()->json(['error' => 'Failed to fetch stories.'], 500);
            }

            $storyIds = $response->json();

            // Store in cache for 1 day
            Cache::put($cacheKey, $storyIds, now()->addDay());
        }

        $totalStories = count($storyIds);
        $paginatedIds = array_slice($storyIds, ($page - 1) * $pageSize, $pageSize);

        $stories = collect($paginatedIds)->map(function ($id) {
            $cacheKey = "hackernews_story_{$id}";

            $story = Cache::get($cacheKey);

            if (!$story) {
                $storyResponse = Http::get("{$this->baseUrl}/item/{$id}.json");

                if ($storyResponse->failed()) {
                    return [
                        'id' => $id,
                        'title' => 'Error fetching story',
                        'url' => null,
                        'by' => 'Anonymous',
                        'score' => 0,
                        'time' => null,
                    ];
                }

                $story = $storyResponse->json();

                // Cache story for 1 day
                Cache::put($cacheKey, $story, now()->addDay());
            }

            return [
                'id' => $story['id'] ?? $id,
                'title' => $story['title'] ?? 'Untitled',
                'url' => $story['url'] ?? null,
                'by' => $story['by'] ?? 'Anonymous',
                'score' => $story['score'] ?? 0,
                'time' => $story['time'] ?? null,
            ];
        });

        return Inertia::render('News/Index', [
            'stories' => $stories,
            'totalPages' => ceil($totalStories / $pageSize),
            'currentPage' => $page,
            'currentCategory' => $category
        ]);
    }

    public function show($id)
    {
        // Define the cache key for the specific story
        $cacheKey = "hackernews_story_{$id}";

        // Check if the cache exists for the story
        $story = Cache::get($cacheKey);

        // If cache is empty, fetch data from API and store it in cache
        if (!$story) {
            $storyResponse = Http::get("{$this->baseUrl}/item/{$id}.json");

            // Check for error in the response
            if ($storyResponse->failed()) {
                // Handle the error, e.g., log or return a default response
                return response()->json(['error' => 'Failed to fetch the story. Please try again later.'], 500);
            }

            $story = $storyResponse->json();

            // Store the story in the cache for 1 hour
            Cache::put($cacheKey, $story, now()->addHours(1));
        }

        return Inertia::render('News/Detail', [
            'story' => [
                'id' => $story['id'] ?? null,
                'title' => $story['title'] ?? 'Untitled',
                'url' => $story['url'] ?? null,
                'by' => $story['by'] ?? 'Anonymous',
                'score' => $story['score'] ?? 0,
                'time' => $story['time'] ?? null,
                'text' => $story['text'] ?? '',
            ],
        ]);
    }
}
