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

            {/* MAIN CONTAINER */}
            <div className="max-w-[1370px] mx-auto px-[45px] pt-[120px] pb-[140px]">

                {/* 🔹 SECTION TITLE */}
                <div className="mb-[70px]">

                    <h2 className="text-white text-[64px] leading-[78px] font-semibold tracking-[-1.5px]">

                        Latest Articles
                        <br />
                        & News

                    </h2>

                </div>

                {/* 🔹 ARTICLES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[38px]">

                    {articles.map((article, index) => (

                        <div key={index} className="flex flex-col">

                            {/* IMAGE */}
                            <div className="overflow-hidden rounded-[4px]">

                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-300"
                                />

                            </div>

                            {/* CONTENT */}
                            <div className="pt-[28px]">

                                {/* TITLE */}
                                <h3 className="text-white text-[20px] leading-[30px] font-semibold mb-[14px]">

                                    {article.title}

                                </h3>

                                {/* META */}
                                <div className="flex items-center justify-between mb-[14px]">

                                    <span className="text-[#8b8fa8] text-[13px] font-medium">

                                        {article.category}

                                    </span>

                                    <span className="text-[#8b8fa8] text-[13px] font-medium">

                                        {article.date}

                                    </span>

                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-white/60 text-[14px] leading-[26px] mb-[20px]">

                                    {article.description}

                                </p>

                                {/* READ MORE */}
                                <button className="text-[#1dbf73] text-[13px] font-semibold hover:opacity-70 transition">

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