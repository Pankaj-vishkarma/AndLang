// components/sections/home/RecentWork.jsx

import work1 from "../../../assets/images/home/work-1.png";
import work2 from "../../../assets/images/home/work-2.png";
import work3 from "../../../assets/images/home/work-3.png";
import work4 from "../../../assets/images/home/work-4.png";

import qualityIcon from "../../../assets/icons/quality.png";
import assistanceIcon from "../../../assets/icons/assistance.png";
import deliveryIcon from "../../../assets/icons/delivery.png";

const features = [
    {
        icon: qualityIcon,
        title: "Best Quality",
        description:
            "Through years of experience you'll get exactly what you want, in the style you want. We are included in every aspect and nothing is impossible.",
    },
    {
        icon: assistanceIcon,
        title: "Gold Assistance",
        description:
            "You should rest assured we are there for you every moment we work for you. We have workers around the world so a request should be responded in a couple of hours.",
    },
    {
        icon: deliveryIcon,
        title: "On Time Delivery",
        description:
            "We deliver on time, even if we have to work through the night. You can use for reliability and your time is very important for us.",
    },
];

const RecentWork = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#071421]">

            {/* ── Background Glow (unchanged) ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[40px] left-[-140px] w-[280px] h-[280px] bg-[#42FFB3] opacity-[0.10] blur-[120px] rounded-full" />
                <div className="absolute top-[60px] right-[-120px] w-[260px] h-[260px] bg-[#42FFB3] opacity-[0.10] blur-[120px] rounded-full" />
            </div>

            {/* ── Container ── */}
            <div className="relative z-10 max-w-[1440px] mx-auto
                            px-5 pt-[52px] pb-[60px]
                            md:px-[42px] md:pt-[68px] md:pb-[76px]
                            lg:px-[56px] lg:pt-[82px] lg:pb-[95px]">

                {/* ── Section Title ── */}
                <div className="flex justify-center
                                mb-[28px] md:mb-[36px] lg:mb-[44px]">
                    <h2 className="text-white font-semibold tracking-[-1px] text-center
                                   text-[28px] leading-none
                                   md:text-[38px]
                                   lg:text-[48px] lg:tracking-[-1.5px]">
                        Our Recent Works
                    </h2>
                </div>

                {/* ── Gallery grid ──
                     Mobile : 2 cols  (matches Figma 2×2)
                     Tablet : 2 cols
                     Desktop: 4 cols  (original)               ── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[8px] md:gap-[10px] lg:gap-[12px]
                                mb-[48px] md:mb-[68px] lg:mb-[90px]">

                    {[work1, work2, work3, work4].map((src, i) => (
                        <div key={i} className="overflow-hidden">
                            <img
                                src={src}
                                alt={`work ${i + 1}`}
                                className="w-full object-cover
                                           h-[140px]
                                           md:h-[180px]
                                           lg:h-[210px]"
                            />
                        </div>
                    ))}
                </div>

                {/* ══════════════════════════════════════════
                    WHY CHOOSE US
                    Desktop : 2-col  [ heading | content ]
                    Mobile  : single column stacked
                ══════════════════════════════════════════ */}

                {/* ── MOBILE / TABLET (below lg) ── */}
                <div className="flex flex-col lg:hidden gap-[28px] md:gap-[36px]">

                    {/* Heading — centered on mobile */}
                    <h2 className="text-white font-semibold tracking-[-1px] text-center
                                   text-[32px] leading-[1.1]
                                   md:text-[42px] md:tracking-[-1.5px]">
                        Why
                        <br />
                        Choose Us
                    </h2>

                    {/* Description */}
                    <p className="text-white/80 font-medium text-center
                                  text-[13px] leading-[1.9]
                                  md:text-[15px] md:leading-[2]">
                        You should be relieved to know we have the best experience
                        to give you what you want, to the price you want.
                        We do not compete with a five dollar website,
                        and what do you get from that? More stress and expenses.
                        <br /><br />
                        No thank you! When you buy from Andlang you are assured
                        you are getting high quality design, legal and paid for
                        templates, plugins that are legal and honour in what we do.
                    </p>

                    {/* Feature Cards — single col, centered */}
                    <div className="flex flex-col gap-[36px] md:gap-[40px] mt-[8px]">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center gap-[14px]">

                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] object-contain"
                                />

                                <h3 className="text-white font-semibold leading-none
                                               text-[20px] md:text-[22px]">
                                    {feature.title}
                                </h3>

                                <p className="text-white/60 leading-[1.9] max-w-[300px]
                                              text-[12px] md:text-[13px]">
                                    {feature.description}
                                </p>

                            </div>
                        ))}
                    </div>

                </div>

                {/* ── DESKTOP (lg and above) — UNCHANGED ── */}
                <div className="hidden lg:grid grid-cols-[240px_1fr] gap-[90px]">

                    {/* Left Heading */}
                    <div>
                        <h2 className="hidden lg:block text-white text-[42px] leading-[1.15] font-semibold tracking-[-1.5px]">
                            Why
                            <br />
                            Choose Us
                        </h2>
                    </div>

                    {/* Right Content */}
                    <div>
                        <p className="text-[rgba(255,255,255,0.70)] text-[15px] leading-[28px] font-normal max-w-[520px]">
                            You should be relieved to know we have the best experience
                            to give you what you want, to the price you want.
                            We do not compete with a five dollar website,
                            and what do you get from that? More stress and expenses.
                            No thank you! When you buy from Andlang you are assured
                            you are getting high quality design, legal and paid for
                            templates, plugins that are legal and honour in what we do.
                        </p>

                        {/* Feature Cards */}

                    </div>

                </div>

                <div className="hidden lg:grid">
                    <div className="grid grid-cols-3 gap-[34px] mt-[62px] pl-[34px]">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-start">
                                <img
                                    src={feature.icon}
                                    alt={feature.title}
                                    className="w-[52px] h-[52px] object-contain"
                                />
                                <h3 className="mt-[18px] text-white text-[24px] font-semibold leading-none">
                                    {feature.title}
                                </h3>
                                <p className="mt-[14px] text-white/60 text-[12px] leading-[2] max-w-[240px]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RecentWork;