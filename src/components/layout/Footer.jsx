// components/layout/Footer.jsx

import { Link } from "react-router-dom";

import contactMail from "../../assets/images/footer/contact-mail.png";
//import footerGlow from "../../assets/images/footer/footer-glow.png";

import mediumIcon from "../../assets/icons/medium.png";
import behanceIcon from "../../assets/icons/behance.png";
import dribbbleIcon from "../../assets/icons/dribbble.png";
import discordIcon from "../../assets/icons/discord.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#071421] overflow-hidden">

            {/* MAIN FOOTER SECTION */}
            <section className="relative w-full min-h-[839px] flex items-center justify-center">

                {/* Background Glow Effects */}
                <div className="absolute inset-0 overflow-hidden">

                    {/* Left Glow */}
                    <div className="absolute top-[120px] left-[-140px] w-[320px] h-[320px] bg-[#4DFFB4] opacity-30 blur-[120px] rounded-full" />

                    {/* Center Glow */}
                    <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#4DFFB4] opacity-20 blur-[140px] rounded-full" />

                    {/* Bottom Right Glow */}
                    <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#4DFFB4] opacity-25 blur-[120px] rounded-full" />

                    {/* Optional texture image */}
                    <div className="absolute inset-0 overflow-hidden">

                        {/* Left Glow */}
                        <div className="absolute top-[120px] left-[-140px] w-[320px] h-[320px] bg-[#4DFFB4] opacity-30 blur-[120px] rounded-full" />

                        {/* Center Glow */}
                        <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-[#4DFFB4] opacity-20 blur-[140px] rounded-full" />

                        {/* Bottom Right Glow */}
                        <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#4DFFB4] opacity-25 blur-[120px] rounded-full" />

                    </div>
                </div>

                {/* CONTENT CONTAINER */}
                <div className="relative z-10 w-full max-w-[1370px] min-h-[654px] px-[45px] py-[80px] flex flex-col items-center justify-between">

                    {/* HEADING */}
                    <div className="flex flex-col items-center text-center">

                        <h2 className="text-white text-[72px] leading-[92px] font-semibold tracking-[-2px]">

                            Let&apos;s Make Something{" "}

                            {/* Amazing highlight */}
                            <span className="relative inline-flex items-center justify-center">

                                <span className="relative z-10">
                                    Amazing
                                </span>

                                {/* Green ellipse */}
                                <span className="absolute w-[112%] h-[72px] border-[3px] border-[#3DFFB4] rounded-full rotate-[-5deg]" />

                            </span>

                            <br />

                            Together!

                        </h2>

                    </div>

                    {/* CONTACT + BUTTON */}
                    <div className="flex flex-col items-center gap-[28px]">

                        {/* Email */}
                        <div className="flex items-center justify-center">

                            <img
                                src={contactMail}
                                alt="contact mail"
                                className="w-auto h-[28px] object-contain"
                            />

                        </div>

                        {/* CTA BUTTON */}
                        <button className="h-[56px] px-[28px] rounded-full bg-[#FF5A1F] hover:bg-[#ef4f16] transition-all duration-300 text-white text-[16px] font-semibold shadow-[0_10px_30px_rgba(255,90,31,0.25)]">

                            Say Hello 👋

                        </button>

                    </div>

                    {/* BOTTOM BAR */}
                    <div className="w-full flex items-center justify-between pt-[40px]">

                        {/* Left */}
                        <p className="text-white/70 text-[12px] font-normal">
                            Copyright © Andlang, 2022. All Rights Reserved.
                        </p>

                        {/* Center Links */}
                        <div className="flex items-center gap-[24px]">

                            <Link
                                to="/terms"
                                className="text-white/70 text-[12px] hover:text-white transition"
                            >
                                Terms of Use
                            </Link>

                            <Link
                                to="/privacy"
                                className="text-white/70 text-[12px] hover:text-white transition"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/faq"
                                className="text-white/70 text-[12px] hover:text-white transition"
                            >
                                FAQs
                            </Link>

                        </div>

                        {/* Right Social Icons */}
                        <div className="flex items-center gap-[18px]">

                            <img
                                src={mediumIcon}
                                alt="medium"
                                className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition"
                            />

                            <img
                                src={behanceIcon}
                                alt="behance"
                                className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition"
                            />

                            <img
                                src={dribbbleIcon}
                                alt="dribbble"
                                className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition"
                            />

                            <img
                                src={discordIcon}
                                alt="discord"
                                className="w-[16px] h-[16px] cursor-pointer opacity-70 hover:opacity-100 transition"
                            />

                        </div>

                    </div>

                </div>

            </section>

        </footer>
    );
};

export default Footer;