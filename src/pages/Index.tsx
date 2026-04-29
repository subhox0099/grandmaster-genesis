import { Navbar } from "@/components/parashari/Navbar";
import { HeroCarousel } from "@/components/parashari/HeroCarousel";
import { GrandEntry } from "@/components/parashari/GrandEntry";
import { About, Why, Benefits, FeaturesAndPillars, Programs, Bonus, Testimonials, FinalImage, FooterCTA } from "@/components/parashari/sections";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <GrandEntry />
      <Navbar />
      <HeroCarousel />
      <About />
      <Why />
      <Benefits />
      <FeaturesAndPillars />
      <Programs />
      <Bonus />
      <Testimonials />
      <FinalImage />
      <FooterCTA />
    </main>
  );
};

export default Index;
