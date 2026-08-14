"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight, CheckCircle2, ArrowRight, UploadCloud } from "lucide-react";

// Content migrated from the legacy site's Contact Us page:
// https://stirlingcryogenics.co.in/contact-us/
// Addresses, phone numbers, email addresses and form field labels below are
// taken verbatim from that page. No form submission/backend integration
// exists in this project, so all forms here are UI-only (see the note at
// the bottom of each form) — matching the behavior of the existing
// homepage Contact section (src/components/Contact.tsx).

const ADDRESSES = [
    {
        label: "Registered Address",
        lines: ["139-A/2, First Floor, Antriksh Bhawan,", "22, Kasturba Gandhi Marg,", "New Delhi-110 001"],
    },
    {
        label: "Corporate Office cum Works",
        lines: ["D-115, Ground Floor,", "Sector-63,", "Noida-201 301"],
    },
];

const PHONES = ["+91-7042492969", "+91-7042492976"];
const EMAILS = ["info@stirlingcryogenics.co.in"];

const QUERY_TYPES = [
    "Request product price",
    "Lead time for a product",
    "Help with product selection",
    "Other",
];

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
    return (
        <div className="text-center mb-10">
            <span
                className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase mb-2"
                style={{ color: "#00B4D8" }}
            >
                {eyebrow}
            </span>
            <h2 className="font-bold text-gray-900 mb-3" style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)" }}>
                {title}
            </h2>
            {desc && <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">{desc}</p>}
        </div>
    );
}

function SubmitNote() {
    return (
        <p className="text-[11px] text-gray-400 text-center mt-3">
            This form is not yet connected to a backend — submissions are not sent anywhere.
        </p>
    );
}

