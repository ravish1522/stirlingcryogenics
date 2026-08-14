"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

// The 14 currently-populated product categories (see src/data/categories.ts)
// plus Green Hydrogen, which is not a product category (no vendor/partner
// names, no empty categories, no old-site placeholder categories are
// included here). Green Hydrogen is appended rather than added to
// categories.ts, since that file is the source of truth for the 14
// dedicated category listing pages and intentionally excludes it.
const PRODUCTS = [
  ...CATEGORIES.map((c) => ({ label: c.name, href: `/products/${c.slug}` })),
  { label: "Green Hydrogen", href: "/green-hydrogen" },
];

const PHONE_DISPLAY = "+91 7042492969";
const PHONE_HREF = "tel:+917042492969";
const EMAIL_DISPLAY = "sales@stirlingcryogenics.co.in";
const EMAIL_HREF = "mailto:sales@stirlingcryogenics.co.in";
// No dedicated quote route exists in the project — the Contact page already
// hosts the "Request Your Quote" form, so the CTA reuses that route.
const QUOTE_HREF = "/contact";

const NAV_LINK_CLASS =
  "text-sm font-medium text-gray-700 hover:text-[#00B4D8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 rounded-sm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeProductsOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setProdOpen(false);
    }
  };

  return (
    <header
        className="sticky top-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.09)" : "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      {/* Utility bar: phone + email — supporting contact info, shown only where
          there's comfortable room (desktop, lg+) so it never competes with or
          crowds the main navigation row on tablet/mobile. */}
      <div className="hidden lg:block border-b border-gray-100" style={{ background: "#F9FAFB" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-6 py-1.5">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#00B4D8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#00B4D8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              {EMAIL_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[66px] py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
                src="/logo-dark.png"
                alt="Company Logo"
                className="h-16 w-auto"  // adjust height as needed
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-sm font-medium text-[#00B4D8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 rounded-sm">Home</Link>

            {/* Products dropdown */}
            <div
                className="nav-group relative"
                onMouseEnter={() => setProdOpen(true)}
                onMouseLeave={() => setProdOpen(false)}
                onFocus={() => setProdOpen(true)}
                onBlur={closeProductsOnBlur}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setProdOpen(false);
                }}
            >
              <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={prodOpen}
                  aria-controls="products-menu"
                  // Hover already opens/closes this for mouse users; click only
                  // opens (never toggles closed) so a click right after a hover
                  // doesn't immediately close the menu it just opened. This also
                  // gives touch/keyboard users, who don't get mouseenter, a
                  // reliable way to open it.
                  onClick={() => setProdOpen(true)}
                  className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#00B4D8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 rounded-sm"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${prodOpen ? "rotate-180" : ""}`} />
              </button>

              {prodOpen && (
                  <div
                      id="products-menu"
                      role="menu"
                      className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl border border-gray-100 py-2 z-50 max-h-[70vh] overflow-y-auto"
                      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.11)" }}
                  >
                    {/* invisible bridge to close the gap */}
                    <div className="absolute -top-3 left-0 right-0 h-3" />
                    {PRODUCTS.map((p) => (
                        <Link
                            key={p.label}
                            href={p.href}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00B4D8] transition-colors focus:outline-none focus-visible:bg-gray-50 focus-visible:text-[#00B4D8]"
                        >
                          {p.label}
                        </Link>
                    ))}
                  </div>
              )}
            </div>

            <Link href="/about" className={NAV_LINK_CLASS}>About</Link>
            <Link href="/blogs" className={NAV_LINK_CLASS}>Blogs</Link>
            <Link href="/contact" className={NAV_LINK_CLASS}>Contact us</Link>

            {/* Get A Quote CTA — most visually prominent element in the header */}
            <Link
                href={QUOTE_HREF}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                style={{ background: "#00B4D8", boxShadow: "0 4px 14px rgba(0,180,216,0.35)" }}
            >
              Get A Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
              onClick={() => setMobileOpen((p) => !p)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-100 py-3 space-y-1">
            <Link href="/" className="block px-4 py-3 rounded-xl text-sm font-medium bg-[#00B4D8]/10 text-[#00B4D8]">Home</Link>
            <button
              type="button"
              aria-expanded={mobileProdOpen}
              aria-controls="mobile-products-menu"
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
              onClick={() => setMobileProdOpen((p) => !p)}>
              Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileProdOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileProdOpen && (
              <div id="mobile-products-menu" className="ml-4 space-y-1">
                {PRODUCTS.map((p) => (
                  <Link key={p.label} href={p.href} className="block px-4 py-2.5 text-xs text-gray-600 hover:bg-gray-50 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]">{p.label}</Link>
                ))}
              </div>
            )}
            {["About", "Blogs", "Contact us"].map((l) => (
              <Link key={l} href={l === "Contact us" ? "/contact" : "#"}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]">{l}</Link>
            ))}

            {/* Supporting contact info + CTA */}
            <div className="border-t border-gray-100 mt-2 pt-3 px-4 space-y-2.5">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00B4D8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-sm w-fit">
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a href={EMAIL_HREF} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#00B4D8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-sm w-fit break-all">
                <Mail className="w-4 h-4 shrink-0" />
                {EMAIL_DISPLAY}
              </a>
              <Link
                  href={QUOTE_HREF}
                  className="flex items-center justify-center gap-1.5 text-sm font-semibold text-white px-5 py-3 rounded-xl mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
                  style={{ background: "#00B4D8" }}
              >
                Get A Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
