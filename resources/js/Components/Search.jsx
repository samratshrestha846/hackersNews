import React, { useState } from "react";
import { router } from "@inertiajs/react";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState(""); // State for search input

    // Handle Search Submission
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!searchQuery.trim()) return; // Prevent empty searches

        router.get("/search", { search: searchQuery }, { preserveState: true });
    };

    return (
        <form
            onSubmit={handleSearch}
            className="pos-relative size-a-2 bo-1-rad-22 of-hidden bocl11 m-tb-6"
        >
            <input
                className="f1-s-1 cl6 plh9 s-full p-l-25 p-r-45"
                type="text"
                name="search"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                type="submit"
                className="flex-c-c size-a-1 ab-t-r fs-20 cl2 hov-cl10 trans-03"
            >
                <i className="zmdi zmdi-search"></i>
            </button>
        </form>
    );
}
