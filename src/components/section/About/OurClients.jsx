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
            "Through years of experience you’ll get exactly what you want, in the style you want. We only include in every aspect and nothing is impossible.",
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(29,78,216,0.20),transparent_65%)]"></div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-10 lg:px-20 pt-[90px] pb-[120px]">

                {/* ================= OUR CLIENTS ================= */}
                <div className="text-center">

                    <h2 className="text-[52px] font-semibold leading-none tracking-[-1px]">
                        Our Clients
                    </h2>

                    <p className="max-w-[520px] mx-auto mt-5 text-[15px] leading-[28px] text-[#B6B8C4]">
                        We believe brands are the cultural connection between companies and
                        their communities.
                    </p>

                    {/* Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-[80px] mt-[70px]">

                        <img
                            src={client1}
                            alt="limehome"
                            className="h-[28px] object-contain opacity-90"
                        />

                        <h3 className="text-[32px] font-semibold opacity-90">
                            Bloomberg
                        </h3>

                        <div className="leading-tight opacity-90">
                            <h3 className="text-[12px] tracking-[4px] uppercase">
                                Business
                            </h3>

                            <h3 className="text-[12px] tracking-[4px] uppercase mt-1">
                                Insider
                            </h3>
                        </div>

                        <h3
                            className="text-[40px] italic font-semibold opacity-90"
                            style={{ fontFamily: "Georgia, serif" }}
                        >
                            Forbes
                        </h3>

                        <h3 className="text-[20px] font-semibold tracking-[2px] uppercase opacity-90">
                            ▲ ATLASSIAN
                        </h3>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-white/10 mt-[75px]"></div>

                    {/* Testimonials */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px] mt-[70px] text-left">

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
                                        <h4 className="text-[16px] font-semibold">
                                            {item.name}
                                        </h4>

                                        <p className="text-[13px] text-[#A1A1AA] mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-white/10 mt-[85px]"></div>
                </div>

                {/* ================= WHY CHOOSE US ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[120px] mt-[120px]">

                    {/* Left */}
                    <div>

                        <h2 className="text-[76px] leading-[78px] font-semibold tracking-[-3px]">
                            Why
                            <br />
                            Choose Us
                        </h2>
                    </div>

                    {/* Right */}
                    <div>

                        <p className="text-[20px] leading-[42px] text-[#C7CBD7]">
                            You should be relieved to know we have the best experience to give
                            you what you want, to the price you want. We do not compete with
                            a five dollar website, and what do you get from that? More stress
                            and expenses.
                            <br />
                            <br />
                            No thank you! When you buy from Andlang you are assured you are
                            getting high quality design, legal and paid for templates,
                            plugins that are legal and honour in what we do.
                        </p>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[70px] mt-[110px] text-center">

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