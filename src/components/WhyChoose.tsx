import { Leaf, Briefcase, Settings, Users, Award } from "lucide-react";

function HexCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
      <div className="flex flex-col items-center text-center px-5 py-6 relative" style={{ minHeight: 240 }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 220" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,5 195,52.5 195,167.5 100,215 5,167.5 5,52.5"
                   fill="white" stroke="rgba(255,107,53,0.18)" strokeWidth="2" />
        </svg>
        <div className="relative z-10 flex flex-col items-center pt-8 pb-4 px-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
               style={{ background: "rgba(255,107,53,0.12)" }}>
            <Icon className="w-5 h-5" style={{ color: "#FF6B35" }} strokeWidth={1.8} />
          </div>
          <h3 className="font-semibold text-gray-900 text-[13px] mb-2 leading-snug">{title}</h3>
          <p className="text-gray-500 text-[11px] leading-relaxed">{desc}</p>
        </div>
      </div>
  );
}

export default function WhyChoose() {
  return (
      <section className="bg-white py-[72px]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: "clamp(1.6rem,3.5vw,2.2rem)" }}>
              Why Choose <span style={{ color: "#00B4D8" }}>Stirling Cryogenics.</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg mx-auto">
              Stirling Cryogenics offers reliable and energy-efficient cryogenic solutions built on
              decades of engineering expertise. We focus on precision, performance, and long-term support.
            </p>
          </div>

          {/* Desktop honeycomb */}
          <div className="hidden md:block relative max-w-[900px] mx-auto" style={{ height: 540 }}>
            <div className="absolute" style={{ width: 240, height: 260, left: "0%", top: "0px" }}>
              <HexCard icon={Leaf} title="Eco-Friendly & Sustainable" desc="Energy-efficient systems designed to minimize environmental impact." />
            </div>
            <div className="absolute" style={{ width: 240, height: 260, right: "0%", top: "0px" }}>
              <HexCard icon={Briefcase} title="Industry-Leading Expertise" desc="Delivering high-performance cryogenic solutions trusted by industries worldwide." />
            </div>
            <div className="absolute" style={{ width: 240, height: 260, left: "50%", top: "0px", transform: "translateX(-50%)" }}>
              <HexCard icon={Settings} title="Customised Solution" desc="Tailored cryogenic systems to meet your unique operational needs." />
            </div>
            <div className="absolute" style={{ width: 240, height: 260, right: "0%", top: "260px" }}>
              <HexCard icon={Leaf} title="Eco-Friendly & Sustainable" desc="Energy-efficient systems designed to minimize environmental impact." />
            </div>
            <div className="absolute" style={{ width: 240, height: 260, left: "0%", top: "260px" }}>
              <HexCard icon={Users} title="Strategic Partnerships" desc="Collaboration with Fabrum combines innovation with deep market knowledge." />
            </div>
            <div className="absolute" style={{ width: 240, height: 260, left: "50%", top: "260px", transform: "translateX(-50%)" }}>
              <HexCard icon={Award} title="Proven Expertise" desc="With 70 years of cryogenic engineering excellence, we deliver trusted, high-performance energy solution worldwide." />
            </div>
          </div>

          {/* Mobile fallback */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Leaf, title: "Eco-Friendly & Sustainable", desc: "Energy-efficient systems designed to minimize environmental impact." },
              { icon: Briefcase, title: "Industry-Leading Expertise", desc: "Delivering high-performance cryogenic solutions trusted by industries worldwide." },
              { icon: Settings, title: "Customised <br> Solution", desc: "Tailored cryogenic systems to meet your unique operational needs." },
              { icon: Leaf, title: "Eco-Friendly & Sustainable", desc: "Energy-efficient systems designed to minimize environmental impact." },
              { icon: Users, title: "Strategic Partnerships", desc: "Collaboration with Fabrum combines innovation with deep market knowledge." },
              { icon: Award, title: "Proven Expertise", desc: "With 70 years of cryogenic engineering excellence, we deliver trusted solutions." },
            ].map((c, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl"
                     style={{ border: "1px solid rgba(255,107,53,0.15)", background: "#fafafa" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                       style={{ background: "rgba(255,107,53,0.1)" }}>
                    <c.icon className="w-5 h-5" style={{ color: "#FF6B35" }} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}