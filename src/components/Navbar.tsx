"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

// The 14 currently-populated product categories (see src/data/categories.ts).
// No vendor/partner names, no empty categories, no old-site placeholder
// categories are included here.
const PRODUCTS = CATEGORIES.map((c) => ({ label: c.name, href: `/products/${c.slug}` }));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 bg-white transition-shadow duration-300 py-2"
      style={{ boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.09)" : "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[66px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
                src="https://i.ibb.co/qFxsj79s/logo-dark.png"          // place your logo in the /public folder
                alt="Company Logo"
                className="h-16 w-auto"  // adjust height as needed
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-sm font-medium text-[#00B4D8]">Home</Link>

            {/* Products dropdown */}
            {/* Products dropdown */}
            <div
                className="nav-group relative"
                onMouseEnter={() => setProdOpen(true)}
                onMouseLeave={() => setProdOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#00B4D8] transition-colors">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${prodOpen ? "rotate-180" : ""}`} />
              </button>

              {prodOpen && (
                  <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl border border-gray-100 py-2 z-50"
                      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.11)" }}
                  >
                    {/* invisible bridge to close the gap */}
                    <div className="absolute -top-3 left-0 right-0 h-3" />
                    {PRODUCTS.map((p) => (
                        <Link
                            key={p.label}
                            href={p.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00B4D8] transition-colors"
                        >
                          {p.label}
                        </Link>
                    ))}
                  </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#00B4D8] transition-colors">About</Link>
            <Link href="/blogs" className="text-sm font-medium text-gray-700 hover:text-[#00B4D8] transition-colors">Blogs</Link>
            <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#00B4D8] transition-colors">Contact us</Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((p) => !p)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 space-y-1">
            <Link href="/" className="block px-4 py-3 rounded-xl text-sm font-medium bg-[#00B4D8]/10 text-[#00B4D8]">Home</Link>
            <button
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between"
              onClick={() => setProdOpen((p) => !p)}>
              Products <ChevronDown className={`w-4 h-4 transition-transform ${prodOpen ? "rotate-180" : ""}`} />
            </button>
            {prodOpen && (
              <div className="ml-4 space-y-1">
                {PRODUCTS.map((p) => (
                  <Link key={p.label} href={p.href} className="block px-4 py-2 text-xs text-gray-600 hover:bg-gray-50 rounded-lg">{p.label}</Link>
                ))}
              </div>
            )}
            {["About", "Blogs", "Contact us"].map((l) => (
              <Link key={l} href={l === "Contact us" ? "#contact" : "#"}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50">{l}</Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
