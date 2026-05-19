// ---------------------------------------------------------------------------
// ProgrammingHero.jsx
// Hero section for Programming page — text only, no images/video
// ---------------------------------------------------------------------------

const ProgrammingHero = () => {
    return (
        <section
            className="w-full font-graphit"
            style={{ backgroundColor: "#071421" }}
        >
            <div className="max-w-3xl mx-auto px-6 pt-16 pb-20 flex flex-col items-center text-center">

                {/* Spaced subtitle */}
                <p
                    className="text-white uppercase mb-8 opacity-50"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.42em" }}
                >
                    J u m p &nbsp; S t a r t &nbsp; Y o u r &nbsp; G r o w t h
                </p>

                {/* Main heading */}
                <h1
                    className="text-white font-bold mb-12"
                    style={{
                        fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                    }}
                >
                    Programming
                </h1>

                {/* Body copy */}
                <div
                    className="text-center space-y-6 max-w-2xl"
                    style={{ color: "#b0bfcc", fontSize: "0.88rem", lineHeight: "1.9" }}
                >
                    {/* Para 1 — mixed normal + bold */}
                    <p>
                        We Are Providing All Types Of Graphic Design, And Do Not Discriminate On Content.{" "}
                        <strong className="text-white font-bold">
                            We Happily Do Projects For Non Religious And LGBT Purposes Where Others Do Not.
                        </strong>
                    </p>

                    {/* Para 2 — fully bold */}
                    <p>
                        <strong className="text-white font-bold">
                            We Are Passionate Programmers, Dwelling Into PHP, Javascript, Python, C#, Bash Script And Other.
                        </strong>
                    </p>

                    {/* Para 3 — normal */}
                    <p>
                        Contact Us With What You Are Looking For, And We Can Help You From Start To Finish.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ProgrammingHero;