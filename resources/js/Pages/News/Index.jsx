import React, { useState, useEffect } from "react";
import { Head, Link, router } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";

export default function HackerNewsIndex({ stories = [], pagination, search }) {
    const [searchQuery, setSearchQuery] = useState(search || ""); // State for search input

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

    // Handle page change
    const handlePageChange = (page) => {
        // Include the current search query in the URL when changing pages
        router.get(
            "/hackers-news",
            { search: searchQuery, page }, // Pass search query and page
            { preserveState: true }
        );
    };

    return (
        <>
            <Head title="Hacker News API" />

            <Header />
            <div className="container mx-auto p-5">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">
                        Hacker News API{" "}
                        {searchQuery && (
                            <span> - Search results for "{searchQuery}"</span>
                        )}
                    </h1>

                    <form
                        onSubmit={handleSearch}
                        className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6"
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
                                <span className="ml-4">
                                    Score: {story.score}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No stories available.</div>
                )}

                {/* Pagination */}
                <div className="flex justify-center mt-4">
                    {/* Render Previous Button */}
                    {pagination.current_page > 1 && (
                        <button
                            className="px-3 py-2 mx-1 border bg-white text-gray-800 rounded"
                            onClick={() =>
                                handlePageChange(pagination.current_page - 1)
                            }
                        >
                            Previous
                        </button>
                    )}

                    {/* Render Page Numbers */}
                    {Array.from(
                        { length: pagination.total_pages },
                        (_, index) => (
                            <button
                                key={index}
                                className={`px-3 py-2 mx-1 border ${
                                    pagination.current_page === index + 1
                                        ? "bg-gray-800 text-white"
                                        : "bg-white text-gray-800"
                                } rounded`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        )
                    )}

                    {/* Render Next Button */}
                    {pagination.current_page < pagination.total_pages && (
                        <button
                            className="px-3 py-2 mx-1 border bg-white text-gray-800 rounded"
                            onClick={() =>
                                handlePageChange(pagination.current_page + 1)
                            }
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
