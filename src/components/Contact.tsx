"use client";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    product: "Nitrogen Generators",
    title: "", message: "",
  });

  return (
    <section id="contact" className="bg-white py-[72px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase mb-2"
            style={{ color: "#00B4D8" }}
          >
            Get In Touch
          </span>
          <h2
            className="font-bold text-gray-900 mb-3"
            style={{ fontSize: "clamp(1.55rem,3.5vw,2.2rem)" }}
          >
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Our team of experts is ready to help you find the perfect cryogenic solution
            for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <h3 className="font-semibold text-gray-900 text-[15px] mb-1.5">
              Contact Information
            </h3>
            <p className="text-gray-500 text-sm mb-7 leading-relaxed">
              Reach out to us through any of these channels, and we&apos;ll get back to
              you promptly.
            </p>

            <div className="space-y-5">
              {[
                {
                  Icon: Mail,
                  bg: "bg-[#00B4D8]/10",
                  ic: "text-[#00B4D8]",
                  label: "Email Us",
                  val: "info@stirlingcryogenics.co.in / www.stirlingcryogenics.co.in",
                },
                {
                  Icon: Phone,
                  bg: "bg-green-50",
                  ic: "text-green-600",
                  label: "Call Us",
                  val: "+91 7042492969",
                },
                {
                  Icon: MapPin,
                  bg: "bg-red-50",
                  ic: "text-red-500",
                  label: "Visit Us",
                  val: "Plot No.2, Gali No.14, Hanuman Mandir Pushta Road, Near Semi Gas Agency, Chairpun Noida, Gautam Budh Nagar, UP 201307 India",
                },
                {
                  Icon: Clock,
                  bg: "bg-orange-50",
                  ic: "text-orange-500",
                  label: "Business Hours",
                  val: "Monday - Friday: 9:00 AM – 8:00 PM\nSaturday: 9:00 AM – 2:00 PM\nSunday: Closed",
                },
              ].map(({ Icon, bg, ic, label, val }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4 h-4 ${ic}`} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium mb-0.5">{label}</p>
                    <p className="text-[13px] text-gray-700 whitespace-pre-line leading-snug">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="bg-white rounded-2xl p-8 border border-gray-100"
            style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">
                  We&apos;ll get back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className="field"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    className="field"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <input
                  className="field"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <select
                  className="field"
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                >
                  {[
                    "Nitrogen Generators",
                    "Oxygen Generators",
                    "CompAir Compressors",
                    "Hydrogen Generators",
                    "LNG Systems",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <input
                  className="field"
                  placeholder="Enter Product Title @example: PTC300"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <textarea
                  className="field resize-none"
                  rows={4}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] py-[14px] rounded-xl transition-colors"
                  style={{ background: "#00B4D8" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "#0090B0")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "#00B4D8")
                  }
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
