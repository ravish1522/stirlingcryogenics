// Client/partner/institution logos sourced from the old site's "Trusted by
// Global Innovators" homepage section (migration/homepage-image-inventory.json).
// One old-site image ("download-1.jpeg") was excluded — it turned out to be a
// product marketing banner, not an actual client logo, so including it would
// have misrepresented it as a client.
const LOGOS = [
  { name: "Hitachi", src: "/images/homepage/client-logo-hitachi.webp" },
  { name: "Haier", src: "/images/homepage/client-logo-haier.webp" },
  { name: "Dalmia", src: "/images/homepage/client-logo-dalmia.webp" },
  { name: "J K Lakshmi", src: "/images/homepage/client-logo-jk-lakshmi.webp" },
  { name: "IISE Shivpur", src: "/images/homepage/client-logo-iise-shivpur.webp" },
  { name: "Nuclear Power Corporation", src: "/images/homepage/client-logo-nuclear-power-corporation.webp" },
  { name: "Madras Veterinary College", src: "/images/homepage/client-logo-madras-veterinary-college.webp" },
  { name: "Havells", src: "/images/homepage/client-logo-havells.webp" },
  { name: "IISER Berhampur", src: "/images/homepage/client-logo-iiser-berhampur.webp" },
  { name: "NASA", src: "/images/homepage/client-logo-nasa.webp" },
  { name: "L&T", src: "/images/homepage/client-logo-lt.webp" },
  { name: "NIT", src: "/images/homepage/client-logo-nit.webp" },
  { name: "CNCI", src: "/images/homepage/client-logo-cnci.webp" },
  { name: "Makino", src: "/images/homepage/client-logo-makino.webp" },
  { name: "BHEL", src: "/images/homepage/client-logo-bhel.webp" },
  { name: "Jindal", src: "/images/homepage/client-logo-jindal.webp" },
  { name: "JNU", src: "/images/homepage/client-logo-jnu.webp" },
  { name: "DRDO", src: "/images/homepage/client-logo-drdo.webp" },
  { name: "IISc", src: "/images/homepage/client-logo-iisc.webp" },
  { name: "Uflex", src: "/images/homepage/client-logo-uflex.webp" },
  { name: "ACC", src: "/images/homepage/client-logo-acc.webp" },
  { name: "Rajmata Vijayaraje", src: "/images/homepage/client-logo-rajmata-vijayaraje.webp" },
];

export default function TrustedBy() {
  const track = [...LOGOS, ...LOGOS]; // duplicated for a seamless marquee loop

  return (
      <section className="py-[72px] relative overflow-hidden" style={{ background: "#F9FAFB" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-5"
                  style={{ color: "#00B4D8", background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.22)" }}>
              Our Network
            </span>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)" }}>
              Trusted by Global Innovators
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
              Proven across continents — partnering with leading industrial, research, and
              institutional organisations worldwide.
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex w-max" style={{ animation: "logoScroll 40s linear infinite" }}>
            {track.map((logo, i) => (
                <div key={`${logo.name}-${i}`}
                     className="flex items-center justify-center shrink-0 mx-3 bg-white rounded-2xl"
                     style={{ width: 160, height: 90, border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <img src={logo.src} alt={logo.name}
                       className="max-w-[70%] max-h-[60%] object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100" />
                </div>
            ))}
          </div>

          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16"
               style={{ background: "linear-gradient(90deg, #F9FAFB 0%, transparent 100%)" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16"
               style={{ background: "linear-gradient(270deg, #F9FAFB 0%, transparent 100%)" }} />
        </div>

        <style>{`
          @keyframes logoScroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>
  );
}
