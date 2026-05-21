import { useState, useRef } from "react";
import officeImg from "../../../assets/images/contact/office.svg";

const ContactPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        budget: "",
        message: "",
    });
    const [fileName, setFileName] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const fileRef = useRef();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleFile = (e) => {
        if (e.target.files[0]) setFileName(e.target.files[0].name);
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        if (!form.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setSubmitted(true);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("contact@andlang.com");
    };

    /* ── Shared form markup (used in both desktop + mobile) ── */
    const FormBlock = () => (
        <>
            {submitted ? (
                // FIXED: light mode border-[#4ADE80]/30 bg-[#4ADE80]/5 (same), text-gray-500 dark:text-gray-400
                <div className="border border-[#4ADE80]/30 bg-[#4ADE80]/5 p-8 flex flex-col items-center justify-center text-center min-h-[360px]">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2" className="mb-4">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-[#4ADE80] text-lg font-semibold mb-2">Message Sent!</p>
                    {/* FIXED: light mode text-gray-500, dark mode text-gray-400 */}
                    <p className="text-gray-500 dark:text-gray-400 text-sm">We'll get back to you as soon as possible.</p>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setForm({ name: "", email: "", budget: "", message: "" });
                            setFileName("");
                        }}
                        // FIXED: light mode text-gray-500 hover:text-[#111111], dark mode text-gray-400 hover:text-white
                        className="mt-6 text-xs text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white underline"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                // FIXED: light mode border-black/15, dark mode border-white/10
                <div className="border border-black/15 dark:border-white/10 mr-[73px]">
                    {/* Name */}
                    {/* FIXED: light mode border-b border-black/15, dark mode border-white/10 */}
                    <div className="border-b border-black/15 dark:border-white/10">
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="enter your name"
                            // FIXED: light mode text-[#111111] placeholder-gray-400, dark mode text-white placeholder-gray-500
                            className={`w-full bg-transparent text-[#111111] dark:text-white text-sm px-4 py-3 outline-none placeholder-gray-400 dark:placeholder-gray-500 ${errors.name ? "border-l-2 border-red-500" : ""}`}
                        />
                    </div>
                    {/* Email */}
                    <div className="border-b border-black/15 dark:border-white/10">
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="enter your work email"
                            // FIXED: light mode text-[#111111] placeholder-gray-400, dark mode text-white placeholder-gray-500
                            className={`w-full bg-transparent text-[#111111] dark:text-white text-sm px-4 py-3 outline-none placeholder-gray-400 dark:placeholder-gray-500 ${errors.email ? "border-l-2 border-red-500" : ""}`}
                        />
                    </div>
                    {/* Budget */}
                    <div className="border-b border-black/15 dark:border-white/10">
                        <input
                            type="text"
                            name="budget"
                            value={form.budget}
                            onChange={handleChange}
                            placeholder="budget"
                            // FIXED: light mode text-[#111111] placeholder-gray-400, dark mode text-white placeholder-gray-500
                            className="w-full bg-transparent text-[#111111] dark:text-white text-sm px-4 py-3 outline-none placeholder-gray-400 dark:placeholder-gray-500"
                        />
                    </div>
                    {/* Message */}
                    <div className="border-b border-black/15 dark:border-white/10">
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="write your message here..."
                            rows={6}
                            // FIXED: light mode text-[#111111] placeholder-gray-400, dark mode text-white placeholder-gray-500
                            className={`w-full bg-transparent text-[#111111] dark:text-white text-sm px-4 py-3 outline-none placeholder-gray-400 dark:placeholder-gray-500 resize-none ${errors.message ? "border-l-2 border-red-500" : ""}`}
                        />
                    </div>
                    {/* Footer: attach file + submit */}
                    <div className="flex items-center justify-between px-4 py-3">
                        <button
                            onClick={() => fileRef.current.click()}
                            // FIXED: light mode text-gray-500 hover:text-[#111111], dark mode text-gray-400 hover:text-white
                            className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white text-xs transition-colors"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                            </svg>
                            <span>{fileName || "attach file"}</span>
                        </button>
                        <input ref={fileRef} type="file" className="hidden" onChange={handleFile} />
                        {/* Button stays same in both modes */}
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 bg-[#FF4D1C] rounded-full hover:bg-[#FF4D1C] text-[#111111] text-xs font-bold px-5 py-3 transition-colors"
                        >
                            Apply Now
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </button>
                    </div>
                    {/* Validation errors */}
                    {Object.keys(errors).length > 0 && (
                        <div className="px-4 pb-3">
                            {Object.values(errors).map((err, i) => (
                                <p key={i} className="text-red-400 text-xs">{err}</p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );

    /* ── Shared contact info block ── */
    const ContactInfo = () => (
        <div className="flex flex-col gap-10 pt-2">
            <div>
                {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                <p className="text-[#171B2D] dark:text-white text-sm font-bold mb-1">Address</p>
                <p className="text-[#4ADE80] text-sm">Kvernnkallen 2a, 4073 Randaberg</p>
            </div>
            <div>
                {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                <p className="text-[#171B2D] dark:text-white text-sm font-bold mb-1">Contact Details</p>
                <a href="mailto:contact@andlang.com" className="text-[#4ADE80] text-sm hover:underline">
                    contact@andlang.com
                </a>
            </div>
            <div>
                {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                <p className="text-[#171B2D] dark:text-white text-sm font-bold mb-1">Opening Hours</p>
                <p className="text-[#4ADE80] text-sm">Monday to Friday 9:00 AM to 10:00 PM</p>
            </div>
        </div>
    );

    return (
        // FIXED: light mode bg-white text-[#171B2D], dark mode bg-[#0d1117] text-white
        <div className="min-h-screen bg-white dark:bg-[#0d1117] text-[#171B2D] dark:text-white">

            {/* ═══════════════════════════════════════════════
                DESKTOP LAYOUT — 100% original, untouched
                Visible only on lg and above (≥1024px)
            ═══════════════════════════════════════════════ */}
            <div className="hidden lg:block">
                <div className="max-w-[1100px] mx-auto px-12 py-16">

                    {/* SECTION 1: Hero Row */}
                    <div className="flex items-start justify-between gap-16 mb-20">
                        {/* Left — Heading + description + email */}
                        <div className="w-[45%] pt-10">
                            {/* Heading stays green in both modes */}
                            <h1 className="text-[#4ADE80] text-5xl font-bold mb-6 leading-tight">
                                Contact Us
                            </h1>
                            {/* FIXED: light mode text-black/55, dark mode text-gray-400 */}
                            <p className="text-black/55 dark:text-gray-400 text-sm leading-relaxed mb-8">
                                We are here to serve you, and you can contact us on several
                                ways. Through email and contact form. We do not have phone
                                support as of now, but with a service agreement we DO support
                                phone support.
                            </p>
                            {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                            <p className="text-[#171B2D] dark:text-white text-sm font-semibold mb-2">Email Us at:</p>
                            <div className="flex items-center gap-2">
                                {/* Email link stays same in both modes */}
                                <a href="mailto:contact@andlang.com" className="text-[#FF4D1C] text-sm underline underline-offset-2">
                                    contact@andlang.com
                                </a>
                                {/* FIXED: light mode text-gray-500 hover:text-[#4ADE80], dark mode text-gray-400 hover:text-[#4ADE80] */}
                                <button onClick={copyEmail} title="Copy email" className="text-gray-500 dark:text-gray-400 hover:text-[#4ADE80] transition-colors">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Right — Office photo (no change needed) */}
                        <div className="w-[48%] flex-shrink-0">
                            <img src={officeImg} alt="Office" className="w-full h-[300px] object-cover" />
                        </div>
                    </div>

                    {/* SECTION 2: Form + Contact Info */}
                    <div className="flex items-start gap-16">
                        {/* Left — Contact Form */}
                        <div className="w-[50%]">
                            <FormBlock />
                        </div>
                        {/* Right — Contact Info */}
                        <div className="flex-1">
                            <ContactInfo />
                        </div>
                    </div>

                </div>
            </div>
            {/* ═══ END DESKTOP ═══ */}


            {/* ═══════════════════════════════════════════════
                TABLET & MOBILE LAYOUT
                Visible below lg (< 1024px)
            ═══════════════════════════════════════════════ */}
            <div className="lg:hidden">
                <div className="max-w-[700px] mx-auto px-5 py-10 sm:px-4 sm:py-8">

                    {/* 1. Heading */}
                    <h1 className="text-[#4ADE80] text-[36px] sm:text-[30px] font-bold mb-4 leading-tight">
                        Contact Us
                    </h1>

                    {/* 2. Description */}
                    {/* FIXED: light mode text-black/55, dark mode text-gray-400 */}
                    <p className="text-black/55 dark:text-gray-400 text-sm leading-relaxed mb-6">
                        We are here to serve you, and you can contact us on several
                        ways. Through email and contact form. We do not have phone
                        support as of now, but with a service agreement we DO support
                        phone support.
                    </p>

                    {/* 3. Email Us at */}
                    {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                    <p className="text-[#171B2D] dark:text-white text-sm font-semibold mb-2">Email Us at:</p>
                    <div className="flex items-center gap-2 mb-8">
                        <a href="mailto:contact@andlang.com" className="text-[#FF4D1C] text-sm underline underline-offset-2">
                            contact@andlang.com
                        </a>
                        {/* FIXED: light mode text-gray-500 hover:text-[#FF4D1C], dark mode text-gray-400 */}
                        <button onClick={copyEmail} title="Copy email" className="text-gray-500 dark:text-gray-400 hover:text-[#FF4D1C] transition-colors">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                        </button>
                    </div>

                    {/* 4. Office image — full width (no change) */}
                    <div className="w-full mb-10 pl-40">
                        <img
                            src={officeImg}
                            alt="Office"
                            className="w-full h-[220px] sm:h-[570px] object-cover"
                        />
                    </div>

                    {/* 5. Contact Info — stacked, full width */}
                    <div className="flex flex-col gap-7 mb-10">
                        <div>
                            {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                            <p className="text-[#171B2D] dark:text-white text-sm font-bold mb-1">Address</p>
                            <p className="text-[#4ADE80] text-sm">Kvernnkallen 2a, 4073 Randaberg</p>
                        </div>
                        <div>
                            {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                            <p className="text-[#171B2D] dark:text-white text-sm font-bold mb-1">Contact Details</p>
                            <a href="mailto:contact@andlang.com" className="text-[#FF4D1C] text-sm hover:underline">
                                contact@andlang.com
                            </a>
                        </div>
                        <div>
                            {/* FIXED: light mode text-[#171B2D], dark mode text-white */}
                            <p className="text-[#171B2D] dark:text-white text-sm font-bold mb-1">Opening Hours</p>
                            <p className="text-[#FF4D1C] text-sm">Monday to Friday 9:00 AM to 10:00 PM</p>
                        </div>
                    </div>

                    {/* 6. Form — full width */}
                    <FormBlock />

                </div>
            </div>
            {/* ═══ END TABLET & MOBILE ═══ */}

        </div>
    );
};

export default ContactPage;