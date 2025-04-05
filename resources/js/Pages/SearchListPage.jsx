import React from "react";
import { Head, usePage, router } from "@inertiajs/react";
import Layout from "../Layouts/MainLayout";
import moment from "moment";
import Sidebar from "@/Layouts/Sidebar";
import Search from "@/Components/Search";

export default function SearchNewsPage() {
    const { news, pagination, search } = usePage().props;

    // Handle page change
    const handlePageChange = (page) => {
        router.visit(`/search?page=${page}&search=${search}`);
    };

    return (
        <Layout>
            <Head title={search} />

            {/* Breadcrumb  */}
            <div className="container">
                <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                    <div className="f2-s-1 p-r-30 m-tb-6">
                        <a href="/" className="breadcrumb-item f1-s-3 cl9">
                            Home
                        </a>

                        <span className="breadcrumb-item f1-s-3 cl9">News</span>
                    </div>

                    <Search />
                </div>
            </div>

            {/* Page heading  */}
            <div className="container p-t-4 p-b-40">
                <h2 className="f1-l-1 cl2">
                    Search Results for Keyword: {search}
                </h2>
            </div>

            {/* News List */}
            <section className="bg0 p-b-55">
                <div className="container">
                    <div className="row justify-content-between">
                        {/* Main Content */}
                        <div className="col-md-8 col-lg-8 p-b-80">
                            <div className="p-r-10 p-r-0-sr991">
                                <div className="m-t--40 p-b-40">
                                    {news.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex-wr-sb-s p-t-40 p-b-15 how-bor2"
                                        >
                                            <a
                                                href={`/news/${item.slug}`}
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src={item.image_url}
                                                    alt={item.title}
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href={`/news/${item.slug}`}
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        {item.title}
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <span className="f1-s-3">
                                                        Score: {item.score ?? 0}
                                                    </span>
                                                </div>

                                                <div className="cl8 p-b-18">
                                                    <span className="f1-s-3">
                                                        {moment(
                                                            item.updated_at
                                                        ).fromNow()}
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    <div
                                                        className="text-gray-600"
                                                        dangerouslySetInnerHTML={{
                                                            __html: item.short_description,
                                                        }}
                                                    />{" "}
                                                </p>

                                                <a
                                                    href={`/news/${item.slug}`}
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More{" "}
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="flex justify-center mt-4">
                                    {/* Render Previous Button */}
                                    {pagination.current_page > 1 && (
                                        <button
                                            className="px-3 py-2 mx-1 border bg-white text-gray-800 rounded"
                                            onClick={() =>
                                                handlePageChange(
                                                    pagination.current_page - 1
                                                )
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
                                                    pagination.current_page ===
                                                    index + 1
                                                        ? "bg-gray-800 text-white"
                                                        : "bg-white text-gray-800"
                                                } rounded`}
                                                onClick={() =>
                                                    handlePageChange(index + 1)
                                                }
                                            >
                                                {index + 1}
                                            </button>
                                        )
                                    )}

                                    {/* Render Next Button */}
                                    {pagination.current_page <
                                        pagination.total_pages && (
                                        <button
                                            className="px-3 py-2 mx-1 border bg-white text-gray-800 rounded"
                                            onClick={() =>
                                                handlePageChange(
                                                    pagination.current_page + 1
                                                )
                                            }
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <Sidebar />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
