// ---------------------------------------------------------------------------
// GraphicDesignHero.jsx
// Hero section for Graphic Design page — matches Figma 100%
// Update videoThumbImg import path to match your asset structure
// ---------------------------------------------------------------------------

import { useState } from "react";
import videoThumbImg from "../../../assets/images/services/video-thumb.svg";

const GraphicDesignHero = () => {
    const [playing, setPlaying] = useState(false);

    return (
        <section
            className="w-full font-graphit"
            style={{ backgroundColor: "#071421" }}
        >
            {/* ── Text content ── */}
            <div className="max-w-3xl mx-auto px-6 pt-16 pb-0 flex flex-col items-center text-center">

                {/* Spaced subtitle */}
                <p
                    className="text-white uppercase mb-6 opacity-50 tracking-widest"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.42em" }}
                >
                    J u m p &nbsp; S t a r t &nbsp; Y o u r &nbsp; G r o w t h
                </p>

                {/* Main heading */}
                <h1
                    className="text-white font-bold mb-10"
                    style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                    }}
                >
                    Graphic Design
                </h1>

                {/* Body copy */}
                <div
                    className="text-center space-y-5 max-w-2xl"
                    style={{ color: "#b0bfcc", fontSize: "0.88rem", lineHeight: "1.9" }}
                >
                    {/* Para 1 */}
                    <p>
                        We Are Providing All Types Of Graphic Design, And Do Not Discriminate On Content.{" "}
                        <strong className="text-white font-bold underline decoration-white/40 underline-offset-2">
                            We Happily Do Projects For Non Religious And LGBT Purposes Where Others Do Not.
                        </strong>{" "}
                        To Have A Successful Design We Ask You Try To Think About What You Want, What Colour
                        Scheme You Want Or Even If You Want A One Page Or Several Pages.
                    </p>

                    {/* Para 2 — italic bold centered */}
                    <p>
                        <strong className="text-white font-bold italic">
                            This Is Important For Future, When We Start Making Your Page You Are Happy.
                        </strong>
                    </p>

                    {/* Para 3 */}
                    <p>
                        Of Course We Understand You Might Not Have Any Preferences And Leave Everything Up To Us.
                    </p>

                    {/* Para 4 */}
                    <p>
                        If So We Design Or Give Template Ideas (Much Cheaper) For What We Think{" "}
                        <strong className="text-white font-bold">
                            Fit You And Your Business Or Organisation The Most.
                        </strong>
                    </p>
                </div>
            </div>

            {/* ── Video / Thumbnail block ── */}
            <div className="w-full max-w-4xl mx-auto px-6 mt-16">
                <div
                    className="relative w-full overflow-hidden cursor-pointer group"
                    style={{ borderRadius: "4px" }}
                    onClick={() => setPlaying(true)}
                >
                    {!playing ? (
                        <>
                            {/* Thumbnail image */}
                            <img
                                src={videoThumbImg}
                                alt="Graphic Design Video"
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                style={{ maxHeight: "420px", objectPosition: "top" }}
                            />

                            {/* Dark overlay */}
                            <div
                                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
                                style={{ backgroundColor: "rgba(7,20,33,0.35)" }}
                            />

                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
                                >
                                    {/* Triangle play icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="#071421"
                                        width="24"
                                        height="24"
                                        style={{ marginLeft: "3px" }}
                                    >
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        /* If you have an actual video URL, replace the src below */
                        <video
                            className="w-full"
                            controls
                            autoPlay
                            style={{ maxHeight: "420px", backgroundColor: "#000" }}
                        >
                            <source src="/assets/videos/graphic-design-intro.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>

        </section>
    );
};

export default GraphicDesignHero;