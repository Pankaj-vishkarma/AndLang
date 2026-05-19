// components/sections/home/NewsletterSection.jsx

const NewsletterSection = () => {
    return (
        <section className="w-full bg-[#4DDB97]">

            {/* CONTAINER */}
            <div className="max-w-[1370px] mx-auto px-[20px] sm:px-[32px] lg:px-[45px] py-[32px] sm:py-[40px] lg:py-[48px]">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-[40px]">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[520px] text-center lg:text-left">

                        {/* TITLE */}
                        <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[40px] leading-[34px] sm:leading-[44px] lg:leading-[52px] font-semibold mb-[12px] lg:mb-[18px]">
                            Subscribe to newsletter
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-white/90 text-[13px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[26px] lg:leading-[30px] font-normal">
                            Hello! We are andlang. We are dedicated to make the world
                            a better place and hope you will like to subscribe to our
                            newsletter. We will help from your profits.
                        </p>

                    </div>

                    {/* RIGHT FORM */}
                    <div className="w-full max-w-[520px]">

                        <form className="relative w-full">

                            {/* INPUT */}
                            <input
                                type="email"
                                placeholder="Enter Your email address"
                                className="w-full h-[52px] sm:h-[60px] lg:h-[68px] rounded-full bg-white pl-[20px] sm:pl-[28px] lg:pl-[32px] pr-[120px] sm:pr-[150px] lg:pr-[170px] text-[#071421] text-[13px] sm:text-[14px] lg:text-[15px] outline-none border-none placeholder:text-[#9CA3AF]"
                            />

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="absolute right-[6px] sm:right-[7px] lg:right-[8px] top-1/2 -translate-y-1/2 h-[40px] sm:h-[46px] lg:h-[52px] px-[16px] sm:px-[22px] lg:px-[28px] rounded-full bg-[#4DDB97] text-white text-[12px] sm:text-[13px] lg:text-[14px] font-semibold hover:opacity-90 transition-all duration-300 whitespace-nowrap"
                            >
                                Subscribe
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default NewsletterSection;