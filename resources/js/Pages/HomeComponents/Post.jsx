import Sidebar from "@/Layouts/Sidebar";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import React from "react";

export default function Post({ children }) {
    const { categories } = usePage().props;
    return (
        <section className="bg0 p-t-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <div className="p-b-20">
                            {categories.map((category) => (
                                <div className="p-b-20">
                                    <div className="how2 how2-cl1 flex-sb-c m-r-10 m-r-0-sr991">
                                        <h3 className="f1-m-2 cl12 tab01-title">
                                            {category.title}
                                        </h3>

                                        <a
                                            href={`/category/${category.slug}`}
                                            className="tab01-link f1-s-1 cl9 hov-cl10 trans-03"
                                        >
                                            View all
                                            <i className="fs-12 m-l-5 fa fa-caret-right"></i>
                                        </a>
                                    </div>

                                    {category.news && (
                                        <div className="row p-t-35">
                                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                {/* Item post  */}
                                                <div className="m-b-30">
                                                    <a
                                                        href={`/news/${category.news[0].slug}`}
                                                        className="wrap-pic-w hov1 trans-03"
                                                    >
                                                        <img
                                                            src={
                                                                category.news[0]
                                                                    .image_url
                                                            }
                                                            alt={
                                                                category.news[0]
                                                                    .title
                                                            }
                                                        />
                                                    </a>

                                                    <div className="p-t-20">
                                                        <h5 className="p-b-5">
                                                            <a
                                                                href={`/news/${category.news[0].slug}`}
                                                                className="f1-m-3 cl2 hov-cl10 trans-03"
                                                            >
                                                                {
                                                                    category
                                                                        .news[0]
                                                                        .title
                                                                }
                                                            </a>
                                                        </h5>

                                                        <span className="cl8">
                                                            <span className="f1-s-3">
                                                                {
                                                                    moment(
                                                                        category
                                                                            .news[0]
                                                                            .updated_at
                                                                    ).fromNow
                                                                }
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-6 p-r-25 p-r-15-sr991">
                                                {/* Loop Through Remaining News Items */}
                                                {category.news
                                                    .slice(1)
                                                    .map((newsItem) => (
                                                        <div
                                                            className="col-sm-12 p-r-25 p-r-15-sr991"
                                                            key={newsItem.id}
                                                        >
                                                            <div className="flex-wr-sb-s m-b-30">
                                                                <a
                                                                    href={`/news/${newsItem.slug}`}
                                                                    className="size-w-1 wrap-pic-w hov1 trans-03"
                                                                >
                                                                    <img
                                                                        src={
                                                                            newsItem.image_url
                                                                        }
                                                                        alt={
                                                                            newsItem.title
                                                                        }
                                                                    />
                                                                </a>
                                                                <div className="size-w-2">
                                                                    <h5 className="p-b-5">
                                                                        <a
                                                                            href={`/news/${newsItem.slug}`}
                                                                            className="f1-s-5 cl3 hov-cl10 trans-03"
                                                                        >
                                                                            {
                                                                                newsItem.title
                                                                            }
                                                                        </a>
                                                                    </h5>

                                                                    <span className="cl8">
                                                                        <span className="f1-s-3">
                                                                            {moment(
                                                                                newsItem.updated_at
                                                                            ).fromNow()}
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Sidebar />
                </div>
            </div>
        </section>
    );
}
