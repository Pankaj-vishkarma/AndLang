// components/sections/opensource/ContributionsAndNewsletter.jsx

const ContributionsAndNewsletter = () => {
    return (
        <>

            {/* ─── PART 1: OUR CONTRIBUTIONS PLATFORMS ─── */}
            <section className="w-full bg-[#071421]">

                <div className="max-w-[1370px] mx-auto px-[45px] pt-[80px] pb-[90px]">

                    {/* HEADING */}
                    <div className="text-center mb-[56px]">
                        <h2 className="text-white text-[52px] leading-[64px] font-bold tracking-[-0.5px]">
                            Our Contributions Platforms
                        </h2>
                    </div>

                    {/* LOGOS ROW */}
                    <div className="flex items-center justify-center gap-[70px]">

                        {/* Prudential */}
                        <div className="flex items-center gap-[10px]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" opacity="0.85">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                            </svg>
                            <span className="text-white/80 text-[18px] font-semibold">Prudential</span>
                        </div>

                        {/* Microsoft */}
                        <div className="flex items-center gap-[10px]">
                            <svg width="24" height="24" viewBox="0 0 21 21" fill="none">
                                <rect x="0" y="0" width="10" height="10" fill="#F25022" />
                                <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
                                <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
                                <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
                            </svg>
                            <span className="text-white/80 text-[18px] font-semibold">Microsoft</span>
                        </div>

                        {/* Slack */}
                        <div className="flex items-center gap-[10px]">
                            <svg width="24" height="24" viewBox="0 0 54 54" fill="none">
                                <path d="M19.7 33.1c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1H19.7v5.1z" fill="#E01E5A" />
                                <path d="M22.3 33.1c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1v12.8c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1V33.1z" fill="#E01E5A" />
                                <path d="M27.4 19.7c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1V19.7H27.4z" fill="#36C5F0" />
                                <path d="M27.4 22.3c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1H14.6c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1H27.4z" fill="#36C5F0" />
                                <path d="M40.8 27.4c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1H40.8V27.4z" fill="#2EB67D" />
                                <path d="M38.2 27.4c0 2.8-2.3 5.1-5.1 5.1s-5.1-2.3-5.1-5.1V14.6c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1V27.4z" fill="#2EB67D" />
                                <path d="M33.1 40.8c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1V40.8H33.1z" fill="#ECB22E" />
                                <path d="M33.1 38.2c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1H45.9c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1H33.1z" fill="#ECB22E" />
                            </svg>
                            <span className="text-white/80 text-[18px] font-semibold">slack</span>
                        </div>

                        {/* Zoover */}
                        <div className="flex items-center">
                            <span className="text-white/80 text-[24px] font-bold tracking-[-0.5px]">
                                zoo<span className="text-white">v</span>er
                            </span>
                        </div>

                    </div>

                </div>

            </section>

            {/* ─── PART 2: SUBSCRIBE TO NEWSLETTER ─── */}
            <section className="w-full bg-[#42FFB3]">

                <div className="max-w-[1370px] mx-auto px-[45px] py-[52px]">

                    <div className="flex items-center justify-between gap-[60px]">

                        {/* LEFT — Text content */}
                        <div className="flex flex-col gap-[10px] max-w-[420px]">

                            {/* HEADING */}
                            <h3 className="text-[#071421] text-[28px] leading-[36px] font-bold">
                                Subscribe to newsletter
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-[#071421]/80 text-[13px] leading-[22px]">
                                Hello! We are andlang.{" "}
                                <span className="font-bold">We are dedicated to make the world
                                    a better place</span>{" "}
                                and hope you would like to subscribe to our
                                newsletter. We will never spam you, promise!
                            </p>

                        </div>

                        {/* RIGHT — Email input + button */}
                        <div className="flex items-center gap-[0px] flex-1 max-w-[520px]">

                            {/* INPUT */}
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 h-[50px] px-[20px] text-[13px] text-[#071421] bg-white/80 placeholder-[#071421]/40 outline-none rounded-l-full"
                            />

                            {/* BUTTON */}
                            <button className="h-[50px] px-[28px] bg-[#071421] hover:bg-[#0d2035] text-white text-[13px] font-semibold rounded-r-full transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};

export default ContributionsAndNewsletter;