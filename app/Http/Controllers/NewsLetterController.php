<?php

namespace App\Http\Controllers;

use App\Models\NewsletterSubscriber;
use Illuminate\Http\Request;

class NewsLetterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //Get all Emails
        $search = $request->input('search');

        $subscribers = NewsletterSubscriber::when($search, function ($query, $search) {
                return $query->where('email', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->appends(['search' => $search]);
        return inertia('Dashboard/Subscribers/Index', [
            'subscribers' => $subscribers,
            'search' => $search
        ]);
    }
}
