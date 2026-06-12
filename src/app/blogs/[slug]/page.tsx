"use client";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronRight, ChevronLeft, Share2 } from "lucide-react";
import { BLOGS } from "@/data/blogs";

const SocialIcons = {
    instagram: () => (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    ),
    facebook: () => (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
    ),
    twitter: () => (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.858L2.25 2.25h6.928l4.27 5.65 5.797-5.65Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
        </svg>
    ),
    linkedin: () => (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    ),
};

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params.slug as string;

    const blogIndex = BLOGS.findIndex((b) => b.slug === slug);
    if (blogIndex === -1) notFound();

    const blog = BLOGS[blogIndex];
    const prevBlog = blogIndex > 0 ? BLOGS[blogIndex - 1] : null;
    const nextBlog = blogIndex < BLOGS.length - 1 ? BLOGS[blogIndex + 1] : null;
    const relatedBlogs = BLOGS.filter((b) => b.slug !== slug).slice(0, 6);

    const handleShare = (platform: string) => {
        const url = typeof window !== "undefined" ? window.location.href : "";
        const title = encodeURIComponent(blog.title);
        const urls: Record<string, string> = {
            instagram: "https://www.instagram.com/",
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        };
        window.open(urls[platform], "_blank");
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link href="/" className="font-medium" style={{ color: "#00B4D8" }}>Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <Link href="/blogs" className="font-medium" style={{ color: "#00B4D8" }}>Blog</Link>
                </div>

                {/* Date */}
                <p className="text-center font-semibold text-sm mb-3" style={{ color: "#00B4D8" }}>
                    {blog.date}
                </p>

                {/* Title */}
                <h1
                    className="font-bold text-gray-900 text-center mb-4 leading-snug"
                    style={{ fontSize: "clamp(1.2rem,2.5vw,1.6rem)" }}
                >
                    {blog.title}
                </h1>

                {/* Divider */}
                <hr className="border-gray-200 mb-8" />

                {/* Content */}
                <div
                    className="text-gray-700 text-sm mb-12"
                    style={{ lineHeight: 1.9 }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Share on */}
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold mb-4" style={{ color: "#00B4D8" }}>Share on</p>
                    <div className="flex items-center justify-center gap-3">
                        {(["instagram", "facebook", "twitter", "linkedin"] as const).map((key) => {
                            const Icon = SocialIcons[key];
                            return (
                                <button
                                    key={key}
                                    onClick={() => handleShare(key)}
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                                    style={{ border: "1px solid #E5E7EB", color: "#6B7280", background: "#fff" }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "#00B4D8";
                                        (e.currentTarget as HTMLElement).style.color = "#fff";
                                        (e.currentTarget as HTMLElement).style.borderColor = "#00B4D8";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "#fff";
                                        (e.currentTarget as HTMLElement).style.color = "#6B7280";
                                        (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
                                    }}
                                >
                                    <Icon />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Prev / Next */}
                <div
                    className="flex items-stretch mb-14 rounded-2xl overflow-hidden"
                    style={{ border: "1px solid #E5E7EB" }}
                >
                    <Link
                        href={prevBlog ? `/blogs/${prevBlog.slug}` : "#"}
                        className="flex items-center gap-3 flex-1 p-5 hover:bg-gray-50 transition-colors"
                        style={{ borderRight: "1px solid #E5E7EB", opacity: prevBlog ? 1 : 0.4, pointerEvents: prevBlog ? "auto" : "none" }}
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-400 shrink-0" />
                        <div>
                            <p className="text-xs text-gray-400 font-medium mb-0.5">Previous</p>
                            <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                                {prevBlog?.title || "No previous post"}
                            </p>
                        </div>
                    </Link>
                    <Link
                        href={nextBlog ? `/blogs/${nextBlog.slug}` : "#"}
                        className="flex items-center gap-3 flex-1 p-5 justify-end text-right hover:bg-gray-50 transition-colors"
                        style={{ opacity: nextBlog ? 1 : 0.4, pointerEvents: nextBlog ? "auto" : "none" }}
                    >
                        <div>
                            <p className="text-xs text-gray-400 font-medium mb-0.5">Next</p>
                            <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                                {nextBlog?.title || "No next post"}
                            </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
                    </Link>
                </div>

                {/* Related Posts */}
                <div className="mb-10">
                    <div className="text-center mb-8">
                        <span className="text-sm font-semibold" style={{ color: "#00B4D8" }}>Explore More</span>
                        <h2 className="font-bold text-gray-900 text-xl mt-1">Related Post</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {relatedBlogs.map((b) => (
                            <div
                                key={b.slug}
                                className="bg-white rounded-2xl flex flex-col"
                                style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                            >
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-gray-400 text-xs font-medium">{b.date}</span>
                                        <div className="w-7 h-7 rounded-full flex items-center justify-center"
                                             style={{ background: "rgba(255,107,53,0.10)" }}>
                                            <Share2 className="w-3 h-3" style={{ color: "#FF6B35" }} />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-xs leading-snug mb-2 flex-1 line-clamp-4">
                                        {b.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                                        {b.excerpt}
                                    </p>
                                    <Link href={`/blogs/${b.slug}`} className="text-xs font-semibold" style={{ color: "#00B4D8" }}>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}