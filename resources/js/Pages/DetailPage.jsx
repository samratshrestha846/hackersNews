import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layouts/MainLayout";

export default function DetailPage() {
    return (
        <Layout>
            <Head title="Detail Page" />
            <>
                {/* Breadcrumb */}
                <div className="container">
                    <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                        <div className="f2-s-1 p-r-30 m-tb-6">
                            <a
                                href="index.html"
                                className="breadcrumb-item f1-s-3 cl9"
                            >
                                Home
                            </a>
                            <a
                                href="blog-list.html"
                                className="breadcrumb-item f1-s-3 cl9"
                            >
                                Blog
                            </a>
                            <span className="breadcrumb-item f1-s-3 cl9">
                                Nulla non interdum metus non laoreet nisi tellus
                                eget aliquam lorem pellentesque
                            </span>
                        </div>
                        <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                            <input
                                className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
                                type="text"
                                name="search"
                                placeholder="Search"
                            />
                            <button className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03">
                                <i className="zmdi zmdi-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <section className="bg0 p-b-140 p-t-10">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 p-b-30">
                                <div className="p-r-10 p-r-0-sr991">
                                    {/* Blog Detail */}
                                    <div className="p-b-70">
                                        <a
                                            href="#"
                                            className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase"
                                        >
                                            Technology
                                        </a>
                                        <h3 className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                                            Nulla non interdum metus non laoreet
                                            nisi tellus eget aliquam lorem
                                            pellentesque
                                        </h3>
                                        <div className="flex-wr-s-s p-b-40">
                                            <span className="f1-s-3 cl8 m-r-15">
                                                <a
                                                    href="#"
                                                    className="f1-s-4 cl8 hov-cl10 trans-03"
                                                >
                                                    by John Alvarado
                                                </a>
                                                <span className="m-rl-3">
                                                    -
                                                </span>
                                                <span>Feb 18</span>
                                            </span>
                                            <span className="f1-s-3 cl8 m-r-15">
                                                5239 Views
                                            </span>
                                            <a
                                                href="#"
                                                className="f1-s-3 cl8 hov-cl10 trans-03 m-r-15"
                                            >
                                                0 Comment
                                            </a>
                                        </div>

                                        <div className="wrap-pic-max-w p-b-30">
                                            <img
                                                src="images/blog-list-01.jpg"
                                                alt="IMG"
                                            />
                                        </div>

                                        <p className="f1-s-11 cl6 p-b-25">
                                            Curabitur volutpat bibendum
                                            molestie. Vestibulum ornare gravida
                                            semper. Aliquam a dui suscipit,
                                            fringilla metus id, maximus leo.
                                            Vivamus sapien arcu, mollis eu
                                            pharetra vitae, condimentum in orci.
                                            Integer eu sodales dolor. Maecenas
                                            elementum arcu eu convallis rhoncus.
                                            Donec tortor sapien, euismod a
                                            faucibus eget, porttitor quis
                                            libero.
                                        </p>

                                        <p className="f1-s-11 cl6 p-b-25">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nunc
                                            sit amet est vel orci luctus
                                            sollicitudin. Duis eleifend
                                            vestibulum justo, varius semper
                                            lacus condimentum dictum. Donec
                                            pulvinar a magna ut malesuada. In
                                            posuere felis diam, vel sodales
                                            metus accumsan in. Duis viverra dui
                                            eu pharetra pellentesque. Donec a
                                            eros leo. Quisque sed ligula vitae
                                            lorem efficitur faucibus. Praesent
                                            sit amet imperdiet ante. Nulla id
                                            tellus auctor, dictum libero a,
                                            malesuada nisi. Nulla in porta nibh,
                                            id vestibulum ipsum. Praesent
                                            dapibus tempus erat quis aliquet.
                                            Donec ac purus id sapien condimentum
                                            feugiat.
                                        </p>

                                        <p className="f1-s-11 cl6 p-b-25">
                                            Praesent vel mi bibendum, finibus
                                            leo ac, condimentum arcu.
                                            Pellentesque sem ex, tristique sit
                                            amet suscipit in, mattis imperdiet
                                            enim. Integer tempus justo nec velit
                                            fringilla, eget eleifend neque
                                            blandit. Sed tempor magna sed congue
                                            auctor. Mauris eu turpis eget tortor
                                            ultricies elementum. Phasellus vel
                                            placerat orci, a venenatis justo.
                                            Phasellus faucibus venenatis nisl
                                            vitae vestibulum. Praesent id nibh
                                            arcu. Vivamus sagittis accumsan
                                            felis, quis vulputate
                                        </p>

                                        {/* Tag */}
                                        <div className="flex-s-s p-t-12 p-b-15">
                                            <span className="f1-s-12 cl5 m-r-8">
                                                Tags:
                                            </span>
                                            <div className="flex-wr-s-s size-w-0">
                                                <a
                                                    href="#"
                                                    className="f1-s-12 cl8 hov-link1 m-r-15"
                                                >
                                                    Vulnerabilities
                                                </a>
                                                <a
                                                    href="#"
                                                    className="f1-s-12 cl8 hov-link1 m-r-15"
                                                >
                                                    Technology
                                                </a>
                                            </div>
                                        </div>

                                        {/* Share */}
                                        <div className="flex-s-s">
                                            <span className="f1-s-12 cl5 p-t-1 m-r-15">
                                                Share:
                                            </span>
                                            <div className="flex-wr-s-s size-w-0">
                                                <a
                                                    href="#"
                                                    className="dis-block f1-s-13 cl0 bg-facebook borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                                                >
                                                    <i className="fab fa-facebook-f m-r-7"></i>
                                                    Facebook
                                                </a>
                                                <a
                                                    href="#"
                                                    className="dis-block f1-s-13 cl0 bg-twitter borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                                                >
                                                    <i className="fab fa-twitter m-r-7"></i>
                                                    Twitter
                                                </a>
                                                <a
                                                    href="#"
                                                    className="dis-block f1-s-13 cl0 bg-google borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                                                >
                                                    <i className="fab fa-google-plus-g m-r-7"></i>
                                                    Google+
                                                </a>
                                                <a
                                                    href="#"
                                                    className="dis-block f1-s-13 cl0 bg-pinterest borad-3 p-tb-4 p-rl-18 hov-btn1 m-r-3 m-b-3 trans-03"
                                                >
                                                    <i className="fab fa-pinterest-p m-r-7"></i>
                                                    Pinterest
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Leave a comment */}
                                    <div>
                                        <h4 className="f1-l-4 cl3 p-b-12">
                                            Leave a Comment
                                        </h4>
                                        <p className="f1-s-13 cl8 p-b-40">
                                            Your email address will not be
                                            published. Required fields are
                                            marked *
                                        </p>

                                        <form>
                                            <textarea
                                                className="bo-1-rad-3 bocl13 size-a-15 f1-s-13 cl5 plh6 p-rl-18 p-tb-14 m-b-20"
                                                name="msg"
                                                placeholder="Comment..."
                                            ></textarea>
                                            <input
                                                className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20"
                                                type="text"
                                                name="name"
                                                placeholder="Name*"
                                            />
                                            <input
                                                className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20"
                                                type="text"
                                                name="email"
                                                placeholder="Email*"
                                            />
                                            <input
                                                className="bo-1-rad-3 bocl13 size-a-16 f1-s-13 cl5 plh6 p-rl-18 m-b-20"
                                                type="text"
                                                name="website"
                                                placeholder="Website"
                                            />
                                            <button className="size-a-17 bg2 borad-3 f1-s-12 cl0 hov-btn1 trans-03 p-rl-15 m-t-10">
                                                Post Comment
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-md-10 col-lg-4 p-b-30">
                                <div className="p-l-10 p-rl-0-sr991 p-t-70">
                                    {/* Category */}
                                    <div className="p-b-60">
                                        <div className="how2 how2-cl4 flex-s-c">
                                            <h3 className="f1-m-2 cl3">
                                                Categories
                                            </h3>
                                        </div>
                                        <ul className="p-t-35">
                                            <li className="p-b-10">
                                                <a
                                                    href="#"
                                                    className="f1-s-13 cl8 hov-cl10 trans-03"
                                                >
                                                    Technology
                                                </a>
                                            </li>
                                            <li className="p-b-10">
                                                <a
                                                    href="#"
                                                    className="f1-s-13 cl8 hov-cl10 trans-03"
                                                >
                                                    Lifestyle
                                                </a>
                                            </li>
                                            <li className="p-b-10">
                                                <a
                                                    href="#"
                                                    className="f1-s-13 cl8 hov-cl10 trans-03"
                                                >
                                                    Health
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Popular Post */}
                                    <div className="p-b-60">
                                        <div className="how2 how2-cl4 flex-s-c">
                                            <h3 className="f1-m-2 cl3">
                                                Popular Post
                                            </h3>
                                        </div>
                                        <ul className="p-t-35">
                                            <li className="flex-wr-sb-s p-b-30">
                                                <a
                                                    href="#"
                                                    className="size-w-2 how-pos5-parent"
                                                >
                                                    <img
                                                        src="images/popular-post-01.jpg"
                                                        alt="IMG"
                                                    />
                                                </a>
                                                <div className="size-w-3">
                                                    <h6 className="p-b-5">
                                                        <a
                                                            href="#"
                                                            className="f1-s-5 cl3 hov-cl10 trans-03"
                                                        >
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit
                                                        </a>
                                                    </h6>
                                                    <span className="f1-s-3 cl8">
                                                        <a
                                                            href="#"
                                                            className="f1-s-3 cl8 hov-cl10 trans-03"
                                                        >
                                                            by John Alvarado
                                                        </a>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Tag */}
                                    <div className="p-b-60">
                                        <div className="how2 how2-cl4 flex-s-c">
                                            <h3 className="f1-m-2 cl3">Tags</h3>
                                        </div>
                                        <div className="flex-wr-s-s size-w-0 p-t-35">
                                            <a
                                                href="#"
                                                className="f1-s-12 cl8 hov-link1 m-r-15"
                                            >
                                                Technology
                                            </a>
                                            <a
                                                href="#"
                                                className="f1-s-12 cl8 hov-link1 m-r-15"
                                            >
                                                Design
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
}
