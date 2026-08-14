// Content migrated from the legacy site's Green Hydrogen page:
// https://stirlingcryogenics.co.in/green-hydrogen/
// Paragraph text, benefit lists and brochure URLs below are taken verbatim
// from that page (Fabrum solution copy). Nothing here is invented — where
// the legacy page did not provide a brochure link for a section (Turnkey
// LH2 Solutions), none is included.

export interface SolutionSection {
    id: string;
    heading: string;
    paragraphs: string[];
    benefits: string[];
    brochureUrl?: string;
    // Local path to the corresponding Fabrum/Stirling product image, sourced
    // from the legacy site's media library (public/images/green-hydrogen/).
    image: string;
    imageAlt: string;
}

export const SOLUTIONS: SolutionSection[] = [
    {
        id: "hydrogen-liquefiers",
        heading: "Hydrogen Liquefiers",
        paragraphs: [
            "Drawing from a decade-long legacy in providing containerised cryogenics solutions worldwide, Fabrum’s HLQ Liquid Hydrogen Plants are designed for point-of-use liquid hydrogen production and boil-off gas management (BOGM).",
            "Fabrum also provide state-of-the-art, retrofittable hydrogen re-liquefiers for BOGM of existing liquid hydrogen storage systems.",
        ],
        benefits: [
            "50kg per day to 2 tonnes per day",
            "No sacrificial liquid nitrogen",
            "Zero loss systems",
            "Rapid turn-up/turn down",
            "Retrofit BOGM to existing storage vessels",
        ],
        brochureUrl: "http://stirlingcryogenics.co.in/wp-content/uploads/2024/03/Hydrogen-Liquefiers-1.pdf",
        image: "/images/green-hydrogen/hydrogen-liquefiers.png",
        imageAlt: "Fabrum hydrogen liquefier equipment",
    },
    {
        id: "onboard-lh2-storage",
        heading: "Onboard Liquid Hydrogen (LH2) Storage",
        paragraphs: [
            "Fabrum’s proprietary triple-skin liquid hydrogen tank technology provides enhanced thermal insulation and fast refuelling. We build fully composite & fully metallic, stationary/on-board storage vessels.",
            "Ground-based vehicle tanks with an outer metal skin are engineered for maximum durability, while aviation tanks are entirely composed of advanced composites, prioritizing the highest gravimetric index achievable and maximising thermal performance.",
        ],
        benefits: [
            "70% faster refuelling",
            "Proprietary Hydrogen Delivery System (HDS)",
            "High gravimetric index",
            "High dormancy period",
        ],
        brochureUrl: "http://stirlingcryogenics.co.in/wp-content/uploads/2024/03/Onboard-Tank-Storage-2.pdf",
        image: "/images/green-hydrogen/onboard-lh2-storage.png",
        imageAlt: "Fabrum onboard liquid hydrogen (LH2) storage tank",
    },
    {
        id: "lh2-storage",
        heading: "LH2 Storage",
        paragraphs: [
            "Fabrum provides a wide range of standardised and customised liquid hydrogen storage systems. With our proprietary boil-off gas management technology we can tailor a system to maximise the energy efficiency of your storage solution. We have two decades of experience building cryogenic storage vessels for the superconducting and magnetic applications.",
        ],
        benefits: [
            "From 10 kg to 4000 kg",
            "Integrated Fuel-cell delivery systems",
            "High-flow liquid transfer",
            "Proprietary boil-off gas management systems",
        ],
        brochureUrl: "http://stirlingcryogenics.co.in/wp-content/uploads/2024/03/LH2-Storage-3.pdf",
        image: "/images/green-hydrogen/lh2-storage.png",
        imageAlt: "Fabrum liquid hydrogen (LH2) storage tank",
    },
    {
        id: "turnkey-lh2-solutions",
        heading: "Turnkey LH2 Solutions",
        paragraphs: [
            "Our proprietary technology for boil-off-gas management and high-flow liquid transfer ensures minimum liquid hydrogen losses and maximum energy efficiency across the entire system.",
            "We address every facet of liquid hydrogen management, from generation, liquefaction, zero-loss storage, high-flow liquid transfer and dispensing, controlled evaporation and temperature and pressure-controlled fuel cell delivery.",
        ],
        benefits: [
            "End-to-end solutions",
            "Fast transfer and fuelling",
            "Whole system energy optimisation",
        ],
        // No brochure link exists for this section on the legacy page.
        image: "/images/green-hydrogen/turnkey-lh2-solutions.png",
        imageAlt: "Fabrum turnkey containerised liquid hydrogen system",
    },
    {
        id: "hydrogen-fuel-station-gas",
        heading: "Hydrogen Fuel Station (Gas)",
        paragraphs: [
            "Fabrum manages the entire project lifecycle of your hydrogen refuelling station, from design and hazard assessments to procurement, construction and commissioning. Fabrum’s team of industry-experienced engineers and project managers, and strong relationships with major global players in hydrogen infrastructure delivery give us control over the entire value chain, ensuring that your project is delivered on time and to budget.",
        ],
        benefits: [
            "On-site hydrogen production",
            "Scalable deployment",
            "350-bar and 700-bar refuelling",
        ],
        // The legacy page links this section's brochure CTA to the same PDF used
        // for LH2 Refuelling Stations (preserved as-is from the source markup).
        brochureUrl: "http://stirlingcryogenics.co.in/wp-content/uploads/2024/03/LH2-Refuelling-Stations-5.pdf",
        image: "/images/green-hydrogen/hydrogen-fuel-station-gas.png",
        imageAlt: "Fabrum and Stirling hydrogen fuel station dispenser",
    },
    {
        id: "lh2-refuelling-stations",
        heading: "LH2 Refuelling Stations",
        paragraphs: [
            "Liquid hydrogen delivers superior energy density compared to compressed gaseous hydrogen, enabling more efficient storage and transportation, faster refuelling and reduced energy consumption during compression. As a world leader in the supply of small to medium scale liquid hydrogen systems, Fabrum provides hydrogen refuelling stations for public and private use in industrial or remote locations.",
            "Liquid hydrogen refuelling stations allow for high-speed liquid refuelling as well as 350-bar and 700-bar gaseous refuelling without the need for a gas compressor or high-pressure storage on site.",
        ],
        benefits: [
            "Hydrogen supply via on-site production or tube-trailer",
            "Scalable deployment",
            "350-bar and 700-bar gaseous refuelling",
        ],
        brochureUrl: "http://stirlingcryogenics.co.in/wp-content/uploads/2024/03/Liquid-Hydrogen-Brochure-6.pdf",
        image: "/images/green-hydrogen/lh2-refuelling-stations.png",
        imageAlt: "Fabrum and Stirling LH2 refuelling station equipment",
    },
    {
        id: "electrolysers",
        heading: "Electrolysers",
        paragraphs: [
            "Fabrum, in conjunction with Clean Power Hydrogen (CPH2), supplies the patented membrane-free electrolyser. With no requirement for precious-metal catalysts, these electrolyser systems provide more robust operational parameters and far superior lifetime compared to other competitors.",
        ],
        benefits: [
            "25 year operating lifetime",
            "Cryogenic separation of Hydrogen from Oxygen",
            "99.999% hydrogen output purity",
            "No requirement for high-purity water feedstock",
        ],
        brochureUrl: "http://stirlingcryogenics.co.in/wp-content/uploads/2024/03/Electrolysers-7.pdf",
        image: "/images/green-hydrogen/electrolysers.png",
        imageAlt: "Fabrum and Clean Power Hydrogen (CPH2) electrolyser installation",
    },
];

