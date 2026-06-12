"use client";
import { useState } from "react";
import { MapPin } from "lucide-react";

const STATS = [
    { value: "700+", label: "installations completed" },
    { value: "650+", label: "Happy Clients" },
    { value: "30+",  label: "Skilled Team Members" },
    { value: "5+",   label: "Country Served" },
    { value: "70+",  label: "Years Of Experience" },
];

const CERTS = [
    { label: "MSME-Zed Gold", color: "#FFF7ED", border: "#FED7AA" },
    { label: "MSME-Udyam",    color: "#F0FDF4", border: "#BBF7D0" },
    { label: "ISO 9001:2015", color: "#EFF6FF", border: "#BFDBFE" },
];

export default function AboutPage() {
    const [expanded, setExpanded] = useState(false);

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

            {/* TEAM PHOTO */}
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-14">
                <div className="rounded-3xl overflow-hidden" style={{ height: 380 }}>
                    <img
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=85"
                        alt="Team"
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
                            src="https://images.unsplash.com/photo-1560250097-0dc05a977a8e?w=800&q=85"
                            alt="Mr. Ashish Bhutani"
                            className="w-full h-full object-cover object-top"
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
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85"
                            alt="Team Vision"
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
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=85"
                            alt="Fabrum Partnership"
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

            {/* CERTIFICATIONS */}
            <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-10">
            <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#00B4D8" }}
            >
              CERTIFICATIONS
            </span>
                        <h2
                            className="font-bold text-gray-900 mt-2 mb-3"
                            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
                        >
                            Certified &amp; Trusted
                        </h2>
                        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                            We follow industry standards and hold certifications that reflect our commitment to
                            quality, safety, and reliable performance.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {CERTS.map((cert) => (
                            <div
                                key={cert.label}
                                className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center"
                                style={{
                                    border: `1px solid ${cert.border}`,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                                    minHeight: 160,
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                                    style={{ background: cert.color }}
                                >
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FF6B35" strokeWidth="1.6">
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M8 21v-1a4 4 0 0 1 8 0v1" />
                                        <path d="M16 11l1.5 5-5.5-2-5.5 2 1.5-5" />
                                    </svg>
                                </div>
                                <p className="font-semibold text-gray-800 text-sm">{cert.label}</p>
                                <p className="text-xs text-gray-400 mt-1">Certified</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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