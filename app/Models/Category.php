<?php

namespace App\Models;

use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model implements Viewable
{
    use HasFactory, InteractsWithViews;

    protected $fillable = ['title', 'slug', 'order', 'is_active'];

    protected $appends = [
        'views_count',
        'unique_views_count',
    ];


    public function news()
    {
        return $this->belongsToMany(News::class);
    }

    public function getViewsCountAttribute(): int
    {
        return views($this)->count();
    }

    public function getUniqueViewsCountAttribute(): int
    {
        return views($this)->unique()->count();
    }
}
