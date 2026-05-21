import { useState } from "react";

const positions = [
    {
        id: "01",
        title: "Angular Developer",
        department: "Development Department",
        type: "Full-time",
        location: "Remote",
        active: true,
    },
    {
        id: "02",
        title: "Graphic Designer",
        department: "Design Department",
        type: "Full-time",
        location: "Remote",
        active: false,
    },
    {
        id: "03",
        title: "UX Researcher",
        department: "Research Department",
        type: "Full-time",
        location: "Remote",
        active: false,
    },
];

export default function OpenPositions() {
    const [hovered, setHovered] = useState(null);

    return (
        <div
            className=" flex items-center justify-center px-6 py-16"
            style={{ backgroundColor: "#181b22", fontFamily: "'DM Sans', sans-serif" }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');

        .apply-btn {
          background: #e8472a;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .apply-btn:hover {
          background: #ff5535;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232,71,42,0.45);
        }

        .position-row {
          transition: background 0.2s ease;
        }
        .position-row:hover .row-title {
          color: #4ade80;
        }
        .position-row:hover .row-number {
          color: #4ade80;
        }

        .divider {
          border-color: rgba(255,255,255,0.08);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.45s; }
        .delay-5 { animation-delay: 0.6s; }
      `}</style>

            {/* ────────────────────────────────────────────
                DESKTOP layout — 100% original, untouched
            ──────────────────────────────────────────── */}
            <div className="w-full max-w-5xl hidden lg:block">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12 fade-up delay-1">
                    <h1
                        className="text-white text-5xl md:text-6xl from-neutral-500 leading-tight font-graphit"
                        style={{ fontFamily: "graphit", letterSpacing: "-0.02em" }}
                    >
                        Open<br />Positions
                    </h1>
                    <p
                        className="text-sm leading-relaxed max-w-xs md:max-w-sm"
                        style={{ color: "#9ca3af", paddingTop: "8px" }}
                    >
                        Let's write some beautiful code and make smart designs.
                        This is what we're crazy about, and we're looking for
                        the ones who feel the same.
                    </p>
                </div>

                {/* Positions List */}
                <div className="flex flex-col fade-up delay-2">
                    {positions.map((pos, idx) => (
                        <div key={pos.id}>
                            <div
                                className="position-row flex items-center justify-between py-7 cursor-pointer rounded-lg px-2 -mx-2 group"
                                onMouseEnter={() => setHovered(pos.id)}
                                onMouseLeave={() => setHovered(null)}
                                style={{ animationDelay: `${0.3 + idx * 0.12}s` }}
                            >
                                {/* Left: number + info */}
                                <div className="flex items-center gap-6 md:gap-10">
                                    <span
                                        className={`row-number text-2xl font-bold tabular-nums transition-colors duration-200 ${pos.active ? "text-green-400" : "text-white"}`}
                                        style={{ fontFamily: "graphit", minWidth: "2.5rem" }}
                                    >
                                        {pos.id}.
                                    </span>
                                    <div>
                                        <p
                                            className={`row-title text-xl md:text-2xl font-semibold transition-colors duration-200 ${pos.active ? "text-green-400" : "text-white"}`}
                                            style={{ fontFamily: "graphit" }}
                                        >
                                            {pos.title}
                                        </p>
                                        <p className="text-xs mt-1" style={{ color: "#6b7280" }}>
                                            {pos.department}&nbsp;/&nbsp;{pos.type}&nbsp;/&nbsp;{pos.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Apply button */}
                                <div
                                    className="transition-all duration-300"
                                    style={{
                                        opacity: pos.active || hovered === pos.id ? 1 : 0,
                                        transform: pos.active || hovered === pos.id ? "translateX(0)" : "translateX(10px)",
                                    }}
                                >
                                    <button
                                        className="apply-btn flex items-center gap-2 text-white text-sm font-semibold px-5 py-3 rounded-full"
                                        onClick={() => alert(`Applying for ${pos.title}…`)}
                                    >
                                        Apply Now
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7" />
                                            <polyline points="7 7 17 7 17 17" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {idx < positions.length - 1 && <hr className="divider border-t" />}
                        </div>
                    ))}
                </div>
            </div>
            {/* ── END DESKTOP ── */}


            {/* ────────────────────────────────────────────
                TABLET & MOBILE layout
                - Dark background (no white card)
                - Title stacked above description
                - Button sits below meta on active row
                - Same dark divider as desktop
            ──────────────────────────────────────────── */}
            <div className="w-full max-w-2xl lg:hidden">

                {/* Header: title then description, stacked */}
                <div className="mb-10 sm:mb-8">
                    <h1
                        className="text-white text-[25px] sm:text-[34px] font-extrabold leading-tight mb-4"
                        style={{ fontFamily: "graphit", letterSpacing: "-0.02em" }}
                    >
                        Open&nbsp; Positions
                    </h1>
                    <p
                        className="text-[13px] leading-[1.7] sm:text-[13px]"
                        style={{ color: "#9ca3af" }}
                    >
                        Let's write some beautiful code and make smart designs.
                        This is what we're crazy about, and we're looking for
                        the ones who feel the same.
                    </p>
                </div>

                {/* Positions List */}
                <div className="flex flex-col">
                    {positions.map((pos, idx) => (
                        <div key={pos.id}>
                            <div className="py-6 sm:py-5">

                                {/* Number + title/meta/button */}
                                <div className="flex items-start gap-4 sm:gap-3">

                                    {/* Number */}
                                    <span
                                        className="text-[22px] sm:text-[20px] font-bold tabular-nums leading-tight shrink-0"
                                        style={{
                                            fontFamily: "graphit",
                                            color: pos.active ? "#4ade80" : "#4b5563",
                                            minWidth: "2.4rem",
                                        }}
                                    >
                                        {pos.id}.
                                    </span>

                                    {/* Info block */}
                                    <div>
                                        <p
                                            className="text-[19px] sm:text-[17px] font-semibold leading-tight"
                                            style={{
                                                fontFamily: "graphit",
                                                color: pos.active ? "#4ade80" : "#ffffff",
                                            }}
                                        >
                                            {pos.title}
                                        </p>
                                        <p
                                            className="text-[12px] mt-1"
                                            style={{ color: "#6b7280" }}
                                        >
                                            {pos.department}&nbsp;/&nbsp;{pos.type}&nbsp;/&nbsp;{pos.location}
                                        </p>

                                        {/* Apply Now — only for active row, below meta */}
                                        {pos.active && (
                                            <div className="mt-4 sm:mt-3">
                                                <button
                                                    className="apply-btn flex items-center gap-2 text-white text-[13px] font-semibold px-5 py-[10px] rounded-full"
                                                    onClick={() => alert(`Applying for ${pos.title}…`)}
                                                >
                                                    Apply Now
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="7" y1="17" x2="17" y2="7" />
                                                        <polyline points="7 7 17 7 17 17" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>

                            {/* Same dark divider as desktop */}
                            {idx < positions.length - 1 && <hr className="divider border-t" />}
                        </div>
                    ))}
                </div>

            </div>
            {/* ── END TABLET & MOBILE ── */}

        </div>
    );
}