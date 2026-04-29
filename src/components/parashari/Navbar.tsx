import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-primary/90 backdrop-blur-xl shadow-maroon" : "py-5 bg-transparent"}`}>
      <div className="container max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary font-serif text-xl font-bold shadow-gold">ॐ</div>
          <div className="leading-tight">
            <div className="font-serif text-xl text-primary-foreground">Parashari</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-accent">Grandmaster</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#features" className="hover:text-accent transition-colors">Features</a>
          <a href="#pillars" className="hover:text-accent transition-colors">Pillars</a>
          <a href="#bonus" className="hover:text-accent transition-colors">Bonus</a>
        </nav>
        <Button variant="hero" size="default" className="rounded-full">Enroll Now</Button>
      </div>
    </header>
  );
};
