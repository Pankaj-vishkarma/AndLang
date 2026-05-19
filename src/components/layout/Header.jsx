import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";
import logoIconDark from "../../assets/icons/logo-icon.png";
import logoTextDark from "../../assets/icons/logo-text.png";
import logoIconLight from "../../assets/icons/logo-icon-light.png";
import logoTextLight from "../../assets/icons/logo-text-light.png";
import globeIcon from "../../assets/icons/globe.png";

// ── Flag emoji helpers (matching Figma: Norwegian 🇳🇴, Chinese 🇨🇳)
const LANGUAGE_ITEMS = [
    { label: "English (Default)", code: "en", flag: null },
    { label: "Norwegian", code: "no", flag: "🇳🇴" },
    { label: "Chinese", code: "zh", flag: "🇨🇳" },
];

const SERVICE_ITEMS = [
    { label: "Web Design", path: "/services/web-design" },
    { label: "Graphic Design", path: "/services/graphic-design" },
    { label: "Programming", path: "/services/programming" },
    { label: "Smart Home Automation", path: "/services/home-automation" },
];

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // ── Desktop dropdown
    const [servicesOpen, setServicesOpen] = useState(false);
    const dropdownRef = useRef(null);

    // ── Mobile drawer
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileLangOpen, setMobileLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(LANGUAGE_ITEMS[0]);

    const isActive = (path) => pathname === path;

    // Close desktop dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close everything on route change
    useEffect(() => {
        setServicesOpen(false);
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setMobileLangOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const handleServiceClick = (path) => {
        setServicesOpen(false);
        navigate(path);
    };

    const handleMobileServiceClick = (path) => {
        setMobileOpen(false);
        navigate(path);
    };

    return (
        <header className="w-full font-graphit">

            {/* ════════════════════════════════════════════════
                DESKTOP TOP BAR — hidden on mobile
            ════════════════════════════════════════════════ */}
            <div className="hidden lg:block w-full bg-[#0B1C2C] text-white text-xs">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-[45px] py-2">

                    {/* Left — email */}
                    <div className="flex items-center gap-[6px] opacity-80 tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <polyline points="2,4 12,13 22,4" />
                        </svg>
                        <p>Contact@Andlang.Com</p>
                    </div>

                    {/* Right — ThemeToggle + Globe */}
                    <div className="flex items-center gap-[12px]">
                        <ThemeToggle />
                        <div className="flex items-center gap-[4px] cursor-pointer opacity-80 hover:opacity-100 transition">
                            <img src={globeIcon} alt="language" className="w-[20px] h-[20px] object-contain" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* ════════════════════════════════════════════════
                DESKTOP MAIN NAVBAR — hidden on mobile/tablet
            ════════════════════════════════════════════════ */}
            <div className="hidden lg:block w-full bg-white dark:bg-[#071421] transition-all duration-300">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-[70px] py-5">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logoIconLight} alt="logo icon" className="h-8 w-auto object-contain block dark:hidden" />
                        <img src={logoIconDark}  alt="logo icon" className="h-8 w-auto object-contain hidden dark:block" />
                        <img src={logoTextLight} alt="andlang"   className="h-6 w-auto object-contain block dark:hidden" />
                        <img src={logoTextDark}  alt="andlang"   className="h-6 w-auto object-contain hidden dark:block" />
                    </Link>

                    {/* Nav links */}
                    <nav className="flex items-center gap-0 text-sm font-medium text-[#1a1a1a] dark:text-white">

                        <Link to="/about"
                            className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/about") ? "text-green-500" : ""}`}>
                            About Us
                        </Link>
                        <span className="mx-3 opacity-40 select-none">•</span>

                        {/* Services dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => { setServicesOpen((p) => !p); navigate("/services"); }}
                                className={`flex items-center gap-[3px] cursor-pointer hover:opacity-70 transition font-medium
                                    ${isActive("/services") || pathname.startsWith("/services/") || servicesOpen
                                        ? "text-green-500" : "text-[#1a1a1a] dark:text-white"}`}
                            >
                                <span>Services</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {servicesOpen && (
                                <div className="absolute top-[calc(100%+16px)] left-0 bg-white shadow-2xl z-50 min-w-[220px] overflow-hidden"
                                    style={{ borderRadius: "3px" }}>
                                    {SERVICE_ITEMS.map((item, idx) => (
                                        <button key={item.path} onClick={() => handleServiceClick(item.path)}
                                            className={`w-full text-left px-5 py-[11px] text-sm transition-all duration-150
                                                ${idx === 0 ? "bg-[#3DAA6E] text-white font-semibold hover:bg-[#359e64]"
                                                           : "text-[#1a1a1a] font-normal hover:bg-gray-100"}`}>
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <span className="mx-3 opacity-40 select-none">•</span>
                        <Link to="/open-source" className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/open-source") ? "text-green-500" : ""}`}>Open Source</Link>
                        <span className="mx-3 opacity-40 select-none">•</span>
                        <Link to="/non-profit"  className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/non-profit")  ? "text-green-500" : ""}`}>Non Profit</Link>
                        <span className="mx-3 opacity-40 select-none">•</span>
                        <Link to="/careers"     className={`hover:opacity-70 transition whitespace-nowrap ${isActive("/careers")     ? "text-green-500" : ""}`}>Careers</Link>
                        <span className="mx-3 opacity-40 select-none">•</span>
                        <Link to="/blogs"       className={`hover:opacity-70 transition             ${isActive("/blogs")       ? "text-green-500" : ""}`}>Blogs</Link>
                    </nav>

                    {/* CTA */}
                    <Link to="/contact"
                        className="bg-[#FF4D1C] hover:bg-[#e84318] text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 shadow-md whitespace-nowrap">
                        Say Hello 🔥
                    </Link>
                </div>
            </div>

            {/* ════════════════════════════════════════════════
                MOBILE / TABLET NAVBAR — visible below lg
            ════════════════════════════════════════════════ */}
            <div className="lg:hidden w-full bg-[#0E1E2E] text-white">

                {/* ── Top bar: Logo + ThemeToggle + Close/Hamburger ── */}
                <div className="flex items-center justify-between px-5 py-4">

                    {/* Logo (always dark version — bg is dark) */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logoIconDark}  alt="logo icon" className="h-7 w-auto object-contain" />
                        <img src={logoTextDark}  alt="andlang"   className="h-5 w-auto object-contain" />
                    </Link>

                    {/* Right side: ThemeToggle + X / Hamburger */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        <button
                            onClick={() => setMobileOpen((p) => !p)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FF4D1C] text-white"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? (
                                /* X icon */
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                /* Hamburger icon */
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="6"  x2="21" y2="6"  />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* ── Mobile Drawer ── */}
                {mobileOpen && (
                    <div className="flex flex-col bg-[#0E1E2E] border-t border-white/10">

                        {/* ── About ── */}
                        <Link to="/about"
                            className={`px-5 py-4 text-sm font-medium border-b border-white/10 hover:bg-white/5 transition
                                ${isActive("/about") ? "text-green-400" : "text-white"}`}>
                            About
                        </Link>

                        {/* ── Services (accordion) ── */}
                        <div className="border-b border-white/10">
                            <button
                                onClick={() => setMobileServicesOpen((p) => !p)}
                                className={`w-full flex items-center justify-between px-5 py-4 text-sm font-medium hover:bg-white/5 transition
                                    ${pathname.startsWith("/services") ? "text-green-400" : "text-white"}`}
                            >
                                <span>Services</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {/* Services sub-items */}
                            {mobileServicesOpen && (
                                <div className="bg-white mx-0">
                                    {SERVICE_ITEMS.map((item, idx) => (
                                        <button
                                            key={item.path}
                                            onClick={() => handleMobileServiceClick(item.path)}
                                            className={`w-full text-left px-6 py-3 text-sm transition-all duration-150
                                                ${idx === 0
                                                    ? "bg-[#3DAA6E] text-white font-semibold"
                                                    : "text-[#1a1a1a] font-normal hover:bg-gray-100"}`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ── Open Source ── */}
                        <Link to="/open-source"
                            className={`px-5 py-4 text-sm font-medium border-b border-white/10 hover:bg-white/5 transition
                                ${isActive("/open-source") ? "text-green-400" : "text-white"}`}>
                            Open Soruce
                        </Link>

                        {/* ── Non Profit ── */}
                        <Link to="/non-profit"
                            className={`px-5 py-4 text-sm font-medium border-b border-white/10 hover:bg-white/5 transition
                                ${isActive("/non-profit") ? "text-green-400" : "text-white"}`}>
                            Non Profit
                        </Link>

                        {/* ── Careers ── */}
                        <Link to="/careers"
                            className={`px-5 py-4 text-sm font-medium border-b border-white/10 hover:bg-white/5 transition
                                ${isActive("/careers") ? "text-green-400" : "text-white"}`}>
                            Careers
                        </Link>

                        {/* ── Blogs ── */}
                        <Link to="/blogs"
                            className={`px-5 py-4 text-sm font-medium border-b border-white/10 hover:bg-white/5 transition
                                ${isActive("/blogs") ? "text-green-400" : "text-white"}`}>
                            Blogs
                        </Link>

                        {/* ── Select Language (accordion) ── */}
                        <div className="border-b border-white/10">
                            <button
                                onClick={() => setMobileLangOpen((p) => !p)}
                                className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-white hover:bg-white/5 transition"
                            >
                                <span>Select Language</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ transform: mobileLangOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {/* Language sub-items */}
                            {mobileLangOpen && (
                                <div className="bg-white mx-0">
                                    {LANGUAGE_ITEMS.map((lang, idx) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setSelectedLang(lang);
                                                setMobileLangOpen(false);
                                            }}
                                            className={`w-full text-left px-6 py-3 text-sm flex items-center gap-2 transition-all duration-150
                                                ${idx === 0
                                                    ? "bg-[#3DAA6E] text-white font-semibold"
                                                    : "text-[#1a1a1a] font-normal hover:bg-gray-100"}`}
                                        >
                                            {lang.flag && <span>{lang.flag}</span>}
                                            <span>{lang.label}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ── Say Hello CTA ── */}
                        <div className="px-5 py-5">
                            <Link to="/contact"
                                className="block w-full text-center bg-[#FF4D1C] hover:bg-[#e84318] text-white py-4 rounded-full font-semibold text-sm transition-all duration-300">
                                Say Hello 🔥
                            </Link>
                        </div>

                    </div>
                )}
            </div>

        </header>
    );
};

export default Header;