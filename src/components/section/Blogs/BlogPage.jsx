import { useState, useRef } from "react";
import BlogCard from "./componets/BlogCard";
import BlogDetail from "./componets/BlogDetail";
import { blogs, categories } from "./componets/Blog";

const POSTS_PER_PAGE = 10;

// ── Responsive styles ────────────────────────────────────────────────────────
const responsiveStyles = `

  /* ══════════════════════════════════════════════
     DESKTOP — default layout
  ══════════════════════════════════════════════ */

  /* Top row: heading left, search right */
  .blog-top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 32px;
  }

  /* Search bar visible on desktop */
  .blog-search-bar {
    display: flex;
    align-items: center;
    gap: 0;
    margin-top: 4px;
  }

  /* Sidebar + 2-col grid wrapper */
  .blog-top-section {
    display: flex;
    gap: 32px;
  }

  /* Left vertical sidebar */
  .blog-sidebar {
    width: 140px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }
  .blog-sidebar ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Mobile horizontal category tabs — hidden on desktop */
  .blog-cat-tabs {
    display: none;
  }

  /* 2-col grid (top section) */
  .blog-top-grid {
    flex: 1;
  }
  .blog-top-grid-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  /* 3-col grid (bottom section, full width) */
  .blog-bottom-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 16px;
  }

  /* ══════════════════════════════════════════════
     TABLET & MOBILE  (≤ 768px)
  ══════════════════════════════════════════════ */
  @media (max-width: 768px) {

    /* Top row: heading only, full width */
    .blog-top-row {
      flex-direction: column;
      gap: 12px;
      margin-bottom: 16px;
    }

    /* Hide search bar on mobile/tablet */
    .blog-search-bar {
      display: flex;
      width: 100%;
    }

    /* Show horizontal scrollable category tabs */
    .blog-cat-tabs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  column-gap: 40px;
  row-gap: 28px;

  padding-bottom: 12px;
  margin-bottom: 16px;

  list-style: none;
  padding-left: 0;
  margin-top: 0;
}
    .blog-cat-tabs::-webkit-scrollbar {
      display: none;
    }
    .blog-cat-tabs li {
      flex-shrink: 0;
    }

    /* Hide vertical sidebar */
    .blog-sidebar {
      display: none;
    }

    /* Top section: no flex gap, full width grid */
    .blog-top-section {
      flex-direction: column;
      gap: 0;
    }
    .blog-top-grid {
      width: 100%;
    }

    /* Both top & bottom grids → 2 columns */
    .blog-top-grid-inner {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .blog-bottom-grid {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 12px;
    }
  }

  /* ══════════════════════════════════════════════
     MOBILE  (≤ 480px)
  ══════════════════════════════════════════════ */
  @media (max-width: 480px) {
    .blog-top-grid-inner {
      gap: 10px;
    }
    .blog-bottom-grid {
      gap: 10px;
    }
  }
`;

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

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setSearchResults(null);
        setSearchQuery("");
        setSearchInput("");
        setCurrentPage(1);
    };

    if (selectedBlog) {
        return (
            <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
        );
    }

    return (
        // FIXED: light mode bg-white, dark mode bg-[#111111]
        <div className="min-h-screen bg-white dark:bg-[#111111]">
            {/* Inject responsive styles */}
            <style>{responsiveStyles}</style>

            <div className="max-w-[1100px] mx-auto px-2 py-8">

                {/* Top row: Heading + Search (search hidden on mobile) */}
                <div className="blog-top-row">
                    {/* FIXED: light mode text-[#111111], dark mode text-white */}
                    <h1 className="text-[#111111] dark:text-white text-2xl font-bold leading-tight max-w-xs">
                        We Write About: Design,<br />Tech &amp; Business
                    </h1>

                    {/* Search Bar — hidden on mobile/tablet via CSS */}
                    <div className="blog-search-bar">
                        {/* FIXED: light mode bg-white border border-gray-300 text-[#111111], dark mode bg-white text-[#111111] */}
                        <input
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            placeholder="Search..."
                            className="bg-white border border-gray-300 dark:border-transparent text-[#111111] text-xs px-3 py-2 outline-none w-[200px] placeholder-gray-400"
                        />
                        {/* FIXED: light mode bg-white border border-gray-300 hover:bg-gray-100 text-[#111111], dark mode bg-white */}
                        <button
                            onClick={handleSearch}
                            disabled={searchLoading}
                            className="bg-white border border-l-0 border-gray-300 dark:border-transparent hover:bg-gray-100 text-[#111111] text-xs font-semibold px-4 py-2 transition-colors disabled:opacity-60"
                        >
                            {searchLoading ? "..." : "Search"}
                        </button>
                        {searchResults !== null && (
                            // FIXED: light mode bg-black/10 text-[#111111], dark mode bg-white/10 text-white
                            <button
                                onClick={clearSearch}
                                className="bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-[#111111] dark:text-white text-xs px-3 py-2 ml-1 transition-colors"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                {/* ── MOBILE/TABLET: Horizontal scrollable category tabs ── */}
                <ul className="blog-cat-tabs">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => handleCategoryChange(cat)}
                                // FIXED: inactive light mode text-gray-500 hover:text-[#111111], dark mode text-gray-400 hover:text-white
                                className={`text-sm whitespace-nowrap py-0.5 transition-colors ${activeCategory === cat && searchResults === null
                                    ? "text-[#4ADE80] font-semibold"
                                    : "text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Search result label */}
                {searchQuery && (
                    <div className="mb-4">
                        {/* FIXED: light mode text-gray-500, dark mode text-gray-400 */}
                        <p className="text-gray-500 dark:text-gray-400 text-xs">
                            {searchResults?.length ?? 0} result{searchResults?.length !== 1 ? "s" : ""} for{" "}
                            <span className="text-[#4ADE80] font-medium">"{searchQuery}"</span>
                        </p>
                    </div>
                )}

                {/* TOP SECTION: Sidebar (desktop) + 2-col grid */}
                <div className="blog-top-section">

                    {/* Left Sidebar — Desktop only (hidden on mobile via CSS) */}
                    <aside className="blog-sidebar">
                        <ul>
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => handleCategoryChange(cat)}
                                        // FIXED: inactive light mode text-gray-500 hover:text-[#111111], dark mode text-gray-400 hover:text-white
                                        className={`text-left text-sm w-full py-0.5 transition-colors ${activeCategory === cat && searchResults === null
                                            ? "text-[#4ADE80] font-semibold"
                                            : "text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* 2-col grid — first 4 cards */}
                    <div className="blog-top-grid">
                        {paginated.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                {/* FIXED: light mode text-gray-500, dark mode text-gray-400 */}
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">No blogs found.</p>
                                <button
                                    onClick={clearSearch}
                                    className="text-[#4ADE80] text-xs hover:underline mt-2"
                                >
                                    Clear search
                                </button>
                            </div>
                        ) : (
                            paginated.slice(0, 4).length > 0 && (
                                <div className="blog-top-grid-inner">
                                    {paginated.slice(0, 4).map((blog) => (
                                        <BlogCard
                                            key={blog.id}
                                            blog={blog}
                                            onClick={setSelectedBlog}
                                            imageHeight={180}
                                        />
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* BOTTOM SECTION: 3-col desktop / 2-col mobile — full width, no sidebar */}
                {paginated.length > 0 && paginated.slice(4).length > 0 && (
                    <div className="blog-bottom-grid">
                        {paginated.slice(4).map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                                onClick={setSelectedBlog}
                                imageHeight={120}
                            />
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
                                        // FIXED: light mode text-gray-400, dark mode text-gray-500
                                        <span className="text-gray-400 dark:text-gray-500 text-xs px-1">...</span>
                                    )}
                                    <button
                                        onClick={() => setCurrentPage(page)}
                                        // FIXED: active light mode bg-[#111111] text-white, dark mode bg-white text-[#111111]
                                        // inactive light mode text-gray-500 hover:text-[#111111], dark mode text-gray-400 hover:text-white
                                        className={`w-7 h-7 flex items-center justify-center text-xs font-medium transition-colors ${currentPage === page
                                            ? "bg-[#111111] dark:bg-white text-white dark:text-[#111111]"
                                            : "text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white"
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
                            // FIXED: light mode text-gray-500 hover:text-[#111111], dark mode text-gray-400 hover:text-white
                            className="text-gray-500 dark:text-gray-400 hover:text-[#111111] dark:hover:text-white disabled:opacity-30 text-xs ml-2"
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