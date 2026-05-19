// ---------------------------------------------------------------------------
// SmartHomeHero.jsx
// Hero section for Smart Home Automation page — text only, no images/video
// ---------------------------------------------------------------------------

const SmartHomeHero = () => {
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
                        fontSize: "clamp(2rem, 5vw, 3.2rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                    }}
                >
                    Smart Home Automation
                </h1>

                {/* Body copy */}
                <div
                    className="text-center space-y-5 max-w-2xl"
                    style={{ color: "#b0bfcc", fontSize: "0.88rem", lineHeight: "1.9" }}
                >
                    {/* Para 1 */}
                    <p>
                        We Are Providing All Types Of Graphic Design, And Do Not Discriminate On Content.{" "}
                        <strong className="text-white font-bold">
                            We Happily Do Projects For Non Religious And LGBT Purposes Where Others Do Not.
                        </strong>
                    </p>

                    {/* Para 2 */}
                    <p>
                        Need Help Making Your Home Smart?{" "}
                        <strong className="text-white font-bold">
                            We Can Help You! Using Home Assistant We Can Make Any Home Smart With Local Integrations.
                        </strong>{" "}
                        We Try, Unless Its Requested By The Customer To Run 100% Locally.
                    </p>

                    {/* Para 3 */}
                    <p>
                        So You Are Not Affected By Downtime On Provider, Or If The Provider To A Smart Home Vendor Goes Bankrupt.
                    </p>

                    {/* Para 4 — fully bold */}
                    <p>
                        <strong className="text-white font-bold">
                            It's Your, It's Local And You Own It.
                        </strong>
                    </p>

                    {/* Para 5 */}
                    <p>
                        We Can Also Work With HomeSeer, Homey, OpenHAB, SmartThings And Other Smart Systems, But Our Main Focus In Home Assistant.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default SmartHomeHero;