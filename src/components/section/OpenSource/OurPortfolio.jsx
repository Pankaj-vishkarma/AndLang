import React from "react";

import project1Img from "../../../assets/images/opensource/project1.svg";
import project2Img from "../../../assets/images/opensource/project2.svg";
import project3Img from "../../../assets/images/opensource/project3.svg";

const projects = [
    {
        id: 1,
        tag: "E-commerce, 3D Builder, Esports",
        title: "Habitant nibh.",
        description: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Donec laoreet tortor.",
        link: "View Project in detail",
        image: project1Img,
        imageAlt: "Architecture glass dome interior",
        layout: "text-left",
    },
    {
        id: 2,
        tag: "E-commerce, 3D Builder, Esports",
        title: "Mauris elit.",
        description: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Donec laoreet tortor.",
        link: "View Project in detail",
        image: project2Img,
        imageAlt: "Orange background with phone and notebook",
        layout: "text-right",
    },
    {
        id: 3,
        tag: "E-commerce, 3D Builder, Esports",
        title: "Ultrices.",
        description: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Donec laoreet tortor.",
        link: "View Project in detail",
        image: project3Img,
        imageAlt: "Abstract geometric silver triangles",
        layout: "text-left",
    },
];

const OurPortfolio = () => {
    return (
        <section className="w-full bg-[#1a1e27]
            px-[20px] lg:px-[40px]
            pt-[36px] lg:pt-[48px]
            pb-[36px] lg:pb-[48px]">

            {/* HEADING */}

            {/* MOBILE & TABLET — single line */}
            <h1 className="lg:hidden text-white
                text-[28px] leading-[34px]
                font-extrabold tracking-[-0.5px]
                mb-[28px]">
                Our Projects
            </h1>

            {/* DESKTOP — UNCHANGED */}
            <h1 className="hidden lg:block text-white
                w-[302px] h-[172px]
                text-[74px] leading-[86px]
                font-medium tracking-[0%]
                opacity-100
                mb-[44px]">
                Our<br />Protfolio
            </h1>

            {/* PROJECT ROWS */}
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={index !== projects.length - 1 ? "border-b border-white/[0.06]" : ""}
                    >

                        {/* MOBILE & TABLET — stacked: image top, content below */}
                        <div className="flex flex-col lg:hidden py-[28px] gap-[14px]">

                            {/* IMAGE — always on top */}
                            <div className="rounded-[6px] overflow-hidden w-full h-[200px] bg-[#2a2e38]">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    className="w-full h-full object-cover block rounded-[6px]"
                                />
                            </div>

                            {/* CONTENT — below image */}
                            <p className="text-[#8b909e] text-[10px] tracking-[0.04em] font-normal">
                                {project.tag}
                            </p>

                            <h2 className="text-[#3ecf8e] text-[24px] font-extrabold leading-[1.1] tracking-[-0.3px]">
                                {project.title}
                            </h2>

                            <p className="text-[#c5c9d4] text-[13px] font-bold leading-[1.65] whitespace-pre-line">
                                {project.description}
                            </p>

                            <span className="text-[#8b909e] text-[11px] underline underline-offset-2 cursor-pointer">
                                {project.link}
                            </span>

                        </div>

                        {/* DESKTOP — UNCHANGED */}
                        <div className={`hidden lg:grid grid-cols-2 gap-[28px] items-center py-[40px]`}>

                            {/* Content Block */}
                            <div className={project.layout === "text-right" ? "order-2" : "order-1"}>
                                <p className="text-[#8b909e] text-[11px] tracking-[0.04em] font-normal mb-[10px]">
                                    {project.tag}
                                </p>
                                <h2 className="text-[#3ecf8e] text-[30px] font-extrabold leading-[1.1] tracking-[-0.3px] mb-[14px]">
                                    {project.title}
                                </h2>
                                <p className="text-[#c5c9d4] text-[14px] font-bold leading-[1.65] mb-[20px] whitespace-pre-line">
                                    {project.description}
                                </p>
                                <span className="text-[#8b909e] text-[12px] underline underline-offset-2 cursor-pointer">
                                    {project.link}
                                </span>
                            </div>

                            {/* Image Block */}
                            <div className={project.layout === "text-right" ? "order-1" : "order-2"}>
                                <div className="rounded-[6px] overflow-hidden w-[700px] h-[450px] bg-[#2a2e38]">
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        className="w-full h-full object-cover block rounded-[6px]"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default OurPortfolio;