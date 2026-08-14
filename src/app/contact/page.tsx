import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us | Stirling Cryogenics India",
    description:
        "Connect with Stirling Cryogenics India Pvt. Ltd. Get in touch for enquiries, request a quote, or explore career opportunities with our team.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
