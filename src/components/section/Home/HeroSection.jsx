// components/sections/home/HeroSection.jsx

import { Link } from "react-router-dom";

import mediumIcon from "../../../assets/icons/medium.png";
import behanceIcon from "../../../assets/icons/behance.png";
import dribbbleIcon from "../../../assets/icons/dribbble.png";
//import heroGlow from "../../../assets/images/home/hero-glow.png";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[693px] overflow-hidden bg-[#071421]">

            {/* 🔹 Background Glow Effects */}
            <div className="absolute inset-0 overflow-hidden">

                {/* Left Glow */}
                <div className="absolute top-[220px] left-[-120px] w-[300px] h-[300px] bg-[#42FFB3] opacity-30 blur-[120px] rounded-full" />

                {/* Center Glow */}
                <div className="absolute top-[340px] left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-[#42FFB3] opacity-20 blur-[140px] rounded-full" />

                {/* Right Glow */}
                <div className="absolute bottom-[80px] right-[-100px] w-[280px] h-[280px] bg-[#42FFB3] opacity-25 blur-[120px] rounded-full" />

            </div>

            {/* 🔹 Main Container */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-[45px] pt-[140px]">

                {/* Hero Grid */}
                <div className='flex flex-col '>
                    <div className="text-white text-[72px] leading-[92px] font-semibold tracking-[-2px] flex gap-6">
                        Jump Start Your{" "}

                        {/* Growth Highlight */}
                        <span className="relative inline-flex items-center justify-center">

                            <span className="relative z-10">
                                Growth
                            </span>

                            {/* Ellipse */}
                            <span className="absolute w-[112%] h-[72px] border-[3px] border-[#42FFB3] rounded-full rotate-[-6deg]" />

                        </span>
                    </div>
                    <div className="flex gap-4">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col">

                            {/* Heading */}
                            <h1 className="text-white text-[72px] font-semibold  max-w-[700px]">





                                With Andlang

                            </h1>

                            {/* Social Icons */}
                            <div className="flex items-center gap-[22px] mt-[42px]">

                                <img
                                    src={mediumIcon}
                                    alt="medium"
                                    className="w-[18px] h-[18px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer"
                                />

                                <img
                                    src={behanceIcon}
                                    alt="behance"
                                    className="w-[18px] h-[18px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer"
                                />

                                <img
                                    src={dribbbleIcon}
                                    alt="dribbble"
                                    className="w-[18px] h-[18px] object-contain opacity-80 hover:opacity-100 transition cursor-pointer"
                                />

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex flex-col justify-center max-w-[620px] ml-auto mt-8">

                            {/* Description */}
                            <p className="text-white/80 text-[20px] leading-[42px] font-medium">

                                A Norwegian Based Digital Agency Passionate About Storytelling,
                                Visual Design, And Technology 🚀. This Team Collaborates
                                With Small To Large Companies Around The World To Help Them
                                Engage Their Audiences And Build Brand Recognition 🌍.

                            </p>

                            {/* CTA BUTTONS */}
                            <div className="flex items-center gap-[18px] mt-[40px]">

                                {/* Primary */}
                                <button className="h-[56px] px-[28px] rounded-full bg-[#FF5A1F] hover:bg-[#ef4f16] transition-all duration-300 text-white text-[16px] font-semibold shadow-[0_10px_30px_rgba(255,90,31,0.25)]">

                                    Get Started

                                </button>

                                {/* Secondary */}
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