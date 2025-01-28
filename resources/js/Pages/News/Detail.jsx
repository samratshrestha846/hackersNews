import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function HackerNewsShow({ story }) {
    return (
        <div className="container mx-auto px-4">
            <Head title={story.title || "Hacker News"} />

            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-3xl font-bold">{story.title}</h1>
                <div className="text-sm text-gray-600 mt-2">
                    <span>By {story.by}</span>
                    <span className="ml-4">Score: {story.score}</span>
                </div>
                {story.url && (
                    <a
                        href={story.url}
                        className="block mt-4 text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read Full Article
                    </a>
                )}
                {story.text && (
                    <div
                        className="mt-4 text-gray-800"
                        dangerouslySetInnerHTML={{ __html: story.text }}
                    ></div>
                )}
            </div>

            <Link
                href={route("hacker-news.index")}
                className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded"
            >
                Back to News
            </Link>
        </div>
    );
}
