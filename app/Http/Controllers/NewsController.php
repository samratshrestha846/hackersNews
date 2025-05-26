<?php

namespace App\Http\Controllers;

use App\Events\NewsCreated;
use App\Models\News;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->query('search');
        $news = News::when($search, function ($query, $search) {
                return $query->where('title', 'like', "%{$search}%")
                ->orWhere('score', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->withQueryString();

        return Inertia::render('Dashboard/News/Index', [
            'news' => $news,
            'search' => $search,
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/News/Create', [
            'categories' => Category::all(),
            'tags' => Tag::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|mimes:png,jpg,jpeg',
            'is_active' => 'required|boolean',
            'is_featured' => 'required|boolean',
            'short_description' => 'required|string',
            'description' => 'required|string',
            'categories' => 'required|array',
            'tags' => 'required|array',
            'score' => 'required|numeric'
        ]);

        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('uploads/News', 'uploads');
        }

        $news = News::create($validated);
        $news->categories()->sync($validated['categories'] ?? []);
        $news->tags()->sync($validated['tags'] ?? []);

        // Fire event if news is active
        if ($news->is_active == true) {
            NewsCreated::dispatch($news);
        }

        return redirect()->route('news.index')->with('success', 'News created successfully.');
    }

    public function show(News $news)
    {
        return Inertia::render('Dashboard/News/Show', [
            'news' => $news->load('categories', 'tags'),
        ]);
    }

    public function edit(News $news)
    {
        return Inertia::render('Dashboard/News/Edit', [
            'news' => $news->load('categories', 'tags'),
            'categories' => Category::all(),
            'tags' => Tag::all(),
        ]);
    }

    public function update(Request $request, News $news)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|mimes:png,jpg,jpeg|max:2048', //2Mb max size
            'is_active' => 'required|boolean',
            'is_featured' => 'required|boolean',
            'short_description' => 'required|string',
            'description' => 'required|string',
            'categories' => 'required|array',
            'tags' => 'required|array',
            'score' => 'required|numeric'
        ]);

        $wasActive = $news->is_active;
        $isNowActive = $validated['is_active'] == true;

        $validated['slug'] = Str::slug($validated['title']);
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('uploads/News', 'uploads');
        }else{
            $validated['image'] = $news->image;
        }
        $news->update($validated);
        $news->categories()->sync($validated['categories'] ?? []);
        $news->tags()->sync($validated['tags'] ?? []);

        if ($isNowActive && !$wasActive) {
            NewsCreated::dispatch($news);
        }

        return redirect()->route('news.index')->with('success', 'News updated successfully.');
    }

    public function destroy(News $news)
    {
        $news->delete();
        return redirect()->route('news.index')->with('success', 'News deleted successfully.');
    }
}
