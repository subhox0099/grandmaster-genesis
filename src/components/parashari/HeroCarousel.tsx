import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import cosmos from "@/assets/hero-cosmos.jpg";
import temple from "@/assets/hero-temple.jpg";
import aura from "@/assets/hero-aura.jpg";
import yantra from "@/assets/hero-yantra.jpg";

const slides = [
  { img: cosmos, eyebrow: "Sacred Sciences · Live Cohort", title: "Become a Grandmaster of Spiritual Sciences", sub: "A 48-week guided journey through the timeless wisdom of the Parashari tradition." },
  { img: yantra, eyebrow: "12 Pillars · 1 Sacred Path", title: "Choose ANY 1 Course from 12 Spiritual Pillars", sub: "Numerology, Vedic Astrology, KP, Vastu, Lal Kitab, Tarot & more — master one deeply." },
  { img: aura, eyebrow: "Bonus Worth ₹40,000", title: "Get 6 Spiritual Stairs Absolutely Free", sub: "Yantra · Mantra · Tantra · Chakra Balancing · Remedies · Past Life Regression." },
  { img: temple, eyebrow: "Live + Recorded · Lifetime Mindset", title: "48 Weeks of Transformative Learning", sub: "HD recorded lectures, live mentorship, proprietary study material & official certification." },
];

export const HeroCarousel = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative w-full aspect-[16/9] max-h-[92vh] overflow-hidden bg-primary">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <img
            src={s.img}
            alt={s.title}
            className={`w-full h-full object-cover ${idx === i ? "animate-ken-burns" : ""}`}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, hsl(350 70% 10% / 0.92) 0%, hsl(350 65% 15% / 0.7) 45%, hsl(350 50% 8% / 0.4) 100%)" }} />
          <div className="absolute inset-0 sacred-pattern" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container max-w-7xl">
              <div className={`max-w-3xl ${idx === i ? "animate-fade-up" : "opacity-0"}`}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-accent-glow font-medium">{s.eyebrow}</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-primary-foreground mb-6">
                  {s.title}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl">{s.sub}</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="xl">
                    Enroll Now <ArrowRight className="ml-1 w-5 h-5" />
                  </Button>
                  <Button variant="outlineGold" size="xl">Explore Curriculum</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-12 bg-accent shadow-gold" : "w-6 bg-primary-foreground/30 hover:bg-primary-foreground/60"}`}
          />
        ))}
      </div>

      {/* Floating mandala */}
      <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-accent animate-spin-slow" style={{ borderStyle: "dashed" }} />
      </div>
    </section>
  );
};
