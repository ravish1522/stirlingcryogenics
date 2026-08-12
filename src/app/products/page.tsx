"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, X, SlidersHorizontal, ImageOff } from "lucide-react";
import { PRODUCTS, PRODUCT_BRANDS } from "@/data/products";

const BRANDS = PRODUCT_BRANDS;

// Category list/order preserved exactly as before; counts are now derived from
// the centralized product data instead of being hardcoded.
const CATEGORY_NAMES = [
    "Compressed Air Drains",
    "Compressed Air Dryers",
    "Filters",
    "Gas Generator",
    "Service Kits",
    "Water Chillers & Cooling Systems",
    "Medical Oxygen Plant",
    "Hydrogen + Zero Air Generator",
    "Hydrogen Generator",
    "Nitrogen Generator",
    "Zero Air Generator",
    "Accessories",
    "Green Hydrogen",
    "Air Compression Systems",
    "Cryogenic Systems",
];

const CATEGORIES = [
    { name: "All", count: null as number | null },
    ...CATEGORY_NAMES.map((name) => ({
        name,
        count: PRODUCTS.filter((p) => p.category === name).length,
    })),
];

const ALL_PRODUCTS = PRODUCTS;

const PER_PAGE = 6;

export default function ProductsPage() {
    const [brandOpen, setBrandOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [tempBrand, setTempBrand] = useState("");
    const [selectedCats, setSelectedCats] = useState<string[]>(["All"]);
    const [tempCats, setTempCats] = useState<string[]>(["All"]);
    const [page, setPage] = useState(1);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const toggleTempCat = (name: string) => {
        if (name === "All") { setTempCats(["All"]); return; }
        setTempCats((prev) => {
            const without = prev.filter((c) => c !== "All");
            return without.includes(name)
                ? without.length === 1 ? ["All"] : without.filter((c) => c !== name)
                : [...without, name];
        });
    };

    const applyFilters = () => {
        setSelectedBrand(tempBrand);
        setSelectedCats(tempCats);
        setPage(1);
        setMobileFilterOpen(false);
    };

    const clearFilters = () => {
        setTempBrand(""); setSelectedBrand("");
        setTempCats(["All"]); setSelectedCats(["All"]);
        setPage(1);
    };

    const filtered = useMemo(() => ALL_PRODUCTS.filter((p) => {
        const brandMatch = !selectedBrand || p.brand === selectedBrand;
        const catMatch = selectedCats.includes("All") || selectedCats.includes(p.category);
        return brandMatch && catMatch;
    }), [selectedBrand, selectedCats]);

    const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
    const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    const pageNums = (): (number | "...")[] => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
        const nums: (number | "...")[] = [1];
        if (page > 3) nums.push("...");
        for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) nums.push(i);
        if (page < totalPages - 2) nums.push("...");
        nums.push(totalPages);
        return nums;
    };

    const Sidebar = () => (
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <p className="font-semibold text-gray-800 text-sm mb-4">Filter By</p>

            {/* Brand */}
            <div className="mb-3">
                <button onClick={() => setBrandOpen((p) => !p)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-gray-700 font-medium"
                        style={{ border: "1px solid #E5E7EB" }}>
                    <span>{tempBrand || "Brands"}</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" style={{ transform: brandOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {brandOpen && (
                    <div className="mt-1 rounded-xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
                        {BRANDS.map((b) => (
                            <button key={b} onClick={() => { setTempBrand(tempBrand === b ? "" : b); setBrandOpen(false); }}
                                    className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                                    style={{ color: tempBrand === b ? "#00B4D8" : "#374151", background: tempBrand === b ? "rgba(0,180,216,0.06)" : "#fff", fontWeight: tempBrand === b ? 600 : 400 }}>
                                {b}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Categories */}
            <div className="mb-5">
                <button onClick={() => setCatOpen((p) => !p)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-gray-700 font-medium mb-2"
                        style={{ border: "1px solid #E5E7EB" }}>
                    <span>Categories</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" style={{ transform: catOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>
                {catOpen && (
                    <div className="space-y-0.5 pl-1">
                        {CATEGORIES.map((cat) => (
                            <label key={cat.name} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                <input type="checkbox" checked={tempCats.includes(cat.name)} onChange={() => toggleTempCat(cat.name)}
                                       style={{ accentColor: "#00B4D8", width: 15, height: 15 }} />
                                <span className="text-[13px] text-gray-700 flex-1 leading-snug">{cat.name}</span>
                                {cat.count !== null && <span className="text-[11px] text-gray-400">({cat.count})</span>}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex gap-2">
                <button onClick={clearFilters} className="flex-1 py-2.5 rounded-xl text-sm font-semibold"
                        style={{ border: "1.5px solid #E5E7EB", color: "#374151" }}>Clear All</button>
                <button onClick={applyFilters} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
                        style={{ background: "#00B4D8" }}>Apply All</button>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm mb-6">
                    <Link href="/" className="font-medium" style={{ color: "#00B4D8" }}>Home</Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 font-medium">Products</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

                {/* Mobile filter button */}
                <div className="lg:hidden mb-4">
                    <button onClick={() => setMobileFilterOpen(true)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                            style={{ background: "#00B4D8" }}>
                        <SlidersHorizontal className="w-4 h-4" /> Filters
                    </button>
                </div>

                {/* Mobile drawer */}
                {mobileFilterOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
                        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">
                            <div className="flex items-center justify-between mb-5">
                                <p className="font-bold text-gray-900">Filters</p>
                                <button onClick={() => setMobileFilterOpen(false)}><X className="w-5 h-5 text-gray-500" /></button>
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                )}

                <div className="flex gap-7 items-start">
                    {/* Sidebar */}
                    <aside className="hidden lg:block w-[220px] shrink-0 sticky top-24">
                        <Sidebar />
                    </aside>

                    {/* Products */}
                    <div className="flex-1 min-w-0">
                        {/* Active chips */}
                        {(selectedBrand || !selectedCats.includes("All")) && (
                            <div className="flex flex-wrap gap-2 mb-5">
                                {selectedBrand && (
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                                          style={{ background: "rgba(0,180,216,0.1)", color: "#00B4D8" }}>
                    {selectedBrand}
                                        <button onClick={() => { setSelectedBrand(""); setTempBrand(""); }}><X className="w-3 h-3" /></button>
                  </span>
                                )}
                                {!selectedCats.includes("All") && selectedCats.map((c) => (
                                    <span key={c} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                                          style={{ background: "rgba(0,180,216,0.1)", color: "#00B4D8" }}>
                    {c}
                                        <button onClick={() => { const n = selectedCats.filter((x) => x !== c); setSelectedCats(n.length ? n : ["All"]); setTempCats(n.length ? n : ["All"]); }}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                                ))}
                            </div>
                        )}

                        <p className="text-sm text-gray-500 mb-5">Showing <span className="font-semibold text-gray-800">{filtered.length}</span> products</p>

                        {/* Grid */}
                        {paginated.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 text-center">
                                <p className="font-semibold text-gray-700 mb-1">No products found</p>
                                <p className="text-gray-400 text-sm mb-4">Try adjusting your filters</p>
                                <button onClick={clearFilters} className="px-5 py-2 rounded-full text-sm font-semibold text-white" style={{ background: "#00B4D8" }}>Clear Filters</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {paginated.map((product) => (
                                    <div key={product.id} className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                                         style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                                        <div className="w-full overflow-hidden bg-gray-50" style={{ height: 200 }}>
                                            {product.img ? (
                                                <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 text-gray-300">
                                                    <ImageOff className="w-6 h-6" />
                                                    <span className="text-[11px] font-medium text-gray-400">Image coming soon</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-start justify-between gap-3 px-5 py-4" style={{ borderTop: "1px solid #F3F4F6" }}>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-gray-900 text-sm leading-snug" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{product.title}</p>
                                                {product.brand && (
                                                    <span className="inline-block mt-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                                                          style={{ background: "rgba(0,180,216,0.08)", color: "#00B4D8" }}>{product.brand}</span>
                                                )}
                                            </div>
                                            <Link href={`/products/${product.slug}`} className="shrink-0 text-xs font-semibold whitespace-nowrap" style={{ color: "#00B4D8" }}>
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
                                <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                                        className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium disabled:opacity-40"
                                        style={{ color: "#374151" }}>
                                    <ChevronLeft className="w-4 h-4" /> Back
                                </button>
                                {pageNums().map((n, i) =>
                                    n === "..." ? (
                                        <span key={i} className="px-2 text-gray-400 text-sm">...</span>
                                    ) : (
                                        <button key={i} onClick={() => setPage(n as number)}
                                                className="w-9 h-9 rounded-xl text-sm font-semibold transition-all"
                                                style={{ background: page === n ? "#00B4D8" : "transparent", color: page === n ? "#fff" : "#374151", border: page === n ? "none" : "1px solid #E5E7EB" }}>
                                            {n}
                                        </button>
                                    )
                                )}
                                <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                                        className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium disabled:opacity-40"
                                        style={{ color: "#374151" }}>
                                    Next <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}