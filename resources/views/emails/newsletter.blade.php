<!DOCTYPE html>
<html>
<head>
    <title>{{ $news->title }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            background: #2c3e50;
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .content {
            padding: 30px 20px;
        }
        .news-title {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 24px;
        }
        .news-meta {
            color: #666;
            margin-bottom: 20px;
            font-size: 14px;
        }
        .news-excerpt {
            margin-bottom: 20px;
            color: #555;
        }
        .read-more {
            display: inline-block;
            background: #3498db;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
        }
        .footer {
            background: #ecf0f1;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
        .unsubscribe {
            color: #666;
            text-decoration: none;
        }
        .featured-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{{ config('app.name') }} Newsletter</h1>
            <p>Latest news and updates</p>
        </div>

        <div class="content">
            @if($news->image)
                <img src="{{ $news->image_url }}" alt="{{ $news->title }}" class="featured-image">
            @endif

            <h2 class="news-title">{{ $news->title }}</h2>

            <div class="news-excerpt">
                {!! $news->short_description !!}
            </div>

            <a href="{{ url('/news/' . $news->slug) }}" class="read-more">
                Read Full Article
            </a>
        </div>

        <div class="footer">
            <p>Hello,</p>
            <p>You're receiving this email because you subscribed to our newsletter.</p>

            <p>© {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
