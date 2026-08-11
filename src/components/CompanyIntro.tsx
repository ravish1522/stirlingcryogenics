export default function CompanyIntro() {
  return (
      <section className="bg-white py-[72px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: heading + copy */}
            <div>
              <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-5"
                    style={{ color: "#00B4D8", background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.22)" }}>
                Welcome to
              </span>
              <h2 className="font-bold text-gray-900 mb-5 leading-snug" style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)" }}>
                Stirling Cryogenics <span style={{ color: "#00B4D8" }}>India Pvt Ltd</span>
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
                Pioneering excellence in cryogenic technology for over 70 years. We design and
                deliver world-class cryogenic systems that power innovation, sustainability, and
                performance across industries worldwide.
              </p>
            </div>

            {/* Right: product image */}
            <div className="rounded-2xl overflow-hidden flex items-center justify-center p-8"
                 style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", background: "#F9FAFB" }}>
              <img
                  src="/images/homepage/company-intro-ptc1000-cryocooler.webp"
                  alt="Stirling Cryogenics cryocooler system"
                  className="w-full h-auto max-h-[360px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
  );
}
