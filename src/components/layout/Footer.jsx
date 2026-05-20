// components/layout/Footer.jsx

import { Link } from "react-router-dom";

import contactMail from "../../assets/images/footer/contact-mail.png";

import mediumIcon from "../../assets/icons/medium.png";
import behanceIcon from "../../assets/icons/behance.png";
import dribbbleIcon from "../../assets/icons/dribbble.png";
import discordIcon from "../../assets/icons/discord.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#071421] overflow-hidden">

            {/* ── MAIN FOOTER SECTION ── */}
            <section className="relative w-full min-h-[545px] flex items-center justify-center">

                {/* ── Background Glow Effects (unchanged) ── */}
                <div className="absolute inset-0 overflow-hidden">

                    {/* Left Glow */}
                    <div className="absolute top-[120px] left-[-140px] w-[320px] h-[320px] bg-[#4DFFB4] opacity-30 blur-[120px] rounded-full" />

                    {/* Center Glow */}
                    <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#4DFFB4] opacity-20 blur-[140px] rounded-full" />

                    {/* Bottom Right Glow */}
                    <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#4DFFB4] opacity-25 blur-[120px] rounded-full" />

                </div>

                {/* ── CONTENT CONTAINER ── */}
                <div className="relative z-10 w-full max-w-[1370px] min-h-[535px]
                                px-5 py-14
                                md:px-8 md:py-16
                                lg:px-[45px] lg:py-[80px]
                                flex flex-col items-center justify-between gap-10 lg:gap-21px">

                    {/* ── HEADING ── */}
                    <div className="flex flex-col items-center text-center">
                        <h2
                            className="text-white font-semibold tracking-[-1px]
                                       text-[36px] leading-[46px]
                                       md:text-[52px] md:leading-[66px] md:tracking-[-1.5px]
                                       lg:text-[72px] lg:leading-[92px] lg:tracking-[-2px]"
                        >
                            Let&apos;s Make Something{" "}

                            {/* "Amazing" highlight with green ellipse */}
                            <span className="relative inline-flex items-center justify-center">
                                <span className="relative z-10">Amazing</span>

                                {/* Green ellipse — scales with font */}
                                <span className="absolute w-[112%]
                                                 h-[44px] border-[2px]
                                                 md:h-[52px] md:border-[2.5px]
                                                 lg:h-[72px] lg:border-[3px]
                                                 border-[#3DFFB4] rounded-[50%] rotate-[-5deg]" />
                            </span>

                            <br className="hidden lg:block" />
                            Together!
                        </h2>
                    </div>

                    {/* ── CONTACT + BUTTON ── */}
                    <div className="flex flex-col items-center gap-[28px]">

                        {/* Email image */}
                        <div className="flex items-center justify-center">
                            <img
                                src={contactMail}
                                alt="contact mail"
                                className="w-auto h-[24px] md:h-[26px] lg:h-[28px] object-contain"
                            />
                        </div>

                        {/* CTA Button */}
                        <button
                            className="h-[52px] lg:h-[56px] px-[28px] rounded-full
                                       bg-[#FF5A1F] hover:bg-[#ef4f16] transition-all duration-300
                                       text-white text-[15px] lg:text-[16px] font-semibold
                                       shadow-[0_10px_30px_rgba(255,90,31,0.25)]"
                        >
                            Say Hello 👋
                        </button>

                    </div>

                    {/* ══════════════════════════════════════════
                        BOTTOM BAR
                        Desktop : single row  [ copyright · links · socials ]
                        Mobile  : 3 stacked centered rows
                                  row1 → links (with · separators)
                                  row2 → social icons
                                  row3 → copyright
                    ══════════════════════════════════════════ */}
                    <div className="w-full pt-6 lg:pt-[40px]">

                        {/* ── DESKTOP bottom bar (lg and above) ── */}
                        <div className="hidden lg:flex items-center justify-between">

                            {/* Left — copyright */}
                            <p className="text-white/70 text-[12px] font-normal">
                                Copyright © Andlang, 2022. All Rights Reserved.
                            </p>

                            {/* Center — links */}
                            <div className="flex items-center gap-[24px] pl-[35.5rem]">
                                <Link to="/terms" className="text-white/70 text-[12px] hover:text-white transition">Terms of Use</Link>
                                <Link to="/privacy" className="text-white/70 text-[12px] hover:text-white transition">Privacy Policy</Link>
                                <Link to="/faq" className="text-white/70 text-[12px] hover:text-white transition">FAQs</Link>
                            </div>

                            {/* Right — social icons */}
                            <div className="flex items-center gap-[18px]">
                                <img src={mediumIcon} alt="medium" className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                                <img src={behanceIcon} alt="behance" className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                                <img src={dribbbleIcon} alt="dribbble" className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                                <img src={discordIcon} alt="discord" className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                            </div>

                        </div>

                        {/* ── MOBILE / TABLET bottom bar (below lg) ── */}
                        <div className="flex lg:hidden flex-col items-center gap-4">

                            <div className="flex justify-between w-full px-1">
                                {/* Row 1 — Nav links with · separators (matching Figma) */}
                                <div className="flex items-center gap-2 flex-wrap justify-center">
                                    <Link to="/terms" className="text-white/70 text-[11px] hover:text-white transition">Terms of Use</Link>
                                    <span className="text-white/30 text-[11px] select-none">·</span>
                                    <Link to="/privacy" className="text-white/70 text-[11px] hover:text-white transition">Privacy Policy</Link>
                                    <span className="text-white/30 text-[11px] select-none">·</span>
                                    <Link to="/faq" className="text-white/70 text-[11px] hover:text-white transition">FAQs</Link>
                                </div>

                                {/* Row 2 — Social icons */}
                                <div className="flex items-center gap-[18px]">
                                    <img src={mediumIcon} alt="medium" className="w-[15px] h-[15px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                                    <img src={behanceIcon} alt="behance" className="w-[15px] h-[15px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                                    <img src={dribbbleIcon} alt="dribbble" className="w-[15px] h-[15px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                                    <img src={discordIcon} alt="discord" className="w-[15px] h-[15px] cursor-pointer opacity-70 hover:opacity-100 transition" />
                                </div>
                            </div>

                            {/* Row 3 — Copyright */}
                            <p className="text-white/50 text-[10px] font-normal text-center">
                                Copyright ©Andlang, 2022. All Rights Reserved.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </footer>
    );
};

export default Footer;