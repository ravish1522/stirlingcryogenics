import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS_IN_ACTION } from "@/data/productsInAction";

export default function ProductsInAction() {
  const [firstThree, lastTwo] = [
    PRODUCTS_IN_ACTION.slice(0, 3),
    PRODUCTS_IN_ACTION.slice(3),
  ];

  return (
    <section className="bg-white py-[72px]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block text-[11px] font-semibold tracking-[0.12em] uppercase mb-2"
            style={{ color: "#00B4D8" }}
          >
            Cryogenic Technology in Action
          </span>
          <h2
            className="font-bold text-gray-900 mb-3"
            style={{ fontSize: "clamp(1.55rem,3.5vw,2.2rem)" }}
          >
            Our Products in Action
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            From scientific research to medical, space, and industrial applications, our
            cryogenic systems enable precise temperature control where performance matters
            most.
          </p>
        </div>

        {/* First three: 3-column on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {firstThree.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </div>

        {/* Remaining two: balanced 2-column, centered within the same container width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-[calc(66.666%+1.5rem)] lg:mx-auto">
          {lastTwo.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  item,
}: {
  item: { title: string; desc: string; img: string; href: string };
}) {
  return (
    <Link
      href={item.href}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
    >
      <div className="overflow-hidden" style={{ height: 180 }}>
        <img
          src={item.img}
          alt={`${item.title} — cryogenic application`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-base mb-2 text-gray-900">{item.title}</h3>
        <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{item.desc}</p>
        <span
          className="inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: "#00B4D8" }}
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
