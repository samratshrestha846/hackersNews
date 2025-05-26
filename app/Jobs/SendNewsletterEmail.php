<?php

namespace App\Jobs;

use App\Mail\NewsletterEmail;
use App\Models\News;
use App\Models\NewsletterSubscriber;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendNewsletterEmail implements ShouldQueue
{
    use Queueable, Dispatchable, InteractsWithQueue, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public News $news,
        public NewsletterSubscriber $subscriber
    )
    {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Mail::to($this->subscriber->email)
            ->send(new NewsletterEmail($this->news, $this->subscriber));
    }

    public function failed(\Throwable $exception): void
    {
        logger()->error('Failed to send newsletter email', [
            'news_id' => $this->news->id,
            'subscriber_id' => $this->subscriber->id,
            'error' => $exception->getMessage()
        ]);
    }
}
