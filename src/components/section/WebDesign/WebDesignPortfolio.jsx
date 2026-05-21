// ---------------------------------------------------------------------------
// WebDesignPortfolio.jsx
// "Our Portfolio" section — alternating text/image rows
// Update image imports to match your actual asset paths
// ---------------------------------------------------------------------------

import portfolioImg1 from "../../../assets/images/services/project-1.svg";
import portfolioImg2 from "../../../assets/images/services/project-2.svg";
import portfolioImg3 from "../../../assets/images/services/project-3.svg";

const PROJECTS = [
    {
        id: 1,
        tags: "E-commerce, 3D Builder, Exports",
        title: "Habitant nibh.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet tortor.",
        img: portfolioImg1,
        imgLeft: false, // text left, image right
    },
    {
        id: 2,
        tags: "E-commerce, 3D Builder, Exports",
        title: "Curabitur.",
        desc: "Fringilla non libero ullamcorper in varius augue. Quam nulla rutrum sit sagittis nunc.",
        img: portfolioImg2,
        imgLeft: true, // image left, text right
    },
    {
        id: 3,
        tags: "E-commerce, 3D Builder, Exports",
        title: "Porttitor.",
        desc: "Pellentesque in varius faucibus pellentesque praesent sit blandit auctor. Quis vulputate.",
        img: portfolioImg3,
        imgLeft: false, // text left, image right
    },
];

// ── Responsive styles ────────────────────────────────────────────────────────
const responsiveStyles = `
  /* ── Desktop: alternating text/image grid ── */
  .portfolio-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .portfolio-image-block {
    overflow: hidden;
    width: 100%;
    height: 300px;
  }

  .portfolio-text-block {
    padding-left: 40px;
    padding-right: 40px;
  }

  /* ════════ TABLET & MOBILE (≤ 768px) ════════ */
  @media (max-width: 768px) {

    /* Each row becomes a single column: image on top, text below */
    .portfolio-row {
      grid-template-columns: 1fr;
      border-top: none;
    }

    /* Force image to always render first (row 1) regardless of DOM order */
    .portfolio-image-block {
      order: -1;
      height: 220px;
    }

    /* Text block always below, with consistent left padding */
    .portfolio-text-block {
      order: 0;
      padding: 20px 0 28px 0;
    }
  }

  /* ════════ MOBILE (≤ 480px) ════════ */
  @media (max-width: 480px) {
    .portfolio-image-block {
      height: 200px;
    }

    .portfolio-text-block {
      padding: 16px 0 24px 0;
    }
  }
`;

// ── Portfolio Row Component ──────────────────────────────────────────────────
const PortfolioRow = ({ project }) => {
    const textBlock = (
        <div className="portfolio-text-block flex flex-col justify-center gap-4">
            {/* Tags */}
            <p style={{ color: "#6b7f93", fontSize: "0.75rem" }}>{project.tags}</p>

            {/* Title */}
            <h3
                className="font-bold leading-tight"
                style={{ color: "#3DAA6E", fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
            >
                {project.title}
            </h3>

            {/* Description */}
            <p style={{ color: "#8a9bb0", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "320px" }}>
                {project.desc}
            </p>

            {/* Link */}
            <a
                href="#"
                className="text-green-400 text-xs font-medium underline underline-offset-2 hover:text-green-300 transition w-fit"
            >
                View Project in detail
            </a>
        </div>
    );

    const imageBlock = (
        <div className="portfolio-image-block">
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
        </div>
    );

    return (
        <div className="portfolio-row">
            {project.imgLeft ? (
                <>
                    {imageBlock}
                    {textBlock}
                </>
            ) : (
                <>
                    {textBlock}
                    {imageBlock}
                </>
            )}
        </div>
    );
};

// ── Main Component ───────────────────────────────────────────────────────────
const WebDesignPortfolio = () => {
    return (
        <section
            className="w-full font-graphit py-16"
            style={{ backgroundColor: "#071421" }}
        >
            {/* Inject responsive styles */}
            <style>{responsiveStyles}</style>

            <div className="max-w-5xl mx-auto px-6">

                {/* Section heading — top left */}
                <h2
                    className="text-white font-bold mb-12"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
                >
                    Our<br />Portfolio
                </h2>

                {/* Portfolio rows */}
                <div className="flex flex-col">
                    {PROJECTS.map((project) => (
                        <PortfolioRow key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WebDesignPortfolio;