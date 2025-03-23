import { Link, usePage } from "@inertiajs/react";
import moment from "moment";
import React from "react";

export default function Footer() {
    const { featuredNews, footerCategories } = usePage().props;

    return (
        <footer>
            <div className="bg2 p-t-40 p-b-25">
                <div className="container">
                    <div className="row">
                        {/* Left Section */}
                        <div className="col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <Link to="/">
                                    <img
                                        className="max-s-full"
                                        src="/images/logo.png"
                                        alt="Company Logo"
                                    />
                                </Link>
                            </div>

                            <div>
                                <p className="f1-s-1 cl11 p-b-16">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur tempor magna eget
                                    elit efficitur, at accumsan sem placerat.
                                    Nulla tellus libero, mattis nec molestie at,
                                    facilisis ut turpis.
                                </p>

                                <p className="f1-s-1 cl11 p-b-16">
                                    Any questions? Call us on (+1) 98 511 515 12
                                </p>

                                <div className="p-t-15">
                                    <a
                                        href="#"
                                        className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                                    >
                                        <i className="fab fa-pinterest-p"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                                    >
                                        <i className="fab fa-vimeo-v"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="fs-18 cl11 hov-cl10 trans-03 m-r-8"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Middle Section - Popular Posts */}
                        <div className="col-sm-6 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0">Popular Posts</h5>
                            </div>

                            <ul>
                                {featuredNews && featuredNews.length > 0 ? (
                                    featuredNews.map((news, index) => (
                                        <li
                                            key={news.id}
                                            className="flex-wr-sb-s p-b-20"
                                        >
                                            <a
                                                href={`/news/${news.slug}`}
                                                className="size-w-4 wrap-pic-w hov1 trans-03"
                                            >
                                                <img
                                                    src={news.image_url}
                                                    alt={news.title}
                                                />
                                            </a>

                                            <div className="size-w-5">
                                                <h6 className="p-b-5">
                                                    <a
                                                        href={`/news/${news.slug}`}
                                                        className="f1-s-5 cl11 hov-cl10 trans-03"
                                                    >
                                                        {news.title}
                                                    </a>
                                                </h6>
                                                <span className="f1-s-3 cl6">
                                                    {moment(
                                                        news.updated_at
                                                    ).fromNow()}
                                                </span>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <p>No popular news available.</p>
                                )}
                            </ul>
                        </div>

                        {/* Right Section - Categories */}
                        <div className="col-sm-6 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0">Categories</h5>
                            </div>

                            <ul className="m-t--12">
                                {footerCategories &&
                                footerCategories.length > 0 ? (
                                    footerCategories.map((category, index) => (
                                        <li
                                            key={category.id}
                                            className="how-bor1 p-rl-5 p-tb-10"
                                        >
                                            <Link
                                                to={`/category/${category.slug}`}
                                                className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                                            >
                                                {category.title}
                                            </Link>
                                        </li>
                                    ))
                                ) : (
                                    <p>No categories available.</p>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg11">
                <div className="container size-h-4 flex-c-c p-tb-15">
                    <span className="f1-s-1 cl0 txt-center">
                        Copyright &copy; {new Date().getFullYear()} All rights
                        reserved | This template is made with{" "}
                        <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                        <a
                            href="#"
                            target="_blank"
                            className="f1-s-1 cl10 hov-link1"
                        >
                            Singh IT
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
