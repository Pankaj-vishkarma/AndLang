import React from "react";

// Replace these paths with your actual local image paths
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
        title: "Curabitur.",
        description: "Fringilla non libero ullamcorper in varius\naugue. Quam nulla rutrum sit sagittis nunc.",
        link: "View Project in detail",
        image: project2Img,
        imageAlt: "Orange background with phone and notebook",
        layout: "text-right",
    },
    {
        id: 3,
        tag: "E-commerce, 3D Builder, Esports",
        title: "Porttitor.",
        description: "Pellentesque in varius faucibus pellentesque\npraesent sit blandit auctor. Quis vulputate.",
        link: "View Project in detail",
        image: project3Img,
        imageAlt: "Abstract geometric silver triangles",
        layout: "text-left",
    },
];

const OurPortfolio = () => {
    return (
        <section className="w-full bg-[#1a1e27] px-[40px] pt-[48px] pb-[48px]">

            {/* Section Heading */}
            <h1 className="text-white text-[38px] font-extrabold leading-[1.1] tracking-[-0.5px] mb-[44px]">
                Our<br />Protfolio
            </h1>

            {/* Project Rows */}
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`grid grid-cols-2 gap-[28px] items-center py-[40px] ${index !== projects.length - 1 ? "border-b border-white/[0.06]" : ""
                            }`}
                    >
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
                            <div className="rounded-[6px] overflow-hidden w-full aspect-[4/3] bg-[#2a2e38]">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                    className="w-full h-full object-cover block rounded-[6px]"
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default OurPortfolio;