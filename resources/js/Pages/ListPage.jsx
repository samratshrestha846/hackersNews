import React from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layouts/MainLayout";

export default function ListPage() {
    return (
        <Layout>
            <Head title="List Page" />
            <>
                {/* Breadcrumb  */}
                <div className="container">
                    <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                        <div className="f2-s-1 p-r-30 m-tb-6">
                            <a
                                href="index.html"
                                className="breadcrumb-item f1-s-3 cl9"
                            >
                                Home
                            </a>

                            <span className="breadcrumb-item f1-s-3 cl9">
                                Blog
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

                {/* Page heading  */}
                <div className="container p-t-4 p-b-40">
                    <h2 className="f1-l-1 cl2">Blog List</h2>
                </div>

                {/* Post  */}
                <section className="bg0 p-b-55">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 p-b-80">
                                <div className="p-r-10 p-r-0-sr991">
                                    <div className="m-t--40 p-b-40">
                                        {/* Item post  */}
                                        <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                            <a
                                                href="/detail"
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src="images/post-43.jpg"
                                                    alt="IMG"
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href="/detail"
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        Robot lorem ipsum dolor
                                                        sit amet consectetur
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <a
                                                        href="#"
                                                        className="f1-s-4 cl8 hov-cl10 trans-03"
                                                    >
                                                        by John Alvarado
                                                    </a>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    Duis eu felis id tortor
                                                    congue consequat. Sed vitae
                                                    vestibulum enim, et pharetra
                                                    magna
                                                </p>

                                                <a
                                                    href="/detail"
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Item post  */}
                                        <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                            <a
                                                href="/detail"
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src="images/post-44.jpg"
                                                    alt="IMG"
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href="/detail"
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        Health lorem ipsum dolor
                                                        sit amet consectetur
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <a
                                                        href="#"
                                                        className="f1-s-4 cl8 hov-cl10 trans-03"
                                                    >
                                                        by John Alvarado
                                                    </a>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    Duis eu felis id tortor
                                                    congue consequat. Sed vitae
                                                    vestibulum enim, et pharetra
                                                    magna
                                                </p>

                                                <a
                                                    href="/detail"
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Item post  */}
                                        <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                            <a
                                                href="/detail"
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src="images/post-45.jpg"
                                                    alt="IMG"
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href="/detail"
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        Success lorem ipsum
                                                        dolor sit amet
                                                        consectetur
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <a
                                                        href="#"
                                                        className="f1-s-4 cl8 hov-cl10 trans-03"
                                                    >
                                                        by John Alvarado
                                                    </a>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    Duis eu felis id tortor
                                                    congue consequat. Sed vitae
                                                    vestibulum enim, et pharetra
                                                    magna
                                                </p>

                                                <a
                                                    href="/detail"
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Item post  */}
                                        <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                            <a
                                                href="/detail"
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src="images/post-46.jpg"
                                                    alt="IMG"
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href="/detail"
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        Bitcon lorem ipsum dolor
                                                        sit amet consectetur
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <a
                                                        href="#"
                                                        className="f1-s-4 cl8 hov-cl10 trans-03"
                                                    >
                                                        by John Alvarado
                                                    </a>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    Duis eu felis id tortor
                                                    congue consequat. Sed vitae
                                                    vestibulum enim, et pharetra
                                                    magna
                                                </p>

                                                <a
                                                    href="/detail"
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Item post  */}
                                        <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                            <a
                                                href="/detail"
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src="images/post-47.jpg"
                                                    alt="IMG"
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href="/detail"
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        American Bank lorem
                                                        ipsum dolor sit amet
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <a
                                                        href="#"
                                                        className="f1-s-4 cl8 hov-cl10 trans-03"
                                                    >
                                                        by John Alvarado
                                                    </a>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    Duis eu felis id tortor
                                                    congue consequat. Sed vitae
                                                    vestibulum enim, et pharetra
                                                    magna
                                                </p>

                                                <a
                                                    href="/detail"
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Item post  */}
                                        <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                            <a
                                                href="/detail"
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src="images/post-48.jpg"
                                                    alt="IMG"
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href="/detail"
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        Macbook New 12 lorem
                                                        ipsum dolor sit amet
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <a
                                                        href="#"
                                                        className="f1-s-4 cl8 hov-cl10 trans-03"
                                                    >
                                                        by John Alvarado
                                                    </a>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    Duis eu felis id tortor
                                                    congue consequat. Sed vitae
                                                    vestibulum enim, et pharetra
                                                    magna
                                                </p>

                                                <a
                                                    href="/detail"
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        {/* Item post  */}
                                        <div className="flex-wr-sb-s p-t-40 p-b-15 how-bor2">
                                            <a
                                                href="/detail"
                                                className="size-w-8 wrap-pic-w hov1 trans-03 w-full-sr575 m-b-25"
                                            >
                                                <img
                                                    src="images/post-49.jpg"
                                                    alt="IMG"
                                                />
                                            </a>

                                            <div className="size-w-9 w-full-sr575 m-b-25">
                                                <h5 className="p-b-12">
                                                    <a
                                                        href="/detail"
                                                        className="f1-l-1 cl2 hov-cl10 trans-03 respon2"
                                                    >
                                                        You wish lorem ipsum
                                                        dolor sit amet
                                                        consectetur
                                                    </a>
                                                </h5>

                                                <div className="cl8 p-b-18">
                                                    <a
                                                        href="#"
                                                        className="f1-s-4 cl8 hov-cl10 trans-03"
                                                    >
                                                        by John Alvarado
                                                    </a>

                                                    <span className="f1-s-3 m-rl-3">
                                                        -
                                                    </span>

                                                    <span className="f1-s-3">
                                                        Feb 18
                                                    </span>
                                                </div>

                                                <p className="f1-s-1 cl6 p-b-24">
                                                    Duis eu felis id tortor
                                                    congue consequat. Sed vitae
                                                    vestibulum enim, et pharetra
                                                    magna
                                                </p>

                                                <a
                                                    href="/detail"
                                                    className="f1-s-1 cl9 hov-cl10 trans-03"
                                                >
                                                    Read More
                                                    <i className="m-l-2 fa fa-long-arrow-alt-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="#"
                                        className="flex-c-c size-a-13 bo-all-1 bocl11 f1-m-6 cl6 hov-btn1 trans-03"
                                    >
                                        Load More
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-10 col-lg-4 p-b-80">
                                <div className="p-l-10 p-rl-0-sr991">
                                    {/* Subscribe  */}
                                    <div className="bg10 p-rl-35 p-t-28 p-b-35 m-b-50">
                                        <h5 className="f1-m-5 cl0 p-b-10">
                                            Subscribe
                                        </h5>

                                        <p className="f1-s-1 cl0 p-b-25">
                                            Get all latest content delivered to
                                            your email a few times a month.
                                        </p>

                                        <form className="size-a-9 pos-relative">
                                            <input
                                                className="s-full f1-m-6 cl6 plh9 p-l-20 p-r-55"
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                            />

                                            <button className="size-a-10 flex-c-c ab-t-r fs-16 cl9 hov-cl10 trans-03">
                                                <i className="fa fa-arrow-right"></i>
                                            </button>
                                        </form>
                                    </div>

                                    {/* Most Popular  */}
                                    <div className="p-b-23">
                                        <div className="how2 how2-cl4 flex-s-c">
                                            <h3 className="f1-m-2 cl3 tab01-title">
                                                Most Popular
                                            </h3>
                                        </div>

                                        <ul className="p-t-35">
                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    1
                                                </div>

                                                <a
                                                    href="#"
                                                    className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                                                >
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit
                                                </a>
                                            </li>

                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    2
                                                </div>

                                                <a
                                                    href="#"
                                                    className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                                                >
                                                    Proin velit consectetur non
                                                    neque
                                                </a>
                                            </li>

                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    3
                                                </div>

                                                <a
                                                    href="#"
                                                    className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                                                >
                                                    Nunc vestibulum, enim vitae
                                                    condimentum volutpat
                                                    lobortis ante
                                                </a>
                                            </li>

                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
                                                    4
                                                </div>

                                                <a
                                                    href="#"
                                                    className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                                                >
                                                    Proin velit justo
                                                    consectetur non neque
                                                    elementum
                                                </a>
                                            </li>

                                            <li className="flex-wr-sb-s p-b-22">
                                                <div className="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0">
                                                    5
                                                </div>

                                                <a
                                                    href="#"
                                                    className="size-w-3 f1-s-7 cl3 hov-cl10 trans-03"
                                                >
                                                    Proin velit consectetur non
                                                    neque
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Tag  */}
                                    <div>
                                        <div className="how2 how2-cl4 flex-s-c m-b-30">
                                            <h3 className="f1-m-2 cl3 tab01-title">
                                                Tags
                                            </h3>
                                        </div>

                                        <div className="flex-wr-s-s m-rl--5">
                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Vulnerabilities
                                            </a>

                                            <a
                                                href="#"
                                                className="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5"
                                            >
                                                Webinars
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
