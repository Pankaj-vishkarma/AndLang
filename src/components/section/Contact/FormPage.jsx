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

    return (
        <div className="min-h-screen bg-[#0d1117] text-white">
            <div className="max-w-[1100px] mx-auto px-12 py-16">

                {/* ── SECTION 1: Hero Row ── */}
                <div className="flex items-start justify-between gap-16 mb-20">

                    {/* Left — Heading + description + email */}
                    <div className="w-[45%] pt-10">
                        <h1 className="text-[#4ADE80] text-5xl font-bold mb-6 leading-tight">
                            Contact Us
                        </h1>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8">
                            We are here to serve you, and you can contact us on several
                            ways. Through email and contact form. We do not have phone
                            support as of now, but with a service agreement we DO support
                            phone support.
                        </p>

                        <p className="text-white text-sm font-semibold mb-2">Email Us at:</p>
                        <div className="flex items-center gap-2">
                            <a
                                href="mailto:contact@andlang.com"
                                className="text-[#4ADE80] text-sm underline underline-offset-2"
                            >
                                contact@andlang.com
                            </a>
                            <button
                                onClick={copyEmail}
                                title="Copy email"
                                className="text-gray-400 hover:text-[#4ADE80] transition-colors"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right — Office photo, top-right */}
                    <div className="w-[48%] flex-shrink-0">
                        <img
                            src={officeImg}
                            alt="Office"
                            className="w-full h-[300px] object-cover"
                        />
                    </div>
                </div>

                {/* ── SECTION 2: Form + Contact Info ── */}
                <div className="flex items-start gap-16">

                    {/* Left — Contact Form */}
                    <div className="w-[50%]">
                        {submitted ? (
                            <div className="border border-[#4ADE80]/30 bg-[#4ADE80]/5 p-8 flex flex-col items-center justify-center text-center min-h-[360px]">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2" className="mb-4">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <p className="text-[#4ADE80] text-lg font-semibold mb-2">Message Sent!</p>
                                <p className="text-gray-400 text-sm">We'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => {
                                        setSubmitted(false);
                                        setForm({ name: "", email: "", budget: "", message: "" });
                                        setFileName("");
                                    }}
                                    className="mt-6 text-xs text-gray-400 hover:text-white underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <div className="border border-white/10">

                                {/* Name */}
                                <div className="border-b border-white/10">
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="enter your name"
                                        className={`w-full bg-transparent text-white text-sm px-4 py-3 outline-none placeholder-gray-500 ${errors.name ? "border-l-2 border-red-500" : ""}`}
                                    />
                                </div>

                                {/* Email */}
                                <div className="border-b border-white/10">
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="enter your work email"
                                        className={`w-full bg-transparent text-white text-sm px-4 py-3 outline-none placeholder-gray-500 ${errors.email ? "border-l-2 border-red-500" : ""}`}
                                    />
                                </div>

                                {/* Budget */}
                                <div className="border-b border-white/10">
                                    <input
                                        type="text"
                                        name="budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        placeholder="budget"
                                        className="w-full bg-transparent text-white text-sm px-4 py-3 outline-none placeholder-gray-500"
                                    />
                                </div>

                                {/* Message */}
                                <div className="border-b border-white/10">
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="write your message here..."
                                        rows={6}
                                        className={`w-full bg-transparent text-white text-sm px-4 py-3 outline-none placeholder-gray-500 resize-none ${errors.message ? "border-l-2 border-red-500" : ""}`}
                                    />
                                </div>

                                {/* Footer: attach file + submit */}
                                <div className="flex items-center justify-between px-4 py-3">
                                    <button
                                        onClick={() => fileRef.current.click()}
                                        className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors"
                                    >
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                        </svg>
                                        <span>{fileName || "attach file"}</span>
                                    </button>
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        className="hidden"
                                        onChange={handleFile}
                                    />

                                    <button
                                        onClick={handleSubmit}
                                        className="flex items-center gap-2 bg-[#4ADE80] hover:bg-[#22c55e] text-[#111111] text-xs font-bold px-5 py-2 transition-colors"
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
                    </div>

                    {/* Right — Contact Info */}
                    <div className="flex-1 flex flex-col gap-10 pt-2">

                        {/* Address */}
                        <div>
                            <p className="text-white text-sm font-bold mb-1">Address</p>
                            <p className="text-[#4ADE80] text-sm">Kvernnkallen 2a, 4073 Randaberg</p>
                        </div>

                        {/* Contact Details */}
                        <div>
                            <p className="text-white text-sm font-bold mb-1">Contact Details</p>
                            <a
                                href="mailto:contact@andlang.com"
                                className="text-[#4ADE80] text-sm hover:underline"
                            >
                                contact@andlang.com
                            </a>
                        </div>

                        {/* Opening Hours */}
                        <div>
                            <p className="text-white text-sm font-bold mb-1">Opening Hours</p>
                            <p className="text-[#4ADE80] text-sm">Monday to Friday 9:00 AM to 10:00 PM</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;