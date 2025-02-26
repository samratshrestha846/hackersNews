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

        // Default to 'top' category if invalid category provided
        if (!array_key_exists($category, $categoryEndpoints)) {
            $category = 'top';
        }

        // Fetch story IDs from the API
        $response = Http::get("{$this->baseUrl}/{$categoryEndpoints[$category]}.json");

        // Check for error in response
        if ($response->failed()) {
            // Handle the error, e.g., log or return a user-friendly message
            return response()->json(['error' => 'Failed to fetch stories from the API. Please try again later.'], 500);
        }

        // Proceed if the response is successful
        $storyIds = $response->json();

        // Total number of stories available (for pagination calculation)
        $totalStories = count($storyIds);

        // Paginate story IDs
        $paginatedIds = array_slice($storyIds, ($page - 1) * $pageSize, $pageSize);

        // Fetch story details
        $stories = collect($paginatedIds)->map(function ($id) {
            $storyResponse = Http::get("{$this->baseUrl}/item/{$id}.json");

            // Check for error in the story response
            if ($storyResponse->failed()) {
                // Handle the error, e.g., log or return a default response
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

            return [
                'id' => $id,
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
