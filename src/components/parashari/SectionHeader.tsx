export const SectionHeader = ({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) => (
  <div className={`max-w-3xl mx-auto text-center mb-16 ${light ? "text-primary-foreground" : "text-foreground"}`}>
    {eyebrow && (
      <div className="inline-flex items-center gap-3 mb-5">
        <span className="h-px w-10 bg-accent" />
        <span className="text-xs tracking-[0.35em] uppercase text-accent font-semibold">{eyebrow}</span>
        <span className="h-px w-10 bg-accent" />
      </div>
    )}
    <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-5">{title}</h2>
    {sub && <p className={`text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"} max-w-2xl mx-auto`}>{sub}</p>}
  </div>
);
