// "Our Products in Action" homepage section — real-world use cases sourced
// from the old site's "Our Products in Action" content. Each entry links to
// the most relevant existing application/product route in this project
// (no new routes were created).
export interface ProductInAction {
  title: string;
  desc: string;
  img: string;
  href: string;
}

export const PRODUCTS_IN_ACTION: ProductInAction[] = [
  {
    title: "Research & Laboratories",
    desc: "Used in scientific research for cooling detectors, sensors, and laboratory instruments that require precise low-temperature control.",
    img: "/images/homepage/industry-research.webp",
    href: "/applications/research-universities",
  },
  {
    title: "Medical Applications",
    desc: "Used for applications such as MRI cooling, cryopreservation, pharmaceutical storage, and other temperature-sensitive medical processes.",
    img: "/images/homepage/industry-healthcare.webp",
    href: "/applications/healthcare",
  },
  {
    title: "Space Applications",
    desc: "Cryogenic cooling enables sensitive infrared detectors, telescopes, and other instruments used in demanding space and astronomical applications.",
    img: "/images/homepage/industry-space-observatory.webp",
    href: "/applications/space-observatory",
  },
  {
    title: "Superconductivity Studies",
    desc: "Precise cryogenic cooling is essential for superconducting systems, advanced research, and applications requiring extremely stable low temperatures.",
    img: "/images/products/nitroflow-lab.webp",
    href: "/applications/hts",
  },
  {
    title: "Industrial Cooling",
    // No dedicated "/applications/industrial-cooling" route exists in the
    // project, so this links to the closest existing, genuinely relevant
    // route (the Cryogenic Systems product category) rather than inventing
    // a new one.
    desc: "Applied across industrial processes where reliable and precise low-temperature control is critical to performance and efficiency.",
    img: "/images/products/hyperchill-industrial-process-chillers.webp",
    href: "/products/cryogenic-systems",
  },
];
