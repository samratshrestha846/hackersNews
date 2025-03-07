<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //Get all tags
        $search = $request->input('search');

        $tags = Tag::when($search, function ($query, $search) {
                return $query->where('title', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->appends(['search' => $search]);
        return inertia('Dashboard/Tag/Index', [
            'tags' => $tags,
            'search' => $search
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Dashboard/Tag/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:tags,title',
            'is_active' => 'boolean',
        ]);
        $validated['slug'] = Str::slug($validated['title']); //create slug from name

        // Create the Tag
        Tag::create($validated);

        return redirect()->route('tags.index')->with('success', 'Tag created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(tag $tag)
    {
        return inertia('Dashboard/Tag/Edit', [
            'tag' => $tag
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tag $tag)
    {
        return inertia('Dashboard/Tag/Edit', [
            'tag' => $tag
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, tag $tag)
    {
        // Validate the request
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:tags,title,' . $tag->id,
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['title']); //create slug from nam

        // Update the tag
        $tag->update($validated);

        return redirect()->route('tags.index')->with('success', 'Tag updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tag $tag)
    {
        // Delete the tag
        $tag->delete();

        return redirect()->route('tags.index')->with('success', 'Tag deleted successfully.');
    }
}
