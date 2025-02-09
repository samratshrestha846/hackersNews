<?php

use App\Http\Controllers\FrontendController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
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

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [FrontendController::class, 'index']);
Route::get('/list', [FrontendController::class, 'listPage']);
Route::get('/detail', [FrontendController::class, 'detailPage']);

Route::get('/news', [NewsController::class, 'index'])->name('hacker-news.index');
Route::get('/story/{id}', [NewsController::class, 'show'])->name('hacker-news.show');
Route::get('/{category?}/{page?}', [NewsController::class, 'index'])->name('hacker-news.index');

require __DIR__.'/auth.php';
