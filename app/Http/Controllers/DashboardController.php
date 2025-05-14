<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use App\Models\NewsletterSubscriber;
use App\Models\Tag;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $categoriesCount = Category::count();
        $tagsCount = Tag::count();
        $newsCount = News::count();
        $usersCount = User::count();
        $subscribersCount = NewsletterSubscriber::count();

        return inertia('Dashboard/Dashboard', [
            'categoriesCount' => $categoriesCount,
            'tagsCount' => $tagsCount,
            'newsCount' => $newsCount,
            'usersCount' => $usersCount,
            'subscribersCount' => $subscribersCount,
        ]);
    }
}
