export const SacredMandala = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <circle cx="100" cy="100" r="98" />
    <circle cx="100" cy="100" r="80" />
    <circle cx="100" cy="100" r="60" />
    <circle cx="100" cy="100" r="40" />
    {[...Array(12)].map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      const x2 = 100 + 98 * Math.cos(a);
      const y2 = 100 + 98 * Math.sin(a);
      return <line key={i} x1="100" y1="100" x2={x2} y2={y2} />;
    })}
    {[...Array(8)].map((_, i) => {
      const a = (i * 45 * Math.PI) / 180;
      return (
        <polygon
          key={i}
          points="100,40 110,100 100,160 90,100"
          transform={`rotate(${i * 45} 100 100)`}
        />
      );
    })}
  </svg>
);
