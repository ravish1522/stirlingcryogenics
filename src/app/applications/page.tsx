import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

export default function ApplicationsPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="relative" style={{ minHeight: 380 }}>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "url('/images/homepage/hero-cryogenic-systems-2.webp')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(105deg, rgba(0,30,80,0.94) 0%, rgba(0,55,125,0.82) 42%, rgba(0,85,165,0.45) 75%, rgba(0,110,190,0.16) 100%)",
                        }}
                    />
                    <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
                        <div className="max-w-[660px]">
                            <span
                                className="inline-block text-[13px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                                style={{ color: "#fff", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.4)" }}
                            >
                                Our Applications
                            </span>
                            <h1
                                className="text-white font-extrabold leading-[1.1] mb-6"
                                style={{ fontSize: "clamp(2rem,5vw,3rem)", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
                            >
                                Cryogenic Solutions Across Industries
                            </h1>
                            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
                                Our advanced cryogenic systems support critical applications across
                                research, healthcare, space exploration, and industrial sectors worldwide.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 font-semibold rounded-xl px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                                style={{ background: "#00B4D8", color: "#fff", fontSize: 16, boxShadow: "0 6px 28px rgba(0,180,216,0.55)" }}
                            >
                                Get A Quote
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* 2-column card grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {APPLICATIONS.map((app) => (
                        <div
                            key={app.slug}
                            className="relative rounded-2xl overflow-hidden group"
                            style={{ minHeight: 240 }}
                        >
                            {/* Background image */}
                            <img
                                src={app.img}
                                alt={app.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Gradient overlay */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.05) 100%)",
                                }}
                            />

                            {/* Content */}
                            <div
                                className="relative z-10 flex flex-col justify-end p-6"
                                style={{ minHeight: 240 }}
                            >
                                <h2 className="text-white font-bold text-xl mb-2">{app.title}</h2>
                                <p className="text-blue-100 text-xs leading-relaxed mb-4 line-clamp-2">
                                    {app.shortDesc}
                                </p>
                                <Link
                                    href={`/applications/${app.slug}`}
                                    className="inline-flex items-center gap-2 bg-white text-gray-800 px-5 py-2.5 rounded-full text-xs font-semibold transition-all w-fit hover:bg-[#00B4D8] hover:text-white focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                                >
                                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}