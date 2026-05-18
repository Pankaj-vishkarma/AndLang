

import mediumIcon from "../../../assets/icons/medium.png";
import behanceIcon from "../../../assets/icons/behance.png";
import dribbbleIcon from "../../../assets/icons/dribbble.png";

const AboutHero = () => {
    return (
        <section className="relative w-full h-[720px] overflow-hidden bg-[#071421]">

            {/* 🔹 BACKGROUND GLOWS */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* LEFT GLOW */}
                <div className="absolute top-[120px] left-[-140px] w-[260px] h-[260px] rounded-full bg-[#42FFB3] opacity-20 blur-[110px]" />

                {/* CENTER BOTTOM GLOW */}
                <div className="absolute bottom-[-120px] left-[34%] w-[260px] h-[260px] rounded-full bg-[#42FFB3] opacity-15 blur-[120px]" />

                {/* RIGHT GLOW */}
                <div className="absolute top-[210px] right-[-100px] w-[240px] h-[240px] rounded-full bg-[#42FFB3] opacity-20 blur-[110px]" />

            </div>

            {/* 🔹 MAIN CONTAINER */}
            <div className="relative z-10 max-w-[1370px] mx-auto px-[45px] pt-[120px]">

                {/* GRID */}
                <div className="grid grid-cols-[720px_1fr] items-center">

                    {/* LEFT */}
                    <div>

                        {/* HEADING */}
                        <h1 className="text-white text-[56px] leading-[86px] font-semibold tracking-[-1.5px] max-w-[720px]">

                            We Strive To Make The World
                            <br />

                            A Better Place To{" "}

                            {/* HIGHLIGHT */}
                            <span className="relative inline-flex items-center justify-center">

                                <span className="relative z-10">
                                    Live And Grow
                                </span>

                                {/* ELLIPSE */}
                                <span className="absolute w-[108%] h-[58px] border-[2px] border-[#42FFB3] rounded-full rotate-[-5deg]" />

                            </span>

                        </h1>

                        {/* SOCIAL ICONS */}
                        <div className="flex items-center gap-[22px] mt-[42px]">

                            <img
                                src={mediumIcon}
                                alt="medium"
                                className="w-[16px] h-[16px] object-contain opacity-80"
                            />

                            <img
                                src={behanceIcon}
                                alt="behance"
                                className="w-[16px] h-[16px] object-contain opacity-80"
                            />

                            <img
                                src={dribbbleIcon}
                                alt="dribbble"
                                className="w-[16px] h-[16px] object-contain opacity-80"
                            />

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-end">

                        <div className="max-w-[470px]">

                            {/* DESCRIPTION */}
                            <p className="text-white/85 text-[15px] leading-[40px] font-medium">

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