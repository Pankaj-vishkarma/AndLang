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
        title: "Curabitur.",
        description:
            "Fringilla non libero ullamcorper in varius augue. Quam nulla rutrum sit sagittis nunc.",
        image: projectImg2,
        imageLeft: true,
    },
    {
        id: 3,
        tags: "E-commerce, 3D Builder, Esports",
        title: "Porttitor.",
        description:
            "Pellentesque in varius faucibus pellentesque praesent sit blandit auctor. Quis vulputate.",
        image: projectImg3,
        imageLeft: false,
    },
];

const OurProjects = () => {
    return (
        <section className="w-full bg-[#071421]">

            {/* MAIN CONTAINER */}
            <div className="max-w-[1370px] mx-auto px-[45px] pt-[100px] pb-[120px]">

                {/* 🔹 SECTION TITLE */}
                <div className="mb-[70px]">
                    <h2 className="text-white text-[64px] leading-[78px] font-semibold tracking-[-1.5px]">
                        Our
                        <br />
                        Projects
                    </h2>
                </div>

                {/* 🔹 PROJECTS LIST */}
                <div className="flex flex-col">

                    {projects.map((project, index) => (

                        <div key={project.id}>

                            {/* DIVIDER TOP */}
                            <div className="w-full h-[1px] bg-[#1e2d3d]" />

                            {/* PROJECT ROW */}
                            <div className={`grid grid-cols-2 gap-[60px] items-center py-[60px] ${project.imageLeft ? "direction-reverse" : ""}`}>

                                {/* LEFT — Content or Image depending on imageLeft */}
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

                                            {/* TAGS */}
                                            <p className="text-white/40 text-[13px] font-medium tracking-wide">
                                                {project.tags}
                                            </p>

                                            {/* TITLE */}
                                            <h3 className="text-[#42FFB3] text-[52px] leading-[60px] font-bold italic tracking-[-1px]">
                                                {project.title}
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <p className="text-white/60 text-[15px] leading-[28px] max-w-[400px]">
                                                {project.description}
                                            </p>

                                            {/* LINK */}
                                            <button className="text-[#42FFB3] text-[13px] font-medium underline underline-offset-4 hover:opacity-70 transition text-left w-fit">
                                                View Project in detail
                                            </button>

                                        </div>
                                    </>

                                ) : (

                                    <>
                                        {/* CONTENT — LEFT */}
                                        <div className="flex flex-col gap-[18px]">

                                            {/* TAGS */}
                                            <p className="text-white/40 text-[13px] font-medium tracking-wide">
                                                {project.tags}
                                            </p>

                                            {/* TITLE */}
                                            <h3 className="text-[#42FFB3] text-[52px] leading-[60px] font-bold italic tracking-[-1px]">
                                                {project.title}
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <p className="text-white/60 text-[15px] leading-[28px] max-w-[400px]">
                                                {project.description}
                                            </p>

                                            {/* LINK */}
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