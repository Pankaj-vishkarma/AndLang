// components/sections/home/ExploreServices.jsx

import serviceImage from "../../../assets/images/home/service-image.png";

const services = [
    {
        id: "01.",
        title: "Design Service",
        description:
            "We are providing all types of web design, and do not discriminate on content. We happily do projects for non religious and LGBT purposes where others do not. To have a successful design we ask you try to think about what you want, what colourscheme you want or even if you want a one page or several pages.",
        description2:
            "This is important for future, when we start making your page you are happy. Of course we understand you might not have any preferences and leave everything up to us. If so we design or give template ideas (much cheaper) for what we think fit you and your business or organisation the most.",
        active: true,
        image: serviceImage,
    },

    {
        id: "02.",
        title: "Non Profit",
        description:
            "We Support the Non Profit initiative by creating and hosting free websites for eligible applicants",
    },

    {
        id: "03.",
        title: "Blog Education",
        description:
            "We are taking a step further, and will share knowledge, tutorials and articles",
    },

    {
        id: "04.",
        title: "Open Source",
        description:
            "Open Source is a pillar to new ideas. Andlang is involved in several open projects",
    },
];

const ExploreServices = () => {
    return (
        <section className="w-full bg-[#171B2D] pt-[82px] pb-[90px]">

            {/* Container */}
            <div className="max-w-[1440px] mx-auto px-[28px] sm:px-[42px] lg:px-[56px]">

                {/* Heading */}
                <div className="mb-[58px]">

                    <h2 className="text-white text-[42px] sm:text-[52px] leading-[1.08] font-semibold tracking-[-1.5px]">

                        Explore
                        <br />
                        Our Services
                    </h2>
                </div>

                {/* Services */}
                <div>

                    {services.map((service, index) => (

                        <div
                            key={index}
                            className="border-b border-white/10 py-[34px]"
                        >

                            {/* ACTIVE SERVICE */}
                            {service.active ? (

                                <div className="grid grid-cols-1 lg:grid-cols-[72px_1fr_260px] gap-[34px] items-start">

                                    {/* Number */}
                                    <div>

                                        <span className="text-[#42FFB3] text-[22px] font-semibold">
                                            {service.id}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>

                                        <h3 className="text-[#42FFB3] text-[34px] font-semibold leading-none">
                                            {service.title}
                                        </h3>

                                        <p className="mt-[18px] text-white/85 text-[13px] leading-[2] max-w-[520px] font-medium">
                                            {service.description}
                                        </p>

                                        <p className="mt-[18px] text-white/85 text-[13px] leading-[2] max-w-[520px] font-medium">
                                            {service.description2}
                                        </p>

                                        <button className="mt-[34px] text-[#FF5A1F] text-[13px] font-semibold hover:opacity-80 transition">

                                            Let’s Work Together
                                        </button>
                                    </div>

                                    {/* Image */}
                                    <div className="flex justify-end lg:justify-center">

                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-[230px] h-[260px] object-cover"
                                        />
                                    </div>
                                </div>

                            ) : (

                                /* OTHER SERVICES */
                                <div className="grid grid-cols-[62px_1fr_auto] items-center gap-[20px]">

                                    {/* Number */}
                                    <span className="text-white text-[22px] font-semibold opacity-90">
                                        {service.id}
                                    </span>

                                    {/* Content */}
                                    <div>

                                        <h3 className="text-white text-[20px] sm:text-[24px] font-semibold">
                                            {service.title}
                                        </h3>

                                        <p className="mt-[8px] text-white/60 text-[12px] sm:text-[13px] leading-[1.9] max-w-[420px]">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Action */}
                                    <button className="text-white text-[11px] font-semibold underline underline-offset-4 hover:opacity-70 transition whitespace-nowrap">

                                        More Information
                                    </button>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreServices;