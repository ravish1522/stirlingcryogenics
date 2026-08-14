import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import Stats from "@/components/Stats";
import Applications from "@/components/Applications";
import WhyChoose from "@/components/WhyChoose";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import ProductsInAction from "@/components/ProductsInAction";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
      <>
        <Hero />
        <CompanyIntro />
        <Stats />
        <Applications />
        <WhyChoose />
        <TrustedBy />
        <Testimonials />
        <ProductsInAction />
        <Contact />
      </>
  );
}
