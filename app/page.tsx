import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhoIHelp from "@/components/WhoIHelp";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoIHelp />
      <Work />
      <Services />
      <Stats />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
