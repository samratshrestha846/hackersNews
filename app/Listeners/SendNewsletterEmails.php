<?php

namespace App\Listeners;

use App\Events\NewsCreated;
use App\Jobs\SendNewsletterEmail;
use App\Models\NewsletterSubscriber;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendNewsletterEmails implements ShouldQueue
{
    use InteractsWithQueue;
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(NewsCreated $event): void
    {
        /// Get all active and verified subscribers
        $subscribers = NewsletterSubscriber::all();

        // Dispatch individual email jobs for better queue management
        foreach ($subscribers as $subscriber) {
            SendNewsletterEmail::dispatch($event->news, $subscriber);
        }
    }

    public function failed(NewsCreated $event, \Throwable $exception): void
    {
        logger()->error('Failed to process newsletter emails', [
            'news_id' => $event->news->id,
            'error' => $exception->getMessage()
        ]);
    }
}
