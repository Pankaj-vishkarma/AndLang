// components/sections/home/RecentWork.jsx

import work1 from "../../../assets/images/home/work-1.png";
import work2 from "../../../assets/images/home/work-2.png";
import work3 from "../../../assets/images/home/work-3.png";
import work4 from "../../../assets/images/home/work-4.png";

import qualityIcon from "../../../assets/icons/quality.png";
import assistanceIcon from "../../../assets/icons/assistance.png";
import deliveryIcon from "../../../assets/icons/delivery.png";

const features = [
    {
        icon: qualityIcon,
        title: "Best Quality",
        description:
            "Through years of experience you'll get exactly what you want, in the style you want. We are included in every aspect and nothing is impossible.",
    },

    {
        icon: assistanceIcon,
        title: "Gold Assistance",
        description:
            "You should rest assured we are there for you every moment we work for you. We have workers around the world so a request should be responded in a couple of hours.",
    },

    {
        icon: deliveryIcon,
        title: "On Time Delivery",
        description:
            "We deliver on time, even if we have to work through the night. You can use for reliability and your time is very important for us.",
    },
];

const RecentWork = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#071421]">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute top-[40px] left-[-140px] w-[280px] h-[280px] bg-[#42FFB3] opacity-[0.10] blur-[120px] rounded-full" />

                <div className="absolute top-[60px] right-[-120px] w-[260px] h-[260px] bg-[#42FFB3] opacity-[0.10] blur-[120px] rounded-full" />
            </div>

            {/* Container */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-[28px] sm:px-[42px] lg:px-[56px] pt-[82px] pb-[95px]">

                {/* Section Title */}
                <div className="flex justify-center mb-[44px]">

                    <h2 className="text-white text-[42px] sm:text-[48px] leading-none font-semibold tracking-[-1.5px]">

                        Our Recent Works
                    </h2>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] mb-[90px]">

                    <div className="overflow-hidden">
                        <img
                            src={work1}
                            alt="work 1"
                            className="w-full h-[160px] sm:h-[190px] lg:h-[210px] object-cover"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <img
                            src={work2}
                            alt="work 2"
                            className="w-full h-[160px] sm:h-[190px] lg:h-[210px] object-cover"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <img
                            src={work3}
                            alt="work 3"
                            className="w-full h-[160px] sm:h-[190px] lg:h-[210px] object-cover"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <img
                            src={work4}
                            alt="work 4"
                            className="w-full h-[160px] sm:h-[190px] lg:h-[210px] object-cover"
                        />
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-[60px] lg:gap-[90px]">

                    {/* Left Heading */}
                    <div>

                        <h2 className="text-white text-[48px] sm:text-[56px] leading-[1.08] font-semibold tracking-[-2px]">

                            Why
                            <br />
                            Choose Us
                        </h2>
                    </div>

                    {/* Right Content */}
                    <div>

                        {/* Description */}
                        <p className="text-[rgba(255,255,255,0.82)] text-[20px] leading-[42px] font-medium">

                            You should be relieved to know we have the best experience
                            to give you what you want, to the price you want.
                            We do not compete with a five dollar website,
                            and what do you get from that? More stress and expenses.
                            <br />
                            <br />
                            No thank you! When you buy from Andlang you are assured
                            you are getting high quality design, legal and paid for
                            templates, plugins that are legal and honour in what we do.
                        </p>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[34px] mt-[62px]">

                            {features.map((feature, index) => (

                                <div
                                    key={index}
                                    className="flex flex-col items-start"
                                >

                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-[52px] h-[52px] object-contain"
                                    />

                                    <h3 className="mt-[18px] text-white text-[24px] font-semibold leading-none">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-[14px] text-white/60 text-[12px] leading-[2] max-w-[240px]">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentWork;