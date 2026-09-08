import { BackgroundField } from "@/components/BackgroundField";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey";
import { Expertise } from "@/components/Expertise";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundField />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Expertise />
        <PortfolioTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
