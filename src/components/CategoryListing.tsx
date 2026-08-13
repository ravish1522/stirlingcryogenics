import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { CategoryInfo } from "@/data/categories";
import ProductCard from "@/components/ProductCard";

// Shared implementation for every one of the 14 static category pages
// (src/app/products/<slug>/page.tsx). Each of those pages simply imports
// this component and passes its own category constant — no per-category
// duplication of layout logic. Renders: breadcrumb, category H1, a short
// factual intro, the shared ProductCard grid filtered to this category,
// and a Request Quote / Contact CTA reusing the site's existing CTA style.
export default function CategoryListing({ category }: { category: CategoryInfo }) {
    const products = PRODUCTS.filter((p) => p.category === category.name);

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-6 flex-wrap">
                    <Link href="/" className="font-medium" style={{ color: "#00B4D8" }}>Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <Link href="/products" className="font-medium" style={{ color: "#00B4D8" }}>Products</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 font-medium">{category.name}</span>
                </div>

                {/* Page header */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{category.name}</h1>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mb-10">{category.intro}</p>

                {/* Product grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 mb-14">
                        <p className="font-semibold text-gray-700 mb-1">No products found in this category yet</p>
                    </div>
                )}

                {/* Request Quote / Contact CTA */}
                <div
                    className="rounded-2xl p-8 text-center"
                    style={{ background: "rgba(0,180,216,0.06)", border: "1px solid rgba(0,180,216,0.18)" }}
                >
                    <h2 className="font-bold text-gray-900 text-lg mb-2">
                        Need help choosing the right {category.name.toLowerCase()}?
                    </h2>
                    <p className="text-gray-500 text-sm mb-5">
                        Tell us your requirement and our team will guide you with the best possible solution.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all"
                        style={{ background: "#00B4D8" }}
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
