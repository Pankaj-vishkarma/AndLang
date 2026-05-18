// src/components/section/About/MeetTeam.jsx

import React from "react";

import {
    FaLinkedinIn,
    FaDribbble,
    FaTwitter,
    FaBehance,
} from "react-icons/fa";

import team1 from "../../../assets/images/about/team1.svg";
import team2 from "../../../assets/images/about/team2.svg";
import team3 from "../../../assets/images/about/team3.svg";
import team4 from "../../../assets/images/about/team4.svg";
import team5 from "../../../assets/images/about/team5.svg";
import team6 from "../../../assets/images/about/team6.svg";

const teamMembers = [
    {
        id: 1,
        image: team1,
        name: "Arcu velit",
        role: "UI Designer",
    },
    {
        id: 2,
        image: team2,
        name: "Montes",
        role: "UI Designer",
    },
    {
        id: 3,
        image: team3,
        name: "Massa urna",
        role: "UI Designer",
    },
    {
        id: 4,
        image: team4,
        name: "Urna viverra",
        role: "UI Designer",
    },
    {
        id: 5,
        image: team5,
        name: "Dima Venglinski",
        role: "UI Designer",
    },
    {
        id: 6,
        image: team6,
        name: "Suspendisse",
        role: "UI Designer",
    },
];

const MeetTeam = () => {
    return (
        <section className="relative overflow-hidden bg-[#171B2D] text-white">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_45%)]"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-[34px] md:px-[60px] lg:px-[78px] pt-[82px] pb-[95px]">

                {/* Heading */}
                <div className="max-w-[520px]">

                    <h2 className="text-[58px] leading-[66px] font-semibold tracking-[-2px]">
                        Meet Our
                        <br />
                        Multi-Talented Team
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[58px] gap-y-[78px] mt-[64px]">

                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex flex-col items-center text-center"
                        >

                            {/* Image */}
                            <div className="w-full max-w-[292px] h-[292px] overflow-hidden">

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="mt-[18px] text-[25px] leading-none font-semibold tracking-[-0.5px]">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p className="mt-[10px] text-[13px] text-[#B8BDD0] font-medium">
                                UI Designer
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-[18px] mt-[18px] text-white">

                                <FaLinkedinIn
                                    size={12}
                                    className="cursor-pointer hover:opacity-80 transition"
                                />

                                <FaDribbble
                                    size={12}
                                    className="cursor-pointer hover:opacity-80 transition"
                                />

                                <FaBehance
                                    size={12}
                                    className="cursor-pointer hover:opacity-80 transition"
                                />

                                <FaTwitter
                                    size={12}
                                    className="cursor-pointer hover:opacity-80 transition"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;