"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=85",
    title: "Advanced Cryogenic\nsolutions for Industry",
    sub: "Reliable, Energy-Efficient Cryogenic system for medical,\nresearch & Industrial use.",
  },
  {
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1600&q=85",
    title: "Innovative Nitrogen\nSystems Worldwide",
    sub: "State-of-the-art nitrogen and oxygen generators\nleveraging cutting-edge PSA technology.",
  },
  {
    img: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=1600&q=85",
    title: "Trusted by 700+\nInstallations Globally",
    sub: "Over 70 years of expertise powering advancements\nin cryogenic technology across industries.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85",
    title: "Precision Cryogenic\nSolutions for Science",
    sub: "Enabling breakthroughs in healthcare, space,\nresearch and industrial applications.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating || index === active) return;
    setPrev(active);
    setActive(index);
    setAnimating(true);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 800);
  };

  // Auto-advance every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [active, animating]);

  return (
      <section className="relative w-full overflow-hidden" style={{ height: "92vh", minHeight: 520, maxHeight: 780 }}>

        {/* Slides */}
        {SLIDES.map((slide, i) => {
          const isActive = i === active;
          const isPrev  = i === prev;

          return (
              <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
                  style={{
                    opacity: isActive ? 1 : isPrev ? 0 : 0,
                    zIndex: isActive ? 2 : isPrev ? 1 : 0,
                  }}
              >
                {/* Background image */}
                <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url('${slide.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transform: isActive ? "scale(1.04)" : "scale(1)",
                      transition: "transform 6s ease-out",
                    }}
                />

                {/* Blue overlay — exact match to screenshot */}
                <div
                    className="absolute inset-0"
                    style={{
                      background:
                          "linear-gradient(105deg, rgba(0,60,140,0.82) 0%, rgba(0,80,160,0.65) 45%, rgba(0,100,180,0.30) 75%, rgba(0,120,200,0.10) 100%)",
                    }}
                />
              </div>
          );
        })}

        {/* Content — always on top */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="max-w-[640px]">

              {/* Title */}
              <h1
                  key={active}
                  className="text-white font-extrabold leading-[1.08] mb-5"
                  style={{
                    fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                    whiteSpace: "pre-line",
                    animation: "heroFadeUp 0.7s ease both",
                  }}
              >
                {SLIDES[active].title}
              </h1>

              {/* Subtitle */}
              <p
                  key={active + "s"}
                  className="text-white/85 font-normal mb-10 leading-relaxed"
                  style={{
                    fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                    whiteSpace: "pre-line",
                    animation: "heroFadeUp 0.7s 0.12s ease both",
                  }}
              >
                {SLIDES[active].sub}
              </p>

              {/* Buttons */}
              <div
                  className="flex flex-wrap gap-4"
                  style={{ animation: "heroFadeUp 0.7s 0.22s ease both" }}
              >
                {/* Get a Quote */}
                <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 font-semibold rounded-xl px-7 py-4 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "#00B4D8",
                      color: "#fff",
                      fontSize: 15,
                      boxShadow: "0 4px 20px rgba(0,180,216,0.45)",
                    }}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Watch Demo */}
                <button
                    className="inline-flex items-center gap-3 font-semibold rounded-xl px-7 py-4 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      border: "1.5px solid rgba(255,255,255,0.55)",
                      color: "#fff",
                      fontSize: 15,
                      backdropFilter: "blur(4px)",
                    }}
                >
                  Watch Demo
                  <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.25)" }}
                  >
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dot indicators — bottom center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {SLIDES.map((_, i) => (
              <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-400"
                  style={{
                    width:  active === i ? 28 : 8,
                    height: 8,
                    background: active === i ? "#00B4D8" : "rgba(255,255,255,0.5)",
                  }}
              />
          ))}
        </div>

        {/* Keyframes */}
        <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </section>
  );
}