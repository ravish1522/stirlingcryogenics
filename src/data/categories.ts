// Category metadata for the 14 currently-populated product categories.
// Single source of truth for: the Products mega-menu (Navbar.tsx), the
// 14 static category listing pages under src/app/products/<slug>/page.tsx,
// and category-specific SEO metadata. "Green Hydrogen" and any old-site
// vendor/empty categories are intentionally excluded — no page/menu entry
// is generated for them.
//
// Intro copy is deliberately generic and factual: it describes what the
// category of equipment broadly does, without citing any specification,
// certification, capacity, pressure rating, performance number, standard,
// or claim that is not already present in the underlying product data.

export interface CategoryInfo {
    name: string;
    slug: string;
    intro: string;
    metaDescription: string;
}

export const CATEGORIES: CategoryInfo[] = [
    {
        name: "Gas Generator",
        slug: "gas-generator",
        intro: "On-site gas generation equipment that produces process gases directly at the point of use, reducing dependence on delivered cylinders.",
        metaDescription: "Browse Stirling Cryogenics India's Gas Generator range for on-site process gas generation.",
    },
    {
        name: "Nitrogen Generator",
        slug: "nitrogen-generator",
        intro: "Nitrogen generation systems that produce nitrogen gas on-site for industrial and laboratory applications.",
        metaDescription: "Browse Stirling Cryogenics India's Nitrogen Generator range for on-site nitrogen gas production.",
    },
    {
        name: "Air Compression Systems",
        slug: "air-compression-systems",
        intro: "Air compressors and compression systems supplying compressed air for industrial processes and equipment.",
        metaDescription: "Browse Stirling Cryogenics India's Air Compression Systems range of industrial air compressors.",
    },
    {
        name: "Compressed Air Dryers",
        slug: "compressed-air-dryers",
        intro: "Compressed air drying equipment that removes moisture from compressed air systems to protect downstream equipment.",
        metaDescription: "Browse Stirling Cryogenics India's Compressed Air Dryers range for moisture removal in compressed air systems.",
    },
    {
        name: "Filters",
        slug: "filters",
        intro: "Compressed air filtration products designed to remove contaminants such as dirt, oil, and moisture from compressed air lines.",
        metaDescription: "Browse Stirling Cryogenics India's Filters range for compressed air filtration.",
    },
    {
        name: "Service Kits",
        slug: "service-kits",
        intro: "Maintenance and service kits for keeping compressed air and gas generation equipment running reliably.",
        metaDescription: "Browse Stirling Cryogenics India's Service Kits range for equipment maintenance and spares.",
    },
    {
        name: "Water Chillers & Cooling Systems",
        slug: "water-chillers-and-cooling-systems",
        intro: "Water chillers and cooling systems used to regulate process and equipment temperatures across industrial applications.",
        metaDescription: "Browse Stirling Cryogenics India's Water Chillers & Cooling Systems range.",
    },
    {
        name: "Hydrogen Generator",
        slug: "hydrogen-generator",
        intro: "Hydrogen generation equipment producing hydrogen gas on-site for industrial and analytical applications.",
        metaDescription: "Browse Stirling Cryogenics India's Hydrogen Generator range for on-site hydrogen gas production.",
    },
    {
        name: "Hydrogen + Zero Air Generator",
        slug: "hydrogen-zero-air-generator",
        intro: "Combined hydrogen and zero air generation systems that supply both gases from a single unit.",
        metaDescription: "Browse Stirling Cryogenics India's Hydrogen + Zero Air Generator range.",
    },
    {
        name: "Compressed Air Drains",
        slug: "compressed-air-drains",
        intro: "Condensate drain equipment used to remove accumulated moisture from compressed air systems.",
        metaDescription: "Browse Stirling Cryogenics India's Compressed Air Drains range for condensate removal.",
    },
    {
        name: "Zero Air Generator",
        slug: "zero-air-generator",
        intro: "Zero air generation systems producing hydrocarbon-free air for analytical and laboratory instrumentation.",
        metaDescription: "Browse Stirling Cryogenics India's Zero Air Generator range.",
    },
    {
        name: "Cryogenic Systems",
        slug: "cryogenic-systems",
        intro: "Cryogenic equipment for the storage, handling, and cooling of liquefied gases at very low temperatures.",
        metaDescription: "Browse Stirling Cryogenics India's Cryogenic Systems range.",
    },
    {
        name: "Accessories",
        slug: "accessories",
        intro: "Accessories and supporting components for gas generation and compressed air equipment.",
        metaDescription: "Browse Stirling Cryogenics India's Accessories range.",
    },
    {
        name: "Medical Oxygen Plant",
        slug: "medical-oxygen-plant",
        intro: "Medical oxygen generation plants supplying oxygen for healthcare facilities.",
        metaDescription: "Browse Stirling Cryogenics India's Medical Oxygen Plant range.",
    },
];

export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug);

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
    return CATEGORIES.find((c) => c.slug === slug);
}
