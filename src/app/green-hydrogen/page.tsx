import type { Metadata } from "next";
import GreenHydrogenPageClient from "@/components/GreenHydrogenPageClient";

export const metadata: Metadata = {
    title: "Green Hydrogen | Stirling Cryogenics India",
    description:
        "Green Hydrogen and Green Liquid Hydrogen solutions from Fabrum — hydrogen liquefiers, LH2 storage, turnkey LH2 solutions, refuelling stations and electrolysers.",
};

export default function GreenHydrogenPage() {
    return <GreenHydrogenPageClient />;
}