export interface IndustryCard {
    key: string;
    title: string;
    icon: "plane" | "ship" | "truck" | "factory";
    desc: string;
}

// The legacy page reuses the same description text across all four industry
// cards (a duplicated-content quirk of the source markup). Preserved as-is
// per instruction — not "corrected" or rewritten.
const INDUSTRY_DESC =
    "The future of clean flight is dependent liquid green hydrogen and optimised energy management. Zero-emission aviation is the future of sustainable flight. Fabrum is part of the Christchurch-based Hydrogen consortium, including Airbus, Air New Zealand, Christchurch International Airport Limited, and Fortescue Future Industries.";

export const INDUSTRIES: IndustryCard[] = [
    { key: "aviation", title: "Aviation", icon: "plane", desc: INDUSTRY_DESC },
    { key: "marine", title: "Marine", icon: "ship", desc: INDUSTRY_DESC },
    { key: "heavy-transport", title: "Heavy Transport", icon: "truck", desc: INDUSTRY_DESC },
    { key: "heavy-industry", title: "Heavy Industry", icon: "factory", desc: INDUSTRY_DESC },
];

export interface FaqItem {
    q: string;
    a: string[];
}

export const HYDROGEN_FAQS: FaqItem[] = [
    {
        q: "What is Green Hydrogen?",
        a: [
            "Electrolysers split water into oxygen and hydrogen to generate ‘green’ hydrogen that’s zero-emission at both production and consumption, unlike ‘grey’ and ‘brown’ hydrogen.",
        ],
    },
    {
        q: "What's the difference between brown, blue, and green hydrogen?",
        a: [
            "BROWN. Created by hydrocarbon-rich feedstock, such as fossil fuel, methane, coal. Creates as much CO2 as burning the fuel in the first place.",
            "BLUE. Basically brown, but the CO2 created is then captured, and this must then be permanently stored somehow (a significant disadvantage).",
            "GREEN. Uses 100% renewable energy to split water into hydrogen and oxygen. The oxygen output is also a key benefit of this process, with oxygen production being 8 times the mass of hydrogen produced.",
        ],
    },
    {
        q: "Is hydrogen safe to use?",
        a: [
            "Hydrogen has similar safety requirements to natural gas (methane), and all modern hydrogen fuel cells, storage containers, and vehicles are designed with safety in mind for storage, transportation and refuelling.",
        ],
    },
    {
        q: "What can hydrogen be used for?",
        a: [
            "You can convert it to electricity using a fuel cell, and then power cars, ships, planes etc.",
            "It can be added to natural gas and burnt in thermal power or district heating plants.",
            "You can use it as a precursor for other energy carriers, from ammonia to synthetic fuels.",
        ],
    },
    {
        q: "How difficult is it to refuel my vehicle?",
        a: [
            "Hydrogen refuelling is similar to refuelling with CNG. Simply drive up and refuel in a matter of minutes.",
            "No significant downtime like EV.",
        ],
    },
    {
        q: "How much hydrogen does a car use?",
        a: ["1kg for approximately 110 km."],
    },
    {
        q: "How much hydrogen does a bus use?",
        a: ["20-30 kgs per day."],
    },
    {
        q: "How much hydrogen does a truck use?",
        a: ["Around 8kgs for approximately 100km."],
    },
    {
        q: "Is hydrogen heavier than batteries?",
        a: [
            "Hydrogen itself is 8 times lighter than a battery. So it depends on how you store it. For personal vehicles, hydrogen will have a similar weight, but a faster recharge/refuel time.",
            "However, in large commercial vehicles that need a long-range hydrogen becomes a much lighter alternative.",
        ],
    },
    {
        q: "What is the energy value of hydrogen?",
        a: ["Hydrogen has 8 times more usable energy than diesel for the same weight."],
    },
];
