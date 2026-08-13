import Link from "next/link";
import { ImageOff } from "lucide-react";
import { Product } from "@/data/products";

// Extracted verbatim from src/app/products/page.tsx's product grid so the
// exact same card design is shared between /products and the dedicated
// category listing pages. No visual or behavioral change from the original
// inline markup.
export default function ProductCard({ product }: { product: Product }) {
    return (
        <div
            className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
        >
            <div className="w-full overflow-hidden bg-gray-50" style={{ height: 200 }}>
                {product.img ? (
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 text-gray-300">
                        <ImageOff className="w-6 h-6" />
                        <span className="text-[11px] font-medium text-gray-400">Image coming soon</span>
                    </div>
                )}
            </div>
            <div className="flex items-start justify-between gap-3 px-5 py-4" style={{ borderTop: "1px solid #F3F4F6" }}>
                <div className="flex-1 min-w-0">
                    <p
                        className="font-semibold text-gray-900 text-sm leading-snug"
                        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
                    >
                        {product.title}
                    </p>
                    {product.brand && (
                        <span
                            className="inline-block mt-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                            style={{ background: "rgba(0,180,216,0.08)", color: "#00B4D8" }}
                        >
                            {product.brand}
                        </span>
                    )}
                </div>
                <Link href={`/products/${product.slug}`} className="shrink-0 text-xs font-semibold whitespace-nowrap" style={{ color: "#00B4D8" }}>
                    Learn More
                </Link>
            </div>
        </div>
    );
}
