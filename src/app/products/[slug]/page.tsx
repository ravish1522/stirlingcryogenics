"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

const ALL_PRODUCTS = [
    {
        slug: "fixed-speed-rotary-screw-compressor",
        brand: "CompAir", category: "Green Hydrogen",
        companyName: "Parker Hannifin India Pvt. Ltd.",
        title: "CompAir L02 – L06 Series: Efficient Low-Noise Air Compressors",
        shortDesc: "Stirling Cryogenics India Pvt. Ltd., an authorised dealer of CompAir, proudly offers the L02 – L06 Series of small reciprocating compressors. Designed for exceptional reliability and performance, these compressors deliver air flow ranging from 0.18 to 0.89 m³/min at 10 bar pressure. Compact, quiet, and energy-efficient, they are available as stand-alone units, receiver mounted models, or as part of a complete Airstation including an......",
        fullDesc: "The CompAir L02–L06 series represents the pinnacle of compact compressor technology. These units deliver consistent performance across demanding industrial environments with minimal maintenance requirements. The innovative airend design ensures maximum efficiency while the advanced control system provides real-time monitoring and fault detection.",
        img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=85",
        specs: [
            { label: "Flow Rate", value: "0.18 – 0.89 m³/min" },
            { label: "Max Pressure", value: "10 bar" },
            { label: "Power Range", value: "2 – 7.5 kW" },
            { label: "Noise Level", value: "≤62 dB(A)" },
            { label: "Drive Type", value: "Belt / Direct drive" },
        ],
    },
    {
        slug: "hyperchill-bioenergy-water-chiller",
        brand: "Parker", category: "Water Chillers & Cooling Systems",
        companyName: "Parker Hannifin India Pvt. Ltd.",
        title: "Parker Hyperchill BioEnergy Water Chiller",
        shortDesc: "The Parker Hyperchill BioEnergy Water Chiller provides precise process cooling for industrial and bioprocessing applications with exceptional energy efficiency and temperature stability......",
        fullDesc: "The Hyperchill series combines advanced inverter-driven compressor technology with intelligent control to deliver best-in-class energy performance. Suitable for a wide range of industrial cooling applications.",
        img: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=800&q=85",
        specs: [
            { label: "Cooling Capacity", value: "1.5 – 90 kW" },
            { label: "Temperature Range", value: "-20°C to +25°C" },
            { label: "Refrigerant", value: "R410A / R407C" },
            { label: "Power Supply", value: "3-phase 400V 50Hz" },
        ],
    },
    {
        slug: "lubricated-rotary-screw-compressor-30-45",
        brand: "CompAir", category: "Compressed Air Dryers",
        companyName: "Stirling Cryogenics India Pvt. Ltd.",
        title: "CompAir L30–L45 Series: Industrial Rotary Screw Compressors",
        shortDesc: "The CompAir L30–L45 series offers outstanding reliability and energy efficiency for medium-duty industrial applications with continuous duty operation......",
        fullDesc: "Purpose-built for continuous industrial use, the L30–L45 delivers high-volume compressed air with remarkable efficiency. The advanced airend and intelligent controller ensure maximum uptime.",
        img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=85",
        specs: [
            { label: "Power Range", value: "30 – 45 kW" },
            { label: "Air Flow", value: "4.8 – 7.8 m³/min" },
            { label: "Max Pressure", value: "13 bar" },
            { label: "Drive Type", value: "Belt or direct drive" },
        ],
    },
    {
        slug: "pg-plus-hydrogen-generators",
        brand: "Parker", category: "Hydrogen Generator",
        companyName: "Parker Hannifin India Pvt. Ltd.",
        title: "Parker Balston PG Plus: High-Purity Hydrogen Generators",
        shortDesc: "The Parker Balston PG Plus Hydrogen Generator produces ultra-high purity hydrogen on-demand using advanced PEM electrolysis, eliminating the need for hydrogen cylinders......",
        fullDesc: "On-site hydrogen generation eliminates cylinder logistics and storage hazards. The PG Plus delivers 99.9999% pure hydrogen at consistent flow rates with minimal operator intervention.",
        img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
        specs: [
            { label: "Purity", value: "99.9999%" },
            { label: "Flow Rate", value: "30 – 1000 ml/min" },
            { label: "Output Pressure", value: "Up to 8.6 bar" },
            { label: "Technology", value: "PEM Electrolysis" },
        ],
    },
    {
        slug: "gh-series-high-pressure-filter",
        brand: "CompAir", category: "Filters",
        companyName: "Stirling Cryogenics India Pvt. Ltd.",
        title: "CompAir GH Series: High Pressure Compressed Air Filters",
        shortDesc: "The CompAir GH Series provides reliable contamination removal in demanding compressed air applications up to 500 bar......",
        fullDesc: "The GH Series covers particulate, oil aerosol and vapour removal with ISO 8573 certified performance. Robust stainless-steel construction ensures long service life.",
        img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=85",
        specs: [
            { label: "Max Pressure", value: "500 bar" },
            { label: "Flow Range", value: "0.1 – 85 m³/min" },
            { label: "Filtration Grade", value: "0.01 μm" },
            { label: "Connections", value: "¼″ to 2½″" },
        ],
    },
    {
        slug: "lubricated-rotary-screw-compressor-90-132",
        brand: "CompAir", category: "Compressed Air Dryers",
        companyName: "Stirling Cryogenics India Pvt. Ltd.",
        title: "CompAir L90–L132: Heavy-Duty Industrial Air Compressors",
        shortDesc: "The CompAir L90–L132 delivers high-volume compressed air for the most demanding industrial environments......",
        fullDesc: "Engineered for continuous heavy-duty operation, the L90–L132 series combines powerful performance with exceptional energy efficiency across the full operating range.",
        img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=85",
        specs: [
            { label: "Power Range", value: "90 – 132 kW" },
            { label: "Air Flow", value: "14.5 – 23.5 m³/min" },
            { label: "Max Pressure", value: "13 bar" },
            { label: "Drive Type", value: "Direct drive" },
        ],
    },
    {
        slug: "nitrogen-psa-generator",
        brand: "Fabrum", category: "Nitrogen Generator",
        companyName: "Fabrum Solutions Ltd.",
        title: "Fabrum Nitrogen PSA Generator N2",
        shortDesc: "Generate high-purity nitrogen on-site with Fabrum PSA Nitrogen Generators delivering continuous supply up to 99.9995% purity......",
        fullDesc: "PSA nitrogen generation provides a safe, reliable and cost-effective alternative to cylinders and bulk liquid. Fabrum's advanced CMS technology ensures consistent purity across all flow conditions.",
        img: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=800&q=85",
        specs: [
            { label: "Purity", value: "95 – 99.9995%" },
            { label: "Flow Rate", value: "1 – 2000 Nm³/h" },
            { label: "Outlet Pressure", value: "Up to 12 bar" },
            { label: "Technology", value: "PSA Carbon Molecular Sieve" },
        ],
    },
    {
        slug: "liquid-nitrogen-fabrum",
        brand: "Fabrum", category: "Gas Generator",
        companyName: "Fabrum Solutions Ltd.",
        title: "Fabrum Liquid Nitrogen (LN) Production System",
        shortDesc: "Fabrum's Liquid Nitrogen production systems use patented cryogenic technology to produce LN2 on-site, eliminating supply chain risks......",
        fullDesc: "Fabrum's LN2 systems are based on decades of cryogenic engineering expertise. The compact modular design allows rapid deployment and scaling to match growing demand.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85",
        specs: [
            { label: "LN2 Production", value: "1 – 200 L/hr" },
            { label: "Purity", value: "99.999% N2" },
            { label: "Storage Pressure", value: "Atmospheric" },
            { label: "Footprint", value: "Compact modular" },
        ],
    },
    {
        slug: "compressed-air-drain-electronic",
        brand: "CompAir", category: "Compressed Air Drains",
        companyName: "Stirling Cryogenics India Pvt. Ltd.",
        title: "Electronic Zero-Loss Compressed Air Drain",
        shortDesc: "The Electronic Zero-Loss Drain eliminates energy waste by discharging condensate only when present......",
        fullDesc: "Zero compressed air loss during condensate discharge means significant energy savings. The electronic control ensures reliable operation even in challenging condensate conditions.",
        img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=85",
        specs: [
            { label: "Max Pressure", value: "16 bar" },
            { label: "Control", value: "Electronic demand-controlled" },
            { label: "Connection", value: "½″ BSP" },
            { label: "Power", value: "24V DC / 230V AC" },
        ],
    },
    {
        slug: "oxygen-generator-psa",
        brand: "Fabrum", category: "Medical Oxygen Plant",
        companyName: "Fabrum Solutions Ltd.",
        title: "PSA Oxygen Generator – Medical Grade",
        shortDesc: "Medical-grade PSA oxygen generators providing continuous on-site oxygen supply at 93–96% purity......",
        fullDesc: "WHO and ISO 10083 compliant medical oxygen generation eliminates dependence on cylinder supplies. Continuous operation with automatic backup switching ensures uninterrupted supply.",
        img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=85",
        specs: [
            { label: "Purity", value: "93 – 96%" },
            { label: "Flow Rate", value: "5 – 500 Nm³/h" },
            { label: "Outlet Pressure", value: "4 – 5 bar" },
            { label: "Standard", value: "ISO 10083 / WHO compliant" },
        ],
    },
    {
        slug: "atlas-copco-air-dryer",
        brand: "Atlas Copco", category: "Compressed Air Dryers",
        companyName: "Atlas Copco India Ltd.",
        title: "Atlas Copco Refrigerant Air Dryer FD Series",
        shortDesc: "The Atlas Copco FD Series refrigerant dryers deliver reliable dew point performance with energy-saving cycling technology......",
        fullDesc: "The FD Series uses advanced heat exchanger technology to efficiently remove moisture from compressed air, protecting downstream equipment and processes.",
        img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=85",
        specs: [
            { label: "Pressure Dew Point", value: "+3°C" },
            { label: "Flow Range", value: "0.6 – 130 m³/min" },
            { label: "Refrigerant", value: "R-513A (low GWP)" },
            { label: "Energy Saving", value: "Up to 50% with cycling" },
        ],
    },
    {
        slug: "zero-air-generator-za",
        brand: "Parker", category: "Zero Air Generator",
        companyName: "Parker Hannifin India Pvt. Ltd.",
        title: "Parker Balston Zero Air Generator ZA Series",
        shortDesc: "The Parker Balston ZA Series produces ultra-pure zero air on-demand for gas chromatography and laboratory instruments......",
        fullDesc: "Catalytic oxidation technology removes all hydrocarbons to below 0.1 ppm, providing a stable and reliable zero air supply for sensitive analytical instruments.",
        img: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=800&q=85",
        specs: [
            { label: "Hydrocarbon Content", value: "<0.1 ppm" },
            { label: "Flow Rate", value: "1.5 – 30 L/min" },
            { label: "Outlet Pressure", value: "Up to 6.9 bar" },
            { label: "Technology", value: "Catalytic oxidation" },
        ],
    },
];

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = ALL_PRODUCTS.find((p) => p.slug === slug);
    if (!product) notFound();

    const [expanded, setExpanded] = useState(false);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", code: "", message: "" });

    const waLink = `https://wa.me/917042492969?text=${encodeURIComponent(`Hi, I am interested in ${product.title}. Please share more details.`)}`;

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

                {/* Page title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    {product.companyName}
                </h1>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* LEFT */}
                    <div>
                        <div className="w-full rounded-2xl overflow-hidden mb-7"
                             style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
                            <img src={product.img} alt={product.title}
                                 className="w-full object-cover" style={{ height: 320 }} />
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                            {product.title}
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {expanded ? product.fullDesc : product.shortDesc}
                            {!expanded && (
                                <button onClick={() => setExpanded(true)}
                                        className="font-semibold ml-1" style={{ color: "#00B4D8" }}>
                                    Read More
                                </button>
                            )}
                        </p>

                        {product.specs.length > 0 && (
                            <div className="mt-6">
                                <h3 className="font-semibold text-gray-800 text-sm mb-3">Technical Specifications</h3>
                                <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
                                    {product.specs.map((spec, i) => (
                                        <div key={spec.label} className="flex items-center px-5 py-3 text-sm"
                                             style={{
                                                 background: i % 2 === 0 ? "#F9FAFB" : "#fff",
                                                 borderBottom: i < product.specs.length - 1 ? "1px solid #F3F4F6" : "none",
                                             }}>
                                            <span className="text-gray-500 font-medium w-44 shrink-0">{spec.label}</span>
                                            <span className="text-gray-900 font-semibold">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-5">
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
                                            className="w-full flex items-center justify-center gap-2 text-white font-semibold py-[14px] rounded-xl transition-all"
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
                           className="block rounded-2xl p-6 transition-all hover:-translate-y-0.5"
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
                </div>
            </div>
        </div>
    );
}