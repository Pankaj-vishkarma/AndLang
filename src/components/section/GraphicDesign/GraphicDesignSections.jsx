// ---------------------------------------------------------------------------
// GraphicDesignSections.jsx
// Sections: Stats · Why Choose Us · Technologies We Use For Graphic Design
// Only difference from WebDesignSections: Technologies heading + icons (5 tools, 1 row)
// Update icon import paths to match your asset structure
// ---------------------------------------------------------------------------

import figmaIcon from "../../../assets/icons/tech/figma.svg";
import photoshopIcon from "../../../assets/icons/tech/photoshop.svg";
import illustratorIcon from "../../../assets/icons/tech/illustrator.svg";
import afterEffectsIcon from "../../../assets/icons/tech/after-effects.svg";
import keynoteIcon from "../../../assets/icons/tech/keynote.svg";

// ── Shared data ─────────────────────────────────────────────────────────────

const STATS = [
    { emoji: "🖥️", value: "1560+", label: "Design Delivered" },
    { emoji: "🖥️", value: "100+", label: "Hunts" },
    { emoji: "😊", value: "950+", label: "Happy Clients" },
    { emoji: "⚡", value: "15yrs", label: "Experience in the field" },
];

const FEATURES = [
    {
        emoji: "⚙️",
        title: "Best Quality",
        desc: "Through years of experience you will get exactly what you want, in the style you want. You are included in every aspect and nothing is impossible.",
    },
    {
        emoji: "🧑‍🤝‍🧑",
        title: "Gold Assistance",
        desc: "You should rest assured we are there for you every moment we work for you. We have workers around the world so a request should be responded in a couple of hours.",
    },
    {
        emoji: "🚀",
        title: "On Time Delivery",
        desc: "We deliver on time, even if we have to work through the night. You are our first priority and your time is very important for us.",
    },
];

// Graphic Design specific — 5 tools in a single row
const TECH_TOOLS = [
    { src: figmaIcon, label: "Figma" },
    { src: photoshopIcon, label: "Photoshop" },
    { src: illustratorIcon, label: "Illustrator" },
    { src: afterEffectsIcon, label: "After Effects" },
    { src: keynoteIcon, label: "Keynote" },
];

// ── Component ────────────────────────────────────────────────────────────────

const GraphicDesignSections = () => {
    return (
        <div className="w-full font-graphit" style={{ backgroundColor: "#071421" }}>

            {/* ════════════════════════════════════════════════════
                SECTION 1 — Stats
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#0a1828" }}>
                <div className="max-w-3xl mx-auto text-center">

                    {/* Heading */}
                    <h2
                        className="text-white font-bold mb-5"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.2 }}
                    >
                        We have several successful<br />projects
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="mb-14 mx-auto max-w-xl"
                        style={{ color: "#8a9bb0", fontSize: "0.82rem", lineHeight: 1.8 }}
                    >
                        Through the years we had many customers, and a successful outcome. We have countless
                        deliveries and over 15 years experience in the field, and the trends that has been
                        through the years
                    </p>

                    {/* Stats row */}
                    <div className="flex justify-center items-center divide-x divide-white/10">
                        {STATS.map((s, i) => (
                            <div key={i} className="flex items-center gap-3 px-8 py-3">
                                <span className="text-3xl">{s.emoji}</span>
                                <div className="text-left">
                                    <p className="text-white font-bold text-xl leading-none">{s.value}</p>
                                    <p style={{ color: "#8a9bb0", fontSize: "0.72rem" }} className="mt-[3px]">
                                        {s.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 2 — Why Choose Us
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#071421" }}>
                <div className="max-w-5xl mx-auto">

                    {/* Top row: heading left + paragraph right */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">

                        {/* Left heading */}
                        <div className="md:w-2/5 flex-shrink-0">
                            <h2
                                className="text-white font-bold"
                                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.15 }}
                            >
                                Why<br />Choose Us
                            </h2>
                        </div>

                        {/* Right paragraph */}
                        <div className="md:w-3/5">
                            <p style={{ color: "#8a9bb0", fontSize: "0.88rem", lineHeight: 1.9 }}>
                                You should be relieved to know we have the best experience to give you
                                what you want, to the price you want. We do not compete with a five
                                dollar website, and what do you get from that? More stress and expenses.
                                No thank you! When you buy from Andlang you are assured you are
                                getting high quality design, legal and paid for templates, plugins that are
                                legal and honour in what we do.
                            </p>
                        </div>

                    </div>

                    {/* Feature cards row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="flex flex-col items-start gap-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                                    style={{ backgroundColor: "#0f2236" }}
                                >
                                    {f.emoji}
                                </div>
                                <h3 className="text-white font-semibold text-base">{f.title}</h3>
                                <p style={{ color: "#8a9bb0", fontSize: "0.8rem", lineHeight: 1.8 }}>
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 3 — Technologies We Use For Graphic Design
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#071421" }}>
                <div className="max-w-3xl mx-auto text-center">

                    {/* Heading */}
                    <h2
                        className="text-white font-bold mb-16"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.2 }}
                    >
                        Technologies We Use For<br />Graphic Design
                    </h2>

                    {/* Single row — 5 tools */}
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
                        {TECH_TOOLS.map((t, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <img
                                    src={t.src}
                                    alt={t.label}
                                    className="w-14 h-14 object-contain"
                                />
                                <span className="text-white text-sm font-medium">{t.label}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default GraphicDesignSections;