<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use App\Models\NewsletterSubscriber;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $categoriesCount = Category::count();
        $tagsCount = Tag::count();
        $newsCount = News::count();
        $usersCount = User::count();
        $subscribersCount = NewsletterSubscriber::count();

        // Sum views across all News
        $totalNewsViews = News::all()->sum(fn($news) => views($news)->count());
        $totalUniqueNewsViews = News::all()->sum(fn($news) => views($news)->unique()->count());

        // Sum views across all Categories
        $totalCategoryViews = Category::all()->sum(fn($category) => views($category)->count());
        $totalUniqueCategoryViews = Category::all()->sum(fn($category) => views($category)->unique()->count());

        // Sum views across all Tags
        $totalTagViews = Tag::all()->sum(fn($tag) => views($tag)->count());
        $totalUniqueTagViews = Tag::all()->sum(fn($tag) => views($tag)->unique()->count());

        // 🚀 Overall total views and unique visitors (all models)
        $overallViews = DB::table('views')->count();
        $overallUniqueVisitors = DB::table('views')->distinct('visitor')->count('visitor');


        // Top 10 News
        $topNews = News::select('id', 'title', 'slug')
            ->withCount(['views as views_count' => fn ($query) => $query])
            ->orderByDesc('views_count')
            ->take(10)
            ->get();

        // Top 10 Categories
        $topCategories = Category::select('id', 'title', 'slug')
            ->withCount(['views as views_count' => fn ($query) => $query])
            ->orderByDesc('views_count')
            ->take(10)
            ->get();

        // Top 10 Tags
        $topTags = Tag::select('id', 'title', 'slug')
            ->withCount(['views as views_count' => fn ($query) => $query])
            ->orderByDesc('views_count')
            ->take(10)
            ->get();
        return inertia('Dashboard/Dashboard', [
            'categoriesCount' => $categoriesCount,
            'tagsCount' => $tagsCount,
            'newsCount' => $newsCount,
            'usersCount' => $usersCount,
            'subscribersCount' => $subscribersCount,

            'totalNewsViews' => $totalNewsViews,
            'totalUniqueNewsViews' => $totalUniqueNewsViews,

            'totalCategoryViews' => $totalCategoryViews,
            'totalUniqueCategoryViews' => $totalUniqueCategoryViews,

            'totalTagViews' => $totalTagViews,
            'totalUniqueTagViews' => $totalUniqueTagViews,

            'overallViews' => $overallViews,
            'overallUniqueVisitors' => $overallUniqueVisitors,

            'topNews' => $topNews,
            'topCategories' => $topCategories,
            'topTags' => $topTags,
        ]);
    }
}
