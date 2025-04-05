import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";

export default function HackerNewsShow({ story }) {
    const [searchQuery, setSearchQuery] = useState(""); // State for search input

    // Handle Search Submission
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!searchQuery.trim()) return; // Prevent empty searches

        // Trigger search with query
        router.get(
            "/hackers-news",
            { search: searchQuery },
            { preserveState: true }
        );
    };

    return (
        <>
            <Head title={story.title || "Singh IT"} />
            <Header />
            <div className="container mx-auto p-5">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Hacker News API</h1>

                    {/* Search Form placed on the right */}
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center border rounded-lg p-2"
                    >
                        <input
                            className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
                            type="text"
                            name="search"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03"
                        >
                            <i className="zmdi zmdi-search"></i>
                        </button>
                    </form>
                </div>

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
            <Footer />
        </>
    );
}
