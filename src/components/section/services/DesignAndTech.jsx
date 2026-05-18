// components/sections/services/DesignAndTech.jsx

import portfolioImg1 from "../../../assets/images/services/portfolio-1.svg";
import portfolioImg2 from "../../../assets/images/services/portfolio-2.svg";
import portfolioImg3 from "../../../assets/images/services/portfolio-3.svg";

const technologies = [
    {
        name: "Figma",
        icon: (
            <svg width="36" height="52" viewBox="0 0 38 57" fill="none">
                <rect x="0" y="0" width="19" height="19" rx="9.5" fill="#F24E1E" />
                <rect x="19" y="0" width="19" height="19" rx="9.5" fill="#FF7262" />
                <rect x="0" y="19" width="19" height="19" rx="9.5" fill="#A259FF" />
                <rect x="0" y="38" width="19" height="19" rx="9.5" fill="#0ACF83" />
                <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE" />
            </svg>
        ),
    },
    {
        name: "Photoshop",
        icon: (
            <div className="w-[60px] h-[60px] rounded-[12px] bg-[#001E36] flex items-center justify-center">
                <span className="text-[#31A8FF] font-black text-[28px] italic" style={{ fontFamily: "serif" }}>Ps</span>
            </div>
        ),
    },
    {
        name: "Illustrator",
        icon: (
            <div className="w-[60px] h-[60px] rounded-[12px] bg-[#300] flex items-center justify-center">
                <span className="text-[#FF9A00] font-black text-[28px] italic" style={{ fontFamily: "serif" }}>Ai</span>
            </div>
        ),
    },
    {
        name: "After Effects",
        icon: (
            <div className="w-[60px] h-[60px] rounded-[12px] bg-[#00005B] flex items-center justify-center">
                <span className="text-[#9999FF] font-black text-[26px] italic" style={{ fontFamily: "serif" }}>Ae</span>
            </div>
        ),
    },
    {
        name: "Protopie",
        icon: (
            <div className="w-[60px] h-[60px] rounded-[12px] bg-[#FF4D4D] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.5L19 8v8l-7 3.9L5 16V8l7-3.5z" />
                </svg>
            </div>
        ),
    },
    {
        name: "Webflow",
        icon: (
            <div className="w-[60px] h-[60px] rounded-full bg-[#4353FF] flex items-center justify-center">
                <span className="text-white font-black text-[28px]">w</span>
            </div>
        ),
    },
    {
        name: "Larvel",
        icon: (
            <div className="w-[60px] h-[60px] rounded-[12px] bg-[#F9322C] flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 50 52" fill="white">
                    <path d="M49.6 12.4c.1.3.1.7.1 1V26c0 .7-.4 1.4-1 1.7l-11.2 6.5v12.9c0 .7-.4 1.4-1 1.7L13.6 61.5c-.2.1-.3.1-.5.2h-.5c-.2 0-.3-.1-.5-.2L-.8 54.8C-1.4 54.5-1.8 53.8-1.8 53.1V13.6c0-.4.1-.7.3-1l.3-.4.2-.2L11.4.3c.6-.4 1.4-.4 2 0L26 7.7c.1 0 .1.1.2.1l12.8-7.4c.6-.4 1.4-.4 2 0l8.3 4.8c.2.1.3.3.4.4l-.1.8zM36.5 27.7V16.6L25.3 23v11.1l11.2-6.4zM12.6 51.8V40.7L1.4 34.3v11.1l11.2 6.4zM2.4 32.2l11.2 6.5 11.2-6.5-11.2-6.5L2.4 32.2zM13.6 14.6l11.2 6.5V9.8L13.6 3.3V14.6zm24.9-9.9L27.3 11l11.2 6.5 11.2-6.5-11.2-6.3zM38.5 38.4V27.3L27.3 33.8v11.1l11.2-6.5zM13.6 40.7L2.4 34.3v11.1l11.2 6.5V40.7z" />
                </svg>
            </div>
        ),
    },
    {
        name: "Wordpress",
        icon: (
            <div className="w-[60px] h-[60px] rounded-full bg-[#21759B] flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 122.52 122.52" fill="white">
                    <circle cx="61.26" cy="61.26" r="61.26" fill="#21759B" />
                    <path fill="white" d="M8.71 61.26c0 20.6 11.98 38.5 29.38 47.03L12.57 39.7A52.46 52.46 0 008.71 61.26zm88.44-2.66c0-6.43-2.31-10.88-4.29-14.34-2.64-4.29-5.11-7.92-5.11-12.21 0-4.79 3.63-9.24 8.74-9.24h.66A52.47 52.47 0 0061.26 8.71c-18.1 0-34.04 9.29-43.34 23.37h2.34c3.8 0 9.68-.46 9.68-.46 1.97-.12 2.2 2.77.24 3.01 0 0-1.97.23-4.16.35l13.24 39.4 7.95-23.84-5.66-15.56c-1.96-.12-3.82-.35-3.82-.35-1.96-.12-1.73-3.13.23-3.01 0 0 6 .46 9.57.46 3.8 0 9.68-.46 9.68-.46 1.97-.12 2.2 2.77.24 3.01 0 0-1.97.23-4.17.35l13.14 39.1 3.63-12.12c1.57-5.02 2.76-8.63 2.76-11.74zm-34.67 7.27l-10.9 31.67a52.56 52.56 0 006.34.77 52.66 52.66 0 007.1-.49l-.08-.15-2.46-31.8zm29.7-19.6a38.1 38.1 0 01.33 5.05c0 4.98-.93 10.58-3.74 17.59l-15.03 43.44c14.64-8.54 24.49-24.42 24.49-42.59a52.38 52.38 0 00-6.05-23.49zM61.26 0C27.43 0 0 27.43 0 61.26s27.43 61.26 61.26 61.26 61.26-27.43 61.26-61.26S95.09 0 61.26 0zm0 119.67c-32.23 0-58.41-26.18-58.41-58.41S29.03 2.85 61.26 2.85s58.41 26.18 58.41 58.41-26.18 58.41-58.41 58.41z" />
                </svg>
            </div>
        ),
    },
    {
        name: "Slack",
        icon: (
            <div className="w-[60px] h-[60px] rounded-[12px] bg-transparent flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 54 54" fill="none">
                    <path d="M19.7 33.1c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1H19.7v5.1z" fill="#E01E5A" />
                    <path d="M22.3 33.1c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1v12.8c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1V33.1z" fill="#E01E5A" />
                    <path d="M27.4 19.7c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1V19.7H27.4z" fill="#36C5F0" />
                    <path d="M27.4 22.3c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1H14.6c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1H27.4z" fill="#36C5F0" />
                    <path d="M40.8 27.4c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1H40.8V27.4z" fill="#2EB67D" />
                    <path d="M38.2 27.4c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1V14.6c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1V27.4z" fill="#2EB67D" />
                    <path d="M33.1 40.8c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1V40.8H33.1z" fill="#ECB22E" />
                    <path d="M33.1 38.2c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1H45.9c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1H33.1z" fill="#ECB22E" />
                </svg>
            </div>
        ),
    },
];

