import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

export default function Sidebar() {
    const { featuredNews, tags, flash } = usePage().props;

    const { data, setData, post, processing, reset, errors } = useForm({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/subscribe", {
            preserveScroll: true,
            onSuccess: () => {
                {
                    errors.email && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.email}
                        </div>
                    );
                }
                reset();
                alert("Subscribed successfully! 🎉");
            },
        });
    };
    return (
        <div className="col-md-4 col-lg-4 p-b-80">
            <div className="p-l-10 p-rl-0-sr991">
                {/* Subscribe  */}
                <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
                    <h5 className="f1-m-5 cl0 p-b-10">Subscribe</h5>

                    <p className="f1-s-1 cl0 p-b-25">
                        Get all latest content delivered to your email a few
                        times a month.
                    </p>

                    <form
                        className="size-a-9 pos-relative"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55"
                            type="text"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="Email"
                        />

                        <button
                            className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03"
                            type="submit"
                            disabled={processing}
                        >
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </form>
                    {errors.email && (
                        <div className="text-red-500 text-sm mt-2">
                            {errors.email}
                        </div>
                    )}
                </div>

                {/* Most Featured Post  */}
                <div className="p-b-23">
                    <div className="how2 how2-cl4 flex-s-c">
                        <h3 className="f1-m-2 cl3 tab01-title">
                            Featured Post
                        </h3>
                    </div>

                    <ul className="p-t-35">
                        {featuredNews.map((news) => (
                            <li className="flex-wr-sb-s p-b-22">
                                <a
                                    href={`/news/${news.slug}`}
                                    className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                                >
                                    {news.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags */}
                <div>
                    <div className="how2 how2-cl4 flex-s-c m-b-30">
                        <h3 className="f1-m-2 cl3 tab01-title">Tags</h3>
                    </div>

                    <div className="flex-wr-s-s m-rl--5">
                        {tags.map((tag) => (
                            <a
                                href={`/tag/${tag.slug}`}
                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                            >
                                {tag.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
