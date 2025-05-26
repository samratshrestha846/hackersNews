<?php

namespace App\Events;

use App\Models\News;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewsCreated
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public News $news;

    /**
     * Create a new event instance.
     */

    public function __construct(News $news)
    {
        $this->news = $news;
    }
}
