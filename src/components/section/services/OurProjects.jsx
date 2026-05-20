// components/sections/services/OurProjects.jsx

import projectImg1 from "../../../assets/images/services/project-1.svg";
import projectImg2 from "../../../assets/images/services/project-2.svg";
import projectImg3 from "../../../assets/images/services/project-3.svg";

const projects = [
    {
        id: 1,
        tags: "E-commerce, 3D Builder, Esports",
        title: "Habitant nibh.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Danec laoreet tortor.",
        image: projectImg1,
        imageLeft: false,
    },
    {
        id: 2,
        tags: "E-commerce, 3D Builder, Esports",
        title: "Mauris elit.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Danec laoreet tortor.",
        image: projectImg2,
        imageLeft: true,
    },
    {
        id: 3,
        tags: "E-commerce, 3D Builder, Esports",
        title: "Ultrices.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Danec laoreet tortor.",
        image: projectImg3,
        imageLeft: false,
    },
];

const OurProjects = () => {
    return (
        <section className="w-full bg-[#071421]">

            {/* MAIN CONTAINER */}
            <div className="max-w-[1370px] mx-auto
                px-[20px] sm:px-[32px] lg:px-[45px]
                pt-[52px] sm:pt-[72px] lg:pt-[100px]
                pb-[60px] sm:pb-[90px] lg:pb-[120px]">

                {/* SECTION TITLE */}
                <div className="mb-[36px] sm:mb-[52px] lg:mb-[70px]">

                    {/* MOBILE & TABLET — single line, smaller */}
                    <h2 className="lg:hidden text-white
                        text-[36px] sm:text-[48px]
                        leading-[44px] sm:leading-[58px]
                        font-semibold tracking-[-1px]">
                        Our Projects
                    </h2>

                    {/* DESKTOP — UNCHANGED */}
                    <h2 className="hidden lg:block text-white text-[64px] leading-[78px] font-semibold tracking-[-1.5px]">
                        Our
                        <br />
                        Projects
                    </h2>

                </div>

                {/* PROJECTS LIST */}
                <div className="flex flex-col">

                    {projects.map((project) => (
                        <div key={project.id}>

                            {/* DIVIDER TOP */}
                            <div className="w-full h-[1px] bg-[#1e2d3d]" />

                            {/* ── MOBILE & TABLET — always: image top, content below ── */}
                            <div className="flex flex-col lg:hidden gap-[0px] py-[32px] sm:py-[44px]">

                                {/* IMAGE — always on top */}
                                <div className="overflow-hidden mb-[20px] sm:mb-[28px]">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[200px] sm:h-[260px] object-cover"
                                    />
                                </div>

                                {/* CONTENT — below image */}
                                <div className="flex flex-col gap-[10px] sm:gap-[14px]">

                                    {/* TAGS */}
                                    <p className="text-white/40 text-[11px] sm:text-[12px] font-medium tracking-wide">
                                        {project.tags}
                                    </p>

                                    {/* TITLE */}
                                    <h3 className="text-[#42FFB3] text-[28px] sm:text-[36px] leading-[34px] sm:leading-[44px] font-bold italic tracking-[-0.5px]">
                                        {project.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-white/60 text-[13px] sm:text-[14px] leading-[24px] sm:leading-[26px]">
                                        {project.description}
                                    </p>

                                    {/* LINK */}
                                    <button className="text-[#42FFB3] text-[12px] sm:text-[13px] font-medium underline underline-offset-4 hover:opacity-70 transition text-left w-fit mt-[4px]">
                                        View Project in detail
                                    </button>

                                </div>

                            </div>

                            {/* ── DESKTOP — UNCHANGED ── */}
                            <div className={`hidden lg:grid grid-cols-2 gap-[60px] items-center py-[60px]`}>

                                {project.imageLeft ? (
                                    <>
                                        {/* IMAGE — LEFT */}
                                        <div className="overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-[300px] object-cover"
                                            />
                                        </div>

                                        {/* CONTENT — RIGHT */}
                                        <div className="flex flex-col gap-[18px]">
                                            <p className="text-white/40 text-[13px] font-medium tracking-wide">
                                                {project.tags}
                                            </p>
                                            <h3 className="text-[#42FFB3] text-[52px] leading-[60px] font-bold italic tracking-[-1px]">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/60 text-[15px] leading-[28px] max-w-[400px]">
                                                {project.description}
                                            </p>
                                            <button className="text-[#42FFB3] text-[13px] font-medium underline underline-offset-4 hover:opacity-70 transition text-left w-fit">
                                                View Project in detail
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* CONTENT — LEFT */}
                                        <div className="flex flex-col gap-[18px]">
                                            <p className="text-white/40 text-[13px] font-medium tracking-wide">
                                                {project.tags}
                                            </p>
                                            <h3 className="text-[#42FFB3] text-[52px] leading-[60px] font-bold italic tracking-[-1px]">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/60 text-[15px] leading-[28px] max-w-[400px]">
                                                {project.description}
                                            </p>
                                            <button className="text-[#42FFB3] text-[13px] font-medium underline underline-offset-4 hover:opacity-70 transition text-left w-fit">
                                                View Project in detail
                                            </button>
                                        </div>

                                        {/* IMAGE — RIGHT */}
                                        <div className="overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-[300px] object-cover"
                                            />
                                        </div>
                                    </>
                                )}

                            </div>

                        </div>
                    ))}

                    {/* FINAL BOTTOM DIVIDER */}
                    <div className="w-full h-[1px] bg-[#1e2d3d]" />

                </div>

            </div>

        </section>
    );
};

export default OurProjects;