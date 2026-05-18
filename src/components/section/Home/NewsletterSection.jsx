// components/sections/home/NewsletterSection.jsx

const NewsletterSection = () => {
    return (
        <section className="w-full bg-[#4DDB97]">

            {/* CONTAINER */}
            <div className="max-w-[1370px] mx-auto px-[45px] py-[48px]">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px]">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[520px]">

                        {/* TITLE */}
                        <h2 className="text-white text-[40px] leading-[52px] font-semibold mb-[18px]">

                            Subscribe to newsletter

                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-white/90 text-[16px] leading-[30px] font-normal">

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
                                className="w-full h-[68px] rounded-full bg-white pl-[32px] pr-[170px] text-[#071421] text-[15px] outline-none border-none placeholder:text-[#9CA3AF]"
                            />

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="absolute right-[8px] top-1/2 -translate-y-1/2 h-[52px] px-[28px] rounded-full bg-[#4DDB97] text-white text-[14px] font-semibold hover:opacity-90 transition-all duration-300"
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