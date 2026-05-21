// components/sections/services/ServicesList.jsx

const services = [
    {
        number: "01.",
        title: "Web Design",
        description:
            "Web design is your face to the public, and is important to represent you, your business and your brand. We can help with A-Z in all price ranges.",
        active: true,
    },
    {
        number: "02.",
        title: "Graphic Design",
        description:
            "If its a logo you need, a UI or UX, business card or any graphic design work we are here for you, helping you find what you need in the price range that fits you.",
        active: false,
    },
    {
        number: "03.",
        title: "Programming",
        description:
            "Programming is one of our passions. We can help you create a script or a full fledged application. Only the fantasy is the limit. Send us a message to discuss what you need!",
        active: false,
    },
    {
        number: "04.",
        title: "Project Management",
        description:
            "We are professional project managers. If you have a project abroad and does not want to hazzle with the headache of keeping your project on trrac, we can help you keeping deadlines and deliveries on time. We provide project tracking software to make life easier.",
        active: false,
    },
    {
        number: "05.",
        title: "Smart Home Automation",
        description:
            "We are providing all types of graphic design, and do not discriminate on content. We happily do projects for non religious and LGBT purposes where others do not.",
        active: false,
    },
];

const ServicesList = () => {
    return (
        <section className="w-full bg-white dark:bg-[#071421]">

            {/* MAIN CONTAINER */}
            <div className="max-w-[1370px] mx-auto
                px-[20px] sm:px-[32px] lg:px-[45px]
                pb-[60px] sm:pb-[90px] lg:pb-[120px]">

                <div className="flex flex-col">

                    {services.map((service, index) => (
                        <div key={index}>

                            {/* FIXED: was bg-[#1e2d3d] hardcoded */}
                            <div className="w-full h-[1px] bg-black/10 dark:bg-[#1e2d3d]" />

                            {/* ── MOBILE & TABLET ROW ── */}
                            <div className="flex flex-col lg:hidden py-[28px] sm:py-[36px] gap-[12px] sm:gap-[14px]">

                                <div className="flex items-baseline gap-[12px] sm:gap-[16px]">

                                    {/* FIXED: inactive was text-white */}
                                    <span className={`text-[20px] sm:text-[24px] font-bold leading-none ${service.active ? "text-[#42FFB3]" : "text-[#171B2D] dark:text-white"}`}>
                                        {service.number}
                                    </span>

                                    {/* FIXED: inactive was text-white */}
                                    <h3 className={`text-[20px] sm:text-[24px] font-bold leading-tight ${service.active ? "text-[#42FFB3]" : "text-[#171B2D] dark:text-white"}`}>
                                        {service.title}
                                    </h3>

                                </div>

                                {/* FIXED: was text-white/60 */}
                                <p className="text-black/60 dark:text-white/60 text-[13px] sm:text-[14px] leading-[24px] sm:leading-[26px]">
                                    {service.description}
                                </p>

                                {/* FIXED: inactive was text-white */}
                                <button className={`text-[12px] sm:text-[13px] font-semibold hover:opacity-70 transition underline underline-offset-4 text-left w-fit ${service.active ? "text-[#FF4D1C]" : "text-[#171B2D] dark:text-white"}`}>
                                    More Information
                                </button>

                            </div>

                            {/* ── DESKTOP ROW ── */}
                            <div className="hidden lg:grid grid-cols-[120px_1fr_180px] items-start py-[48px] gap-[40px]">

                                {/* FIXED: inactive was text-white */}
                                <div className={`text-[32px] font-bold leading-none pt-[6px] ${service.active ? "text-[#42FFB3]" : "text-[#171B2D] dark:text-white"}`}>
                                    {service.number}
                                </div>

                                <div className="flex flex-col gap-[16px]">
                                    {/* FIXED: inactive was text-white */}
                                    <h3 className={`text-[28px] font-bold leading-tight ${service.active ? "text-[#42FFB3]" : "text-[#171B2D] dark:text-white"}`}>
                                        {service.title}
                                    </h3>
                                    {/* FIXED: was text-white/60 */}
                                    <p className="text-black/60 dark:text-white/60 text-[15px] leading-[28px] max-w-[460px]">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex justify-end pt-[8px]">
                                    {/* FIXED: inactive was text-white */}
                                    <button className={`text-[13px] font-semibold hover:opacity-70 transition underline underline-offset-4 ${service.active ? "text-[#FF4D1C]" : "text-[#171B2D] dark:text-white"}`}>
                                        More Information
                                    </button>
                                </div>

                            </div>

                        </div>
                    ))}

                    {/* FIXED: was bg-[#1e2d3d] hardcoded */}
                    <div className="w-full h-[1px] bg-black/10 dark:bg-[#1e2d3d]" />

                </div>

            </div>

        </section>
    );
};

export default ServicesList;