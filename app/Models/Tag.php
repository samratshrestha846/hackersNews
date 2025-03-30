<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', "is_active"];

    public function news()
    {
        return $this->belongsToMany(News::class, 'news_tags', 'tag_id', 'news_id');
    }
}
