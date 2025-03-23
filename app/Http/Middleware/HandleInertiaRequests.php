<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\News;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $categories = Category::where('is_active', 1)->get();
        $featuredNews = News::inRandomOrder()->where('is_active', 1)->where('is_featured', 1)->take(5)->get();
        $tags = Tag::inRandomOrder()->where('is_active', 1)->take(5)->get();
        $footerCategories = Category::where('is_active', 1)->take(5)->get();
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'success' => Session::get('success'),
                'error' => Session::get('error'),
            ],
            'categories' => $categories,
            'featuredNews' => $featuredNews,
            'tags' => $tags,
            'footerCategories' => $footerCategories
        ];
    }
}
