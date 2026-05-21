const SubscriberPage = () => {
    return (
        <>
            <section className="w-full bg-[#42FFB3]">

                <div className="max-w-[1370px] mx-auto
                    px-[20px] lg:px-[45px]
                    py-[36px] lg:py-[52px]">

                    {/* MOBILE & TABLET — stacked layout */}
                    <div className="flex flex-col lg:hidden gap-[20px]">

                        {/* TEXT CONTENT */}
                        <div className="flex flex-col gap-[8px]">

                            <h3 className="text-[#071421] text-[22px] leading-[30px] font-bold text-center">
                                Subscribe to newsletter
                            </h3>

                            <p className="text-[#071421]/80 text-[12px] leading-[20px] text-center">
                                Hello! We are andlang.{" "}
                                <span className="font-bold">We are dedicated to make the world
                                    a better place</span>{" "}
                                and hope you would like to subscribe to our
                                newsletter. We will never spam you, promise!
                            </p>

                        </div>

                        {/* FORM — full width */}
                        <div className="flex items-center w-full">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 h-[46px] px-[16px] text-[12px] text-[#071421] bg-white/80 placeholder-[#071421]/40 outline-none rounded-l-full"
                            />
                            <button className="h-[46px] px-[20px] bg-[#071421] hover:bg-[#0d2035] text-white text-[12px] font-semibold rounded-r-full transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>

                    </div>

                    {/* DESKTOP — UNCHANGED */}
                    <div className="hidden lg:flex items-center justify-between gap-[60px]">

                        <div className="flex flex-col gap-[10px] max-w-[420px]">
                            <h3 className="text-[#071421] text-[28px] leading-[36px] font-bold">
                                Subscribe to newsletter
                            </h3>
                            <p className="text-[#071421]/80 text-[13px] leading-[22px]">
                                Hello! We are andlang.{" "}
                                <span className="font-bold">We are dedicated to make the world
                                    a better place</span>{" "}
                                and hope you would like to subscribe to our
                                newsletter. We will never spam you, promise!
                            </p>
                        </div>

                        <div className="flex items-center gap-[0px] flex-1 max-w-[520px]">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 h-[50px] px-[20px] text-[13px] text-[#071421] bg-white/80 placeholder-[#071421]/40 outline-none rounded-l-full"
                            />
                            <button className="h-[50px] px-[28px] bg-[#071421] hover:bg-[#0d2035] text-white text-[13px] font-semibold rounded-r-full transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default SubscriberPage;