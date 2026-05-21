import webImg1 from "../../../assets/images/services/web-design-1.svg";
import webImg2 from "../../../assets/images/services/web-design-2.svg";
import webImg3 from "../../../assets/images/services/web-design-3.svg";

const WebDesignHero = () => {
    return (
        <section
            className="w-full font-graphit bg-white dark:bg-[#071421]"
        >
            <div className="max-w-4xl mx-auto px-6 pt-16 pb-0 flex flex-col items-center text-center">

                {/* ── Spaced subtitle ── */}
                <p
                    className="text-black/60 dark:text-white/60 text-sm tracking-[0.45em] uppercase mb-6"
                    style={{ letterSpacing: "0.45em" }}
                >
                    J u m p &nbsp; S t a r t &nbsp; Y o u r &nbsp; G r o w t h
                </p>

                {/* ── Main heading ── */}
                <h1
                    className="text-[#171B2D] dark:text-white font-bold mb-10"
                    style={{
                        fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                    }}
                >
                    Web Design
                </h1>

                {/* ── Body copy ── */}
                <div
                    className="text-center space-y-5 max-w-4xl text-black/55 dark:text-[#c8d4df]"
                    style={{ fontSize: "0.92rem", lineHeight: "1.85" }}
                >
                    <p>
                        We Are Providing All Types Of Web Design, And Do Not Discriminate On Content.{" "}
                        <strong className="text-[#171B2D] dark:text-white font-bold">
                            We Happily Do Projects For Non Religious And LGBT Purposes Where Others Do Not.
                        </strong>{" "}
                        To Have A Successful Design We Ask You Try To Think About What You Want, What Colour
                        Scheme You Want Or Even If You Want A One Page Or Several Pages.
                    </p>

                    <p>
                        <strong className="text-[#171B2D] dark:text-white font-bold italic">
                            This Is Important For Future, When We Start Making Your Page You Are Happy.
                        </strong>
                    </p>

                    <p>
                        Of Course We Understand You Might Not Have Any Preferences And Leave Everything Up To Us.
                    </p>

                    <p>
                        If So We Design Or Give Template Ideas (Much Cheaper) For What We Think{" "}
                        <strong className="text-[#171B2D] dark:text-white font-bold">
                            Fit You And Your Business Or Organisation The Most.
                        </strong>
                    </p>
                </div>

            </div>

            {/* ── Image cards row ── */}
            <div className="w-full max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-0">

                {/* Card 1 */}
                <div className="overflow-hidden">
                    <img
                        src={webImg1}
                        alt="Web design project 1"
                        className="w-full h-[260px] object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Card 2 */}
                <div className="overflow-hidden">
                    <img
                        src={webImg2}
                        alt="Web design project 2"
                        className="w-full h-[260px] object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

                {/* Card 3 */}
                <div className="overflow-hidden">
                    <img
                        src={webImg3}
                        alt="Web design project 3"
                        className="w-full h-[260px] object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>

            </div>

        </section>
    );
};

export default WebDesignHero;