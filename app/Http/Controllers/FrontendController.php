<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function index()
    {
        // Trending News (active and featured)
        $trendingNews = News::with(['categories'])->where('is_active', 1)
                            ->where('is_featured', 1)
                            ->latest()
                            ->limit(3)
                            ->get();

        // Top Featured News (active)
        $topFeaturedNews = News::with(['categories'])->where('is_active', 1)
                                ->where('is_featured', 1)
                                ->latest()
                                ->limit(6)
                                ->get();

        //Categoried news
        $categories = Category::with(['news' => function ($query) {
            $query->where('is_active', 1)->take(5)->get(); // Only take 5 active news items per category
        }])->where('is_active', 1)->get();

        // Latest News
        $latestNews = News::where('is_active', 1)->latest()->take(5)->get();

        return Inertia::render('Home', [
            'trendingNews' => $trendingNews,
            'topFeaturedNews' => $topFeaturedNews,
            'categories' => $categories,
            'latestNews' => $latestNews,
        ]);
    }

    public function listPage(string $slug)
    {
        // Get category by slug
        $category = Category::where('slug', $slug)->firstOrFail();

        // Get news related to this category and apply pagination
        $news = $category->news()
                        ->orderBy('updated_at', 'desc')
                        ->paginate(10);  // Adjust the per-page value as needed

        // Pagination details
        $pagination = [
            'current_page' => $news->currentPage(),
            'total_pages' => $news->lastPage(),
            'total_items' => $news->total(),
            'per_page' => $news->perPage(),
        ];

        // Return category news, and pagination to the frontend
        return inertia('ListPage', [
            'category' => $category,
            'news' => $news->items(),  // Only send the items for pagination
            'pagination' => $pagination,
        ]);
    }

    public function tagListPage(string $slug)
    {
        // Get tag by slug
        $tag = Tag::where('slug', $slug)->firstOrFail();

        // Get news related to this category and apply pagination
        $news = $tag->news()
                        ->orderBy('updated_at', 'desc')
                        ->paginate(10);  // Adjust the per-page value as needed

        // Pagination details
        $pagination = [
            'current_page' => $news->currentPage(),
            'total_pages' => $news->lastPage(),
            'total_items' => $news->total(),
            'per_page' => $news->perPage(),
        ];

        // Return tag news, and pagination to the frontend
        return inertia('TagListPage', [
            'tag' => $tag,
            'news' => $news->items(),  // Only send the items for pagination
            'pagination' => $pagination,
        ]);
    }

    public function searchListPage(Request $request)
    {
        $search = $request->query('search');

        // Get news related to this category and apply pagination
        $news = News::when($search, function ($query, $search) {
            return $query->where('title', 'like', "%{$search}%")
            ->orWhere('score', 'like', "%{$search}%");
        })->latest()
        ->paginate(10);  // Adjust the per-page value as needed

        // Pagination details
        $pagination = [
            'current_page' => $news->currentPage(),
            'total_pages' => $news->lastPage(),
            'total_items' => $news->total(),
            'per_page' => $news->perPage(),
        ];

        // Return tag news, and pagination to the frontend
        return inertia('SearchListPage', [
            'search' => $search,
            'news' => $news->items(),  // Only send the items for pagination
            'pagination' => $pagination,
        ]);
    }

    public function detailPage(string $slug)
    {
        $news = News::with('tags', 'categories')->where('slug', $slug)->first();
        return Inertia::render('DetailPage', [
            'news' => $news
        ]);
    }
}
