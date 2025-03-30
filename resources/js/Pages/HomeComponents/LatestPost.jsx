import { usePage } from "@inertiajs/react";
import moment from "moment";
import React from "react";

export default function LatestPost({ children }) {
    const { latestNews } = usePage().props; // Assuming "latestNews" is part of the page props

    return (
        <section className="bg0 p-t-50 p-b-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 p-b-50">
                        <div className="p-r-10 p-r-0-sr991">
                            <div className="how2 how2-cl4 flex-s-c">
                                <h3 className="f1-m-2 cl3 tab01-title">
                                    Latest News
                                </h3>
                            </div>

                            <div className="p-b-40">
                                {/* Loop through the latestNews */}
                                {latestNews && latestNews.length > 0 ? (
                                    latestNews.map((news, index) => (
                                        <div
                                            className="flex-wr-sb-s p-t-40 p-b-15 how-bor2"
                                            key={index} // Ensure a unique key for each item
                                        >
                                            <a
                                                href={`/news/${news.slug}`}
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src={news.image_url} // Fallback image
                                                    alt={news.title}
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href={`/news/${news.slug}`}
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        {news.title}
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <span className="f1-s-3">
                                                        {news.updated_at
                                                            ? moment(
                                                                  news.updated_at
                                                              ).fromNow()
                                                            : "Date not available"}
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    <div
                                                        className="text-gray-600"
                                                        dangerouslySetInnerHTML={{
                                                            __html: news.short_description,
                                                        }}
                                                    />{" "}
                                                </p>

                                                <a
                                                    href={`/news/${news.slug}`}
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No latest news available.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 col-lg-4 p-b-50"></div>
                </div>
            </div>
        </section>
    );
}
