"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
    ChevronRight,
    ArrowRight,
    CheckCircle2,
    ImageOff,
    CheckCircle,
    FileText,
    Download,
    MessageSquare,
} from "lucide-react";

import { PRODUCTS as ALL_PRODUCTS, formatSpecLabel, getRelatedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

// Section wrapper shared by every content block below the hero so spacing,
// heading style, and card treatment stay consistent regardless of whether
// the section has real data or is showing an honest empty-state.
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-10">
            <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
            {children}
        </section>
    );
}

function EmptyState({ message }: { message: string }) {
    return (
        <div
            className="rounded-2xl px-6 py-8 text-center text-sm text-gray-400 font-medium"
            style={{ border: "1px dashed #E5E7EB", background: "#FAFAFA" }}
        >
            {message}
        </div>
    );
}

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = ALL_PRODUCTS.find((p) => p.slug === slug);
    if (!product) notFound();

    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", code: "", message: "" });

    const waLink = `https://wa.me/917042492969?text=${encodeURIComponent(`Hi, I am interested in ${product.title}. Please share more details.`)}`;
    const overview = product.fullDesc || product.shortDesc;
    const related = getRelatedProducts(product, 4);

    const scrollToForm = () => {
        document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-6 flex-wrap">
                    <Link href="/" className="font-medium" style={{ color: "#00B4D8" }}>Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <Link href="/products" className="font-medium" style={{ color: "#00B4D8" }}>Products</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 font-medium">{product.category}</span>
                </div>

                {/* ============ HERO ============ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div className="w-full rounded-2xl overflow-hidden"
                         style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                        {product.img ? (
                            <div className="w-full flex items-center justify-center bg-gray-50" style={{ height: 360 }}>
                                <img src={product.img} alt={product.title}
                                     className="w-full h-full object-contain p-6" />
                            </div>
                        ) : (
                            <div className="w-full flex flex-col items-center justify-center gap-2 bg-gray-50 text-gray-300" style={{ height: 360 }}>
                                <ImageOff className="w-10 h-10" />
                                <span className="text-sm font-medium text-gray-400">Image coming soon</span>
                            </div>
                        )}
                    </div>

                    <div className="pt-1">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                                  style={{ background: "rgba(0,180,216,0.08)", color: "#00B4D8" }}>
                                {product.category}
                            </span>
                            {product.brand && (
                                <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full"
                                      style={{ background: "#F3F4F6", color: "#374151" }}>
                                    {product.brand}
                                </span>
                            )}
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            {product.companyName || product.title}
                        </h1>

                        {product.shortDesc && (
                            <p className="text-gray-600 text-[15px] leading-relaxed mb-7">
                                {product.shortDesc}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-3">
                            <button onClick={scrollToForm}
                                    className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                                    style={{ background: "#00B4D8" }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0090B0")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "#00B4D8")}>
                                Request a Quote <ArrowRight className="w-4 h-4" />
                            </button>
                            <a href={waLink} target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                               style={{ border: "1px solid #E5E7EB", color: "#111827" }}>
                                <MessageSquare className="w-4 h-4" style={{ color: "#25D366" }} />
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* ============ BROCHURE & DATASHEET (moved directly below hero) ============ */}
                        {product.datasheetUrl && (
                            <a href={product.datasheetUrl} target="_blank" rel="noopener noreferrer"
                               className="mt-6 flex items-center justify-between gap-4 rounded-2xl px-6 py-5 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                               style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                         style={{ background: "rgba(0,180,216,0.10)" }}>
                                        <FileText className="w-5 h-5" style={{ color: "#00B4D8" }} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm">Brochure &amp; Datasheet</p>
                                        <p className="text-gray-500 text-xs">Full specifications, PDF download</p>
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0"
                                      style={{ color: "#00B4D8" }}>
                                    Download <Download className="w-4 h-4" />
                                </span>
                            </a>
                        )}
                    </div>
                </div>

                {/* ============ PRODUCT OVERVIEW ============ */}
                <Section title="Product Overview">
                    {overview ? (
                        <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl">{overview}</p>
                    ) : (
                        <EmptyState message="A detailed overview for this product has not yet been added." />
                    )}
                </Section>

                {/* ============ KEY FEATURES ============ */}
                <Section title="Key Features">
                    {product.features.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {product.features.map((feature) => (
                                <div key={feature}
                                     className="flex items-start gap-2.5 rounded-2xl px-5 py-4 text-sm text-gray-700"
                                     style={{ border: "1px solid #E5E7EB" }}>
                                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#00B4D8" }} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <EmptyState message="Key features for this product have not yet been added." />
                    )}
                </Section>

                {/* ============ TECHNICAL SPECIFICATIONS ============ */}
                <Section title="Technical Specifications">
                    {product.specs.length > 0 ? (
                        <div className="rounded-2xl overflow-hidden max-w-3xl" style={{ border: "1px solid #E5E7EB" }}>
                            {product.specs.map((spec, i) => (
                                <div key={spec.label} className="flex items-center px-5 py-3 text-sm"
                                     style={{
                                         background: i % 2 === 0 ? "#F9FAFB" : "#fff",
                                         borderBottom: i < product.specs.length - 1 ? "1px solid #F3F4F6" : "none",
                                     }}>
                                    <span className="text-gray-500 font-medium w-44 shrink-0">{formatSpecLabel(spec.label)}</span>
                                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <EmptyState message="Technical specifications for this product have not yet been added." />
                    )}
                </Section>

                {/* ============ APPLICATIONS ============ */}
                <Section title="Applications">
                    {product.applications.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {product.applications.map((app) => (
                                <span key={app} className="inline-block text-xs font-medium px-3 py-1.5 rounded-full"
                                      style={{ background: "rgba(0,180,216,0.08)", color: "#00B4D8" }}>
                                    {app}
                                </span>
                            ))}
                        </div>
                    ) : (
                        <EmptyState message="Specific applications for this product have not yet been added." />
                    )}
                </Section>

                {/* ============ RELATED PRODUCTS ============ */}
                {related.length > 0 && (
                    <Section title="Related Products">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {related.map((p) => (
                                <ProductCard key={p.slug} product={p} />
                            ))}
                        </div>
                    </Section>
                )}

                {/* ============ ENQUIRY FORM + WHATSAPP ============ */}
                <div id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14 scroll-mt-24">
                    <div className="bg-white rounded-2xl p-7"
                         style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                        <h3 className="font-bold text-gray-900 text-[17px] mb-1">
                            Get Expert Advice for Your Requirement
                        </h3>
                        <p className="text-gray-500 text-sm mb-6">
                            Tell us your requirement and we&apos;ll guide you with the best possible solution.
                        </p>

                        {sent ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                     style={{ background: "rgba(0,180,216,0.10)" }}>
                                    <CheckCircle2 className="w-8 h-8" style={{ color: "#00B4D8" }} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Inquiry Sent!</h4>
                                <p className="text-gray-500 text-sm">Our team will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3">
                                <div className="grid grid-cols-2 gap-3">
                                    <input className="field" placeholder="Name"
                                           value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                                    <input type="email" className="field" placeholder="Email"
                                           value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                                </div>
                                <input className="field" placeholder="Phone Number"
                                       value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                                <input className="field" placeholder="HTSPT"
                                       value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
                                <textarea className="field resize-none" rows={5} placeholder="Message"
                                          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                                <button type="submit"
                                        className="w-full flex items-center justify-center gap-2 text-white font-semibold py-[14px] rounded-xl transition-all focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                                        style={{ background: "#00B4D8", fontSize: 15 }}
                                        onMouseEnter={(e) => (e.currentTarget.style.background = "#0090B0")}
                                        onMouseLeave={(e) => (e.currentTarget.style.background = "#00B4D8")}>
                                    Request a Quote <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* WhatsApp */}
                    <a href={waLink} target="_blank" rel="noopener noreferrer"
                       className="block rounded-2xl p-6 transition-all hover:-translate-y-0.5 h-fit focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                       style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                 style={{ background: "#25D366" }}>
                                <WhatsAppIcon />
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-base mb-0.5">WhatsApp</p>
                                <p className="text-gray-500 text-sm mb-1.5">Send us a message for quick assistance.</p>
                                <p className="font-semibold text-sm" style={{ color: "#00B4D8" }}>+91 7042492969</p>
                            </div>
                        </div>
                    </a>
                </div>

                {/* ============ WHY CONTACT US ============ */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-3xl">
                    {[
                        { value: "70+", label: "Years of Experience" },
                        { value: "700+", label: "Installations Completed" },
                        { value: "5+", label: "Countries Served" },
                        { value: "24hr", label: "Response Time" },
                    ].map((s) => (
                        <div key={s.label} className="text-center rounded-2xl px-3 py-5"
                             style={{ border: "1px solid #E5E7EB" }}>
                            <p className="font-bold text-xl mb-1" style={{ color: "#00B4D8" }}>{s.value}</p>
                            <p className="text-gray-500 text-xs font-medium">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ============ FINAL CTA ============ */}
            <section className="py-14 px-4 text-center mt-14"
                     style={{ background: "linear-gradient(135deg,#0D2D6B 0%,#1A3A7A 100%)" }}>
                <h3 className="font-bold text-white text-xl md:text-2xl mb-3">
                    Ready to talk to our cryogenics experts?
                </h3>
                <p className="text-blue-200 text-sm mb-7 max-w-xl mx-auto">
                    Get a tailored quote for {product.title} and find the right solution for your requirement.
                </p>
                <button onClick={scrollToForm}
                        className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-full text-white focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                        style={{ background: "#00B4D8" }}>
                    Request a Quote <ChevronRight className="w-4 h-4" />
                </button>
            </section>
        </div>
    );
}
