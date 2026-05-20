// components/sections/services/OurServices.jsx

import FigmaLogo from "../../../assets/icons/logos_figma.svg";

const OurServices = () => {
    return (
        <section className="relative w-full bg-[#071421] overflow-hidden">

            {/* GRID BACKGROUND PATTERN */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* MAIN CONTAINER */}
            <div className="relative max-w-[1370px] mx-auto
                px-[20px] sm:px-[32px] lg:px-[45px]
                py-[72px] sm:py-[90px] lg:py-[120px]">

                {/* ── FLOATING DECORATIVE ICONS ── */}

                {/* Pencil — top left */}
                <div className="absolute top-[32px] sm:top-[45px] lg:top-[60px] left-[20px] sm:left-[60px] lg:left-[120px] opacity-90"
                    style={{ transform: "rotate(-69deg)" }}>
                    <svg width="24" height="24" className="sm:w-[30px] sm:h-[30px] lg:w-[38px] lg:h-[38px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                </div>

                {/* Adobe — left center */}
                <div className="absolute top-[50%] left-[8px] sm:left-[20px] lg:left-[40px]"
                    style={{ transform: "translateY(-50%) rotate(-10deg)" }}>
                    <svg width="28" height="28" className="sm:w-[36px] sm:h-[36px] lg:w-[42px] lg:h-[42px]" viewBox="0 0 240 234" fill="none">
                        <path d="M42.5 0H0v234L42.5 0Z" fill="#FF0000" />
                        <path d="M197.5 0H240v234L197.5 0Z" fill="#FF0000" />
                        <path d="M120 90l45 144H75L120 90Z" fill="#FF0000" />
                    </svg>
                </div>

                {/* Figma — top right */}
                <div className="absolute top-[28px] sm:top-[38px] lg:top-[50px] right-[20px] sm:right-[50px] lg:right-[100px]"
                    style={{ transform: "rotate(-30deg)" }}>
                    <img
                        src={FigmaLogo}
                        alt="Figma Logo"
                        className="w-[22px] sm:w-[28px] lg:w-[36px]"
                        style={{ height: "auto" }}
                    />
                </div>

                {/* WordPress — bottom center */}
                <div className="absolute bottom-[48px] sm:bottom-[54px] lg:bottom-[60px] left-1/2"
                    style={{ transform: "translateX(-50%) rotate(-31deg)" }}>
                    <svg width="36" height="36" className="sm:w-[44px] sm:h-[44px] lg:w-[52px] lg:h-[52px]" viewBox="0 0 122.52 122.52">
                        <circle cx="61.26" cy="61.26" r="61.26" fill="#21759B" />
                        <path fill="white" d="M8.71 61.26c0 20.6 11.98 38.5 29.38 47.03L12.57 39.7A52.46 52.46 0 008.71 61.26zm88.44-2.66c0-6.43-2.31-10.88-4.29-14.34-2.64-4.29-5.11-7.92-5.11-12.21 0-4.79 3.63-9.24 8.74-9.24h.66A52.47 52.47 0 0061.26 8.71c-18.1 0-34.04 9.29-43.34 23.37h2.34c3.8 0 9.68-.46 9.68-.46 1.97-.12 2.2 2.77.24 3.01 0 0-1.97.23-4.16.35l13.24 39.4 7.95-23.84-5.66-15.56c-1.96-.12-3.82-.35-3.82-.35-1.96-.12-1.73-3.13.23-3.01 0 0 6 .46 9.57.46 3.8 0 9.68-.46 9.68-.46 1.97-.12 2.2 2.77.24 3.01 0 0-1.97.23-4.17.35l13.14 39.1 3.63-12.12c1.57-5.02 2.76-8.63 2.76-11.74zm-34.67 7.27l-10.9 31.67a52.56 52.56 0 006.34.77 52.66 52.66 0 007.1-.49l-.08-.15-2.46-31.8zm29.7-19.6a38.1 38.1 0 01.33 5.05c0 4.98-.93 10.58-3.74 17.59l-15.03 43.44c14.64-8.54 24.49-24.42 24.49-42.59a52.38 52.38 0 00-6.05-23.49zM61.26 0C27.43 0 0 27.43 0 61.26s27.43 61.26 61.26 61.26 61.26-27.43 61.26-61.26S95.09 0 61.26 0zm0 119.67c-32.23 0-58.41-26.18-58.41-58.41S29.03 2.85 61.26 2.85s58.41 26.18 58.41 58.41-26.18 58.41-58.41 58.41z" />
                    </svg>
                </div>

                {/* Green arrow — bottom left */}
                <div className="absolute bottom-[52px] sm:bottom-[64px] lg:bottom-[80px] left-[56px] sm:left-[100px] lg:left-[160px]"
                    style={{ transform: "rotate(-5deg)" }}>
                    <svg width="18" height="18" className="sm:w-[22px] sm:h-[22px] lg:w-[145px] lg:h-[79px]" viewBox="0 0 24 24" fill="#42FFB3">
                        <path d="M5 12l14-7-7 14-2-5-5-2z" />
                    </svg>
                </div>

                {/* Orange arrow — right side */}
                <div className="absolute top-[55%] right-[48px] sm:right-[100px] lg:right-[160px]"
                    style={{ transform: "rotate(-98deg)" }}>
                    <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px] lg:w-[88px] lg:h-[277px]" viewBox="0 0 24 24" fill="#FF6B35">
                        <path d="M5 12l14-7-7 14-2-5-5-2z" />
                    </svg>
                </div>

                {/* ── CENTERED CONTENT ── */}
                <div className="flex flex-col items-center text-center">

                    {/* EYEBROW */}
                    <p className="text-white/70 text-[10px] sm:text-[12px] lg:text-[13px] font-medium tracking-[4px] sm:tracking-[5px] lg:tracking-[6px] uppercase mb-[16px] sm:mb-[20px] lg:mb-[24px]">
                        Jump Start Your Growth
                    </p>

                    {/* HEADING */}
                    <h2 className="text-white text-[40px] sm:text-[56px] lg:text-[72px] leading-[50px] sm:leading-[68px] lg:leading-[86px] font-bold tracking-[-1px] mb-[20px] sm:mb-[28px] lg:mb-[36px]">
                        Our Services
                    </h2>

                    {/* BODY TEXT — no manual <br> on mobile, natural wrap */}
                    <p className="text-white/80 text-[13px] sm:text-[15px] lg:text-[18px] leading-[26px] sm:leading-[32px] lg:leading-[36px] font-normal max-w-[300px] sm:max-w-[520px] lg:max-w-[740px]">
                        <span className="font-bold">A Norwegian Based Digital Agency</span>{" "}
                        Passionate About Storytelling, Visual Design, And Technology 🚀. The Team Collaborates{" "}
                        <span className="font-bold">With Small To Large Companies Around The World</span>{" "}
                        To Help Them Engage Their Audiences And Build Brand Recognition 😊.
                    </p>

                </div>

                {/* ── FLOATING BADGES ── */}

                {/* Developer badge — bottom left */}
                <div className="absolute bottom-[16px] sm:bottom-[22px] lg:bottom-[30px] left-[16px] sm:left-[60px] lg:left-[120px]">
                    <span className="bg-[#42FFB3] text-[#071421] text-[11px] sm:text-[12px] lg:text-[13px] font-bold px-[14px] sm:px-[18px] lg:px-[20px] py-[8px] sm:py-[9px] lg:py-[10px]">
                        Developer
                    </span>
                </div>

                {/* Designer badge — bottom right */}
                <div className="absolute bottom-[16px] sm:bottom-[22px] lg:bottom-[30px] right-[16px] sm:right-[40px] lg:right-[80px]">
                    <span className="bg-[#FF6B35] text-white text-[11px] sm:text-[12px] lg:text-[13px] font-bold px-[14px] sm:px-[18px] lg:px-[20px] py-[8px] sm:py-[9px] lg:py-[10px]">
                        Designer
                    </span>
                </div>

            </div>

        </section>
    );
};

export default OurServices;