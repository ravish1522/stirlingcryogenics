import type { Metadata } from "next";
import { getCategoryBySlug } from "@/data/categories";
import CategoryListing from "@/components/CategoryListing";

const CATEGORY_SLUG = "compressed-air-drains";

export function generateMetadata(): Metadata {
    const category = getCategoryBySlug(CATEGORY_SLUG)!;
    return {
        title: `${category.name} | Stirling Cryogenics India`,
        description: category.metaDescription,
    };
}

export default function Page() {
    const category = getCategoryBySlug(CATEGORY_SLUG)!;
    return <CategoryListing category={category} />;
}
