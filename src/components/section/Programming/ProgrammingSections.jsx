// ---------------------------------------------------------------------------
// ProgrammingSections.jsx
// Sections: Stats · Why Choose Us · Technologies We Use For Back and Front End
// Update icon import paths to match your asset structure
// ---------------------------------------------------------------------------

import nodeIcon from "../../../assets/icons/tech/nodejs.svg";
import ampIcon from "../../../assets/icons/tech/amp-pwa.svg";
import reactIcon from "../../../assets/icons/tech/react.svg";
import phpIcon from "../../../assets/icons/tech/php.svg";

// ── Data ────────────────────────────────────────────────────────────────────

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

// Programming specific — 4 tools, single row
const TECH_TOOLS = [
    { src: nodeIcon, label: "Node.js" },
    { src: ampIcon, label: "AMP/PWA" },
    { src: reactIcon, label: "React" },
    { src: phpIcon, label: "PHP" },
];

// ── Responsive styles ────────────────────────────────────────────────────────
const responsiveStyles = `

  /* ── STATS ROW: horizontal with dividers on desktop ── */
  .prog-stats-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prog-stats-row .prog-stat-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 32px;
    border-right: 1px solid rgba(255,255,255,0.1);
  }
  .prog-stats-row .prog-stat-item:last-child {
    border-right: none;
  }

  /* ── WHY CHOOSE US: side-by-side on desktop ── */
  .prog-why-top {
    display: flex;
    flex-direction: row;
    gap: 80px;
    margin-bottom: 64px;
  }
  .prog-why-heading-col {
    width: 40%;
    flex-shrink: 0;
  }
  .prog-why-heading-col h2 {
    text-align: left;
  }
  .prog-why-para-col {
    width: 60%;
    text-align: left;
  }

  /* ── FEATURE CARDS: 3-col, left-aligned on desktop ── */
  .prog-features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  .prog-feature-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
  }

  /* ════════ TABLET & MOBILE (≤ 768px) ════════ */
  @media (max-width: 768px) {

    /* Stats → 2×2 grid, no dividers */
    .prog-stats-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      max-width: 380px;
      margin: 0 auto;
    }
    .prog-stats-row .prog-stat-item {
      border-right: none;
      border: none;
      padding: 16px 18px;
      justify-content: flex-start;
    }

    /* Why Choose Us → stacked, centered */
    .prog-why-top {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }
    .prog-why-heading-col {
      width: 100%;
    }
    .prog-why-heading-col h2 {
      text-align: center;
    }
    .prog-why-para-col {
      width: 100%;
      text-align: center;
    }

    /* Feature cards → stacked, centered */
    .prog-features-grid {
      grid-template-columns: 1fr;
      gap: 36px;
    }
    .prog-feature-card {
      align-items: center;
      text-align: center;
    }

    /* Tech icons → all 4 in a single row, evenly spaced */
    .prog-tech-row {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 0;
      column-gap: 20px;
    }
  }

  /* ════════ MOBILE (≤ 480px) ════════ */
  @media (max-width: 480px) {
    .prog-stats-row {
      max-width: 320px;
    }
    .prog-stats-row .prog-stat-item {
      padding: 14px 14px;
    }
    /* Slightly smaller icons on very small screens if needed */
    .prog-tech-row .prog-tech-item img {
      width: 48px;
      height: 48px;
    }
    .prog-tech-row {
      column-gap: 12px;
    }
  }
`;

// ── Component ────────────────────────────────────────────────────────────────

const ProgrammingSections = () => {
    return (
        <div className="w-full font-graphit" style={{ backgroundColor: "#071421" }}>

            {/* Inject responsive styles */}
            <style>{responsiveStyles}</style>

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

                    {/* Stats — horizontal row on desktop, 2×2 grid on mobile/tablet */}
                    <div className="prog-stats-row">
                        {STATS.map((s, i) => (
                            <div key={i} className="prog-stat-item">
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

                    {/* Top row: heading left + paragraph right on desktop,
                        stacked + centered on mobile/tablet */}
                    <div className="prog-why-top">

                        {/* Heading */}
                        <div className="prog-why-heading-col">
                            <h2
                                className="text-white font-bold"
                                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.15 }}
                            >
                                Why<br />Choose Us
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="prog-why-para-col">
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

                    {/* Feature cards — 3-col left-aligned on desktop,
                        stacked centered on mobile/tablet */}
                    <div className="prog-features-grid">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="prog-feature-card">
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
                SECTION 3 — Technologies We Use For Back and Front End
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#071421" }}>
                <div className="max-w-3xl mx-auto text-center">

                    {/* Heading */}
                    <h2
                        className="text-white font-bold mb-16"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.2 }}
                    >
                        Technologies We Use For Back<br />and Front End
                    </h2>

                    {/* 4 tools — single row on both desktop and mobile */}
                    <div
                        className="prog-tech-row flex flex-wrap justify-center lg:gap-x-40 gap-x-14 gap-y-10"
                    >
                        {TECH_TOOLS.map((t, i) => (
                            <div key={i} className="prog-tech-item flex flex-col items-center gap-3">
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

export default ProgrammingSections;