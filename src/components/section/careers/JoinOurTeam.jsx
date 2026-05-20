import React from "react";

// Replace with your actual local image path
import teamImg from "../../../assets/images/careers/join-team.svg";

const JoinOurTeam = () => {
    return (
        <section className="w-full bg-[#1a1e27] overflow-hidden">
            <div className="max-w-[1370px] mx-auto px-[45px]">

                <div className="grid grid-cols-[1.1fr_0.9fr] gap-[367px] items-center min-h-[550px]">

                    {/* ── LEFT: Text Content ── */}
                    <div className="flex flex-col gap-[20px] py-[80px] pr-[60px]">

                        {/* Heading */}
                        <h2 className="text-[#3ecf8e] text-[48px] font-extrabold leading-[1.15] tracking-[-0.5px]">
                            Join Our Team
                        </h2>

                        {/* Quote */}
                        <p className="text-white text-[18px] font-bold leading-[1.4]">
                            "Innovative Solutions for your Unique<br />
                            Business Problems"
                        </p>

                        {/* Body */}
                        <p className="text-white/55 text-[13px] leading-[22px] max-w-[400px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                            aenean curabitur diam vitae volutpat tincidunt turpis.
                            Cras odio diam leo aenean iaculis. Nullam sollicitudin ultrices
                            elementum, at a. Etiam amet sit aliquet
                        </p>

                        {/* Button */}
                        <div className="mt-[8px]">
                            <button className="flex items-center gap-[10px] h-[48px] px-[28px] bg-[#ff4500] hover:bg-[#e03d00] text-white text-[14px] font-semibold rounded-full transition-colors duration-300 whitespace-nowrap">
                                See Open Positions
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>

                    </div>

                    {/* ── RIGHT: Image ── */}
                    <div className="relative h-full w-[326px] min-h-[480px]">
                        <div className="absolute top-0 bottom-[68px] left-0 right-[-45px] overflow-hidden">
                            <img
                                src={teamImg}
                                alt="Team working in office"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default JoinOurTeam;