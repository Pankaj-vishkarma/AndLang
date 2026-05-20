// src/components/section/About/OurClients.jsx

import React from "react";

import client1 from "../../../assets/images/about/limehome.svg";

import user1 from "../../../assets/images/about/user1.svg";
import user2 from "../../../assets/images/about/user2.svg";
import user3 from "../../../assets/images/about/user3.svg";

import qualityIcon from "../../../assets/icons/quality.png";
import assistanceIcon from "../../../assets/icons/assistance.png";
import deliveryIcon from "../../../assets/icons/delivery.png";

const testimonials = [
    {
        id: 1,
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tempor quam suspendisse ut morbi sed leo maecenas."`,
        image: user1,
        name: "Max Ward",
        role: "Company Name",
    },
    {
        id: 2,
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit eget pretium in nibh. Sed fringilla sit bibendum dui nunc risus. Neque dictum in tempor ac."`,
        image: user2,
        name: "Max Ward",
        role: "Company Name",
    },
    {
        id: 3,
        text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tempor quam suspendisse ut morbi sed leo maecenas."`,
        image: user3,
        name: "Max Ward",
        role: "Company Name",
    },
];

const features = [
    {
        id: 1,
        icon: qualityIcon,
        title: "Best Quality",
        description:
            "Through years of experience you'll get exactly what you want, in the style you want. We only include in every aspect and nothing is impossible.",
    },
    {
        id: 2,
        icon: assistanceIcon,
        title: "Gold Assistance",
        description:
            "You should not have to wait for your worries concerns to work for you. We have workers around the world so a request should be responded in a couple of hours.",
    },
    {
        id: 3,
        icon: deliveryIcon,
        title: "On Time Delivery",
        description:
            "We take on time work for busy brands through the right. You can use for reliability and your time is very important for us.",
    },
];