export default function ContactPageClient() {
    const [inquirySent, setInquirySent] = useState(false);
    const [inquiry, setInquiry] = useState({ name: "", email: "", phone: "", message: "" });

    const [careerSent, setCareerSent] = useState(false);
    const [career, setCareer] = useState({
        firstName: "", lastName: "", email: "", phone: "",
        country: "", city: "", state: "", address: "", message: "",
    });

    const [quoteSent, setQuoteSent] = useState(false);
    const [quote, setQuote] = useState({
        name: "", phone: "", email: "", companyName: "", companyCity: "", region: "",
        preferredContact: "", comments: "", queryTypes: [] as string[],
    });

    const toggleQueryType = (type: string) => {
        setQuote((prev) => ({
            ...prev,
            queryTypes: prev.queryTypes.includes(type)
                ? prev.queryTypes.filter((t) => t !== type)
                : [...prev.queryTypes, type],
        }));
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-8">
                    <Link href="/" className="font-medium" style={{ color: "#00B4D8" }}>Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 font-medium">Contact Us</span>
                </div>

                {/* Hero */}
                <section className="text-center pb-14">
                    <span
                        className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-5"
                        style={{ color: "#00B4D8", background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.22)" }}
                    >
                        Contact Us
                    </span>
                    <h1
                        className="font-bold text-gray-900 mb-4 leading-tight"
                        style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}
                    >
                        Connect with Stirling Cryogenics<br className="hidden sm:block" /> India Pvt. Ltd.
                    </h1>
                </section>
            </div>

            {/* Our Addresses */}
            <section className="py-14 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-[1280px] mx-auto">
                    <SectionHeading eyebrow="Our Addresses" title="Where To Find Us" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {ADDRESSES.map((addr) => (
                            <div
                                key={addr.label}
                                className="bg-white rounded-2xl p-7"
                                style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                            >
                                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
                                    <MapPin className="w-4 h-4 text-red-500" />
                                </div>
                                <p className="font-semibold text-gray-900 text-sm mb-2">{addr.label}</p>
                                <p className="text-gray-600 text-[13px] leading-relaxed">
                                    {addr.lines.map((line, i) => (
                                        <span key={i}>
                                            {line}
                                            {i < addr.lines.length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Details + Get in Touch */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: contact details */}
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00B4D8" }}>
                            Contact Details
                        </span>
                        <h2 className="font-bold text-gray-900 text-xl mt-2 mb-6">Reach Out To Us</h2>

                        <div className="space-y-5">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-medium mb-0.5">Call Us</p>
                                    {PHONES.map((p) => (
                                        <p key={p} className="text-[13px] text-gray-700 leading-snug">{p}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#00B4D8]/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-4 h-4 text-[#00B4D8]" />
                                </div>
                                <div>
                                    <p className="text-[11px] text-gray-400 font-medium mb-0.5">Email Us</p>
                                    {EMAILS.map((e) => (
                                        <p key={e} className="text-[13px] text-gray-700 leading-snug">{e}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Get in Touch form */}
                    <div
                        className="bg-white rounded-2xl p-8"
                        style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
                    >
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00B4D8" }}>
                            Get in Touch
                        </span>
                        <h3 className="font-bold text-gray-900 text-lg mt-2 mb-1">Send Us A Message</h3>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Use the form below to send us a message. We aim to respond to all inquiries promptly.
                        </p>

                        {inquirySent ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-500 text-sm">We&apos;ll get back to you promptly.</p>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => { e.preventDefault(); setInquirySent(true); }}
                                className="space-y-4"
                            >
                                <input
                                    className="field" placeholder="Name"
                                    value={inquiry.name}
                                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                                />
                                <input
                                    type="email" className="field" placeholder="Email" required
                                    value={inquiry.email}
                                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                                />
                                <input
                                    type="tel" className="field" placeholder="Phone Number" required
                                    value={inquiry.phone}
                                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                                />
                                <textarea
                                    className="field resize-none" rows={4} placeholder="Message"
                                    value={inquiry.message}
                                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                                />
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] py-[14px] rounded-xl transition-colors"
                                    style={{ background: "#00B4D8" }}
                                >
                                    Submit Inquiry
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <SubmitNote />
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Join Our Team */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-2xl mx-auto text-center">
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00B4D8" }}>
                        Careers
                    </span>
                    <h2 className="font-bold text-gray-900 text-xl mt-2 mb-4">Join Our Team</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-7">
                        Explore career opportunities at Stirling Cryogenics, where innovation and talent converge.
                        Be part of a team revolutionizing cryogenic technology.
                    </p>
                    <a
                        href="#apply"
                        className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl text-white transition-all"
                        style={{ background: "#00B4D8" }}
                    >
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </section>

            {/* Be Part of Our Success Story — career application form */}
            <section id="apply" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <SectionHeading eyebrow="Careers" title="Be Part of Our Success Story" />

                    <div
                        className="bg-white rounded-2xl p-8"
                        style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
                    >
                        {careerSent ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Application Sent!</h3>
                                <p className="text-gray-500 text-sm">Thank you for your interest — we&apos;ll be in touch.</p>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => { e.preventDefault(); setCareerSent(true); }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input
                                        className="field" placeholder="First Name"
                                        value={career.firstName}
                                        onChange={(e) => setCareer({ ...career, firstName: e.target.value })}
                                    />
                                    <input
                                        className="field" placeholder="Last Name"
                                        value={career.lastName}
                                        onChange={(e) => setCareer({ ...career, lastName: e.target.value })}
                                    />
                                    <input
                                        type="email" className="field" placeholder="Your Email" required
                                        value={career.email}
                                        onChange={(e) => setCareer({ ...career, email: e.target.value })}
                                    />
                                    <input
                                        type="tel" className="field" placeholder="Your Phone Number" required
                                        value={career.phone}
                                        onChange={(e) => setCareer({ ...career, phone: e.target.value })}
                                    />
                                    <input
                                        className="field" placeholder="Country"
                                        value={career.country}
                                        onChange={(e) => setCareer({ ...career, country: e.target.value })}
                                    />
                                    <input
                                        className="field" placeholder="City"
                                        value={career.city}
                                        onChange={(e) => setCareer({ ...career, city: e.target.value })}
                                    />
                                    <input
                                        className="field" placeholder="State"
                                        value={career.state}
                                        onChange={(e) => setCareer({ ...career, state: e.target.value })}
                                    />
                                    <input
                                        className="field" placeholder="Your Address"
                                        value={career.address}
                                        onChange={(e) => setCareer({ ...career, address: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center justify-between gap-3 field cursor-pointer text-gray-500">
                                        <span className="flex items-center gap-2 text-[13px]">
                                            <UploadCloud className="w-4 h-4 text-gray-400" />
                                            Upload Your Resume Here
                                        </span>
                                        <input type="file" className="hidden" />
                                    </label>
                                </div>

                                <textarea
                                    className="field resize-none" rows={4} placeholder="What Drives You to Us"
                                    value={career.message}
                                    onChange={(e) => setCareer({ ...career, message: e.target.value })}
                                />

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] py-[14px] rounded-xl transition-colors"
                                    style={{ background: "#00B4D8" }}
                                >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <SubmitNote />
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Request Your Quote */}
            <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: "#F9FAFB" }}>
                <div className="max-w-2xl mx-auto">
                    <SectionHeading
                        eyebrow="Get A Quote"
                        title="Request Your Quote"
                        desc="Fill out the form below, and we will be in touch shortly."
                    />

                    <div
                        className="bg-white rounded-2xl p-8"
                        style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
                    >
                        {quoteSent ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Quote Request Sent!</h3>
                                <p className="text-gray-500 text-sm">We&apos;ll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => { e.preventDefault(); setQuoteSent(true); }}
                                className="space-y-4"
                            >
                                <input
                                    className="field" placeholder="Full Name" required
                                    value={quote.name}
                                    onChange={(e) => setQuote({ ...quote, name: e.target.value })}
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input
                                        type="tel" className="field" placeholder="Phone Number" required
                                        value={quote.phone}
                                        onChange={(e) => setQuote({ ...quote, phone: e.target.value })}
                                    />
                                    <input
                                        type="email" className="field" placeholder="Email" required
                                        value={quote.email}
                                        onChange={(e) => setQuote({ ...quote, email: e.target.value })}
                                    />
                                </div>
                                <input
                                    className="field" placeholder="Company Name" required
                                    value={quote.companyName}
                                    onChange={(e) => setQuote({ ...quote, companyName: e.target.value })}
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input
                                        className="field" placeholder="Company City" required
                                        value={quote.companyCity}
                                        onChange={(e) => setQuote({ ...quote, companyCity: e.target.value })}
                                    />
                                    <input
                                        className="field" placeholder="Region / Country"
                                        value={quote.region}
                                        onChange={(e) => setQuote({ ...quote, region: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <p className="text-[13px] font-medium text-gray-700 mb-2">Preferred Method of Contact</p>
                                    <div className="flex items-center gap-6">
                                        {["Phone Call", "Email"].map((opt) => (
                                            <label key={opt} className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer">
                                                <input
                                                    type="radio" name="preferredContact" value={opt}
                                                    checked={quote.preferredContact === opt}
                                                    onChange={() => setQuote({ ...quote, preferredContact: opt })}
                                                    style={{ accentColor: "#00B4D8" }}
                                                    required
                                                />
                                                {opt}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[13px] font-medium text-gray-700 mb-2">Query Type</p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                                        {QUERY_TYPES.map((type) => (
                                            <label key={type} className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={quote.queryTypes.includes(type)}
                                                    onChange={() => toggleQueryType(type)}
                                                    style={{ accentColor: "#00B4D8" }}
                                                />
                                                {type}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <textarea
                                    className="field resize-none" rows={4} placeholder="Comments / Special Requests" required
                                    value={quote.comments}
                                    onChange={(e) => setQuote({ ...quote, comments: e.target.value })}
                                />

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] py-[14px] rounded-xl transition-colors"
                                    style={{ background: "#00B4D8" }}
                                >
                                    Submit
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <SubmitNote />
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
