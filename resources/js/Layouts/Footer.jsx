import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
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
                                        src="images/logo.png"
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
                                {[1, 2, 3].map((post, index) => (
                                    <li
                                        key={index}
                                        className="flex-wr-sb-s p-b-20"
                                    >
                                        <a
                                            href="#"
                                            className="size-w-4 wrap-pic-w hov1 trans-03"
                                        >
                                            <img
                                                src={`images/popular-post-0${post}.jpg`}
                                                alt={`Popular post ${post}`}
                                            />
                                        </a>

                                        <div className="size-w-5">
                                            <h6 className="p-b-5">
                                                <a
                                                    href="#"
                                                    className="f1-s-5 cl11 hov-cl10 trans-03"
                                                >
                                                    {post === 1 &&
                                                        "Donec metus orci, malesuada et lectus vitae"}
                                                    {post === 2 &&
                                                        "Lorem ipsum dolor sit amet, consectetur"}
                                                    {post === 3 &&
                                                        "Suspendisse dictum enim quis imperdiet auctor"}
                                                </a>
                                            </h6>
                                            <span className="f1-s-3 cl6">{`Feb ${
                                                18 - post
                                            }`}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section - Categories */}
                        <div className="col-sm-6 col-lg-4 p-b-20">
                            <div className="size-h-3 flex-s-c">
                                <h5 className="f1-m-7 cl0">Categories</h5>
                            </div>

                            <ul className="m-t--12">
                                {[
                                    "Cyber Security (22)",
                                    "Webinars (29)",
                                    "Vulnerabilities (15)",
                                    "Expert Insights (28)",
                                ].map((category, index) => (
                                    <li
                                        key={index}
                                        className="how-bor1 p-rl-5 p-tb-10"
                                    >
                                        <a
                                            href="#"
                                            className="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8"
                                        >
                                            {category}
                                        </a>
                                    </li>
                                ))}
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