const topRow = technologies.slice(0, 5);
const bottomRow = technologies.slice(5);

const DesignAndTech = () => {
    return (
        <section className="w-full bg-[#0b1520]">

            {/* ─── PART 1: WE DESIGN THAT INSPIRES ─── */}
            <div className="w-full">

                {/* HEADING */}
                <div className="text-center pt-[80px] pb-[48px]">
                    <h2 className="text-white text-[52px] leading-[64px] font-bold tracking-[-0.5px]">
                        We Design That Inspires
                    </h2>
                </div>

                {/* IMAGE GRID — 3 columns, full width */}
                <div className="grid grid-cols-3 w-full">

                    <div className="overflow-hidden">
                        <img
                            src={portfolioImg1}
                            alt="Portfolio 1"
                            className="w-full h-[340px] object-cover"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <img
                            src={portfolioImg2}
                            alt="Portfolio 2"
                            className="w-full h-[340px] object-cover"
                        />
                    </div>

                    <div className="overflow-hidden">
                        <img
                            src={portfolioImg3}
                            alt="Portfolio 3"
                            className="w-full h-[340px] object-cover"
                        />
                    </div>

                </div>

            </div>

            {/* ─── PART 2: TECHNOLOGIES WE USE ─── */}
            <div className="max-w-[1370px] mx-auto px-[45px] pt-[90px] pb-[120px]">

                {/* HEADING */}
                <div className="text-center mb-[64px]">
                    <h2 className="text-white text-[52px] leading-[64px] font-bold tracking-[-0.5px]">
                        Technologies We Use
                    </h2>
                </div>

                {/* TOP ROW — 5 items */}
                <div className="flex justify-center gap-[60px] mb-[48px]">

                    {topRow.map((tech, index) => (

                        <div key={index} className="flex flex-col items-center gap-[14px]">

                            {/* ICON */}
                            <div className="w-[60px] h-[60px] flex items-center justify-center">
                                {tech.icon}
                            </div>

                            {/* LABEL */}
                            <span className="text-white text-[13px] font-medium">
                                {tech.name}
                            </span>

                        </div>

                    ))}

                </div>

                {/* BOTTOM ROW — 4 items */}
                <div className="flex justify-center gap-[60px]">

                    {bottomRow.map((tech, index) => (

                        <div key={index} className="flex flex-col items-center gap-[14px]">

                            {/* ICON */}
                            <div className="w-[60px] h-[60px] flex items-center justify-center">
                                {tech.icon}
                            </div>

                            {/* LABEL */}
                            <span className="text-white text-[13px] font-medium">
                                {tech.name}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default DesignAndTech;