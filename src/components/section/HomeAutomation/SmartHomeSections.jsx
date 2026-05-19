// ---------------------------------------------------------------------------
// SmartHomeSections.jsx
// Sections: Stats · Our Clients (logos + testimonials) · Why Choose Us
// ---------------------------------------------------------------------------

// ── Data ────────────────────────────────────────────────────────────────────

const STATS = [
    { emoji: "🖥️", value: "1560+", label: "Design Delivered" },
    { emoji: "🖥️", value: "100+", label: "Hunts" },
    { emoji: "😊", value: "950+", label: "Happy Clients" },
    { emoji: "⚡", value: "15yrs", label: "Experience in the field" },
];

const CLIENT_LOGOS = [
    { text: "::: limehome", alt: "Limehome" },
    { text: "Bloomberg", alt: "Bloomberg" },
    { text: "BUSINESS\nINSIDER", alt: "Business Insider" },
    { text: "Forbes", alt: "Forbes" },
    { text: "▲ ATLASSIAN", alt: "Atlassian" },
];

const TESTIMONIALS = [
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tempor quam suspendisse ur morbi sed leo mecenas.",
        name: "Max Wizard",
        role: "Company Name Here",
        initials: "MW",
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ur suscipit eget pretium in nibh. Sed fringilla sir bibendum dui nunc risus. Neque dictum in tempor ac.",
        name: "Max Wizard",
        role: "Company Name Here",
        initials: "MW",
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tempor quam suspendisse ur morbi sed leo mecenas.",
        name: "Max Wizard",
        role: "Company Name Here",
        initials: "MW",
    },
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

// ── Component ────────────────────────────────────────────────────────────────

const SmartHomeSections = () => {
    return (
        <div className="w-full font-graphit" style={{ backgroundColor: "#071421" }}>

            {/* ════════════════════════════════════════════════════
                SECTION 1 — Stats
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#0a1828" }}>
                <div className="max-w-3xl mx-auto text-center">

                    <h2
                        className="text-white font-bold mb-5"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.2 }}
                    >
                        We have several successful<br />projects
                    </h2>

                    <p
                        className="mb-14 mx-auto max-w-xl"
                        style={{ color: "#8a9bb0", fontSize: "0.82rem", lineHeight: 1.8 }}
                    >
                        Through the years we had many customers, and a successful outcome. We have countless
                        deliveries and over 15 years experience in the field, and the trends that has been
                        through the years
                    </p>

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
                SECTION 2 — Our Clients
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#071421" }}>
                <div className="max-w-4xl mx-auto">

                    {/* Heading + subtitle — centered */}
                    <div className="text-center mb-12">
                        <h2
                            className="text-white font-bold mb-4"
                            style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", lineHeight: 1.2 }}
                        >
                            Our Clients
                        </h2>
                        <p
                            className="mx-auto max-w-xs"
                            style={{ color: "#8a9bb0", fontSize: "0.82rem", lineHeight: 1.8 }}
                        >
                            We believe brands are the cultural connection between companies and their communities.
                        </p>
                    </div>

                    {/* Client logos row — text based */}
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mb-14 pb-10 border-b border-white/10">
                        {CLIENT_LOGOS.map((logo, i) => (
                            <span
                                key={i}
                                className="text-white font-bold opacity-70 hover:opacity-100 transition whitespace-pre-line text-center leading-tight"
                                style={{ fontSize: "0.9rem", letterSpacing: "0.02em" }}
                            >
                                {logo.text}
                            </span>
                        ))}
                    </div>

                    {/* Testimonials — horizontal scroll row */}
                    <div
                        className="flex gap-6 overflow-x-auto pb-4"
                        style={{ scrollbarWidth: "none" }}
                    >
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex flex-col justify-between gap-6"
                                style={{
                                    width: "280px",
                                    padding: "0 8px",
                                }}
                            >
                                {/* Quote */}
                                <p
                                    style={{
                                        color: "#b0bfcc",
                                        fontSize: "0.85rem",
                                        lineHeight: 1.85,
                                        fontStyle: "italic",
                                    }}
                                >
                                    "{t.quote}"
                                </p>

                                {/* Avatar initials circle + name */}
                                <div className="flex items-center gap-3 mt-2">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs text-white"
                                        style={{ backgroundColor: "#3DAA6E" }}
                                    >
                                        {t.initials}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-xs">{t.name}</p>
                                        <p style={{ color: "#8a9bb0", fontSize: "0.7rem" }}>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 3 — Why Choose Us
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#071421" }}>
                <div className="max-w-5xl mx-auto">

                    {/* Top row */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">

                        <div className="md:w-2/5 flex-shrink-0">
                            <h2
                                className="text-white font-bold"
                                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.15 }}
                            >
                                Why<br />Choose Us
                            </h2>
                        </div>

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

                    {/* Feature cards */}
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

        </div>
    );
};

export default SmartHomeSections;