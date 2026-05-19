import { useState, useRef } from "react";
import BlogCard from "./componets/BlogCard";
import BlogDetail from "./componets/BlogDetail";
import { blogs, categories } from "./componets/Blog";

const POSTS_PER_PAGE = 10;

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("Latest");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [searchLoading, setSearchLoading] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // Filter blogs by category
    const categoryFiltered =
        activeCategory === "Latest"
            ? blogs
            : blogs.filter((b) => b.category === activeCategory);

    // If search results exist, use them instead
    const displayBlogs = searchResults !== null ? searchResults : categoryFiltered;

    // Pagination
    const totalPages = Math.ceil(displayBlogs.length / POSTS_PER_PAGE);
    const paginated = displayBlogs.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    // Claude-powered search
    const handleSearch = async () => {
        if (!searchInput.trim()) {
            setSearchResults(null);
            setSearchQuery("");
            return;
        }
        setSearchLoading(true);
        setSearchQuery(searchInput);
        setCurrentPage(1);
        try {
            const blogList = blogs
                .map((b) => `ID:${b.id} | "${b.title}" | Category: ${b.category} | ${b.description}`)
                .join("\n");

            const response = await fetch("https://api.anthropic.com/v1/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "claude-sonnet-4-20250514",
                    max_tokens: 1000,
                    messages: [
                        {
                            role: "user",
                            content: `You are a blog search engine. Given the user query, return ONLY a JSON array of matching blog IDs (numbers) from the list below, sorted by relevance. Return at most 10 results. If no match, return [].
 
User query: "${searchInput}"
 
Blog list:
${blogList}
 
Respond with ONLY a JSON array like: [1, 3, 5]`,
                        },
                    ],
                }),
            });
            const data = await response.json();
            const text = data.content?.[0]?.text || "[]";
            const clean = text.replace(/```json|```/g, "").trim();
            const ids = JSON.parse(clean);
            const results = ids
                .map((id) => blogs.find((b) => b.id === id))
                .filter(Boolean);
            setSearchResults(results);
        } catch {
            setSearchResults([]);
        } finally {
            setSearchLoading(false);
        }
    };

    const clearSearch = () => {
        setSearchInput("");
        setSearchQuery("");
        setSearchResults(null);
        setCurrentPage(1);
    };

    if (selectedBlog) {
        return (
            <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
        );
    }

    return (
        <div className="min-h-screen bg-[#111111]">
            <div className="max-w-[1100px] mx-auto px-6 py-8">

                {/* Top row: Heading + Search */}
                <div className="flex items-start justify-between gap-6 mb-8">
                    <h1 className="text-white text-2xl font-bold leading-tight max-w-xs">
                        We Write About: Design,<br />Tech &amp; Business
                    </h1>

                    {/* Search Bar */}
                    <div className="flex items-center gap-0 mt-1">
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            placeholder="Search..."
                            className="bg-white text-[#111111] text-xs px-3 py-2 outline-none w-[200px] placeholder-gray-400"
                        />
                        <button
                            onClick={handleSearch}
                            disabled={searchLoading}
                            className="bg-white hover:bg-gray-100 text-[#111111] text-xs font-semibold px-4 py-2 transition-colors disabled:opacity-60"
                        >
                            {searchLoading ? "..." : "Search"}
                        </button>
                        {searchResults !== null && (
                            <button
                                onClick={clearSearch}
                                className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-2 ml-1 transition-colors"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* Search result label */}
                {searchQuery && (
                    <div className="mb-4">
                        <p className="text-gray-400 text-xs">
                            {searchResults?.length ?? 0} result{searchResults?.length !== 1 ? "s" : ""} for{" "}
                            <span className="text-[#4ADE80] font-medium">"{searchQuery}"</span>
                        </p>
                    </div>
                )}

                {/* TOP SECTION: Sidebar + 2-col grid */}
                <div className="flex gap-8">

                    {/* Left Sidebar — Categories */}
                    <aside className="w-[140px] flex-shrink-0">
                        <ul className="flex flex-col gap-1">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => {
                                            setActiveCategory(cat);
                                            setSearchResults(null);
                                            setSearchQuery("");
                                            setSearchInput("");
                                            setCurrentPage(1);
                                        }}
                                        className={`text-left text-sm w-full py-0.5 transition-colors ${activeCategory === cat && searchResults === null
                                                ? "text-[#4ADE80] font-semibold"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* 2-col grid — first 4 cards */}
                    <div className="flex-1">
                        {paginated.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <p className="text-gray-400 text-sm mb-1">No blogs found.</p>
                                <button
                                    onClick={clearSearch}
                                    className="text-[#4ADE80] text-xs hover:underline mt-2"
                                >
                                    Clear search
                                </button>
                            </div>
                        ) : (
                            paginated.slice(0, 4).length > 0 && (
                                <div className="grid grid-cols-2 gap-4">
                                    {paginated.slice(0, 4).map((blog) => (
                                        <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlog} imageHeight={180} />
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* BOTTOM SECTION: 3-col grid — full width, no sidebar */}
                {paginated.length > 0 && paginated.slice(4).length > 0 && (
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {paginated.slice(4).map((blog) => (
                            <BlogCard key={blog.id} blog={blog} onClick={setSelectedBlog} imageHeight={120} />
                        ))}
                    </div>
                )}

                {/* Pagination — full width */}
                {totalPages > 1 && (
                    <div className="flex items-center gap-1 mt-8">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page, idx, arr) => {
                            const showPage =
                                page <= 3 || page === totalPages || page === currentPage;
                            const showEllipsis =
                                page === totalPages && arr[idx - 1] !== totalPages - 1;

                            if (!showPage) return null;

                            return (
                                <span key={page} className="flex items-center gap-1">
                                    {showEllipsis && (
                                        <span className="text-gray-500 text-xs px-1">...</span>
                                    )}
                                    <button
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-7 h-7 flex items-center justify-center text-xs font-medium transition-colors ${currentPage === page
                                                ? "bg-white text-[#111111]"
                                                : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                </span>
                            );
                        })}

                        <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="text-gray-400 hover:text-white disabled:opacity-30 text-xs ml-2"
                        >
                            Next Page
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;