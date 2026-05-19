// ---------------------------------------------------------------------------
// GraphicDesignPortfolio.jsx
// "Our Portfolio" section for Graphic Design page
// Alternating text-left/image-right layout — same pattern as WebDesignPortfolio
// Update image imports to match your actual asset paths
// ---------------------------------------------------------------------------

import portfolioImg1 from "../../../assets/images/services/project-1.svg";
import portfolioImg2 from "../../../assets/images/services/project-2.svg";


// ── Data ────────────────────────────────────────────────────────────────────

const PROJECTS = [
    {
        id: 1,
        tags: "E-commerce, 3D Builder, Exports",
        title: "Habitant nibh.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet tortor.",
        img: portfolioImg1,
        imgLeft: false, // text left · image right
    },
    {
        id: 2,
        tags: "E-commerce, 3D Builder, Exports",
        title: "Curabitur.",
        desc: "Fringilla non libero ullamcorper in varius augue. Quam nulla rutrum sit sagittis nunc.",
        img: portfolioImg2,
        imgLeft: true,  // image left · text right
    },

];

// ── Row sub-component ────────────────────────────────────────────────────────

const PortfolioRow = ({ project }) => {
    const textBlock = (
        <div className="flex flex-col justify-center gap-4 py-8 md:py-0 md:px-10">
            {/* Tags */}
            <p style={{ color: "#6b7f93", fontSize: "0.75rem" }}>
                {project.tags}
            </p>

            {/* Title */}
            <h3
                className="font-bold leading-tight"
                style={{ color: "#3DAA6E", fontSize: "clamp(1.6rem, 3vw, 2rem)" }}
            >
                {project.title}
            </h3>

            {/* Description */}
            <p style={{ color: "#8a9bb0", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "300px" }}>
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
        <div className="overflow-hidden w-full" style={{ height: "280px" }}>
            <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
        </div>
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/5">
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

// ── Main component ───────────────────────────────────────────────────────────

const GraphicDesignPortfolio = () => {
    return (
        <section
            className="w-full font-graphit py-16"
            style={{ backgroundColor: "#071421" }}
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Section heading — top left */}
                <h2
                    className="text-white font-bold mb-12"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.15 }}
                >
                    Our<br />Protfolio
                </h2>

                {/* Alternating rows */}
                <div className="flex flex-col">
                    {PROJECTS.map((project) => (
                        <PortfolioRow key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GraphicDesignPortfolio;