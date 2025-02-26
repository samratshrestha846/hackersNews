<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\HackersNewsController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [FrontendController::class, 'index']);
Route::get('/list', [FrontendController::class, 'listPage']);
Route::get('/detail', [FrontendController::class, 'detailPage']);

Route::get('/news', [HackersNewsController::class, 'index'])->name('hacker-news.index');
Route::get('/news/story/{id}', [HackersNewsController::class, 'show'])->name('hacker-news.show');
Route::get('/news{category?}/{page?}', [HackersNewsController::class, 'index'])->name('hacker-news.index');

// Dashboard
Route::prefix('/dashboard')->group(function(){
    Route::get('', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::resource('users', UserController::class);

    Route::get('/users/{user}/reset-password', [ResetPasswordController::class, 'showResetPassword'])
        ->name('users.reset-password');
    Route::post('/users/{user}/update-password', [ResetPasswordController::class, 'updatePassword'])
        ->name('users.update-password');

        Route::resource('categories', CategoryController::class);
        Route::resource('tags', TagController::class);
        Route::resource('news', NewsController::class);
});

require __DIR__.'/auth.php';
