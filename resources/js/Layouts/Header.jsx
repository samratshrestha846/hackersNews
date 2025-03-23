import React from "react";
import { usePage } from "@inertiajs/react";

export default function Header({ children }) {
    const { categories } = usePage().props;
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
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>

                {/* Menu Mobile */}
                <div className="menu-mobile">
                    <ul className="main-menu-m">
                        {categories &&
                            categories.map((category) => (
                                <li key={category.id}>
                                    <a href={`/category/${category.slug}`}>
                                        {category.title}
                                    </a>
                                </li>
                            ))}
                        <li>
                            <a href="/news">Hackers News</a>
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
                                {categories &&
                                    categories.map((category) => (
                                        <li key={category.id}>
                                            <a
                                                href={`/category/${category.slug}`}
                                            >
                                                {category.title}
                                            </a>
                                        </li>
                                    ))}
                                <li>
                                    <a href="/news">Hackers News</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
