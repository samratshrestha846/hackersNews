import React from "react";

export default function HeadLine({ children }) {
    return (
        <div className="container">
            <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                {/* Trending Now Section */}
                <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
                    <span className="text-uppercase cl2 p-r-8">
                        Trending Now:
                    </span>

                    <span className="dis-inline-block cl6 slide100-txt pos-relative size-w-0">
                        <span className="dis-inline-block slide100-txt-item animated">
                            Microsoft quisque at ipsum vel orci eleifend
                            ultrices
                        </span>

                        <span className="dis-inline-block slide100-txt-item animated">
                            Apple unveils new iPhone with AI-powered features
                        </span>

                        <span className="dis-inline-block slide100-txt-item animated">
                            Tesla's new electric truck hits the market
                        </span>
                    </span>
                </div>

                {/* Search Box */}
                <div className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6">
                    <input
                        className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
                        type="text"
                        name="search"
                        placeholder="Search"
                    />
                    <button
                        type="button"
                        className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03"
                    >
                        <i className="zmdi zmdi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
