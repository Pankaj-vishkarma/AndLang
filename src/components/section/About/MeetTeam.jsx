// src/components/section/About/MeetTeam.jsx

import React from "react";
import { FaLinkedinIn, FaDribbble, FaTwitter, FaBehance } from "react-icons/fa";

import team1 from "../../../assets/images/about/team1.svg";
import team2 from "../../../assets/images/about/team2.svg";
import team3 from "../../../assets/images/about/team3.svg";
import team4 from "../../../assets/images/about/team4.svg";
import team5 from "../../../assets/images/about/team5.svg";
import team6 from "../../../assets/images/about/team6.svg";

const teamMembers = [
    { id: 1, image: team1, name: "Arcu velit", role: "UI Designer" },
    { id: 2, image: team2, name: "Montes", role: "UI Designer" },
    { id: 3, image: team3, name: "Urna viverra", role: "UI Designer" },
    { id: 4, image: team4, name: "Massa urna", role: "UI Designer" },
    { id: 5, image: team5, name: "Dima Venglinski", role: "UI Designer" },
    { id: 6, image: team6, name: "Suspendisse", role: "UI Designer" },
];

const MeetTeam = () => {
    return (
        <section className="relative overflow-hidden bg-[#171B2D] text-white">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_45%)]" />

            <div className="relative z-10 max-w-[1440px] mx-auto
                px-[20px] sm:px-[34px] md:px-[60px] lg:px-[78px]
                pt-[48px] sm:pt-[64px] lg:pt-[82px]
                pb-[56px] sm:pb-[72px] lg:pb-[95px]">

                {/* HEADING */}
                <div className="max-w-[520px]">
                    <h2 className="
                        text-[32px] sm:text-[42px] lg:text-[58px]
                        leading-[40px] sm:leading-[52px] lg:leading-[66px]
                        font-semibold tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px]">
                        Meet Our
                        <br />
                        Multi-Talented Team
                    </h2>
                </div>

                {/* GRID — 2 cols mobile, 2 cols tablet, 3 cols desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-3
                    gap-x-[16px] sm:gap-x-[28px] lg:gap-x-[58px]
                    gap-y-[36px] sm:gap-y-[52px] lg:gap-y-[78px]
                    mt-[36px] sm:mt-[48px] lg:mt-[64px]">

                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center text-center">

                            {/* IMAGE */}
                            <div className="w-full aspect-square overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* NAME */}
                            <h3 className="
                                mt-[12px] sm:mt-[16px] lg:mt-[18px]
                                text-[14px] sm:text-[18px] lg:text-[25px]
                                leading-none font-semibold tracking-[-0.3px] lg:tracking-[-0.5px]">
                                {member.name}
                            </h3>

                            {/* ROLE */}
                            <p className="mt-[6px] lg:mt-[10px]
                                text-[11px] sm:text-[12px] lg:text-[13px]
                                text-[#B8BDD0] font-medium">
                                {member.role}
                            </p>

                            {/* SOCIAL ICONS */}
                            <div className="flex items-center gap-[12px] sm:gap-[14px] lg:gap-[18px] mt-[12px] sm:mt-[14px] lg:mt-[18px] text-white">
                                <FaLinkedinIn size={10} className="cursor-pointer hover:opacity-80 transition" />
                                <FaDribbble size={10} className="cursor-pointer hover:opacity-80 transition" />
                                <FaBehance size={10} className="cursor-pointer hover:opacity-80 transition" />
                                <FaTwitter size={10} className="cursor-pointer hover:opacity-80 transition" />
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MeetTeam;