export const SectionHeader = ({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) => (
  <div className={`max-w-3xl mx-auto text-center mb-20 ${light ? "text-primary-foreground" : "text-foreground"}`}>
    {eyebrow && (
      <div className="inline-flex items-center gap-3 mb-6">
        <svg viewBox="0 0 40 8" className="w-12 h-2 text-accent" fill="currentColor"><path d="M0 4h14l3-3 3 3h14" stroke="currentColor" strokeWidth="0.6" fill="none"/><circle cx="20" cy="4" r="1.2"/></svg>
        <span className="font-display text-[11px] tracking-[0.45em] uppercase text-accent font-semibold">{eyebrow}</span>
        <svg viewBox="0 0 40 8" className="w-12 h-2 text-accent rotate-180" fill="currentColor"><path d="M0 4h14l3-3 3 3h14" stroke="currentColor" strokeWidth="0.6" fill="none"/><circle cx="20" cy="4" r="1.2"/></svg>
      </div>
    )}
    <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6">{title}</h2>
    {sub && <p className={`text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"} max-w-2xl mx-auto leading-relaxed`}>{sub}</p>}
    <div className="divider-ornament mt-8">
      <span className={`text-accent text-lg ${light ? "" : ""}`}>✦</span>
    </div>
  </div>
);
