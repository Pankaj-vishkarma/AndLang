// components/sections/opensource/OpenSourceHero.jsx

const OpenSourceHero = () => {
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

            {/* GLOW BLOBS */}

            {/* Bottom-left green glow */}
            <div
                className="absolute bottom-[-80px] left-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(20,120,70,0.45) 0%, transparent 70%)",
                }}
            />

            {/* Bottom-right green glow */}
            <div
                className="absolute bottom-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(20,120,70,0.45) 0%, transparent 70%)",
                }}
            />

            {/* MAIN CONTAINER */}
            <div className="relative max-w-[1370px] mx-auto px-[45px] py-[80px]">

                {/* CENTERED CONTENT */}
                <div className="flex flex-col items-center text-center gap-[28px]">

                    {/* EYEBROW */}
                    <p className="text-white/50 text-[13px] font-medium tracking-[6px] uppercase">
                        Jump Start Your Growth
                    </p>

                    {/* HEADING */}
                    <h1 className="text-white text-[50px] leading-[78px] font-bold tracking-[-1.5px] max-w-[860px]">
                        We Do Meaningful Open Source
                        <br />
                        Contributions
                    </h1>

                    {/* BODY TEXT */}
                    <p className="text-white/80 text-[15px] leading-[32px] max-w-[520px]">
                        <span className="font-bold">We Are A Digital Agency</span> Passionate About Storytelling, Visual Design,
                        <br />
                        And Technology 🚀.
                    </p>

                    {/* CTA BUTTON */}
                    <div className="mt-[12px]">
                        <button className="flex items-center gap-[10px] bg-[#FF4D1C] hover:bg-[#e84318] text-white text-[15px] font-semibold px-[32px] py-[14px] rounded-full transition-all duration-300">

                            <span>View On Github</span>

                            {/* GitHub Icon */}
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>

                        </button>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default OpenSourceHero;