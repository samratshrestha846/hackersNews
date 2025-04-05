import React, { useState } from "react";
import { usePage } from "@inertiajs/react";

export default function Header({ children }) {
    const { categories = [] } = usePage().props; // Ensure categories is always an array
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            {/* Header desktop */}
            <div className="container-menu-desktop">
                {/* Header Mobile */}
                <div className="wrap-header-mobile">
                    {/* Logo mobile */}
                    <div className="logo-mobile">
                        <a href="/">
                            <img src="/images/logo.png" alt="Company Logo" />
                        </a>
                    </div>

                    {/* Button show menu */}
                    <button
                        className={`btn-show-menu-mobile hamburger ${
                            isMenuOpen ? "is-active" : ""
                        }`}
                        onClick={toggleMenu}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                            <span className="hamburger-inner"></span>
                            <span className="hamburger-inner"></span>
                        </span>
                        {/* "X" icon when menu is open */}
                        {isMenuOpen && (
                            <span className="hamburger-close">X</span>
                        )}
                    </button>
                </div>

                {/* Menu Mobile */}
                <div className={`menu-mobile ${isMenuOpen ? "show-menu" : ""}`}>
                    <ul className="main-menu-m">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <a href={`/category/${category.slug}`}>
                                    {category.title}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="/hackers-news">Hackers News</a>
                        </li>
                    </ul>
                </div>

                {/* Logo Desktop */}
                <div className="wrap-logo container">
                    <div className="logo">
                        <a href="/">
                            <img src="/images/logo.png" alt="Company Logo" />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="wrap-main-nav">
                    <div className="main-nav">
                        <nav className="menu-desktop">
                            <a className="logo-stick" href="/">
                                <img
                                    src="/images/logo.png"
                                    alt="Company Logo"
                                />
                            </a>

                            <ul className="main-menu">
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <a href={`/category/${category.slug}`}>
                                            {category.title}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a href="/hackers-news">Hackers News</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
