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

const CompaniesAndPerks = () => {
    return (
        <section className="w-full bg-[#0f1623]">
            <div className="max-w-[1370px] mx-auto px-[45px]">

                {/* ── PART 1: Work with top notch companies ── */}
                <div className="pt-[80px] pb-[70px] text-center">

                    {/* Heading */}
                    <h2 className="text-white text-[44px] font-bold leading-[1.2] tracking-[-0.5px] mb-[52px]">
                        Work with top notch<br />companies
                    </h2>

                    {/* Logos Row 1 */}
                    <div className="flex items-center justify-center gap-[52px] flex-wrap mb-[28px]">

                        {/* limehome */}
                        <div className="flex items-center gap-[7px]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <rect x="0" y="0" width="7" height="7" fill="white" opacity="0.7" />
                                <rect x="9" y="0" width="7" height="7" fill="white" opacity="0.7" />
                                <rect x="0" y="9" width="7" height="7" fill="white" opacity="0.7" />
                                <rect x="9" y="9" width="7" height="7" fill="white" opacity="0.7" />
                            </svg>
                            <span className="text-white/70 text-[15px] font-medium tracking-[-0.2px]">limehome</span>
                        </div>

                        {/* Bloomberg */}
                        <span className="text-white/80 text-[20px] font-black tracking-[-0.3px]">Bloomberg</span>

                        {/* Business Insider */}
                        <div className="text-center">
                            <p className="text-white/70 text-[10px] font-bold tracking-[0.12em] uppercase leading-[1.2]">BUSINESS</p>
                            <p className="text-white/70 text-[10px] font-bold tracking-[0.12em] uppercase leading-[1.2]">INSIDER</p>
                        </div>

                        {/* Forbes */}
                        <span className="text-white/80 text-[22px] font-black italic tracking-[-0.3px]">Forbes</span>

                        {/* Atlassian */}
                        <div className="flex items-center gap-[6px]">
                            <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                                <path d="M4 28L12 4L20 20L16 28H4Z" fill="white" opacity="0.5" />
                                <path d="M20 20L28 4L24 28H16L20 20Z" fill="white" opacity="0.8" />
                            </svg>
                            <span className="text-white/70 text-[13px] font-bold tracking-[0.08em] uppercase">ATLASSIAN</span>
                        </div>

                    </div>

                    {/* Logos Row 2 */}
                    <div className="flex items-center justify-center gap-[52px] flex-wrap">

                        {/* Swisscom */}
                        <div className="flex flex-col items-start">
                            <span className="text-white/70 text-[18px] font-bold tracking-[-0.2px]">swisscom</span>
                            <div className="flex gap-[3px] mt-[3px]">
                                {[...Array(8)].map((_, i) => (
                                    <div key={i} className="w-[4px] h-[4px] bg-white/50 rounded-none" />
                                ))}
                            </div>
                        </div>

                        {/* toggle */}
                        <span className="text-white/70 text-[18px] font-light tracking-[0.05em]">toggle</span>

                    </div>

                </div>

                {/* ── PART 2: Our Benifits & Perks ── */}
                <div className="pb-[80px]">

                    {/* Heading */}
                    <h2 className="text-white text-[44px] font-bold leading-[1.2] tracking-[-0.5px] text-center mb-[36px]">
                        Our Benifits &amp; Perks
                    </h2>

                    {/* Video Thumbnail */}
                    <div
                        className="relative w-full rounded-[10px] overflow-hidden cursor-pointer mb-[44px]"
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
                    <p className="text-white text-[15px] font-bold text-center mb-[24px]">
                        Competitive compensation and long-term incentives
                    </p>

                    {/* Perks 2-column list */}
                    <div className="grid grid-cols-2 gap-x-[40px] gap-y-[10px] max-w-[860px] mx-auto">

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