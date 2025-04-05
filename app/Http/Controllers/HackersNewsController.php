<?php

namespace App\Http\Controllers;

use App\Models\HackerNews;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class HackersNewsController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search', ''); // Get search query or default to an empty string

        $stories = HackerNews::when($search, function ($query, $search) {
                return $query->where('title', 'like', "%{$search}%")
                             ->orWhere('score', 'like', "%{$search}%");
            })
            ->orderBy('time', 'desc')
            ->paginate(20);

        $pagination = [
            'current_page' => $stories->currentPage(),
            'total_pages' => $stories->lastPage(),
            'total_items' => $stories->total(),
            'per_page' => $stories->perPage(),
        ];

        return Inertia::render('News/Index', [
            'stories' => $stories->items(),
            'pagination' => $pagination,
            'search' => $search // Pass search query to view
        ]);
    }

    public function show($id)
    {
        $story = HackerNews::findOrFail($id);

        if (!$story) {
            return response()->json(['error' => 'Story not found.'], 404);
        }

        return Inertia::render('News/Detail', [
            'story' => [
                'id' => $story->story_id,
                'title' => $story->title,
                'url' => $story->url,
                'by' => $story->by,
                'score' => $story->score,
                'time' => $story->time,
                'text' => null,
            ],
        ]);
    }

    public function search(string $search)
    {
        $stories = HackerNews::when($search, function ($query, $search) {
            return $query->where('title', 'like', "%{$search}%")
            ->orWhere('score', 'like', "%{$search}%");
        })
            ->orderBy('time', 'desc')
            ->paginate(20);

        $pagination = [
            'current_page' => $stories->currentPage(),
            'total_pages' => $stories->lastPage(),
            'total_items' => $stories->total(),
            'per_page' => $stories->perPage(),
        ];

        return Inertia::render('News/Index', [
            'stories' => $stories->items(),
            'pagination' => $pagination,
            'search' => $search
        ]);
    }
}
