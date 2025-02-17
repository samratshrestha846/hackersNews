<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class ResetPasswordController extends Controller{

    public function showResetPassword(User $user)
    {
        return Inertia::render('Dashboard/Users/ResetPassword', [
            'user' => $user
        ]);
    }

    public function updatePassword(Request $request, User $user)
    {
        $request->validate([
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user->update([
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('users.index')->with('success', 'Password updated successfully.');
    }
}
