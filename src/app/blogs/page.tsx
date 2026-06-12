"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Share2 } from "lucide-react";
import { BLOGS } from "@/data/blogs";

const PER_PAGE = 6;

export default function BlogsPage() {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(BLOGS.length / PER_PAGE);
    const paginated = BLOGS.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const pageNums = (): (number | "...")[] => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
        const nums: (number | "...")[] = [1];
        if (page > 3) nums.push("...");
        for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) nums.push(i);
        if (page < totalPages - 2) nums.push("...");
        if (totalPages > 1) nums.push(totalPages);
        return nums;
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link href="/" className="font-medium" style={{ color: "#00B4D8" }}>Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 font-medium">Blog</span>
                </div>

                {/* Heading */}
                <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold mb-3" style={{ color: "#00B4D8" }}>
            Discover Our Latest News
          </span>
                    <h1 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(2rem,4vw,2.8rem)" }}>
                        Blogs
                    </h1>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                        Explore the latest updates, innovations, and expert perspectives in cryogenic solutions
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {paginated.map((blog) => (
                        <div
                            key={blog.slug}
                            className="bg-white rounded-2xl flex flex-col"
                            style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                        >
                            <div className="p-5 flex flex-col flex-1">
                                {/* Date + Share */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-gray-400 text-xs font-medium">{blog.date}</span>
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center"
                                        style={{ background: "rgba(255,107,53,0.10)" }}
                                    >
                                        <Share2 className="w-3.5 h-3.5" style={{ color: "#FF6B35" }} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="font-bold text-gray-900 leading-snug mb-2 flex-1" style={{ fontSize: 14 }}>
                                    {blog.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                                    {blog.excerpt}
                                </p>

                                {/* Learn More */}
                                <Link href={`/blogs/${blog.slug}`} className="text-xs font-semibold" style={{ color: "#00B4D8" }}>
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium disabled:opacity-40"
                            style={{ color: "#374151" }}
                        >
                            <ChevronLeft className="w-4 h-4" /> Back
                        </button>

                        {pageNums().map((n, i) =>
                            n === "..." ? (
                                <span key={i} className="px-2 text-gray-400 text-sm">...</span>
                            ) : (
                                <button
                                    key={i}
                                    onClick={() => setPage(n as number)}
                                    className="w-9 h-9 rounded-xl text-sm font-semibold transition-all"
                                    style={{
                                        background: page === n ? "#00B4D8" : "transparent",
                                        color: page === n ? "#fff" : "#374151",
                                        border: page === n ? "none" : "1px solid #E5E7EB",
                                    }}
                                >
                                    {n}
                                </button>
                            )
                        )}

                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium disabled:opacity-40"
                            style={{ color: "#374151" }}
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}