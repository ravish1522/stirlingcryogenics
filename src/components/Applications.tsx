"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Content and images sourced from the old site's "Industries We Serve"
// homepage section (migration/homepage-inventory.json) — expanded from 6 to
// all 8 verified old-site industries, using the old site's own descriptions.
const APPS = [
  {
    title: "Bio Storage",
    desc: "Preserving biological samples with reliable, ultra-low temperature cryogenic technology.",
    img: "/images/homepage/industry-bio-storage.webp",
  },
  {
    title: "Food & Beverage",
    desc: "Ensuring freshness and longevity with advanced cryogenic freezing solutions.",
    img: "/images/homepage/industry-food-beverage.webp",
  },
  {
    title: "LNG & Bio Gas",
    desc: "Enhancing LNG and biogas production efficiency through cryogenic processing.",
    img: "/images/homepage/industry-lng-bio-gas.webp",
  },
  {
    title: "Maritime & University",
    desc: "Providing maritime and academic sectors with specialized cryogenic applications.",
    img: "/images/homepage/industry-maritime-university.webp",
  },
  {
    title: "Healthcare",
    desc: "Supporting medical advancements with cryogenic solutions for drug preservation and research.",
    img: "/images/homepage/industry-healthcare.webp",
  },
  {
    title: "Research",
    desc: "Facilitating breakthroughs in various fields with precise cryogenic temperature control.",
    img: "/images/homepage/industry-research.webp",
  },
  {
    title: "Space Observatory",
    desc: "Equipping space observatories with cryocoolers for sensitive astronomical instruments.",
    img: "/images/homepage/industry-space-observatory.webp",
  },
  {
    title: "Nuclear",
    desc: "Supporting nuclear research and operations with critical cryogenic cooling technology.",
    img: "/images/homepage/industry-nuclear.webp",
  },
];

export default function Applications() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = APPS.length - visibleCount;
  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));
  const cardWidthPct = 100 / visibleCount;

  return (
      <section className="py-[72px] relative overflow-hidden"
               style={{ background: "linear-gradient(160deg, #eaf6fd 0%, #f5fbff 40%, #fff 100%)" }}>
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, rgba(173,216,240,0.35) 0%, transparent 70%)", transform: "translate(-40%,-40%)" }} />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-5"
                style={{ color: "#00B4D8", background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.22)" }}>
            Industries we Serve
          </span>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)" }}>
              Applications of Our Cryogenic Solutions
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
              Over 700 installations worldwide and more than 70 years of expertise power
              advancements in cryogenic technology.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateX(-${current * cardWidthPct}%)` }}>
                {APPS.map((app) => (
                    <div key={app.title} className="shrink-0 px-3" style={{ width: `${cardWidthPct}%` }}>
                      <div className="bg-white rounded-2xl overflow-hidden"
                           style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                        <div className="overflow-hidden" style={{ height: 200 }}>
                          <img src={app.img} alt={app.title}
                               className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-base mb-2" style={{ color: "#00B4D8" }}>{app.title}</h3>
                          <p className="text-gray-500 text-[13px] leading-relaxed">{app.desc}</p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <button onClick={prev} disabled={current === 0}
                    className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", border: "1px solid rgba(0,180,216,0.2)" }}>
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button onClick={next} disabled={current >= maxIndex}
                    className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ background: "#fff", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", border: "1px solid rgba(0,180,216,0.2)" }}>
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: current === i ? 24 : 8,
                          height: 8,
                          background: current === i ? "#00B4D8" : "rgba(0,180,216,0.25)",
                        }} />
            ))}
          </div>
        </div>
      </section>
  );
}