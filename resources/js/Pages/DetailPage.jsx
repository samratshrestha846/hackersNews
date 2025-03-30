import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Layout from "../Layouts/MainLayout";
import moment from "moment";
import Sidebar from "@/Layouts/Sidebar";
import Search from "@/Components/Search";

export default function DetailPage() {
    const { news } = usePage().props;
    return (
        <Layout>
            <Head title={`${news.title}-Singh IT`} />
            <>
                {/* Breadcrumb */}
                <div className="container">
                    <div className="headline bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                        <div className="f2-s-1 p-r-30 m-tb-6">
                            <a href="/" className="breadcrumb-item f1-s-3 cl9">
                                Home
                            </a>
                            <a
                                href={`/category/${news.categories[0].slug}`}
                                className="breadcrumb-item f1-s-3 cl9"
                            >
                                {news.categories[0].title}
                            </a>
                            <span className="breadcrumb-item f1-s-3 cl9"></span>
                        </div>
                        <Search />
                    </div>
                </div>

                {/* Content */}
                <section className="bg0 p-b-140 p-t-10">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 p-b-30">
                                <div className="p-r-10 p-r-0-sr991">
                                    {/* News Detail */}
                                    <div className="p-b-70">
                                        <a
                                            href={`/category/${news.categories[0].slug}`}
                                            className="f1-s-10 cl2 hov-cl10 trans-03 text-uppercase"
                                        >
                                            {news.categories[0].slug}
                                        </a>
                                        <h3 className="f1-l-3 cl2 p-b-16 p-t-33 respon2">
                                            {news.title}
                                        </h3>
                                        <div className="flex-wr-s-s p-b-40">
                                            <span className="f1-s-3 cl8 m-r-15">
                                                {/* <a
                                                    href="#"
                                                    className="f1-s-4 cl8 hov-cl10 trans-03"
                                                >
                                                    by John Alvarado
                                                </a>
                                                <span className="m-rl-3">
                                                    -
                                                </span> */}
                                                <span>
                                                    {moment(
                                                        news.updated_at
                                                    ).fromNow()}
                                                </span>
                                            </span>
                                            {/* <span className="f1-s-3 cl8 m-r-15">
                                                5239 Views
                                            </span> */}
                                            {/* <a
                                                href="#"
                                                className="f1-s-3 cl8 hov-cl10 trans-03 m-r-15"
                                            >
                                                0 Comment
                                            </a> */}
                                        </div>

                                        <div className="wrap-pic-max-w p-b-30">
                                            <img
                                                src={news.image_url}
                                                alt={news.title}
                                            />
                                        </div>

                                        <div
                                            className="text-gray-600"
                                            dangerouslySetInnerHTML={{
                                                __html: news.description,
                                            }}
                                        />
                                        {/* Tag */}
                                        <div className="flex-s-s p-t-12 p-b-15">
                                            <span className="f1-s-12 cl5 m-r-8">
                                                Tags:
                                            </span>
                                            <div className="flex-wr-s-s size-w-0">
                                                {news.tags.map((tag) => (
                                                    <a
                                                        href={`/tag/${tag.slug}`}
                                                        className="f1-s-12 cl8 hov-link1 m-r-15"
                                                    >
                                                        {tag.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Share */}
                                        {/* <div className="flex-s-s">
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
                                        </div> */}
                                    </div>

                                    {/* Leave a comment */}
                                    {/* <div>
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
                                    </div> */}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <Sidebar />
                        </div>
                    </div>
                </section>
            </>
        </Layout>
    );
}
