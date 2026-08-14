"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ChevronRight, Shield, TrendingUp, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

const ICON_MAP: Record<string, React.ElementType> = {
    shield: Shield,
    "trending-up": TrendingUp,
    zap: Zap,
};

export default function ApplicationDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const app = APPLICATIONS.find((a) => a.slug === slug);
    if (!app) notFound();

    const [openFaq, setOpenFaq] = useState<number>(0);

    return (
        <div className="bg-white min-h-screen">

            {/* HERO */}
            <section className="py-14 text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-[800px] mx-auto">
          <span className="inline-block text-sm font-semibold mb-3" style={{ color: "#00B4D8" }}>
            Applications : {app.category}
          </span>
                    <h1 className="font-bold text-gray-900 mb-4 leading-tight"
                        style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)" }}>
                        {app.heroTitle}
                    </h1>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
                        {app.heroDesc}
                    </p>
                </div>
            </section>

            {/* FEATURE CARDS */}
            <section className="pb-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {app.features.map((f, i) => {
                            const Icon = ICON_MAP[f.icon] || Zap;
                            return (
                                <div key={i} className="bg-white rounded-2xl p-6 text-center"
                                     style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                                         style={{ background: "rgba(255,107,53,0.10)" }}>
                                        <Icon className="w-6 h-6" style={{ color: "#FF6B35" }} strokeWidth={1.8} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm mb-2">{f.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* IMAGE + TEXT */}
            <section className="pb-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{app.heroDesc}</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our advanced cryogenic systems are engineered to deliver exceptional performance
                            and reliability across all {app.title.toLowerCase()} applications, backed by
                            decades of expertise and a global network of installations.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ height: 320, border: "1px solid #E5E7EB" }}>
                        <img src={app.img} alt={app.title} className="w-full h-full object-cover object-center" />
                        <div className="absolute inset-0"
                             style={{ background: "linear-gradient(135deg,rgba(13,45,107,0.5) 0%,transparent 60%)" }} />
                    </div>
                </div>
            </section>

            {/* CORE FEATURES */}
            <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-[860px] mx-auto">
                    <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold mb-2" style={{ color: "#00B4D8" }}>
              Core Features
            </span>
                        <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>
                            Why Choose Our Cryogenic Solutions
                        </h2>
                    </div>
                    <ul className="space-y-4">
                        {app.coreFeatures.map((f, i) => (
                            <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ background: "#FF6B35" }} />
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    <strong className="text-gray-900">{f.label} : </strong>{f.desc}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[860px] mx-auto">
                    <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold mb-2" style={{ color: "#00B4D8" }}>
              FAQs
            </span>
                        <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {app.faqs.map((faq, i) => (
                            <div key={i} className="rounded-2xl overflow-hidden"
                                 style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors"
                                    style={{ background: openFaq === i ? "rgba(0,180,216,0.04)" : "#fff" }}
                                >
                  <span className="font-semibold text-sm pr-4"
                        style={{ color: openFaq === i ? "#00B4D8" : "#1f2937" }}>
                    {faq.q}
                  </span>
                                    {openFaq === i
                                        ? <ChevronUp className="w-5 h-5 shrink-0" style={{ color: "#00B4D8" }} />
                                        : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                    }
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                                         style={{ borderTop: "1px solid #E5E7EB", paddingTop: 12 }}>
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 px-4 text-center"
                     style={{ background: "linear-gradient(135deg,#0D2D6B 0%,#1A3A7A 100%)" }}>
                <h3 className="font-bold text-white text-xl mb-3">
                    Ready to explore our {app.title} solutions?
                </h3>
                <p className="text-blue-200 text-sm mb-6">
                    Contact our experts to find the perfect cryogenic system for your needs.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/contact"
                          className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full text-white focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                          style={{ background: "#00B4D8" }}>
                        Get a Quote <ChevronRight className="w-4 h-4" />
                    </Link>
                    <Link href="/applications"
                          className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                          style={{ border: "2px solid rgba(255,255,255,0.5)" }}>
                        All Applications
                    </Link>
                </div>
            </section>

        </div>
    );
}