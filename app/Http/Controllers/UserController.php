<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $users = User::when($search, function ($query, $search) {
                return $query->where('name', 'like', "%{$search}%")
                            ->orWhere('email', 'like', "%{$search}%");
            })
            ->latest()
            ->paginate(10)
            ->appends(['search' => $search]); // Keep search in pagination links

        return inertia('Dashboard/Users/Index', [
            'users' => $users,
            'search' => $search,
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Users/Create');
    }

    public function edit(User $user)
    {
        return Inertia::render('Dashboard/Users/Edit', ['user' => $user]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('users.index')->with('success', 'User created successfully.');
    }

    // Update User
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id,
        ]);

        $user->update($request->only(['name', 'email']));

        return redirect()->route('users.index')->with('success', 'User updated successfully.');
    }

    // Delete User
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()->route('users.index')->with('success', 'User deleted successfully.');
    }
}
