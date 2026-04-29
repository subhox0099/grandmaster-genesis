import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Phone, Sparkles } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {/* Luxury top ribbon */}
      <div className="fixed top-0 inset-x-0 z-[60] bg-gradient-maroon text-primary-foreground text-[11px] tracking-[0.3em] uppercase">
        <div className="container max-w-7xl flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-accent animate-glow-pulse" />
            <span className="text-accent-glow">Cohort 07 · Limited to 108 Seekers</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-primary-foreground/70">
            <span>Est. Wisdom of Ages</span>
            <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-accent" /> +91 · Concierge Enrolment</span>
          </div>
        </div>
      </div>

      <header className={`fixed top-7 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-primary/95 backdrop-blur-xl shadow-maroon border-b border-accent/20" : "py-5 bg-gradient-to-b from-primary/40 to-transparent"}`}>
        <div className="container max-w-7xl flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-gold blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-serif text-2xl font-bold shadow-gold ring-1 ring-accent/40">ॐ</div>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg text-primary-foreground tracking-[0.15em] uppercase">Parashari</div>
              <div className="text-[10px] tracking-[0.4em] uppercase text-accent">Grandmaster · Est. ∞</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-widest uppercase text-primary-foreground/80">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#features" className="hover:text-accent transition-colors">Program</a>
            <a href="#pillars" className="hover:text-accent transition-colors">Pillars</a>
            <a href="#bonus" className="hover:text-accent transition-colors">Bonus</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outlineGold" size="default" className="rounded-full hidden sm:inline-flex">Brochure</Button>
            <Button variant="hero" size="default" className="rounded-full">Enroll Now</Button>
          </div>
        </div>
      </header>
    </>
  );
};
