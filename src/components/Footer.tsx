"use client";
import Link from "next/link";
import { Mail } from "lucide-react";

const COL_APPS = [
  { label: "Hydrogen",                href: "/applications/hydrogen" },
  { label: "Research and Universities", href: "/applications/research-universities" },
  { label: "Food & Beverage",         href: "/applications/food-beverage" },
  { label: "Animal Science",          href: "/applications/animal-science" },
  { label: "LNG",                     href: "/applications/lng" },
];

const COL_LINKS = [
  { label: "About Us",      href: "/about" },
  { label: "Applications",  href: "/applications" },
  { label: "Blogs",         href: "/blogs" },
  { label: "Contact Us",    href: "/contact" },
  { label: "Products",      href: "/products" },
];

const COL_PRODUCTS = [
  { label: "Liquid Nitrogen (LN) Fabrum",  href: "/products" },
  { label: "Liquid Oxygen (LOX) Fabrum",   href: "/products" },
  { label: "CompAir Air Compressor",       href: "/products" },
  { label: "Hydrogen Generator",           href: "/products" },
  { label: "LNG",                          href: "/products" },
];

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
);
const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);
const XIcon = () => (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.858L2.25 2.25h6.928l4.27 5.65 5.797-5.65Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
);
const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const SOCIALS = [InstagramIcon, FacebookIcon, XIcon, LinkedInIcon];

export default function Footer() {
  return (
      <footer style={{ background: "linear-gradient(135deg,#0D2D6B 0%,#1A3A7A 100%)" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Applications */}
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest mb-5 text-white">
                APPLICATIONS
              </h4>
              <ul className="space-y-2.5">
                {COL_APPS.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-blue-200 hover:text-white text-[13px] transition-colors">
                        {l.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest mb-5 text-white">
                QUICK LINKS
              </h4>
              <ul className="space-y-2.5">
                {COL_LINKS.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-blue-200 hover:text-white text-[13px] transition-colors">
                        {l.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest mb-5 text-white">
                PRODUCTS
              </h4>
              <ul className="space-y-2.5">
                {COL_PRODUCTS.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-blue-200 hover:text-white text-[13px] transition-colors">
                        {l.label}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest mb-5 text-white">
                SUBSCRIBE NEWSLETTER
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                      type="email"
                      placeholder="Email"
                      className="w-full pl-10 pr-4 py-3 bg-white text-gray-700 rounded-xl text-[13px] outline-none focus:ring-2 focus:ring-[#00B4D8]"
                      style={{ fontFamily: "'Poppins',sans-serif" }}
                  />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-[13px] text-white transition-colors"
                    style={{ background: "#FF6B35", fontFamily: "'Poppins',sans-serif" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#E55A24")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF6B35")}
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(147,197,253,0.18)" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

            <Link href="/" className="flex items-center shrink-0">
              <img
                  src="https://i.ibb.co/qFxsj79s/logo-dark.png"
                  alt="Stirling Cryogenics Logo"
                  className="h-14 w-auto brightness-0 invert"
              />
            </Link>

            <p className="text-blue-300 text-[11px] text-center">
              © 2026 Stirling Cryogenics India Pvt. Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              {SOCIALS.map((Icon, i) => (
                  <Link
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-blue-300 hover:text-white transition-all"
                      style={{ border: "1px solid rgba(147,197,253,0.3)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#00B4D8")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                  >
                    <Icon />
                  </Link>
              ))}
            </div>

          </div>
        </div>
      </footer>
  );
}