import { usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Search from "@/Components/Search";

export default function HeadLine({ children }) {
    const { trendingNews = [] } = usePage().props; // Ensure trendingNews is an array

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (trendingNews.length === 0) return; // Prevent errors when trendingNews is empty

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % trendingNews.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [trendingNews]); // Depend on trendingNews array

    return (
        <div className="container">
            <div className="bg0 flex-wr-sb-c p-rl-20 p-tb-8">
                {/* Trending Now Section */}
                <div className="f2-s-1 p-r-30 size-w-0 m-tb-6 flex-wr-s-c">
                    <span className="text-uppercase cl2 p-r-8">
                        Trending Now:
                    </span>

                    <span className="dis-inline-block cl6 slide100-txt pos-relative size-w-0">
                        <AnimatePresence mode="wait">
                            {trendingNews.length > 0 && (
                                <motion.span
                                    key={trendingNews[index]?.id || index} // Use unique key
                                    className="dis-inline-block"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {trendingNews[index]?.title ||
                                        "No trending news available"}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </span>
                </div>

                {/* Search Box */}
                <Search />
            </div>
        </div>
    );
}
