const BlogCard = ({ blog, onClick, imageHeight = 180 }) => {
    return (
        <div
            onClick={() => onClick(blog)}
            className="bg-[#1a1a1a] cursor-pointer group flex flex-col"
        >
            {/* Brand Image */}
            <div
                className="w-full flex items-center justify-center"
                style={{ backgroundColor: blog.brandBg, height: `${imageHeight}px` }}
            >
                <span
                    className={`font-extrabold tracking-tight ${imageHeight <= 120 ? "text-2xl" : "text-3xl"}`}
                    style={{ color: blog.brandTextColor }}
                >
                    {blog.brand}
                </span>
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-1">
                {/* Title */}
                <h3 className={`text-white font-bold leading-snug mb-2 group-hover:text-[#4ADE80] transition-colors ${imageHeight <= 120 ? "text-[13px]" : "text-[15px]"}`}>
                    {blog.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#4ADE80] text-xs font-medium">{blog.category}</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-500 text-xs">{blog.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-3">
                    {blog.description}
                </p>

                {/* Read More */}
                <button className="text-[#4ADE80] text-xs font-semibold text-left hover:underline">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default BlogCard;