import { Navbar } from "@/components/parashari/Navbar";
import { HeroCarousel } from "@/components/parashari/HeroCarousel";
import { About, Why, Benefits, FeaturesAndPillars, Bonus, FinalImage, FooterCTA } from "@/components/parashari/sections";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <About />
      <Why />
      <Benefits />
      <FeaturesAndPillars />
      <Bonus />
      <FinalImage />
      <FooterCTA />
    </main>
  );
};

export default Index;
