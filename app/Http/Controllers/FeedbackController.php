<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $feedbacks = Feedback::when($search, function ($query, $search) {
                return $query->where('email', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->appends(['search' => $search]);
        return inertia('Dashboard/Feedback/Index', [
            'feedbacks' => $feedbacks,
            'search' => $search
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'message' => 'required|string|min:5',
        ]);

        Feedback::create($validated);

        return redirect()->route('feedback')->with('success', 'Thank you for your feedback!');
    }
}
