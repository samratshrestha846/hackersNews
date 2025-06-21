import React from "react";
import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Pages/Dashboard/DashboardLayout";

const Show = () => {
    const { news } = usePage().props; // Assume the 'news' prop contains the news data from the backend
    return (
        <DashboardLayout>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="bg-gray-100 px-4 py-3 rounded-t-lg border border-gray-100">
                    <h2 className="text-lg font-semibold text-gray-700">
                        {news.title}
                    </h2>
                </div>
                <div className="p-4">
                    <div className="mb-4">
                        <h3 className="font-medium text-gray-700">Score</h3>
                        <p>{news.score}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-medium text-gray-700">Score</h3>
                        <p>{news.views_count}</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-medium text-gray-700">Score</h3>
                        <p>{news.unique_views_count}</p>
                    </div>
                    {/* Image */}
                    {news.image && (
                        <div className="mb-4">
                            <img
                                src={news.image_url}
                                alt={news.title}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    )}

                    {/* Categories */}
                    {news.categories && news.categories.length > 0 && (
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-700">
                                Categories
                            </h3>
                            <ul>
                                {news.categories.map((category, index) => (
                                    <li key={index} className="text-gray-600">
                                        {category.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tags */}
                    {news.tags && news.tags.length > 0 && (
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-700">Tags</h3>
                            <ul>
                                {news.tags.map((tag, index) => (
                                    <li key={index} className="text-gray-600">
                                        {tag.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Status */}
                    <div className="mb-4">
                        <h3 className="font-medium text-gray-700">Status</h3>
                        <p>
                            {news.is_active ? (
                                <span className="text-green-600">Active</span>
                            ) : (
                                <span className="text-red-600">Inactive</span>
                            )}
                        </p>
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <h3 className="font-medium text-gray-700">
                            Is Featured
                        </h3>
                        <p>
                            {news.is_featured ? (
                                <span className="text-green-600">Yes</span>
                            ) : (
                                <span className="text-red-600">No</span>
                            )}
                        </p>
                    </div>

                    {/* Short Description */}
                    {news.short_description && (
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-700">
                                Short Description
                            </h3>
                            <div
                                className="text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: news.short_description,
                                }}
                            />
                        </div>
                    )}

                    {/* Description */}
                    {news.description && (
                        <div className="mb-4">
                            <h3 className="font-medium text-gray-700">
                                Description
                            </h3>
                            <div
                                className="text-gray-600"
                                dangerouslySetInnerHTML={{
                                    __html: news.description,
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Show;
