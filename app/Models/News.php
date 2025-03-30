<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class News extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'image', 'is_active', 'is_featured', 'short_description', 'description', 'score'];

    protected $appends = ['image_url'];

    public function categories() {
        return $this->belongsToMany(Category::class, 'category_news');
    }

    public function tags() {
        return $this->belongsToMany(Tag::class, 'news_tags');
    }

    public function getImageUrlAttribute(){
        return Storage::disk('uploads')->url($this->image);
    }
}
