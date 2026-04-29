import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { SacredMandala } from "./SacredMandala";
import {
  BookOpen, Sparkles, Compass, Infinity as InfinityIcon, Briefcase, Heart, Eye, Flame,
  Video, Library, Crown, Award, MessageCircleQuestion, Gift, CalendarClock, Users,
  Star, Gem, Hand, Home, ScrollText, Sun, CircleDot, Flower2, Mountain, Disc3,
} from "lucide-react";
import about from "@/assets/about-scholar.jpg";
import bonus from "@/assets/bonus-banner.jpg";
import featLive from "@/assets/feature-live.jpg";
import featStudy from "@/assets/feature-study.jpg";
import featCert from "@/assets/feature-cert.jpg";
import featCommunity from "@/assets/feature-community.jpg";
import finalCosmos from "@/assets/final-cosmos.jpg";

/* ============== ABOUT ============== */
export const About = () => (
  <section id="about" className="relative py-28 sacred-pattern overflow-hidden">
    <div className="absolute -top-32 -left-32 w-96 h-96 text-accent/10 animate-spin-slow">
      <SacredMandala className="w-full h-full" />
    </div>
    <div className="absolute top-1/3 right-10 w-2 h-32 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
    <div className="container max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
        <div className="relative rounded-[2rem] overflow-hidden shadow-maroon group gold-border">
          <img src={about} alt="Ancient spiritual scriptures" loading="lazy" width={1280} height={1280} className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full glass text-[10px] tracking-[0.4em] uppercase text-accent-glow">Lineage · Parashari</div>
        </div>
        <div className="absolute -bottom-8 -right-8 glass-light rounded-2xl px-6 py-5 shadow-elegant animate-float-slow gold-border">
          <div className="text-3xl font-display text-primary tracking-wide">10,000+</div>
          <div className="text-xs tracking-widest uppercase text-muted-foreground">Seekers Transformed</div>
        </div>
        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-gold opacity-90 flex flex-col items-center justify-center shadow-gold rotate-[-8deg] animate-float-slow">
          <div className="font-display text-[10px] tracking-[0.3em] uppercase text-primary">Cohort</div>
          <div className="font-serif text-2xl text-primary leading-none">07</div>
        </div>
      </div>

      <div>
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-accent" />
          <span className="font-display text-[11px] tracking-[0.45em] uppercase text-accent font-semibold">The Journey</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6 text-primary">
          Not just a course. <br />A <span className="italic text-gradient-gold">transformation</span>.
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-accent to-transparent mb-7" />
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          The Parashari Grandmaster Program is a sacred 48-week immersion designed for the modern seeker. Walk the path that ancient sages walked — guided by master mentors, supported by a global community, and rooted in scripture-backed wisdom that has stood for millennia.
        </p>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed italic">
          Every lesson is a step. Every practice is a doorway. By the end, you don't just understand spiritual sciences — you embody them.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: CalendarClock, k: "48", v: "Weeks" },
            { icon: Video, k: "200+", v: "Lectures" },
            { icon: Users, k: "1:1", v: "Mentorship" },
          ].map(({ icon: Icon, k, v }) => (
            <div key={v} className="rounded-2xl bg-card p-5 text-center hover:shadow-gold hover:-translate-y-1 transition-all duration-500 gold-border">
              <Icon className="w-6 h-6 mx-auto text-accent mb-3" />
              <div className="font-display text-2xl text-primary tracking-wider">{k}</div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ============== WHY ============== */
const whyItems = [
  { icon: BookOpen, t: "Structured Ancient Wisdom", d: "Centuries-old sciences taught in a clear, progressive curriculum." },
  { icon: Compass, t: "Practical Real-World Use", d: "Apply every lesson to life, career, relationships and self-mastery." },
  { icon: Sparkles, t: "Beginner to Advanced", d: "No prior knowledge needed — graduate as a confident practitioner." },
  { icon: InfinityIcon, t: "Lifetime Mindset Shift", d: "Tools, rituals and frameworks that stay with you forever." },
];
export const Why = () => (
  <section className="relative py-28 bg-gradient-beige overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    <div className="container max-w-7xl">
      <SectionHeader eyebrow="Why this program" title="Wisdom that walks with you for life" sub="Four pillars that make this the most complete spiritual mastery experience available today." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyItems.map(({ icon: Icon, t, d }, i) => (
          <div key={t} style={{ animationDelay: `${i * 120}ms` }} className="group relative rounded-3xl bg-card p-8 shadow-elegant hover:shadow-gold transition-all duration-700 hover:-translate-y-2 gold-border overflow-hidden animate-fade-up">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-gold opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700" />
            <div className="absolute top-4 right-4 font-display text-xs text-accent/40 tracking-widest">0{i+1}</div>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-maroon flex items-center justify-center mb-5 shadow-maroon group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-primary">{t}</h3>
              <p className="text-muted-foreground">{d}</p>
              <div className="mt-5 h-px w-12 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
  </section>
);

/* ============== BENEFITS ============== */
const benefits = [
  { icon: Briefcase, t: "Career Opportunities", d: "Build a thriving consulting practice." },
  { icon: Heart, t: "Personal Growth", d: "Heal patterns. Reclaim your power." },
  { icon: Eye, t: "Spiritual Awareness", d: "See life through cosmic lenses." },
  { icon: Flame, t: "Healing & Energy", d: "Channel and balance subtle forces." },
  { icon: Star, t: "Cosmic Confidence", d: "Decisions guided by deeper knowing." },
  { icon: Crown, t: "Legacy Mastery", d: "Become a guide for generations." },
];
export const Benefits = () => (
  <section className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 sacred-pattern opacity-50" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] text-accent/10 animate-spin-slow pointer-events-none">
      <SacredMandala className="w-full h-full" />
    </div>
    <div className="relative container max-w-7xl">
      <SectionHeader light eyebrow="What you gain" title="Six dimensions of transformation" sub="Each benefit unlocks a new chapter of your life." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, t, d }) => (
          <div key={t} className="group glass rounded-2xl p-7 hover:bg-accent/10 transition-all duration-500 hover:-translate-y-1">
            <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-serif text-2xl mb-2">{t}</h3>
            <p className="text-primary-foreground/70">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============== FEATURES + PILLARS ============== */
const features = [
  { icon: Video, img: featLive, t: "48 Weeks of Live Classes", d: "Weekly immersive live sessions with master mentors. Ask, debate, evolve. Every session is a sacred container for transformation." },
  { icon: Library, img: featStudy, t: "HD Recorded Lectures", d: "Every session recorded in cinematic HD. Revisit any teaching, anytime, on any device. Yours forever." },
  { icon: ScrollText, img: featStudy, t: "Proprietary Study Material", d: "Handcrafted manuals, charts, worksheets and reference scriptures designed exclusively for our program." },
  { icon: Users, img: featCommunity, t: "VIP Community Access", d: "An intimate global circle of serious seekers. Network, practice and grow alongside extraordinary souls." },
  { icon: Award, img: featCert, t: "Official Certification", d: "Graduate as a certified Parashari Grandmaster — recognised across the spiritual industry." },
  { icon: MessageCircleQuestion, img: featLive, t: "Doubt Resolution", d: "Dedicated support sessions and 1:1 mentorship to ensure no question goes unanswered." },
  { icon: Gift, img: featStudy, t: "Bonus Resources", d: "Curated mantras, yantras, ritual guides and printable references — a treasure vault of spiritual tools." },
  { icon: CalendarClock, img: featCommunity, t: "Flexible Schedule", d: "Live + recorded format means you learn on your rhythm, without ever falling behind." },
];

const pillars = [
  { icon: CircleDot, n: "Numerology" },
  { icon: Star, n: "Vedic Astrology" },
  { icon: Disc3, n: "KP Astrology" },
  { icon: Gem, n: "Gemstone Science" },
  { icon: Home, n: "Vastu Shastra" },
  { icon: ScrollText, n: "Lal Kitab" },
  { icon: Eye, n: "Face Reading" },
  { icon: Flame, n: "Reiki Healing" },
  { icon: Sparkles, n: "Tarot Reading" },
  { icon: Sun, n: "Nakshatra" },
  { icon: Mountain, n: "Crystal Rudraksha" },
  { icon: Hand, n: "Palmistry" },
];

export const FeaturesAndPillars = () => (
  <section id="features" className="relative py-28 bg-gradient-beige">
    <div className="container max-w-7xl">
      <SectionHeader eyebrow="Inside the program" title="Everything a Grandmaster needs" sub="Eight core pillars of value that make this the most comprehensive spiritual education today." />
      <div className="grid lg:grid-cols-3 gap-10">
        {/* LEFT - features */}
        <div className="lg:col-span-2 space-y-8">
          {features.map((f, i) => (
            <article
              key={f.t}
              className={`group rounded-3xl bg-card border border-border shadow-elegant hover:shadow-maroon overflow-hidden transition-all duration-700 hover:-translate-y-1 grid md:grid-cols-5 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-2 relative overflow-hidden h-56 md:h-auto">
                <img src={f.img} alt={f.t} loading="lazy" width={1000} height={800} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-2">Feature 0{i + 1}</div>
                <h3 className="font-serif text-3xl text-primary mb-3">{f.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT - sticky pillars */}
        <aside id="pillars" className="lg:col-span-1">
          <div className="sticky top-28 rounded-3xl bg-gradient-maroon text-primary-foreground p-8 shadow-maroon overflow-hidden relative">
            <div className="absolute -top-16 -right-16 w-56 h-56 text-accent/15 animate-spin-slow">
              <SacredMandala className="w-full h-full" />
            </div>
            <div className="relative">
              <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">12 Spiritual Pillars</div>
              <h3 className="font-serif text-3xl mb-2">Program Modules</h3>
              <p className="text-primary-foreground/70 text-sm mb-6">Choose any one to master deeply.</p>

              <ul className="space-y-1.5">
                {pillars.map((p, i) => (
                  <li key={p.n} className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-accent/15 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-accent text-xs font-semibold">{String(i + 1).padStart(2, "0")}</div>
                    <p.icon className="w-4 h-4 text-accent/80" />
                    <span className="text-sm font-medium">{p.n}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-2xl border border-accent/40 bg-accent/10 text-center">
                <div className="text-xs tracking-[0.3em] uppercase text-accent mb-1">Highlight</div>
                <div className="font-serif text-xl">Choose ANY 1 Course</div>
              </div>
              <Button variant="hero" size="lg" className="w-full mt-5 rounded-full">Reserve My Pillar</Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

/* ============== BONUS ============== */
const stairs = [
  { n: "Yantra", d: "Sacred geometric power" },
  { n: "Mantra", d: "Vibrational invocation" },
  { n: "Tantra", d: "Subtle energy mastery" },
  { n: "Chakra Balancing", d: "Inner alignment" },
  { n: "Remedies", d: "Practical solutions" },
  { n: "Past Life Regression", d: "Soul memory" },
];
export const Bonus = () => (
  <section id="bonus" className="relative py-28 overflow-hidden bg-primary text-primary-foreground">
    <img src={bonus} alt="" loading="lazy" width={1920} height={800} className="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(350 70% 12% / 0.92), hsl(350 60% 8% / 0.95))" }} />

    <div className="relative container max-w-6xl text-center">
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass mb-6">
        <Gift className="w-4 h-4 text-accent animate-glow-pulse" />
        <span className="text-xs tracking-[0.35em] uppercase text-accent font-semibold">Free Bonus · Worth ₹40,000</span>
      </div>
      <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-5">
        Get <span className="shimmer-gold">6 Spiritual Stairs</span> Free
      </h2>
      <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-14">
        Six profound disciplines woven into your journey — gifted to every Grandmaster student to deepen the path.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stairs.map((s, i) => (
          <div key={s.n} className="group relative rounded-2xl glass p-7 hover:bg-accent/10 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-px rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center font-serif text-primary text-lg shadow-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-2xl mb-1">{s.n}</h3>
              <p className="text-sm text-primary-foreground/65">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============== FINAL IMAGE ============== */
export const FinalImage = () => (
  <section className="relative h-[70vh] overflow-hidden">
    <img src={finalCosmos} alt="Cosmic mandala" loading="lazy" width={1920} height={900} className="absolute inset-0 w-full h-full object-cover scale-110" style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }} />
    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
    <div className="relative z-10 h-full flex items-center justify-center text-center container">
      <div>
        <Flower2 className="w-12 h-12 text-accent mx-auto mb-6 animate-glow-pulse" />
        <p className="font-serif italic text-3xl md:text-5xl text-primary-foreground max-w-3xl leading-tight">
          "When the seeker is ready, the master appears. <br />When the master appears, the universe aligns."
        </p>
      </div>
    </div>
  </section>
);

/* ============== FOOTER CTA ============== */
export const FooterCTA = () => (
  <section className="relative py-28 bg-gradient-maroon text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 sacred-pattern opacity-40" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial-gold opacity-50" style={{ background: "var(--gradient-radial-gold)" }} />
    <div className="relative container max-w-4xl text-center">
      <div className="inline-flex items-center gap-3 mb-6">
        <span className="h-px w-12 bg-accent" />
        <span className="text-xs tracking-[0.35em] uppercase text-accent font-semibold">Your invitation</span>
        <span className="h-px w-12 bg-accent" />
      </div>
      <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
        Start Your Spiritual <span className="italic shimmer-gold">Mastery Journey</span> Today
      </h2>
      <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-10">
        Enrolment is by intention. The next cohort begins soon — claim your seat among the next generation of Grandmasters.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="hero" size="xl">Enroll Now</Button>
        <Button variant="outlineGold" size="xl">Explore Courses</Button>
      </div>
      <p className="mt-12 text-sm text-primary-foreground/50 tracking-widest uppercase">
        ॐ · Parashari Grandmaster Program · Est. Wisdom of Ages
      </p>
    </div>
  </section>
);
