"use client";
import { useEffect, useRef, useState } from "react";
import { MapPin, Leaf, Users, Award, X } from "lucide-react";
import Applications from "@/components/Applications";
import ProductsInAction from "@/components/ProductsInAction";

const STATS = [
    { value: "700+", label: "installations completed" },
    { value: "650+", label: "Happy Clients" },
    { value: "30+",  label: "Skilled Team Members" },
    { value: "5+",   label: "Country Served" },
    { value: "70+",  label: "Years Of Experience" },
];

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    meta: { label: string; value: string }[];
    previewSrc: string | null;
    pdfSrc: string | null;
    alt: string;
    color: string;
    border: string;
}

const CERTIFICATES: Certificate[] = [
    {
        id: "msme-zed-gold",
        title: "MSME Sustainable (ZED) Certification — Gold",
        issuer: "Ministry of Micro, Small & Medium Enterprises",
        meta: [
            { label: "Udyam Registration", value: "UDYAM-UP-28-0010634" },
            { label: "Issued", value: "March 6, 2026" },
            { label: "Validity", value: "3 years from date of issue" },
        ],
        previewSrc: "/certificates/msme-zed-gold-certificate-preview.jpg",
        pdfSrc: "/certificates/msme-zed-gold-certificate.pdf",
        alt: "MSME ZED Gold Certification awarded to Stirling Cryogenics India",
        color: "#FFF7ED",
        border: "#FED7AA",
    },
    {
        id: "msme-udyam",
        title: "MSME-Udyam Registration",
        issuer: "Ministry of Micro, Small & Medium Enterprises",
        meta: [],
        previewSrc: null,
        pdfSrc: null,
        alt: "MSME Udyam registration certification",
        color: "#F0FDF4",
        border: "#BBF7D0",
    },
    {
        id: "iso-9001",
        title: "ISO 9001:2015",
        issuer: "Quality Management System",
        meta: [],
        previewSrc: null,
        pdfSrc: null,
        alt: "ISO 9001:2015 quality management certification",
        color: "#EFF6FF",
        border: "#BFDBFE",
    },
];

function CertificateModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        closeBtnRef.current?.focus();
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(15,23,42,0.6)" }}
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={cert.title}
                className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    ref={closeBtnRef}
                    onClick={onClose}
                    aria-label="Close certificate viewer"
                    className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                    style={{ border: "1px solid #E5E7EB" }}
                >
                    <X className="w-4 h-4 text-gray-700" />
                </button>
                <div className="p-4 sm:p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{cert.issuer}</p>
                    {cert.pdfSrc ? (
                        <embed
                            src={cert.pdfSrc}
                            type="application/pdf"
                            className="w-full rounded-lg"
                            style={{ height: "70vh", border: "1px solid #E5E7EB" }}
                        />
                    ) : cert.previewSrc ? (
                        <img
                            src={cert.previewSrc}
                            alt={cert.alt}
                            className="w-full h-auto rounded-lg"
                            style={{ objectFit: "contain" }}
                        />
                    ) : null}
                    {cert.pdfSrc && (
                        <p className="text-xs text-gray-400 mt-3">
                            If the certificate does not display above,{" "}
                            <a
                                href={cert.pdfSrc}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                                style={{ color: "#00B4D8" }}
                            >
                                open it in a new tab
                            </a>
                            .
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function AboutPage() {
    const [activeCert, setActiveCert] = useState<Certificate | null>(null);

    return (
        <div className="bg-white">

            {/* HERO */}
            <section className="py-16 text-center px-4">
        <span
            className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-5"
            style={{ color: "#00B4D8", background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.22)" }}
        >
          Get To Know Us
        </span>
                <h1
                    className="font-bold text-gray-900 mb-4 leading-tight"
                    style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
                >
                    Transforming The Future<br />Of Cryogenic Technology
                </h1>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                    Driven by innovation and expertise, we build cryogenic solutions that power
                    industries and shape a more efficient and sustainable future.
                </p>
            </section>

            {/* HERO IMAGE */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-14">
                <div className="rounded-3xl overflow-hidden" style={{ height: 380 }}>
                    <img
                        src="/images/homepage/hero-cryogenic-systems-1.webp"
                        alt="Stirling Cryogenics facility and cryogenic systems"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* OUR STORY */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto flex items-start gap-5">
                    <div
                        className="shrink-0 w-1 rounded-full self-stretch"
                        style={{ background: "#00B4D8", minHeight: 80 }}
                    />
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl mb-4">Our Story</h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                            Stirling Cryogenics, established in 1955, excels in advanced cryogenic solutions with a
                            rich legacy of innovation and over 700 installations across India. In partnership with
                            Fabrum, New Zealand, we specialise in state-of-the-art nitrogen and oxygen generators,
                            leveraging cutting-edge PSA technology. Our commitment to excellence and adaptation to
                            market needs positions us as a leader in cryogenic technology, dedicated to delivering
                            reliable, bespoke solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* MD PROFILE */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="rounded-2xl overflow-hidden" style={{ height: 340 }}>
                        <img
                            src="/images/homepage/company-intro-ptc1000-cryocooler.webp"
                            alt="Stirling Cryogenics cryocooler system"
                            className="w-full h-full object-contain bg-[#F9FAFB]"
                        />
                    </div>
                    <div
                        className="rounded-2xl p-8"
                        style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
                    >
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Hello, I&apos;m Ashish Bhutani, a driven professional with a profound passion for
                            renewable energy and the limitless potential of cryogenics. With over a decade of
                            dedicated experience, I&apos;ve been fortunate to lead and contribute significantly to
                            organizations, leveraging cutting-edge PSA technology. Our commitment to excellence and
                            adaptation to market needs positions us as a leader in cryogenic technology, dedicated
                            to delivering reliable, bespoke solutions. I&apos;ve been fortunate to lead and
                            contribute significantly to organizations, paving the way for pioneering innovations
                            in these dynamic fields.
                        </p>
                        <p className="font-bold text-gray-900 text-sm">Mr. Ashish Bhutani</p>
                        <p className="text-sm" style={{ color: "#00B4D8" }}>Managing Director</p>
                    </div>
                </div>
            </section>

            {/* OUR MISSION */}
            <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-[1280px] mx-auto flex items-start gap-5">
                    <div
                        className="shrink-0 w-1 rounded-full self-stretch"
                        style={{ background: "#00B4D8", minHeight: 80 }}
                    />
                    <div>
                        <h2 className="font-bold text-gray-900 text-xl mb-4">Our Mission</h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
                            Our mission is to advance cryogenic technology in ways that improve human life,
                            delivering reliable cryogenic services and solutions to research institutions,
                            defence laboratories, and healthcare providers across India. We are proud to
                            support the work of premier institutions such as IITs, IISERs, NITs, defence
                            and CSIR laboratories, hospitals, and other specialised applications, providing
                            dependable cryogenic systems for their most demanding requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* OUR VISION */}
            <section className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
            <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#00B4D8" }}
            >
              Our Target
            </span>
                        <h2 className="font-bold text-gray-900 text-xl mt-2 mb-4">Our Vision for the Future</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our vision at Stirling Cryogenics is to be a global leader in cryogenic technology,
                            shaping the future of various industries through innovative and sustainable solutions.
                            We envision a world where our advanced cryogenic systems play a pivotal role in
                            enhancing efficiency and environmental responsibility across sectors. By continuously
                            pushing the boundaries of technology and forging strategic collaborations, like our
                            partnership with Fabrum, we aim to revolutionize cryogenic applications and contribute
                            significantly to scientific and industrial progress worldwide.
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden" style={{ height: 300 }}>
                        <img
                            src="/images/homepage/industry-research.webp"
                            alt="Cryogenic technology supporting research and industry"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ACHIEVEMENTS IN NUMBERS */}
            <section
                className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg,#dff0fb 0%,#f0f8ff 30%,#fff5f2 70%,#fde8e8 100%)" }}
            >
                <div
                    className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle,rgba(173,216,235,0.4) 0%,transparent 70%)",
                        transform: "translate(-35%,-35%)",
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle,rgba(255,180,180,0.35) 0%,transparent 70%)",
                        transform: "translate(35%,35%)",
                    }}
                />
                <div className="max-w-[1280px] mx-auto relative z-10 text-center">
          <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#00B4D8" }}
          >
            Power Progress
          </span>
                    <h2
                        className="font-bold text-gray-900 mt-2 mb-3"
                        style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
                    >
                        Our Achievement in Numbers
                    </h2>
                    <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed mb-12">
                        Our growth is built on consistent performance, trusted relationships, and the
                        successful delivery of cryogenic systems.
                    </p>
                    <div className="flex flex-wrap justify-center max-w-3xl mx-auto">
                        {STATS.map((s, i) => (
                            <div
                                key={s.label}
                                className="flex flex-col items-center justify-center py-6 px-8 text-center"
                                style={{
                                    borderRight: i < STATS.length - 1 ? "1px solid rgba(255,100,60,0.2)" : "none",
                                    minWidth: 120,
                                }}
                            >
                                <p
                                    className="font-bold mb-1"
                                    style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#FF6B35" }}
                                >
                                    {s.value}
                                </p>
                                <p className="text-gray-600 text-xs font-medium leading-snug">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GLOBAL PARTNERSHIP */}
            <section className="py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-8">
            <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#00B4D8" }}
            >
              About FABRUM
            </span>
                        <h2
                            className="font-bold text-gray-900 mt-2"
                            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
                        >
                            Global Partnership with Fabrum
                        </h2>
                    </div>
                    <div className="rounded-2xl overflow-hidden mb-8" style={{ height: 360 }}>
                        <img
                            src="/images/homepage/hero-liquid-nitrogen-plant.webp"
                            alt="Fabrum Partnership — liquid nitrogen systems"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mx-auto text-center">
                        Stirling Cryogenics India Pvt. values strategic partnerships, notably our collaboration
                        with New Zealand&apos;s Fabrum, renowned for cryogenic expertise. This alliance unites
                        Stirling&apos;s Indian market insights with Fabrum&apos;s innovative approach, focusing on
                        advanced liquid nitrogen systems for various industries. Emphasising a blend of technical
                        prowess and high-quality solutions, our partnership embodies mutual trust and a shared
                        vision for leading sustainable cryogenic technologies globally.
                    </p>
                </div>
            </section>

            {/* TECHNOLOGY & INNOVATION */}
            <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-10">
                        <span
                            className="text-xs font-semibold uppercase tracking-widest"
                            style={{ color: "#00B4D8" }}
                        >
                            OUR APPROACH
                        </span>
                        <h2
                            className="font-bold text-gray-900 mt-2 mb-3"
                            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
                        >
                            Technology &amp; Innovation
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Award,
                                title: "Innovative Techniques",
                                desc: "Leveraging cutting-edge PSA technology and advanced engineering to deliver precise, efficient cryogenic solutions.",
                            },
                            {
                                icon: Users,
                                title: "Partnership Synergy",
                                desc: "Our collaboration with Fabrum, New Zealand combines Indian market insight with global cryogenic expertise.",
                            },
                            {
                                icon: Leaf,
                                title: "Eco-Friendly Focus",
                                desc: "Energy-efficient systems designed to minimise environmental impact while maximising reliable performance.",
                            },
                        ].map((c) => (
                            <div
                                key={c.title}
                                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center"
                                style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                            >
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                    style={{ background: "rgba(0,180,216,0.1)" }}
                                >
                                    <c.icon className="w-5 h-5" style={{ color: "#00B4D8" }} strokeWidth={1.8} />
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm mb-2">{c.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PRODUCTS IN ACTION */}
            <ProductsInAction />

            {/* CERTIFIED & TRUSTED */}
            <section className="py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-10">
                        <span
                            className="text-xs font-semibold uppercase tracking-widest"
                            style={{ color: "#00B4D8" }}
                        >
                            CERTIFIED &amp; TRUSTED
                        </span>
                        <h2
                            className="font-bold text-gray-900 mt-2 mb-3"
                            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
                        >
                            Certifications That Reflect Our Commitment to Quality
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                            We follow industry standards and hold certifications that reflect our commitment to
                            quality, safety, and reliable performance.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CERTIFICATES.map((cert) => {
                            const openable = Boolean(cert.pdfSrc || cert.previewSrc);
                            return (
                                <div
                                    key={cert.id}
                                    className="bg-white rounded-2xl overflow-hidden flex flex-col"
                                    style={{
                                        border: `1px solid ${cert.border}`,
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                    }}
                                >
                                    {cert.previewSrc ? (
                                        <div
                                            className="w-full flex items-center justify-center p-3"
                                            style={{ height: 260, background: cert.color }}
                                        >
                                            <img
                                                src={cert.previewSrc}
                                                alt={cert.alt}
                                                className="w-full h-full"
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="w-full flex items-center justify-center"
                                            style={{ height: 160, background: cert.color }}
                                        >
                                            <Award className="w-12 h-12" style={{ color: "#00B4D8" }} strokeWidth={1.5} />
                                        </div>
                                    )}
                                    <div className="p-6 flex flex-col flex-1">
                                        <p className="font-semibold text-gray-900 text-sm mb-1">{cert.title}</p>
                                        <p className="text-xs text-gray-500 mb-3">{cert.issuer}</p>
                                        {cert.meta.length > 0 && (
                                            <dl className="space-y-1 mb-4">
                                                {cert.meta.map((m) => (
                                                    <div key={m.label} className="flex justify-between text-xs gap-2">
                                                        <dt className="text-gray-400">{m.label}</dt>
                                                        <dd className="text-gray-700 font-medium text-right">{m.value}</dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        )}
                                        <div className="mt-auto pt-2">
                                            {openable ? (
                                                <button
                                                    onClick={() => setActiveCert(cert)}
                                                    className="inline-flex items-center gap-2 text-sm font-semibold rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                                                    style={{ color: "#00B4D8" }}
                                                >
                                                    View Certificate
                                                </button>
                                            ) : (
                                                <span className="text-xs text-gray-400">Certified</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {activeCert && (
                <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
            )}

            {/* INDUSTRIES WE SERVE */}
            <Applications />

            {/* OUR PRESENCE / MAP */}
            <section className="py-14 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    <div>
            <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#00B4D8" }}
            >
              Where We Are
            </span>
                        <h2 className="font-bold text-gray-900 text-xl mt-2 mb-5">Our Presence Across India</h2>
                        <p className="font-semibold text-gray-900 text-sm mb-1">Stirling Cryogenics India Pvt.</p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Plot No.2, Gali No.14, Hanuman Mandir Pushta Road,<br />
                            Near Semi Gas Agency, Chairpun Noida,<br />
                            Gautam Budh Nagar, UP 201307 India
                        </p>

                        <button
                            onClick={() => window.open("https://maps.google.com/?q=Stirling+Cryogenics+Noida+India", "_blank")}
                            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white"
                            style={{ background: "#00B4D8" }}
                        >
                            <MapPin className="w-4 h-4" />
                            Get Location
                        </button>
                </div>

                <div
                    className="rounded-2xl overflow-hidden"
                    style={{ height: 320, border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2!2d77.3910!3d28.5960!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4e0e0e0e0e1%3A0x0!2sNoida%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
        </div>
</section>

</div>
);
}