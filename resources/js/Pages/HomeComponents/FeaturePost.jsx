import { usePage } from "@inertiajs/react";
import React from "react";

export default function FeaturePost({ children }) {
    const { topFeaturedNews } = usePage().props;
    return (
        <section className="bg0">
            <div className="container">
                <div className="row m-rl--1">
                    {topFeaturedNews.map((news) => (
                        <div className="col-sm-6 col-lg-4 p-rl-1 p-b-2">
                            <div
                                className="bg-img1 size-a-12 how1 pos-relative"
                                style={{
                                    backgroundImage: `url(${news.image_url})`,
                                }}
                            >
                                <a
                                    href={`/news/${news.slug}`}
                                    className="dis-block how1-child1 trans-03"
                                ></a>

                                <div className="flex-col-e-s s-full p-rl-25 p-tb-11">
                                    <a
                                        href={`/category/${news.categories[0].slug}`}
                                        className="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
                                    >
                                        {news.categories[0].title}
                                    </a>

                                    <h3 className="how1-child2 m-t-10">
                                        <a
                                            href={`/news/${news.slug}`}
                                            className="f1-m-1 cl0 hov-cl10 trans-03"
                                        >
                                            {news.title}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
