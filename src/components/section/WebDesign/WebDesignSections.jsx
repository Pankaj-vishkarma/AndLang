// ---------------------------------------------------------------------------
// WebDesignSections.jsx
// Sections: Stats · Why Choose Us · Technologies We Use
// ---------------------------------------------------------------------------

// ── Technology logo imports — update paths to match your asset structure ──
import figmaIcon from "../../../assets/icons/tech/figma.svg";
import photoshopIcon from "../../../assets/icons/tech/photoshop.svg";
import invisionIcon from "../../../assets/icons/tech/invision.svg";
import usabilityIcon from "../../../assets/icons/tech/usability-tools.svg";
import webflowIcon from "../../../assets/icons/tech/webflow.svg";
import laravelIcon from "../../../assets/icons/tech/laravel.svg";
import wordpressIcon from "../../../assets/icons/tech/wordpress.svg";

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

const TECH_ROW1 = [
    { src: figmaIcon, label: "Figma" },
    { src: photoshopIcon, label: "Photoshop" },
    { src: invisionIcon, label: "Invision" },
    { src: usabilityIcon, label: "Usability Tools" },
];

const TECH_ROW2 = [
    { src: webflowIcon, label: "Webflow" },
    { src: laravelIcon, label: "Larvel" },
    { src: wordpressIcon, label: "Wordpress" },
];

// ── Inline responsive styles injected once ──────────────────────────────────
const responsiveStyles = `
  /* ── Stats grid: horizontal row on desktop, 2×2 grid on mobile/tablet ── */
  .stats-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .stats-row .stat-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 32px;
    border-right: 1px solid rgba(255,255,255,0.1);
  }
  .stats-row .stat-item:last-child {
    border-right: none;
  }

  /* ── Why Choose Us: side-by-side on desktop ── */
  .why-top-row {
    display: flex;
    flex-direction: row;
    gap: 80px;
    margin-bottom: 64px;
  }
  .why-heading-col {
    width: 40%;
    flex-shrink: 0;
  }
  .why-heading-col h2 {
    text-align: left;
  }
  .why-para-col {
    width: 60%;
  }

  /* ── Feature cards: 3-col row on desktop, left-aligned ── */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  .feature-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    text-align: left;
  }

  /* ════════ TABLET (≤ 768px) ════════ */
  @media (max-width: 768px) {

    /* Stats → 2×2 grid, no vertical dividers */
    .stats-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
      max-width: 360px;
      margin: 0 auto;
    }
    .stats-row .stat-item {
      border-right: none;
      border: none;
      padding: 18px 20px;
      justify-content: flex-start;
    }

    /* Why Choose Us → stacked, centered */
    .why-top-row {
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
    }
    .why-heading-col {
      width: 100%;
    }
    .why-heading-col h2 {
      text-align: center;
    }
    .why-para-col {
      width: 100%;
      text-align: center;
    }

    /* Feature cards → stacked, centered */
    .features-grid {
      grid-template-columns: 1fr;
      gap: 36px;
    }
    .feature-card {
      align-items: center;
      text-align: center;
    }
  }

  /* ════════ MOBILE (≤ 480px) ════════ */
  @media (max-width: 480px) {

    /* Stats → 2×2, slightly tighter */
    .stats-row {
      max-width: 320px;
    }
    .stats-row .stat-item {
      padding: 14px 16px;
    }
  }
`;

// ── Component ────────────────────────────────────────────────────────────────

const WebDesignSections = () => {
    return (
        <div className="w-full font-graphit" style={{ backgroundColor: "#071421" }}>

            {/* Inject responsive styles once */}
            <style>{responsiveStyles}</style>

            {/* ════════════════════════════════════════════════════
                SECTION 1 — Stats
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-2 px-6" style={{ backgroundColor: "#0a1828" }}>
                <div className="max-w-3xl mx-auto text-center">

                    {/* Heading */}
                    <h2
                        className="text-white font-bold mb-5"
                        style={{ fontFamily: "Graphit", fontSize: "clamp(1.8rem, 4vw, 3.6rem)", lineHeight: 1.2 }}
                    >
                        We have several successful<br />projects
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="mb-14 mx-auto max-w-xl"
                        style={{ color: "#8a9bb0", fontSize: "0.82rem", lineHeight: 1.8 }}
                    >
                        Through the years we had many customers, and a successful outcome. We have countless deliveries and
                        over 13 years experience in the field, and the trends that has been through the years
                    </p>

                    {/* Stats row → becomes 2×2 grid on mobile */}
                    <div className="stats-row lg:gap-10">
                        {STATS.map((s, i) => (
                            <div key={i} className="stat-item">
                                <span className="text-3xl">{s.emoji}</span>
                                <div className="text-left">
                                    <p className="text-white font-bold text-xl leading-none">{s.value}</p>
                                    <p style={{ color: "#8a9bb0", fontSize: "0.72rem" }} className="mt-[3px]">{s.label}</p>
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

                    {/* Top row: heading left + paragraph right → stacked & centered on mobile */}
                    <div className="why-top-row">

                        {/* Heading */}
                        <div className="why-heading-col">
                            <h2
                                className="text-white font-bold"
                                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.15 }}
                            >
                                Why<br />Choose Us
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="why-para-col">
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

                    {/* Feature cards → stacked & centered on mobile */}
                    <div className="features-grid">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="feature-card">
                                {/* Icon circle */}
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center text-5xl"
                                    style={{ backgroundColor: "#0f2236" }}
                                >
                                    {f.emoji}
                                </div>
                                <h3 className="text-white font-semibold text-base">{f.title}</h3>
                                <p style={{ color: "#8a9bb0", fontSize: "0.8rem", lineHeight: 1.8 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ════════════════════════════════════════════════════
                SECTION 3 — Technologies We Use
            ════════════════════════════════════════════════════ */}
            <section className="w-full py-20 px-6" style={{ backgroundColor: "#071421" }}>
                <div className="max-w-3xl mx-auto text-center">

                    {/* Heading */}
                    <h2
                        className="text-white font-bold mb-16"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 2.0rem)", lineHeight: 1.2 }}
                    >
                        Technologies We Use For<br />Web Design
                    </h2>

                    {/* Row 1 — 4 icons */}
                    <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-40 gap-y-10 mb-10">
                        {TECH_ROW1.map((t, i) => (
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

                    {/* Row 2 — 3 icons */}
                    <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-40 gap-y-10">
                        {TECH_ROW2.map((t, i) => (
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

export default WebDesignSections;