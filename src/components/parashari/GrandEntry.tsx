import { useEffect, useState } from "react";
import { SacredMandala } from "./SacredMandala";

export const GrandEntry = () => {
  const [stage, setStage] = useState<"in" | "open" | "done">("in");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setStage("open"), 2600);
    const t2 = setTimeout(() => {
      setStage("done");
      document.body.style.overflow = "";
    }, 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (stage === "done") return null;

  const opening = stage === "open";

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Top curtain */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${opening ? "-translate-y-full" : "translate-y-0"}`}
        style={{ background: "linear-gradient(180deg, hsl(350 70% 8%) 0%, hsl(350 65% 14%) 100%)" }}
      >
        {/* gold edge */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-accent/30 to-transparent blur-md" />
      </div>
      {/* Bottom curtain */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 transition-transform duration-[1500ms] ease-[cubic-bezier(0.77,0,0.18,1)] ${opening ? "translate-y-full" : "translate-y-0"}`}
        style={{ background: "linear-gradient(0deg, hsl(350 70% 8%) 0%, hsl(350 65% 14%) 100%)" }}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-accent/30 to-transparent blur-md" />
      </div>

      {/* Center content */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${opening ? "opacity-0" : "opacity-100"}`}
      >
        {/* Outer mandala glow */}
        <div className="absolute w-[700px] h-[700px] max-w-[90vw] max-h-[90vw] rounded-full bg-gradient-radial-gold opacity-50 blur-2xl animate-glow-pulse"
             style={{ background: "var(--gradient-radial-gold)" }} />

        {/* Spinning sacred geometry */}
        <div className="absolute w-[500px] h-[500px] max-w-[80vw] max-h-[80vw] text-accent/40 entry-mandala-spin">
          <SacredMandala className="w-full h-full" />
        </div>

        {/* Expanding gold rings */}
        <div className="absolute w-32 h-32 rounded-full border border-accent/60 entry-ring" style={{ animationDelay: "0.2s" }} />
        <div className="absolute w-32 h-32 rounded-full border border-accent/40 entry-ring" style={{ animationDelay: "0.8s" }} />
        <div className="absolute w-32 h-32 rounded-full border border-accent/30 entry-ring" style={{ animationDelay: "1.4s" }} />

        {/* Crest */}
        <div className="relative flex flex-col items-center entry-crest">
          <div className="w-28 h-28 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center font-serif text-5xl text-primary ring-2 ring-accent/60 entry-om">
            ॐ
          </div>
          <div className="mt-8 entry-text-reveal">
            <div className="font-display text-[10px] md:text-xs tracking-[0.6em] uppercase text-accent text-center mb-3">
              · Parashari ·
            </div>
            <div className="font-serif text-3xl md:text-5xl text-primary-foreground tracking-wider text-center text-shadow-gold">
              <span className="shimmer-gold">Grandmaster</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3 text-accent/70">
              <span className="h-px w-10 bg-accent/60" />
              <span className="text-[10px] tracking-[0.5em] uppercase">Cohort 07 · Begins</span>
              <span className="h-px w-10 bg-accent/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
