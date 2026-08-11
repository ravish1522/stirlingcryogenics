const TESTIMONIALS = [
  {
    photo: "/images/homepage/testimonial-dr-anjali-mehta.webp",
    name: "Dr.Anjali mehta",
    role: "Biomedical Research Director",
    text: "Stirling cryogenics' liquid nitrogen system have revolutionized our biostorage processes: the reliability and precision of their technology have been instrumental in our critical research projects.",
  },
  {
    photo: "/images/homepage/testimonial-chef-arjun-singh.webp",
    name: "Chef Arjun Singh",
    role: "Food & Beverage Industry expert",
    text: "The cryogenics solutions from stirling have transformed how we handle food preservation. their technology ensures freshness and quality, significantly enhancing our operational efficiency.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[72px]" style={{ background: "#F9FAFB" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2
            className="font-bold text-gray-900 mb-2"
            style={{ fontSize: "clamp(1.55rem,3.5vw,2.2rem)" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-sm">
            Real feedback from clients who rely on our cryogenic expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[880px] mx-auto">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              {/* Big quote */}
              <span
                className="block font-serif leading-none mb-2"
                style={{ fontSize: 72, color: "#00B4D8", opacity: 0.55, lineHeight: 0.65 }}
              >
                &ldquo;
              </span>
              <p className="text-gray-600 text-[13px] leading-relaxed mt-3 mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-[13px]">{t.name}</p>
                  <p className="text-[11px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
