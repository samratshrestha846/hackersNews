<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\HackersNewsController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\NewsLetterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
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

Route::get('/', [FrontendController::class, 'index'])->name('home   ');
Route::get('/category/{slug}', [FrontendController::class, 'listPage']);
Route::get('/tag/{slug}', [FrontendController::class, 'tagListPage']);
Route::get('/search', [FrontendController::class, 'searchListPage']);
Route::get('/news/{slug}', [FrontendController::class, 'detailPage']);
Route::post('/subscribe', [FrontendController::class, 'subscribe']);
Route::get('/unsubscribe', [FrontendController::class, 'unsubscribe'])->name('unsubscribe');
Route::get('/feedback', [FrontendController::class, 'feedback'])->name('feedback');
Route::post('/feedback', [FrontendController::class, 'storeFeedback']);

Route::get('/hackers-news', [HackersNewsController::class, 'index'])->name('hacker-news.index');
Route::get('/hackers-news/story/{id}', [HackersNewsController::class, 'show'])->name('hacker-news.show');

// Dashboard
Route::prefix('/dashboard')->middleware('auth')->group(function(){
    Route::get('', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

    Route::resource('users', UserController::class);

    Route::get('/users/{user}/reset-password', [ResetPasswordController::class, 'showResetPassword'])
        ->name('users.reset-password');
    Route::post('/users/{user}/update-password', [ResetPasswordController::class, 'updatePassword'])
        ->name('users.update-password');

    Route::resource('categories', CategoryController::class);
    Route::resource('tags', TagController::class);

    Route::get('/news', [NewsController::class, 'index'])->name('news.index');
    Route::get('/news/create', [NewsController::class, 'create'])->name('news.create');
    Route::post('/news', [NewsController::class, 'store'])->name('news.store');
    Route::get('/news/{news}', [NewsController::class, 'show'])->name('news.show');
    Route::get('/news/{news}/edit', [NewsController::class, 'edit'])->name('news.edit');
    Route::post('/news/{news}', [NewsController::class, 'update'])->name('news.update');
    Route::delete('/news/{news}', [NewsController::class, 'destroy'])->name('news.destroy');

    Route::get('/subscribers', [NewsLetterController::class, 'index'])->name('subscribers.index');

    Route::get('/feedback', [FeedbackController::class, 'index'])->name('feedbacks.index');
});

require __DIR__.'/auth.php';
