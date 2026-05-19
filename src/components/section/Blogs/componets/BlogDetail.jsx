import { useState, useEffect } from "react";

const BlogDetail = ({ blog, onBack }) => {
    const [aiSummary, setAiSummary] = useState("");
    const [loadingSummary, setLoadingSummary] = useState(true);

    useEffect(() => {
        const fetchSummary = async () => {
            setLoadingSummary(true);
            setAiSummary("");
            try {
                const response = await fetch("https://api.anthropic.com/v1/messages", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        model: "claude-sonnet-4-20250514",
                        max_tokens: 1000,
                        messages: [
                            {
                                role: "user",
                                content: `Summarize this blog post in 2-3 concise sentences for a reader who wants a quick overview:\n\nTitle: ${blog.title}\n\nContent: ${blog.content}`,
                            },
                        ],
                    }),
                });
                const data = await response.json();
                setAiSummary(data.content?.[0]?.text || "Summary unavailable.");
            } catch {
                setAiSummary("Could not load AI summary. Please try again.");
            } finally {
                setLoadingSummary(false);
            }
        };
        fetchSummary();
    }, [blog.id]);

    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <div className="max-w-3xl mx-auto px-6 py-10">
                {/* Back Button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-[#4ADE80] text-sm font-medium mb-8 hover:opacity-80 transition-opacity"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                    Back to Blogs
                </button>

                {/* Brand Banner */}
                <div
                    className="w-full h-[220px] flex items-center justify-center rounded-sm mb-8"
                    style={{ backgroundColor: blog.brandBg }}
                >
                    <span className="text-5xl font-extrabold tracking-tight" style={{ color: blog.brandTextColor }}>
                        {blog.brand}
                    </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#4ADE80] text-xs font-semibold uppercase tracking-wider">
                        {blog.category}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-xs">{blog.date}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-xs">{blog.readTime}</span>
                </div>

                {/* Title */}
                <h1 className="text-white text-2xl font-bold leading-snug mb-6">
                    {blog.title}
                </h1>

                {/* AI Summary Box */}
                <div className="border border-[#4ADE80]/30 bg-[#4ADE80]/5 rounded-sm p-4 mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#4ADE80">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#4ADE80" strokeWidth="2" fill="none" />
                        </svg>
                        <span className="text-[#4ADE80] text-xs font-semibold uppercase tracking-wider">
                            AI Summary
                        </span>
                    </div>
                    {loadingSummary ? (
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 bg-[#4ADE80] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                    ) : (
                        <p className="text-gray-300 text-sm leading-relaxed">{aiSummary}</p>
                    )}
                </div>

                {/* Full Content */}
                <div className="prose prose-invert max-w-none">
                    {blog.content.split("\n\n").map((para, i) => (
                        <p key={i} className="text-gray-300 text-sm leading-7 mb-4">
                            {para}
                        </p>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-white/10">
                    {blog.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;