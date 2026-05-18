import React from "react";

// Replace with your actual local image
import teamImg from "../../../assets/images/nonprofit/team.svg";

const HowToApply = () => {
    return (
        <section className="w-full bg-[#1a1e27] px-[45px] py-[60px]">
            <div className="max-w-[1370px] mx-auto flex flex-col gap-[60px]">

                {/* ── ROW 1: Text Left | Form Right ── */}
                <div className="grid grid-cols-2 gap-[40px] items-start">

                    {/* LEFT — How to Apply text */}
                    <div className="flex flex-col gap-[16px] pt-[40px]">
                        <h2 className="text-[#3ecf8e] text-[36px] font-extrabold leading-[1.15] tracking-[-0.3px]">
                            How to Apply?
                        </h2>
                        <p className="text-white/60 text-[13px] leading-[22px]">
                            Elgeblity is decided case-by-case, and we try to accomidate
                            those who are in need. The services we provide is UI and UX,
                            Web Design, Hosting and programming.
                        </p>
                        <p className="text-white/60 text-[13px] leading-[22px]">
                            Apply here by writing your name, email, budget (if you have) and
                            a message about your mission and need.
                        </p>
                    </div>

                    {/* RIGHT — Form Card */}
                    <div className="bg-[#1e2633] rounded-[10px] p-[24px] flex flex-col gap-[12px]">

                        {/* Name input */}
                        <input
                            type="text"
                            placeholder="enter your name"
                            className="w-full h-[44px] px-[16px] bg-[#141b25] border border-white/[0.08] rounded-[6px] text-white/50 text-[13px] placeholder-white/30 outline-none focus:border-white/20 transition-colors"
                        />

                        {/* Email input */}
                        <input
                            type="email"
                            placeholder="enter your work email"
                            className="w-full h-[44px] px-[16px] bg-[#141b25] border border-white/[0.08] rounded-[6px] text-white/50 text-[13px] placeholder-white/30 outline-none focus:border-white/20 transition-colors"
                        />

                        {/* Budget input */}
                        <input
                            type="text"
                            placeholder="budget"
                            className="w-full h-[44px] px-[16px] bg-[#141b25] border border-white/[0.08] rounded-[6px] text-white/50 text-[13px] placeholder-white/30 outline-none focus:border-white/20 transition-colors"
                        />

                        {/* Message textarea */}
                        <textarea
                            placeholder="write your message here.."
                            rows={5}
                            className="w-full px-[16px] py-[12px] bg-[#141b25] border border-white/[0.08] rounded-[6px] text-white/50 text-[13px] placeholder-white/30 outline-none focus:border-white/20 transition-colors resize-none"
                        />

                        {/* Bottom row: attach file + button */}
                        <div className="flex items-center justify-between mt-[4px]">

                            {/* Attach file */}
                            <label className="flex items-center gap-[6px] text-white/40 text-[12px] cursor-pointer hover:text-white/60 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66L9.41 17.41a2 2 0 01-2.83-2.83l8.49-8.48" />
                                </svg>
                                attach file
                                <input type="file" className="hidden" />
                            </label>

                            {/* Apply Now button */}
                            <button className="flex items-center gap-[8px] h-[40px] px-[22px] bg-[#ff4500] hover:bg-[#e03d00] text-white text-[13px] font-semibold rounded-full transition-colors duration-300">
                                Apply Now
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>

                {/* ── ROW 2: Image Left | Text Right ── */}
                <div className="grid grid-cols-2 gap-[40px] items-center">

                    {/* LEFT — Team photo */}
                    <div className="rounded-[8px] overflow-hidden aspect-[4/3]">
                        <img
                            src={teamImg}
                            alt="Team working together"
                            className="w-full h-full object-cover block"
                        />
                    </div>

                    {/* RIGHT — Want to Serve text */}
                    <div className="flex flex-col gap-[16px]">
                        <h2 className="text-[#3ecf8e] text-[36px] font-extrabold leading-[1.15] tracking-[-0.3px]">
                            Want to Serve the<br />community?
                        </h2>
                        <p className="text-white/60 text-[13px] leading-[22px]">
                            As we have a limited number of employees, and our main focus is
                            high quality work to keep alive, we would highly appreciate help
                            from the community. If you have some spare time, please join our
                            non profit team and help others.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowToApply;