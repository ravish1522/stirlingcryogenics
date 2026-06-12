import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

export default function ApplicationsPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Heading */}
                <div className="text-center mb-12">
          <span
              className="inline-block text-sm font-semibold mb-3"
              style={{ color: "#00B4D8" }}
          >
            Our Applications
          </span>
                    <h1
                        className="font-bold text-gray-900 mb-4"
                        style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)" }}
                    >
                        Cryogenic Solutions Across Industries
                    </h1>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                        Our advanced cryogenic systems support critical applications across
                        research, healthcare, space exploration, and industrial sectors worldwide.
                    </p>
                </div>

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
                                    className="inline-flex items-center gap-2 bg-white text-gray-800 px-5 py-2.5 rounded-full text-xs font-semibold transition-all w-fit hover:bg-[#00B4D8] hover:text-white"
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