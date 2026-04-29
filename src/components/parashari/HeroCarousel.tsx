import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award, Star, ShieldCheck, Users } from "lucide-react";
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
    <section className="relative w-full overflow-hidden bg-primary">
      <div className="relative w-full aspect-[16/9] max-h-[94vh] overflow-hidden">
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
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, hsl(350 70% 8% / 0.95) 0%, hsl(350 65% 12% / 0.78) 45%, hsl(350 50% 6% / 0.5) 100%)" }} />
          <div className="absolute inset-0 luxury-noise opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 sacred-pattern" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary to-transparent" />

          <div className="relative z-10 h-full flex items-center">
            <div className="container max-w-7xl">
              <div className={`max-w-3xl ${idx === i ? "animate-fade-up" : "opacity-0"}`}>
                {/* Award crest row */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="flex -space-x-1">
                    {[0,1,2,3,4].map(k => <Star key={k} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-accent-glow">Rated 4.9 · 10,000+ Seekers</span>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-7 gold-border">
                  <Sparkles className="w-3.5 h-3.5 text-accent animate-glow-pulse" />
                  <span className="font-display text-xs md:text-sm tracking-[0.35em] uppercase text-accent-glow font-medium">{s.eyebrow}</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-primary-foreground mb-7 text-shadow-gold">
                  {s.title.split(" ").map((w, k, a) => (
                    <span key={k} className={k === a.length - 1 ? "italic shimmer-gold" : ""}>{w}{k < a.length - 1 ? " " : ""}</span>
                  ))}
                </h1>
                <div className="h-px w-32 bg-gradient-to-r from-accent via-accent-glow to-transparent mb-7" />
                <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-2xl leading-relaxed font-light">{s.sub}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="hero" size="xl">
                    Reserve My Seat <ArrowRight className="ml-1 w-5 h-5" />
                  </Button>
                  <Button variant="outlineGold" size="xl">Explore Curriculum</Button>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
                  <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-accent"/> 7-Day Sacred Guarantee</span>
                  <span className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-accent"/> Certified Lineage</span>
                  <span className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-accent"/> 1:1 Mentorship</span>
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
      </div>

      {/* Luxury stats strip */}
      <div className="relative bg-gradient-maroon border-y border-accent/20">
        <div className="container max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-x divide-accent/20">
          {[
            { k: "10,000+", v: "Seekers Awakened" },
            { k: "48 Weeks", v: "Sacred Immersion" },
            { k: "12 Pillars", v: "Of Ancient Wisdom" },
            { k: "4.9 ★", v: "Lineage Rating" },
          ].map((s) => (
            <div key={s.v} className="py-7 px-6 text-center">
              <div className="font-display text-2xl md:text-3xl text-gradient-gold tracking-wider">{s.k}</div>
              <div className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary-foreground/65 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
