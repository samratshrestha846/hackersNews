<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        // Get all categories
        $search = $request->input('search');

        $categories = Category::when($search, function ($query, $search) {
                return $query->where('title', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->appends(['search' => $search]);
        return inertia('Dashboard/Category/Index', [
            'categories' => $categories,
            'search' => $search
        ]);
    }

    public function create()
    {
        return inertia('Dashboard/Category/Create');
    }

    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:categories,title',
            'is_active' => 'boolean',
        ]);
        $validated['slug'] = Str::slug($validated['title']); //create slug from title
        $lastOrderCategory = Category::orderBy('order', 'desc')->first(); //get last category by order
        $validated['order'] = $lastOrderCategory ? $lastOrderCategory->order+1 : 1; //if lastOrderCategory exist then find its order and add 1 or default 1

        // Create the category
        Category::create($validated);

        return redirect()->route('categories.index')->with('success', 'Category created successfully.');
    }

    public function edit(Category $category)
    {
        return inertia('Dashboard/Category/Edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, Category $category)
    {
        // Validate the request
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:categories,title,' . $category->id,
            'is_active' => 'boolean',
        ]);

        $validated['slug'] = Str::slug($validated['title']); //create slug from title

        // Update the category
        $category->update($validated);

        return redirect()->route('categories.index')->with('success', 'Category updated successfully.');
    }

    public function destroy(Category $category)
    {
        // Delete the category
        $category->delete();

        return redirect()->route('categories.index')->with('success', 'Category deleted successfully.');
    }
}
