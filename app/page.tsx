import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import StructuredData from "@/components/StructuredData";
import WhoIHelp from "@/components/WhoIHelp";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Navbar />
        <Hero />
        <WhoIHelp />
        <Work />
        <Services />
        <Stats />
        <About />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
