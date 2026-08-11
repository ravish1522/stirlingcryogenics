export default function Stats() {
  const stats = [
    { value: "700+", label: "Installations Completed" },
    { value: "650+", label: "Happy Client" },
    { value: "30+",  label: "Skilled Team Members" },
    { value: "5+",   label: "Countries Served" },
    { value: "70+",  label: "Years Of Experience" },
    { value: "98%",  label: "Customer Satisfaction" },
  ];

  return (
      <section className="py-20 relative overflow-hidden"
               style={{ background: "linear-gradient(135deg, #dff0fb 0%, #f0f8ff 30%, #fff5f2 70%, #fde8e8 100%)" }}>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, rgba(173,216,235,0.45) 0%, transparent 70%)", transform: "translate(-35%,-35%)" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, rgba(255,180,180,0.40) 0%, transparent 70%)", transform: "translate(35%,35%)" }} />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
          <span className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-5"
                style={{ color: "#00B4D8", background: "rgba(0,180,216,0.08)", border: "1px solid rgba(0,180,216,0.22)" }}>
            Our Statistics
          </span>
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}>
              Our Impact in Numbers
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
              Our growth is built on consistent performance, trusted relationships, and the
              successful delivery of cryogenic systems worldwide.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-3">
            {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col items-center justify-center py-9 px-4 text-center"
                     style={{
                       borderRight: (i+1)%3 !== 0 ? "1px solid rgba(255,100,60,0.18)" : "none",
                       borderBottom: i < 3 ? "1px solid rgba(255,100,60,0.18)" : "none",
                     }}>
                  <p className="font-bold mb-2" style={{ fontSize: "clamp(1.9rem,4vw,2.7rem)", color: "#FF6B35" }}>
                    {s.value}
                  </p>
                  <p className="text-gray-700 font-medium text-[13px] sm:text-sm">{s.label}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}