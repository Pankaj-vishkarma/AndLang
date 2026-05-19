// components/sections/home/LatestArticles.jsx

import article1 from "../../../assets/images/home/article-1.png";
import article2 from "../../../assets/images/home/article-2.png";
import article3 from "../../../assets/images/home/article-3.png";

const articles = [
    {
        image: article1,
        title: "Fiverr Review 2022 - Is this the best platform for beginners?",
        category: "UI/UX Design",
        date: "13 Sep 2022",
        description:
            "The Fiverr platform was created to make it easier for freelancers and entrepreneurs to sell their services online....",
    },
    {
        image: article2,
        title: "Hostinger Review 2022 – Is this the perfect Hosting for you?",
        category: "Business",
        date: "13 Sep 2022",
        description:
            "The Fiverr platform was created to make it easier for freelancers and entrepreneurs to sell their services online. It's a marketplace where people can oPerhaps you have been looking ...",
    },
    {
        image: article3,
        title: "Non-profit Partner cPanel and Andlang",
        category: "Development",
        date: "13 Sep 2022",
        description:
            "The Fiverr platform was created to make it easier for freelancers and entrepreneurs to sell their services online....",
    },
];

const LatestArticles = () => {
    return (
        <section className="w-full bg-[#12131f]">

            {/* ── MAIN CONTAINER ── */}
            <div className="max-w-[1370px] mx-auto
                            px-5 pt-[52px] pb-[64px]
                            md:px-8 md:pt-[80px] md:pb-[100px]
                            lg:px-[45px] lg:pt-[120px] lg:pb-[140px]">

                {/* ── SECTION TITLE ── */}
                <div className="mb-[32px] md:mb-[48px] lg:mb-[70px]">
                    <h2 className="text-white font-semibold
                                   text-[30px] leading-[38px] tracking-[-0.5px]
                                   md:text-[46px] md:leading-[56px] md:tracking-[-1px]
                                   lg:text-[64px] lg:leading-[78px] lg:tracking-[-1.5px]">
                        Latest Articles &amp;
                        <br />
                        News
                    </h2>
                </div>

                {/* ── ARTICLES GRID ──
                     Mobile  : 2 cols  (matches Figma — two cards side by side)
                     Tablet  : 2 cols
                     Desktop : 3 cols  (original)                               ── */}
                <div className="grid gap-[16px]
                                grid-cols-2
                                md:gap-[24px]
                                lg:grid-cols-3 lg:gap-[38px]">

                    {articles.map((article, index) => (
                        <div key={index} className="flex flex-col">

                            {/* ── IMAGE ── */}
                            <div className="overflow-hidden rounded-[4px]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full object-cover hover:scale-105 transition-transform duration-300
                                               h-[130px]
                                               md:h-[220px]
                                               lg:h-[320px]"
                                />
                            </div>

                            {/* ── CONTENT ── */}
                            <div className="pt-[14px] md:pt-[20px] lg:pt-[28px]">

                                {/* Title */}
                                <h3 className="text-white font-semibold mb-[10px] md:mb-[12px] lg:mb-[14px]
                                               text-[12px] leading-[18px]
                                               md:text-[16px] md:leading-[24px]
                                               lg:text-[20px] lg:leading-[30px]">
                                    {article.title}
                                </h3>

                                {/* Meta — category + date */}
                                <div className="flex items-center justify-between mb-[8px] md:mb-[12px] lg:mb-[14px]">
                                    <span className="text-[#8b8fa8] font-medium
                                                     text-[10px] md:text-[12px] lg:text-[13px]">
                                        {article.category}
                                    </span>
                                    <span className="text-[#8b8fa8] font-medium
                                                     text-[10px] md:text-[12px] lg:text-[13px]">
                                        {article.date}
                                    </span>
                                </div>

                                {/* Description — hidden on mobile to match Figma compact cards */}
                                <p className="text-white/60 leading-[22px] mb-[12px]
                                              hidden md:block
                                              text-[12px]
                                              lg:text-[14px] lg:leading-[26px] lg:mb-[20px]">
                                    {article.description}
                                </p>

                                {/* Read More */}
                                <button className="text-[#1dbf73] font-semibold hover:opacity-70 transition
                                                   text-[11px] md:text-[12px] lg:text-[13px]">
                                    Read More
                                </button>

                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default LatestArticles;