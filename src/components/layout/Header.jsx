import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";
import logoIconDark from "../../assets/icons/logo-icon.png";
import logoTextDark from "../../assets/icons/logo-text.png";
import logoIconLight from "../../assets/icons/logo-icon-light.png";
import logoTextLight from "../../assets/icons/logo-text-light.png";
import globeIcon from "../../assets/icons/globe.png";

const Header = () => {
    const { pathname } = useLocation();

    const isActive = (path) => pathname === path;

    return (
        <header className="w-full font-graphit">

            {/* 🔹 TOP BAR */}
            <div className="w-full bg-[#0B1C2C] text-white text-xs">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-[45px] py-2">

                    {/* Left — email with envelope icon */}
                    <div className="flex items-center gap-[6px] opacity-80 tracking-wide">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <polyline points="2,4 12,13 22,4" />
                        </svg>
                        <p>Contact@Andlang.Com</p>
                    </div>

                    {/* Right — ThemeToggle + Globe with chevron */}
                    <div className="flex items-center gap-[12px]">

                        <ThemeToggle />

                        {/* Globe + chevron */}
                        <div className="flex items-center gap-[4px] cursor-pointer opacity-80 hover:opacity-100 transition">
                            <img
                                src={globeIcon}
                                alt="language"
                                className="w-[20px] h-[20px] object-contain"
                            />
                            {/* Chevron down */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

            {/* 🔹 MAIN NAVBAR */}
            <div className="w-full bg-white dark:bg-[#071421] transition-all duration-300">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-[70px] py-5">

                    {/* Logo */}
                    <div className="flex items-center gap-2">

                        {/* ICON */}
                        <img
                            src={logoIconLight}
                            alt="logo icon"
                            className="h-8 w-auto object-contain block dark:hidden"
                        />
                        <img
                            src={logoIconDark}
                            alt="logo icon"
                            className="h-8 w-auto object-contain hidden dark:block"
                        />

                        {/* TEXT LOGO */}
                        <img
                            src={logoTextLight}
                            alt="andlang logo"
                            className="h-6 w-auto object-contain block dark:hidden"
                        />
                        <img
                            src={logoTextDark}
                            alt="andlang logo"
                            className="h-6 w-auto object-contain hidden dark:block"
                        />

                    </div>

                    {/* Menu — dots are separators BETWEEN links */}
                    <nav className="hidden md:flex items-center gap-0 text-sm font-medium text-[#1a1a1a] dark:text-white">

                        <Link
                            to="/about"
                            className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/about") ? "text-green-500" : ""}`}
                        >
                            About Us
                        </Link>

                        <span className="mx-3 text-[#1a1a1a] dark:text-white opacity-40 select-none">•</span>

                        <Link to="/services" className="hover:opacity-70 transition">
                            <div className={`flex items-center gap-[3px] cursor-pointer ${isActive("/services") ? "text-green-500" : ""}`}>
                                <span>Services</span>
                                {/* Dropdown chevron */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11"
                                    height="11"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </Link>

                        <span className="mx-3 text-[#1a1a1a] dark:text-white opacity-40 select-none">•</span>

                        <Link
                            to="/open-source"
                            className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/open-source") ? "text-green-500" : ""}`}
                        >
                            Open Source
                        </Link>

                        <span className="mx-3 text-[#1a1a1a] dark:text-white opacity-40 select-none">•</span>

                        <Link
                            to="/non-profit"
                            className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/non-profit") ? "text-green-500" : ""}`}
                        >
                            Non Profit
                        </Link>

                        <span className="mx-3 text-[#1a1a1a] dark:text-white opacity-40 select-none">•</span>

                        <Link
                            to="/careers"
                            className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/careers") ? "text-green-500" : ""}`}
                        >
                            Careers
                        </Link>

                        <span className="mx-3 text-[#1a1a1a] dark:text-white opacity-40 select-none">•</span>

                        <Link
                            to="/blog"
                            className={`hover:opacity-70 transition ${isActive("/blog") ? "text-green-500" : ""}`}
                        >
                            Blogs
                        </Link>

                    </nav>

                    {/* CTA */}
                    <button className="bg-[#FF4D1C] hover:bg-[#e84318] text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-md whitespace-nowrap">
                        Say Hello 🔥
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Header;