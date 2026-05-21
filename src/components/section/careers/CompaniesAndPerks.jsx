import React from "react";

// Replace with your actual local image path
import videoThumbnailImg from "../../../assets/images/careers/benefits-video-thumb.svg";

const leftPerks = [
    "A fun HQ stocked with coffee, snacks, drinks",
    "Medical, dental, and vision coverage",
    "Daily catered lunch and dinner at HQ",
    "Volunteer opportunities",
];

const rightPerks = [
    "Frequent team outings, events, and retreats",
    "Free monthly credits for Handy services",
    "Enhanced paternity and maternity programs",
    "Flexible vacation policy",
];

// All perks in a single array for the single-column desktop layout (matches Figma)
const allPerks = [...leftPerks, ...rightPerks];

const CompaniesAndPerks = () => {
    return (
        <section className="w-full bg-[#0f1623]">
            <div className="max-w-[1370px] mx-auto px-[45px] md:px-[32px] sm:px-[20px]">

                {/* ── PART 1: Work with top notch companies ── */}
                <div className="pt-[80px] pb-[80px] text-center">

                    {/* Heading — desktop classes 100% original */}
                    <h2 className="text-white text-[44px] font-bold leading-[1.2] tracking-[-0.5px] mb-[52px] md:text-[32px] md:mb-[36px] sm:text-[28px] sm:mb-[28px]">
                        Work with top notch<br />companies
                    </h2>

                    {/* ── DESKTOP logos: Prudential | Microsoft | zoover / slack | Forbes ── */}
                    {/* hidden on tablet/mobile (md:hidden) */}
                    <div className="md:hidden">

                        {/* Logos Row 1: Prudential | Microsoft | zoover */}
                        <div className="flex items-center justify-center gap-[52px] flex-wrap mb-[28px]">

                            {/* Prudential */}
                            <div className="flex items-center gap-[6px]">
                                <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                                    <ellipse cx="16" cy="16" rx="14" ry="14" stroke="white" strokeOpacity="0.65" strokeWidth="2" fill="none" />
                                    <ellipse cx="16" cy="16" rx="8" ry="10" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
                                    <line x1="16" y1="2" x2="16" y2="30" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
                                </svg>
                                <span className="text-white/70 text-[15px] font-semibold tracking-[-0.1px]">Prudential</span>
                            </div>

                            {/* Microsoft */}
                            <div className="flex items-center gap-[7px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="0" y="0" width="7.5" height="7.5" fill="#F25022" opacity="0.9" />
                                    <rect x="8.5" y="0" width="7.5" height="7.5" fill="#7FBA00" opacity="0.9" />
                                    <rect x="0" y="8.5" width="7.5" height="7.5" fill="#00A4EF" opacity="0.9" />
                                    <rect x="8.5" y="8.5" width="7.5" height="7.5" fill="#FFB900" opacity="0.9" />
                                </svg>
                                <span className="text-white/70 text-[15px] font-semibold tracking-[-0.1px]">Microsoft</span>
                            </div>

                            {/* zoover */}
                            <span className="text-white/80 text-[22px] font-black italic tracking-[-0.5px]">zoover</span>

                        </div>

                        {/* Logos Row 2: slack | Forbes */}
                        <div className="flex items-center justify-center gap-[52px] flex-wrap">

                            {/* Slack */}
                            <div className="flex items-center gap-[6px]">
                                <svg width="16" height="16" viewBox="0 0 54 54" fill="none">
                                    <path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="white" opacity="0.7" />
                                    <path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="white" opacity="0.7" />
                                    <path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="white" opacity="0.7" />
                                    <path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.249m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.249a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="white" opacity="0.7" />
                                </svg>
                                <span className="text-white/70 text-[15px] font-semibold tracking-[-0.1px]">slack</span>
                            </div>

                            {/* Forbes */}
                            <span className="text-white/80 text-[22px] font-black italic tracking-[-0.3px]">Forbes</span>

                        </div>

                    </div>
                    {/* ── END DESKTOP logos ── */}

                    {/* ── TABLET & MOBILE logos: limehome | Bloomberg | BUSINESS INSIDER | Forbes | ATLASSIAN / swisscom | toggle ── */}
                    {/* hidden on desktop, shown on tablet/mobile (hidden md:block) */}
                    <div className="hidden md:block">

                        {/* Row 1: limehome | Bloomberg | Business Insider | Forbes | Atlassian */}
                        <div className="flex items-center justify-center gap-28 lg:gap-24 flex-wrap mb-[20px]">

                            {/* limehome */}
                            <div className="flex items-center gap-[7px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="0" y="0" width="7" height="7" fill="white" opacity="0.7" />
                                    <rect x="9" y="0" width="7" height="7" fill="white" opacity="0.7" />
                                    <rect x="0" y="9" width="7" height="7" fill="white" opacity="0.7" />
                                    <rect x="9" y="9" width="7" height="7" fill="white" opacity="0.7" />
                                </svg>
                                <span className="text-white/70 text-[14px] sm:text-[13px] lg:text-[25px] font-medium tracking-[-0.2px]">limehome</span>
                            </div>

                            {/* Bloomberg */}
                            <span className="text-white/80 text-[18px] sm:text-[16px] lg:text-[25px] font-black tracking-[-0.3px]">Bloomberg</span>

                            {/* Business Insider */}
                            <div className="text-center">
                                <p className="text-white/70 text-[9px] sm:text-[8px] lg:text-[12px] font-bold tracking-[0.12em] uppercase leading-[1.2]">BUSINESS</p>
                                <p className="text-white/70 text-[9px] sm:text-[8px] lg:text-[12px] font-bold tracking-[0.12em] uppercase leading-[1.2]">INSIDER</p>
                            </div>

                            {/* Forbes */}
                            <span className="text-white/80 text-[20px] sm:text-[18px] lg:text-[25px] font-black italic tracking-[-0.3px]">Forbes</span>

                            {/* Atlassian */}
                            <div className="flex items-center gap-[6px]">
                                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                                    <path d="M4 28L12 4L20 20L16 28H4Z" fill="white" opacity="0.5" />
                                    <path d="M20 20L28 4L24 28H16L20 20Z" fill="white" opacity="0.8" />
                                </svg>
                                <span className="text-white/70 text-[12px] sm:text-[11px] lg:text-[14px] font-bold tracking-[0.08em] uppercase">ATLASSIAN</span>
                            </div>

                        </div>

                        {/* Row 2: swisscom | toggle */}
                        <div className="flex items-center justify-center gap-[48px] sm:gap-[28px] flex-wrap">

                            {/* Swisscom */}
                            <div className="flex flex-col items-start">
                                <span className="text-white/70 text-[16px] sm:text-[14px] lg:text-[21px] font-bold tracking-[-0.2px]">swisscom</span>
                                <div className="flex gap-[3px] mt-[3px]">
                                    {[...Array(8)].map((_, i) => (
                                        <div key={i} className="w-[4px] h-[4px] bg-white/50 rounded-none" />
                                    ))}
                                </div>
                            </div>

                            {/* toggle */}
                            <span className="text-white/70 text-[16px] sm:text-[14px] lg:text-[22px] font-light tracking-[0.05em]">toggle</span>

                        </div>

                    </div>
                    {/* ── END TABLET & MOBILE logos ── */}

                </div>

                {/* ── PART 2: Our Benifits & Perks ── */}
                <div className="pb-[80px]">

                    {/* Heading — desktop classes 100% original */}
                    <h2 className="text-white text-[44px] font-semibold leading-[1.2] tracking-[-0.5px] text-center mb-[36px] md:text-[32px] md:mb-[28px] sm:text-[28px] sm:mb-[24px]">
                        Our Benifits &amp; Perks
                    </h2>

                    {/* Video Thumbnail — desktop classes 100% original */}
                    <div
                        className="relative w-full rounded-[10px] overflow-hidden cursor-pointer mb-[44px] md:mb-[32px] sm:mb-[24px]"
                        style={{ aspectRatio: "16/7" }}
                    >
                        <img
                            src={videoThumbnailImg}
                            alt="Benefits video thumbnail"
                            className="w-full h-full object-cover block"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black/30" />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[64px] h-[64px] rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors duration-300 cursor-pointer">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Perks subheading */}
                    <p className="text-white text-[26px] font-semibold text-center mb-[24px] md:mb-[20px] sm:mb-[16px]">
                        Competitive compensation and long-term incentives
                    </p>

                    
                    {/* ── TABLET/MOBILE: 2-col grid ── */}

                    {/* Desktop single-column list — hidden on tablet/mobile */}
                    <ul className="md:hidden flex flex-col gap-[10px] items-center">
                        {allPerks.map((perk, i) => (
                            <li key={i} className="flex items-start gap-[8px] text-white/60 text-[13px] leading-[20px]">
                                <span className="mt-[2px] text-white/40">•</span>
                                {perk}
                            </li>
                        ))}
                    </ul>

                    {/* Tablet/Mobile 2-column grid — hidden on desktop */}
                    <div className="hidden md:flex gap-x-10 gap-y-2 max-w-[860px] mx-auto md:max-w-[420px] sm:grid-cols-1 sm:max-w-full">

                        {/* Left column */}
                        <ul className="flex flex-col gap-[10px]">
                            {leftPerks.map((perk, i) => (
                                <li key={i} className="flex items-start gap-[8px] text-white/60 text-[13px] leading-[20px]">
                                    <span className="mt-[2px] text-white/40">•</span>
                                    {perk}
                                </li>
                            ))}
                        </ul>

                        {/* Right column */}
                        <ul className="flex flex-col gap-[10px]">
                            {rightPerks.map((perk, i) => (
                                <li key={i} className="flex items-start gap-[8px] text-white/60 text-[13px] leading-[20px]">
                                    <span className="mt-[2px] text-white/40">•</span>
                                    {perk}
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default CompaniesAndPerks;