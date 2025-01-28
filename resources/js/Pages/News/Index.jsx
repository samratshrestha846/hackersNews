import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function HackerNewsIndex({
    stories = [], // Default to an empty array
    totalPages,
    currentPage,
    currentCategory,
}) {
    return (
        <div className="container mx-auto px-4">
            <Head title="Hacker News" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Hacker News</h1>
                <div>
                    {["top", "best", "new"].map((category) => (
                        <Link
                            key={category}
                            href={route("hacker-news.index", {
                                category,
                                page: currentPage, // Keep the current page when switching categories
                            })}
                            className={`mr-2 px-4 py-2 rounded ${
                                currentCategory === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                        >
                            {category.charAt(0).toUpperCase() +
                                category.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>

            {stories.length > 0 ? (
                stories.map((story) => (
                    <div
                        key={story.id}
                        className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-shadow mb-4"
                    >
                        <h2 className="text-xl font-semibold text-blue-600">
                            <Link
                                href={route("hacker-news.show", {
                                    id: story.id,
                                })}
                            >
                                {story.title}
                            </Link>
                        </h2>
                        <div className="text-sm text-gray-600 mt-2">
                            <span>By {story.by}</span>
                            <span className="ml-4">Score: {story.score}</span>
                        </div>
                    </div>
                ))
            ) : (
                <div>No stories available.</div>
            )}

            <div className="flex justify-center mt-6">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                        <Link
                            key={pageNum}
                            href={route("hacker-news.index", {
                                page: pageNum,
                                category: currentCategory, // Pass the current category to preserve it
                            })}
                            className={`mx-1 px-3 py-1 rounded ${
                                currentPage === pageNum
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                        >
                            {pageNum}
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}