const OurClients = () => {
    return (
        <section className="relative overflow-hidden bg-[#020817] text-white">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.20),transparent_65%)]" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-[20px] sm:px-[32px] lg:px-20 pt-[60px] sm:pt-[75px] lg:pt-[90px] pb-[60px] sm:pb-[90px] lg:pb-[120px]">

                {/* ── OUR CLIENTS ── */}
                <div className="text-center">

                    {/* TITLE */}
                    <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-semibold leading-none tracking-[-1px]">
                        Our Clients
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="max-w-[520px] mx-auto mt-[14px] lg:mt-5 text-[13px] sm:text-[14px] lg:text-[15px] leading-[24px] sm:leading-[26px] lg:leading-[28px] text-[#B6B8C4]">
                        We believe brands are the cultural connection between companies and
                        their communities.
                    </p>

                    {/* LOGOS — mobile: 2-col grid, desktop: flex row */}
                    <div className="mt-[40px] sm:mt-[55px] lg:mt-[70px]">

                        {/* MOBILE & TABLET */}
                        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px] items-center justify-items-center lg:hidden">

                            <img
                                src={client1}
                                alt="limehome"
                                className="h-[22px] object-contain opacity-90"
                            />

                            <h3 className="text-[24px] font-semibold opacity-90">
                                Bloomberg
                            </h3>

                            <div className="leading-tight opacity-90">
                                <h3 className="text-[10px] tracking-[3px] uppercase">Business</h3>
                                <h3 className="text-[10px] tracking-[3px] uppercase mt-1">Insider</h3>
                            </div>

                            <h3 className="text-[30px] italic font-semibold opacity-90" style={{ fontFamily: "Georgia, serif" }}>
                                Forbes
                            </h3>

                            <h3 className="col-span-2 text-[16px] font-semibold tracking-[2px] uppercase opacity-90">
                                ▲ ATLASSIAN
                            </h3>

                        </div>

                        {/* DESKTOP — UNCHANGED */}
                        <div className="hidden lg:flex flex-wrap justify-center items-center gap-[80px]">

                            <img
                                src={client1}
                                alt="limehome"
                                className="h-[28px] object-contain opacity-90"
                            />

                            <h3 className="text-[32px] font-semibold opacity-90">
                                Bloomberg
                            </h3>

                            <div className="leading-tight opacity-90">
                                <h3 className="text-[12px] tracking-[4px] uppercase">Business</h3>
                                <h3 className="text-[12px] tracking-[4px] uppercase mt-1">Insider</h3>
                            </div>

                            <h3 className="text-[40px] italic font-semibold opacity-90" style={{ fontFamily: "Georgia, serif" }}>
                                Forbes
                            </h3>

                            <h3 className="text-[20px] font-semibold tracking-[2px] uppercase opacity-90">
                                ▲ ATLASSIAN
                            </h3>

                        </div>

                    </div>

                    {/* DIVIDER */}
                    <div className="w-full h-[1px] bg-white/10 mt-[40px] sm:mt-[55px] lg:mt-[75px]" />

                    {/* TESTIMONIALS — mobile: horizontal scroll, desktop: 3-col grid */}

                    {/* MOBILE & TABLET */}
                    <div className="flex lg:hidden gap-[24px] mt-[40px] sm:mt-[55px] overflow-x-auto pb-[12px] snap-x snap-mandatory scrollbar-hide -mx-[20px] px-[20px] sm:-mx-[32px] sm:px-[32px]">
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-[80vw] sm:min-w-[60vw] snap-start flex-shrink-0 text-left"
                            >
                                <p className="text-[18px] sm:text-[22px] leading-[34px] sm:leading-[42px] font-light text-white">
                                    {item.text}
                                </p>
                                <div className="flex items-center gap-3 mt-[28px]">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[44px] h-[44px] rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-[14px] font-semibold">{item.name}</h4>
                                        <p className="text-[12px] text-[#A1A1AA] mt-[2px]">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP — UNCHANGED */}
                    <div className="hidden lg:grid grid-cols-3 gap-[70px] mt-[70px] text-left">
                        {testimonials.map((item) => (
                            <div key={item.id}>
                                <p className="text-[28px] leading-[54px] font-light text-white">
                                    {item.text}
                                </p>
                                <div className="flex items-center gap-4 mt-10">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[54px] h-[54px] rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-[16px] font-semibold">{item.name}</h4>
                                        <p className="text-[13px] text-[#A1A1AA] mt-1">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* DIVIDER */}
                    <div className="w-full h-[1px] bg-white/10 mt-[50px] sm:mt-[70px] lg:mt-[85px]" />

                </div>

                {/* ── WHY CHOOSE US ── */}

                {/* MOBILE & TABLET */}
                <div className="flex flex-col lg:hidden mt-[50px] sm:mt-[70px]">

                    <h2 className="text-[42px] sm:text-[56px] leading-[50px] sm:leading-[64px] font-semibold tracking-[-2px] text-center">
                        Why
                        <br />
                        Choose Us
                    </h2>

                    <p className="text-[14px] sm:text-[16px] leading-[28px] sm:leading-[34px] text-[#C7CBD7] mt-[24px] sm:mt-[32px] text-center">
                        You should be relieved to know we have the best experience to give
                        you what you want, to the price you want. We do not compete with
                        a five dollar website, and what do you get from that? More stress
                        and expenses.
                        <br /><br />
                        No thank you! When you buy from Andlang you are assured you are
                        getting high quality design, legal and paid for templates,
                        plugins that are legal and honour in what we do.
                    </p>

                </div>

                {/* DESKTOP — UNCHANGED */}
                <div className="hidden lg:grid grid-cols-[420px_1fr] gap-[120px] mt-[120px]">

                    <div>
                        <h2 className="text-[76px] leading-[78px] font-semibold tracking-[-3px]">
                            Why
                            <br />
                            Choose Us
                        </h2>
                    </div>

                    <div>
                        <p className="text-[20px] leading-[42px] text-[#C7CBD7]">
                            You should be relieved to know we have the best experience to give
                            you what you want, to the price you want. We do not compete with
                            a five dollar website, and what do you get from that? More stress
                            and expenses.
                            <br /><br />
                            No thank you! When you buy from Andlang you are assured you are
                            getting high quality design, legal and paid for templates,
                            plugins that are legal and honour in what we do.
                        </p>
                    </div>

                </div>

                {/* FEATURES — mobile: single col, desktop: 3-col */}

                {/* MOBILE & TABLET */}
                <div className="flex flex-col lg:hidden gap-[48px] sm:gap-[56px] mt-[48px] sm:mt-[64px] text-center">
                    {features.map((feature) => (
                        <div key={feature.id}>
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] object-contain mx-auto"
                            />
                            <h3 className="mt-[20px] text-[22px] sm:text-[26px] font-semibold">
                                {feature.title}
                            </h3>
                            <p className="mt-[14px] text-[13px] sm:text-[15px] leading-[26px] sm:leading-[30px] text-[#B9BDC8] max-w-[320px] mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* DESKTOP — UNCHANGED */}
                <div className="hidden lg:grid grid-cols-3 gap-[70px] mt-[110px] text-center">
                    {features.map((feature) => (
                        <div key={feature.id}>
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-[80px] h-[80px] object-contain mx-auto"
                            />
                            <h3 className="mt-8 text-[30px] font-semibold">
                                {feature.title}
                            </h3>
                            <p className="mt-5 text-[16px] leading-[32px] text-[#B9BDC8] max-w-[330px] mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurClients;