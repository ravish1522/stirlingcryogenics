"use client";
import { useState } from "react";
import Link from "next/link";
import {
    ChevronRight, ChevronDown, ChevronUp, CheckCircle2,
    ArrowRight, Plane, Ship, Truck, Factory,
} from "lucide-react";
import { SOLUTIONS, INDUSTRIES, HYDROGEN_FAQS } from "@/data/greenHydrogen";
import Contact from "@/components/Contact";

// Content migrated from the legacy site's Green Hydrogen page:
// https://stirlingcryogenics.co.in/green-hydrogen/
// Solution section copy, benefit lists, industry copy and FAQ content live
// in src/data/greenHydrogen.ts (single source of truth, verbatim from the
// legacy page). This file only handles layout/presentation using the
// current site's existing design system (same patterns as About and the
// Applications detail page).

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
    plane: Plane,
    ship: Ship,
    truck: Truck,
    factory: Factory,
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block text-[13px] font-semibold uppercase tracking-widest mb-3" style={{ color: "#00B4D8" }}>
            {children}
        </span>
    );
}

export default function GreenHydrogenPageClient() {
    const [openFaq, setOpenFaq] = useState<number>(-1);

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <div className="flex items-center gap-2 text-sm">
                    <Link href="/" className="font-medium" style={{ color: "#00B4D8" }}>Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 font-medium">Green Hydrogen</span>
                </div>
            </div>

            {/* 1. HERO */}
            <section className="relative overflow-hidden" style={{ marginTop: 12 }}>
                <div className="relative" style={{ minHeight: 480 }}>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "url('/images/homepage/hero-hydrogen-plant.webp')",
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
                    <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
                        <div className="max-w-[660px]">
                            <span
                                className="inline-block text-[13px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                                style={{ color: "#fff", background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.4)" }}
                            >
                                Future Fuels
                            </span>
                            <h1
                                className="text-white font-extrabold leading-[1.05] mb-7"
                                style={{ fontSize: "clamp(2.4rem,6vw,4rem)", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
                            >
                                Green Hydrogen
                            </h1>
                            <a
                                href="#about-green-hydrogen"
                                className="inline-flex items-center gap-2 font-semibold rounded-xl px-8 py-4 transition-all duration-200 hover:-translate-y-0.5"
                                style={{ background: "#00B4D8", color: "#fff", fontSize: 16, boxShadow: "0 6px 28px rgba(0,180,216,0.55)" }}
                            >
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ABOUT GREEN HYDROGEN */}
            <section id="about-green-hydrogen" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[820px] mx-auto text-center">
                    <SectionEyebrow>Overview</SectionEyebrow>
                    <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: "clamp(1.75rem,3.4vw,2.25rem)" }}>
                        About Green Hydrogen
                    </h2>
                    <p className="text-gray-600 leading-[1.75] mb-4" style={{ fontSize: 16 }}>
                        Green Hydrogen and Green Liquid Hydrogen are fast positioning their rightful place as
                        significant future fuels.
                    </p>
                    <p className="text-gray-600 leading-[1.75]" style={{ fontSize: 16 }}>
                        The Fabrum Team have pioneered Green Hydrogen solutions that delivers the future today.
                    </p>
                </div>
            </section>

            {/* 3–9. SOLUTION SECTIONS — large editorial image / dark content-panel showcase.
                Layout alternates: text-panel left / image right, then image left / text-panel
                right, and so on. Images are the actual Fabrum/Stirling product photos sourced
                from the legacy site's media library (public/images/green-hydrogen/). */}
            {SOLUTIONS.map((sol, i) => {
                const imageOnLeft = i % 2 === 1;
                // Two dark teal tones (existing brand palette) alternate per section, matching
                // the supplied reference rather than introducing a new color.
                const panelBg = i % 2 === 0 ? "#1F3A47" : "#1D6E76";
                return (
                    <section key={sol.id} id={sol.id} className="grid grid-cols-1 md:grid-cols-2">
                        {/* Content panel — on mobile the image always shows first (order-1),
                            content follows (order-2); tablet/desktop alternate via md:order-*. */}
                        <div
                            className={`order-2 flex items-center px-6 sm:px-8 md:px-8 lg:px-14 py-14 sm:py-16 md:py-14 lg:py-20 ${imageOnLeft ? "md:order-2" : "md:order-1"}`}
                            style={{ background: panelBg }}
                        >
                            <div className="w-full max-w-[520px] mx-auto md:mx-0">
                                <span className="inline-block w-10 h-1 rounded-full mb-5" style={{ background: "#00B4D8" }} />
                                <h2 className="text-white font-bold mb-5" style={{ fontSize: "clamp(1.4rem,2.6vw,2rem)", lineHeight: 1.15 }}>
                                    {sol.heading}
                                </h2>
                                {sol.paragraphs.map((p, pi) => (
                                    <p key={pi} className="mb-4" style={{ fontSize: "clamp(14px,1.4vw,16px)", lineHeight: 1.75, color: "rgba(255,255,255,0.85)" }}>
                                        {p}
                                    </p>
                                ))}
                                <ul className="space-y-3 mt-6 mb-7">
                                    {sol.benefits.map((b, bi) => (
                                        <li key={bi} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-[18px] h-[18px] mt-0.5 shrink-0" style={{ color: "#00B4D8" }} />
                                            <span className="leading-snug" style={{ fontSize: 15, color: "rgba(255,255,255,0.9)" }}>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                {sol.brochureUrl && (
                                    <a
                                        href={sol.brochureUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg transition-transform hover:-translate-y-0.5"
                                        style={{ background: "#fff", color: "#0f2733", fontSize: 13.5, letterSpacing: "0.03em" }}
                                    >
                                        Download Brochure
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Image half — full-bleed, no padding, object-cover */}
                        <div className={`order-1 relative ${imageOnLeft ? "md:order-1" : "md:order-2"}`} style={{ minHeight: 340 }}>
                            <img
                                src={sol.image}
                                alt={sol.imageAlt}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </section>
                );
            })}

            {/* 10. INDUSTRIES */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-12">
                        <SectionEyebrow>Where It&apos;s Used</SectionEyebrow>
                        <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem,3.4vw,2.25rem)" }}>
                            Industries
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
                        {INDUSTRIES.map((ind) => {
                            const Icon = INDUSTRY_ICONS[ind.icon];
                            return (
                                <div
                                    key={ind.key}
                                    className="bg-white rounded-2xl p-8 transition-transform duration-200 hover:-translate-y-1"
                                    style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 18px rgba(0,0,0,0.055)" }}
                                >
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(0,180,216,0.1)" }}>
                                        <Icon className="w-6 h-6" style={{ color: "#00B4D8" }} strokeWidth={1.7} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-3" style={{ fontSize: 16 }}>{ind.title}</h3>
                                    <p className="text-gray-500 leading-[1.7]" style={{ fontSize: 13.5 }}>{ind.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 11. COLLABORATIVE JOURNEY */}
            <section className="py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[920px] mx-auto text-center">
                    <SectionEyebrow>Partnership</SectionEyebrow>
                    <h2 className="font-bold text-gray-900 mb-5" style={{ fontSize: "clamp(1.75rem,3.4vw,2.25rem)" }}>
                        Collaborative Journey
                    </h2>
                    <p className="text-gray-600 leading-[1.75]" style={{ fontSize: 16 }}>
                        Stirling Cryogenics India Pvt. values strategic partnerships, notably our collaboration
                        with New Zealand&apos;s Fabrum, renowned for cryogenic expertise. This alliance unites
                        Stirling&apos;s Indian market insights with Fabrum&apos;s innovative approach, focusing on
                        advanced liquid nitrogen systems for various industries. Emphasising a blend of technical
                        prowess and high-quality solutions, our partnership embodies mutual trust and a shared
                        vision for leading sustainable cryogenic technologies globally.
                    </p>
                </div>
            </section>

            {/* 12. MOVING TO A HYDROGEN-FUELLED TRANSPORT FLEET */}
            <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-[920px] mx-auto text-center">
                    <SectionEyebrow>Transition</SectionEyebrow>
                    <h2 className="font-bold text-gray-900 mb-2" style={{ fontSize: "clamp(1.75rem,3.4vw,2.25rem)" }}>
                        Moving To A Hydrogen-Fuelled Transport Fleet
                    </h2>
                    <p className="font-semibold mb-7" style={{ color: "#00B4D8", fontSize: 16 }}>
                        What is the first step?
                    </p>
                    <div className="text-left space-y-4">
                        <p className="text-gray-600 leading-[1.75]" style={{ fontSize: 16 }}>
                            We&apos;re often asked “What&apos;s the first step?” when starting the transition to
                            renewable fuels for fleet operators across numerous applications. Heavy transport,
                            maritime and aviation.
                        </p>
                        <p className="text-gray-600 leading-[1.75]" style={{ fontSize: 16 }}>
                            Over time the transition of diesel-fuelled vehicles fleets to Hydrogen fuelled vehicles
                            will be complete. Dual fuels technology and retrofit options exist and provide an
                            interim transition program for existing fleet assets.
                        </p>
                        <p className="text-gray-600 leading-[1.75]" style={{ fontSize: 16 }}>
                            Demand for total hydrogen fuelled assets currently outstrips supply, so transition
                            options such as dual fuel are a pragmatic and sensible transition towards
                            decarbonization for many operators wanting to lead the way.
                        </p>
                    </div>
                </div>
            </section>

            {/* 13. HYDROGEN FUNDAMENTALS / FAQ */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[880px] mx-auto">
                    <div className="text-center mb-12">
                        <SectionEyebrow>FAQ</SectionEyebrow>
                        <h2 className="font-bold text-gray-900" style={{ fontSize: "clamp(1.75rem,3.4vw,2.25rem)" }}>
                            Hydrogen Fundamentals
                        </h2>
                    </div>
                    <div
                        className="rounded-2xl p-2 sm:p-3 space-y-3"
                        style={{ border: "1px solid #E5E7EB", background: "#F9FAFB", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                    >
                        {HYDROGEN_FAQS.map((faq, i) => {
                            const open = openFaq === i;
                            const panelId = `hydrogen-faq-panel-${i}`;
                            const buttonId = `hydrogen-faq-button-${i}`;
                            return (
                                <div
                                    key={i}
                                    className="rounded-xl overflow-hidden bg-white"
                                    style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                                >
                                    <h3>
                                        <button
                                            id={buttonId}
                                            type="button"
                                            aria-expanded={open}
                                            aria-controls={panelId}
                                            onClick={() => setOpenFaq(open ? -1 : i)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                                            style={{ background: open ? "rgba(0,180,216,0.05)" : "#fff" }}
                                        >
                                            <span className="font-semibold" style={{ color: open ? "#00B4D8" : "#1f2937", fontSize: 15.5 }}>
                                                {faq.q}
                                            </span>
                                            {open
                                                ? <ChevronUp className="w-5 h-5 shrink-0" style={{ color: "#00B4D8" }} />
                                                : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                                            }
                                        </button>
                                    </h3>
                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        hidden={!open}
                                        className="px-6 pb-6 text-gray-600 leading-[1.75] space-y-3"
                                        style={{ borderTop: "1px solid #E5E7EB", paddingTop: 14, fontSize: 15.5 }}
                                    >
                                        {faq.a.map((line, li) => (
                                            <p key={li}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 14. GET IN TOUCH / REQUEST A QUOTE — reuses the existing site-wide Contact component */}
            <div style={{ paddingTop: 8 }}>
                <Contact />
            </div>
        </div>
    );
}
