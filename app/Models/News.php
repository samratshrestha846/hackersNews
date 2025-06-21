<?php

namespace App\Models;

use CyrildeWit\EloquentViewable\Contracts\Viewable;
use CyrildeWit\EloquentViewable\InteractsWithViews;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Storage;

class News extends Model implements Viewable
{
    use HasFactory, InteractsWithViews;

    protected $fillable = ['title', 'slug', 'image', 'is_active', 'is_featured', 'short_description', 'description', 'score'];

    protected $appends = [
        'image_url',
        'views_count',
        'unique_views_count',
    ];

    public function categories() {
        return $this->belongsToMany(Category::class, 'category_news');
    }

    public function tags() {
        return $this->belongsToMany(Tag::class, 'news_tags');
    }

    public function getImageUrlAttribute(){
        return Storage::disk('uploads')->url($this->image);
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
