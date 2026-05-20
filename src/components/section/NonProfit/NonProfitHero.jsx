import React from "react";

const NonProfitHero = () => {
  return (
    <section
      className="w-full min-h-[320px] flex items-center justify-center relative overflow-hidden"
      style={{
        background: "#0a0f1a",
      }}
    >

      {/* Green radial glow — top left */}
      <div
        className="absolute top-[-80px] left-[-60px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,180,100,0.28) 0%, rgba(0,180,100,0.08) 45%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-[40px] pt-[72px] pb-[160px] max-w-[780px] mx-auto flex flex-col gap-[32px]">

        {/* Top tag line */}
        <p className="text-white/50 text-[19px] font-Graphit font-semibold tracking-[0.18em] uppercase leading-[32px]">
          We Never Use Mentorship Websites, Logos,<br />
          And Deliverables For Profit
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-[41px] font-bold leading-[1.2] tracking-[-0.5px]">
          Finding A Good Life By Doing Good<br />
          Deeds &amp; Helping Other ❤️
        </h1>

        {/* Sub text */}
        <p className="text-white/70 text-[13px] leading-[22px] font-normal">
          <span className="text-white font-bold">
            We Have Dedicated Resources For Helping You, Based On Eligibility.
          </span>{" "}
          We Can Help With<br />
          Website, And In Some Occasions We Do On Location Work 🌟
        </p>

      </div>
    </section>
  );
};

export default NonProfitHero;