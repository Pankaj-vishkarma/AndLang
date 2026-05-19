// components/sections/home/HeroSection.jsx

import { Link } from "react-router-dom";

import mediumIcon from "../../../assets/icons/medium.png";
import behanceIcon from "../../../assets/icons/behance.png";
import dribbbleIcon from "../../../assets/icons/dribbble.png";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[693px] overflow-hidden bg-[#071421]">

            {/* ── Background Glow Effects (unchanged) ── */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[220px] left-[-120px] w-[300px] h-[300px] bg-[#42FFB3] opacity-30 blur-[120px] rounded-full" />
                <div className="absolute top-[340px] left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-[#42FFB3] opacity-20 blur-[140px] rounded-full" />
                <div className="absolute bottom-[80px] right-[-100px] w-[280px] h-[280px] bg-[#42FFB3] opacity-25 blur-[120px] rounded-full" />
            </div>

            {/* ── Main Container ── */}
            <div className="relative z-10 max-w-[1600px] mx-auto
                            px-5 pt-[80px]
                            md:px-8 md:pt-[100px]
                            lg:px-[45px] lg:pt-[140px]">

                {/* ════════════════════════════════════════
                    MOBILE / TABLET  (below lg)
                    Layout: heading block full-width,
                            social icons pinned right,
                            description + buttons below
                ════════════════════════════════════════ */}
                <div className="flex flex-col lg:hidden">

                    {/* Top row: heading + social icons side by side */}
                    <div className="flex items-start justify-between gap-4">

                        {/* Heading block */}
                        <h1 className="text-white font-semibold tracking-[-1px]
                                       text-[38px] leading-[48px]
                                       md:text-[52px] md:leading-[64px] md:tracking-[-1.5px]">

                            Jump Start Your{" "}

                            {/* Growth highlight */}
                            <span className="relative inline-flex items-center justify-center">
                                <span className="relative z-10">Growth</span>
                                <span className="absolute w-[112%]
                                                 h-[42px] border-[2px]
                                                 md:h-[54px] md:border-[2.5px]
                                                 border-[#42FFB3] rounded-full rotate-[-6deg]" />
                            </span>

                            {" "}With{"\n"}Andlang

                        </h1>

                        {/* Social icons — vertical stack, right side */}
                        <div className="flex flex-col items-center gap-[20px] pt-1 flex-shrink-0">
                            <img src={mediumIcon} alt="medium" className="w-[16px] h-[16px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer" />
                            <img src={behanceIcon} alt="behance" className="w-[16px] h-[16px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer" />
                            <img src={dribbbleIcon} alt="dribbble" className="w-[16px] h-[16px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer" />
                        </div>

                    </div>

                    {/* Description */}
                    <p className="text-white/80 font-medium mt-6
                                  text-[13px] leading-[24px]
                                  md:text-[16px] md:leading-[30px]">
                        A Norwegian Based Digital Agency Passionate About Storytelling,
                        Visual Design, And Technology 🚀. The Team Collaborates
                        With Small To Large Companies Around The World To Help Them
                        Engage Their Audiences And Build Brand Recognition 🌍.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-[12px] mt-[28px] md:gap-[16px] md:mt-[36px]">

                        <button className="h-[46px] px-[20px] rounded-full
                                           md:h-[52px] md:px-[24px]
                                           bg-[#FF5A1F] hover:bg-[#ef4f16] transition-all duration-300
                                           text-white text-[14px] md:text-[15px] font-semibold
                                           shadow-[0_10px_30px_rgba(255,90,31,0.25)]">
                            Get Started
                        </button>

                        <button className="h-[46px] px-[20px] rounded-full
                                           md:h-[52px] md:px-[24px]
                                           bg-white text-[#071421] hover:bg-gray-100 transition-all duration-300
                                           text-[14px] md:text-[15px] font-semibold">
                            Know More ↗
                        </button>

                    </div>

                </div>

                {/* ════════════════════════════════════════
                    DESKTOP  (lg and above) — UNCHANGED
                ════════════════════════════════════════ */}
                <div className="hidden lg:flex flex-col">

                    <div className="text-white text-[72px] leading-[92px] font-semibold tracking-[-2px] flex gap-6">
                        Jump Start Your{" "}

                        {/* Growth Highlight */}
                        <span className="relative inline-flex items-center justify-center">
                            <span className="relative z-10">Growth</span>
                            <span className="absolute w-[112%] h-[72px] border-[3px] border-[#42FFB3] rounded-full rotate-[-6deg]" />
                        </span>
                    </div>

                    <div className="flex gap-4">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col">

                            <h1 className="text-white text-[72px] font-semibold max-w-[700px]">
                                With Andlang
                            </h1>

                            {/* Social Icons */}
                            <div className="flex items-center gap-[22px] mt-[42px]">
                                <img src={mediumIcon} alt="medium" className="w-[18px] h-[18px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer" />
                                <img src={behanceIcon} alt="behance" className="w-[18px] h-[18px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer" />
                                <img src={dribbbleIcon} alt="dribbble" className="w-[18px] h-[18px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer" />
                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex flex-col justify-center max-w-[620px] ml-auto mt-8">

                            <p className="text-white/80 text-[20px] leading-[42px] font-medium">
                                A Norwegian Based Digital Agency Passionate About Storytelling,
                                Visual Design, And Technology 🚀. This Team Collaborates
                                With Small To Large Companies Around The World To Help Them
                                Engage Their Audiences And Build Brand Recognition 🌍.
                            </p>

                            <div className="flex items-center gap-[18px] mt-[40px]">

                                <button className="h-[56px] px-[28px] rounded-full bg-[#FF5A1F] hover:bg-[#ef4f16] transition-all duration-300 text-white text-[16px] font-semibold shadow-[0_10px_30px_rgba(255,90,31,0.25)]">
                                    Get Started
                                </button>

                                <button className="h-[56px] px-[28px] rounded-full bg-white text-[#071421] hover:bg-gray-100 transition-all duration-300 text-[16px] font-semibold">
                                    Know More ↗
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HeroSection;