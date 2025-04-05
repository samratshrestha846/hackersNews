<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HackerNews extends Model
{
    protected $table = 'hacker_news';

    protected $fillable = [
        'story_id',
        'title',
        'url',
        'by',
        'score',
        'time',
    ];

    protected $casts = [
        'time' => 'datetime',
    ];
}
