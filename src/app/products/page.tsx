"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronDown, ChevronLeft, ChevronRight, X, SlidersHorizontal } from "lucide-react";

const BRANDS = ["CompAir", "Fabrum", "Parker", "Atlas Copco"];

const CATEGORIES = [
    { name: "All", count: null },
    { name: "Compressed Air Drains", count: 5 },
    { name: "Compressed Air Dryers", count: 12 },
    { name: "Filters", count: 10 },
    { name: "Gas Generator", count: 32 },
    { name: "Service Kits", count: 10 },
    { name: "Water Chillers & Cooling Systems", count: 5 },
    { name: "Medical Oxygen Plant", count: 1 },
    { name: "Hydrogen + Zero Air Generator", count: 5 },
    { name: "Hydrogen Generator", count: 0 },
    { name: "Nitrogen Generator", count: 17 },
    { name: "Zero Air Generator", count: 3 },
    { name: "Accessories", count: 4 },
    { name: "Green Hydrogen", count: 0 },
];

const ALL_PRODUCTS = [
    { id: 1, slug: "fixed-speed-rotary-screw-compressor", title: "Fixed Speed Rotary Screw Compressor 2 – 7.5 KW", brand: "CompAir", category: "Compressed Air Dryers", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80" },
    { id: 2, slug: "hyperchill-bioenergy-water-chiller", title: "Hyperchill BioEnergy Water Chiller", brand: "Parker", category: "Water Chillers & Cooling Systems", img: "https://images.unsplash.com/photo-1516996087931-5ae405802f9f?w=500&q=80" },
    { id: 3, slug: "lubricated-rotary-screw-compressor-30-45", title: "Lubricated Rotary Screw Compressor 30 – 45 KW", brand: "CompAir", category: "Compressed Air Dryers", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=500&q=80" },
    { id: 4, slug: "pg-plus-hydrogen-generators", title: "PG Plus Hydrogen Generators", brand: "Parker", category: "Hydrogen Generator", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&q=80" },
    { id: 5, slug: "gh-series-high-pressure-filter", title: "GH Series High Pressure Compressed Air Filter", brand: "CompAir", category: "Filters", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&q=80" },
    { id: 6, slug: "lubricated-rotary-screw-compressor-90-132", title: "Lubricated Rotary Screw Compressor 90 – 132 KW", brand: "CompAir", category: "Compressed Air Dryers", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&q=80" },
    { id: 7, slug: "nitrogen-psa-generator", title: "Nitrogen PSA Generator N2", brand: "Fabrum", category: "Nitrogen Generator", img: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=500&q=80" },
    { id: 8, slug: "liquid-nitrogen-fabrum", title: "Liquid Nitrogen (LN) Fabrum System", brand: "Fabrum", category: "Gas Generator", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
    { id: 9, slug: "compressed-air-drain-electronic", title: "Electronic Zero-Loss Compressed Air Drain", brand: "CompAir", category: "Compressed Air Drains", img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&q=80" },
    { id: 10, slug: "oxygen-generator-psa", title: "PSA Oxygen Generator – Medical Grade", brand: "Fabrum", category: "Medical Oxygen Plant", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500&q=80" },
    { id: 11, slug: "atlas-copco-air-dryer", title: "Atlas Copco Refrigerant Air Dryer FD Series", brand: "Atlas Copco", category: "Compressed Air Dryers", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=500&q=80" },
    { id: 12, slug: "zero-air-generator-za", title: "Zero Air Generator ZA Series", brand: "Parker", category: "Zero Air Generator", img: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?w=500&q=80" },
];

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
                                            <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                                        </div>
                                        <div className="flex items-start justify-between gap-3 px-5 py-4" style={{ borderTop: "1px solid #F3F4F6" }}>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-semibold text-gray-900 text-sm leading-snug">{product.title}</p>
                                                <span className="inline-block mt-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                                                      style={{ background: "rgba(0,180,216,0.08)", color: "#00B4D8" }}>{product.brand}</span>
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