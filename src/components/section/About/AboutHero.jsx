import mediumIcon from "../../../assets/icons/medium.png";
import behanceIcon from "../../../assets/icons/behance.png";
import dribbbleIcon from "../../../assets/icons/dribbble.png";
import discordIcon from "../../../assets/icons/discord.png";
import { GoArrowUpRight } from "react-icons/go";

const AboutHero = () => {
    return (
        <section className="relative w-full lg:h-[611px] min-h-[600px] overflow-hidden bg-[#071421]">

            {/* BACKGROUND GLOWS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* LEFT GLOW */}
                <div className="absolute top-[120px] left-[-140px] w-[260px] h-[260px] rounded-full bg-[#42FFB3] opacity-20 blur-[110px]" />

                {/* CENTER BOTTOM GLOW */}
                <div className="absolute bottom-[-120px] left-[34%] w-[260px] h-[260px] rounded-full bg-[#42FFB3] opacity-15 blur-[120px]" />

                {/* RIGHT GLOW */}
                <div className="absolute top-[210px] right-[-100px] w-[240px] h-[240px] rounded-full bg-[#42FFB3] opacity-20 blur-[110px]" />

            </div>

            {/* MAIN CONTAINER */}
            <div className="relative z-10 max-w-[1370px] mx-auto px-[20px] sm:px-[32px] lg:px-[45px] pt-[80px] sm:pt-[100px] lg:pt-[84px] pb-[48px] lg:pb-0">

                {/* MOBILE & TABLET LAYOUT */}
                <div className="flex lg:hidden">

                    {/* LEFT: Heading + Description + Buttons */}
                    <div className="flex-1 pr-[12px]">

                        {/* HEADING */}
                        <h1 className="text-white text-[28px] sm:text-[38px] leading-[38px] sm:leading-[52px] font-semibold tracking-[-1px]">
                            We Strive To Make The World A Better Place To{" "}

                            {/* HIGHLIGHT */}
                            <span className="relative inline-flex items-center justify-center">
                                <span className="relative z-10">Live And Grow</span>
                                <span className="absolute w-[108%] h-[36px] sm:h-[44px] border-[2px] border-[#42FFB3] rounded-[50%] rotate-[-5deg]" />
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-white/85 text-[12px] sm:text-[14px] leading-[22px] sm:leading-[30px] font-medium mt-[20px] sm:mt-[28px]">
                            A Norwegian Based Digital Agency Passionate About Storytelling,
                            Visual Design, And Technology 🚀. The Team Collaborates
                            With Small To Large Companies Around The World To Help Them
                            Engage Their Audiences And Build Brand Recognition 🌍.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex items-center gap-[12px] mt-[28px] md:gap-[16px] md:mt-[36px]">

                            <button className="h-[46px] px-[20px] rounded-full
                                                                   md:h-[52px] md:px-[24px]
                                                                   bg-[#FF5A1F] hover:bg-[#ef4f16] transition-all duration-300
                                                                   text-white text-[14px] md:text-[15px] font-semibold
                                                                   shadow-[0_10px_30px_rgba(255,90,31,0.25)]">
                                Get Started
                            </button>

                            <button className="flex items-center h-[46px] px-[20px] rounded-full
                                                                   md:h-[52px] md:px-[24px]
                                                                   bg-white text-[#FF5A1F] hover:bg-gray-100 transition-all duration-300
                                                                   text-[14px] md:text-[15px] font-semibold">
                                Know More <GoArrowUpRight />
                            </button>

                        </div>

                    </div>

                    {/* RIGHT: Vertical Social Icons */}
                    <div className="flex flex-col items-center gap-[20px] pt-[8px]">
                        <img src={mediumIcon} alt="medium" className="w-[14px] h-[14px] object-contain opacity-80" />
                        <img src={behanceIcon} alt="behance" className="w-[14px] h-[14px] object-contain opacity-80" />
                        <img src={dribbbleIcon} alt="dribbble" className="w-[14px] h-[14px] object-contain opacity-80" />
                        <img src={discordIcon} alt="discord" className="w-[14px] h-[14px] object-contain opacity-80" />
                    </div>

                </div>

                {/* DESKTOP LAYOUT — UNCHANGED */}
                <div className="hidden lg:grid items-center">

                    {/* LEFT */}
                    <div>

                        {/* HEADING */}
                        <h1 className="text-white text-[65px] leading-[86px] font-semibold tracking-[-1.5px] max-w-[900px]">
                            We Strive To Make The World
                            <br />
                            A Better Place To{" "}

                            {/* HIGHLIGHT */}
                            <span className="relative inline-flex items-center justify-center">
                                <span className="relative z-10">Live And Grow</span>
                                <span className="absolute w-[108%] h-[69px] border-[2px] border-[#42FFB3] rounded-[50%] rotate-[-5deg]" />
                            </span>
                        </h1>

                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-[22px] mt-[42px]">
                            <img src={mediumIcon} alt="medium" className="w-[16px] h-[16px] object-contain opacity-80" />
                            <img src={behanceIcon} alt="behance" className="w-[16px] h-[16px] object-contain opacity-80" />
                            <img src={dribbbleIcon} alt="dribbble" className="w-[16px] h-[16px] object-contain opacity-80" />
                            <img src={discordIcon} alt="discord" className="w-[16px] h-[16px] object-contain opacity-80" />
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-end">
                        <div className="max-w-[680px]">
                            <p className="text-white/85 text-[22px] leading-[40px] font-medium">
                                We Are A Digital Agency Passionate About Storytelling,
                                Visual Design, And Technology 🚀. The Team Collaborates
                                With Small To Large Companies Around The World To Help Them
                                Engage Their Audiences And Build Brand Recognition 🌍.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutHero;