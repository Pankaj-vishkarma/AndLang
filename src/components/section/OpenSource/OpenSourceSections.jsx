// components/sections/opensource/OpenSourceSections.jsx

import objectiveImg from "../../../assets/images/opensource/objective.svg";
import assistanceImg from "../../../assets/images/opensource/assistance.svg";
import githubImg from "../../../assets/images/opensource/github-repos.svg";

const OpenSourceSections = () => {
    return (
        <section className="w-full bg-[#071421]">

            {/* MAIN CONTAINER */}
            <div className="max-w-[1370px] mx-auto
                px-[20px] lg:px-[45px]
                pb-[60px] lg:pb-[120px]">

                <div className="flex flex-col">

                    {/* ══════════════════════════════════
                        ROW 1: OUR OBJECTIVE
                    ══════════════════════════════════ */}
                    <div className="w-full h-[1px] bg-[#1e2d3d]" />

                    {/* MOBILE & TABLET */}
                    <div className="flex flex-col lg:hidden gap-[16px] py-[36px]">

                        <h2 className="text-[#42FFB3] text-[28px] leading-[36px] font-bold tracking-[-0.5px]">
                            Our Objective
                        </h2>

                        <p className="text-white text-[13px] leading-[22px] font-semibold italic">
                            "Innovative Solutions for your Unique Business Problems"
                        </p>

                        <p className="text-white/60 text-[13px] leading-[24px]">
                            We are a passionate company that believes in quality. We
                            provide strategic though leadership and program execution to
                            enterprises. Our passion for this is more than making a website.
                        </p>

                        <p className="text-white/60 text-[13px] leading-[24px]">
                            Our dedication to solving difficult technical problems that
                            lead to success on design and development.
                        </p>

                        {/* IMAGE — FIXED: constrained width, left aligned */}
                        <div className="overflow-hidden mt-[8px] w-full max-w-[300px]">
                            <img
                                src={objectiveImg}
                                alt="Our Objective"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>

                    </div>

                    {/* DESKTOP — UNCHANGED */}
                    <div className="hidden lg:grid grid-cols-2 gap-[80px] items-center py-[70px]">
                        <div className="flex flex-col gap-[20px]">
                            <h2 className="text-[#42FFB3] text-[40px] leading-[50px] font-bold tracking-[-0.5px]">
                                Our Objective
                            </h2>
                            <p className="text-white text-[15px] leading-[26px] font-semibold italic">
                                "Innovative Solutions for your Unique
                                <br />
                                Business Problems"
                            </p>
                            <p className="text-white/60 text-[14px] leading-[26px]">
                                We are a passionate company that believes in quality. We
                                provide strategic though leadership and program execution to
                                enterprises. Our passion for this is more than making a website.
                            </p>
                            <p className="text-white/60 text-[14px] leading-[26px]">
                                Our dedication to solving difficult technical problems that
                                lead to success on design and development.
                            </p>
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src={objectiveImg}
                                alt="Our Objective"
                                className="w-full h-[320px] object-cover"
                            />
                        </div>
                    </div>

                    {/* ══════════════════════════════════
                        ROW 2: HOME ASSISTANCE CONTRIBUTIONS
                    ══════════════════════════════════ */}
                    <div className="w-full h-[1px] bg-[#1e2d3d]" />

                    {/* MOBILE & TABLET */}
                    <div className="flex flex-col lg:hidden gap-[16px] py-[36px]">

                        <h2 className="text-white text-[28px] leading-[36px] font-bold tracking-[-0.5px]">
                            Home Assistance Contributions
                        </h2>

                        <p className="text-white/60 text-[13px] leading-[24px]">
                            Many families publish good recipe and arts programs also non
                            profit events protect rights of employees, your page for this
                            forum alone will attract more user more efficient delivery.
                        </p>

                        <p className="text-white text-[15px] leading-[26px] font-semibold">
                            Ideate • Analyze • Create • Iterate
                        </p>

                        <button className="text-[#42FFB3] text-[12px] font-semibold underline underline-offset-4 hover:opacity-70 transition text-left w-fit">
                            More Information
                        </button>

                        {/* IMAGE — FIXED: constrained width, left aligned */}
                        <div className="overflow-hidden mt-[8px] w-full max-w-[300px]">
                            <img
                                src={assistanceImg}
                                alt="Home Assistance Contributions"
                                className="w-full h-[280px] object-cover"
                            />
                        </div>

                    </div>

                    {/* DESKTOP — UNCHANGED */}
                    <div className="hidden lg:grid grid-cols-2 gap-[80px] items-center py-[70px]">
                        <div className="overflow-hidden">
                            <img
                                src={assistanceImg}
                                alt="Home Assistance Contributions"
                                className="w-full h-[320px] object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <h2 className="text-white text-[40px] leading-[50px] font-bold tracking-[-0.5px]">
                                Home Assistance
                                <br />
                                Contributions
                            </h2>
                            <p className="text-white/60 text-[14px] leading-[26px]">
                                Many families publish good recipe and arts programs also non
                                profit events protect rights of employees, your page for this
                                forum alone will attract more user more efficient delivery.
                            </p>
                            <button className="text-[#42FFB3] text-[13px] font-semibold underline underline-offset-4 hover:opacity-70 transition text-left w-fit">
                                Give More Button
                            </button>
                        </div>
                    </div>

                    {/* ══════════════════════════════════
                        ROW 3: OUR LIVE GITHUB WORK REPOSITORIES
                    ══════════════════════════════════ */}
                    <div className="w-full h-[1px] bg-[#1e2d3d]" />

                    {/* MOBILE & TABLET */}
                    <div className="flex flex-col lg:hidden gap-[16px] py-[36px]">

                        <h2 className="text-[#42FFB3] text-[28px] leading-[36px] font-bold tracking-[-0.5px]">
                            Our Live GitHub Work Repositories
                        </h2>

                        <p className="text-white/60 text-[13px] leading-[24px]">
                            We are a digital agency passionate about storytelling, visual
                            design, and technology. The team collaborates with small and
                            large companies and we build things together.
                        </p>

                        <div className="mt-[4px]">
                            <button className="flex items-center gap-[8px] bg-[#FF4D1C] hover:bg-[#e84318] text-white text-[13px] font-semibold px-[22px] py-[11px] rounded-full transition-all duration-300 w-fit">
                                <span>View On Github</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </button>
                        </div>

                        {/* IMAGE — FIXED: constrained width, left aligned */}
                        <div className="overflow-hidden mt-[8px] w-full max-w-[300px]">
                            <img
                                src={githubImg}
                                alt="Our Live GitHub Work Repositories"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>

                    </div>

                    {/* DESKTOP — UNCHANGED */}
                    <div className="hidden lg:grid grid-cols-2 gap-[80px] items-center py-[70px]">
                        <div className="flex flex-col gap-[20px]">
                            <h2 className="text-[#42FFB3] text-[40px] leading-[50px] font-bold tracking-[-0.5px]">
                                Our Live GitHub
                                <br />
                                Work Repositories
                            </h2>
                            <p className="text-white/60 text-[14px] leading-[26px]">
                                We are a digital agency passionate about storytelling, visual
                                design, and technology. The team collaborates with small and
                                large companies and we build things together.
                            </p>
                            <div className="mt-[8px]">
                                <button className="flex items-center gap-[10px] bg-[#FF4D1C] hover:bg-[#e84318] text-white text-[14px] font-semibold px-[28px] py-[13px] rounded-full transition-all duration-300 w-fit">
                                    <span>View On Github</span>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src={githubImg}
                                alt="Our Live GitHub Work Repositories"
                                className="w-full h-[320px] object-cover"
                            />
                        </div>
                    </div>

                    {/* FINAL BOTTOM DIVIDER */}
                    <div className="w-full h-[1px] bg-[#1e2d3d]" />

                </div>

            </div>

        </section>
    );
};

export default OpenSourceSections;