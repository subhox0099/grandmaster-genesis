import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { SacredMandala } from "./SacredMandala";
import {
  BookOpen, Sparkles, Compass, Infinity as InfinityIcon, Briefcase, Heart, Eye, Flame,
  Video, Library, Crown, Award, MessageCircleQuestion, Gift, CalendarClock, Users,
  Star, Gem, Hand, Home, ScrollText, Sun, CircleDot, Flower2, Mountain, Disc3,
  Quote, CheckCircle2, Clock, IndianRupee, GraduationCap, ArrowRight,
} from "lucide-react";
import { useState } from "react";
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
    <div className="absolute inset-0 luxury-noise opacity-30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] text-accent/10 animate-spin-slow pointer-events-none">
      <SacredMandala className="w-full h-full" />
    </div>
    <div className="relative container max-w-7xl">
      <SectionHeader light eyebrow="What you gain" title="Six dimensions of transformation" sub="Each benefit unlocks a new chapter of your life." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map(({ icon: Icon, t, d }, i) => (
          <div key={t} className="group glass gold-border rounded-2xl p-8 hover:bg-accent/10 transition-all duration-500 hover:-translate-y-1 relative">
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display text-xs tracking-[0.3em] text-accent/60">0{i+1}</span>
            </div>
            <h3 className="font-serif text-2xl mb-2">{t}</h3>
            <p className="text-primary-foreground/70">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============== FEATURES + PILLARS ============== */
/* Features list — now content of "6 Spiritual Stairs" */
const stairFeatures = [
  { icon: Sparkles, img: featStudy, t: "Yantra", d: "Master the sacred geometric diagrams that channel cosmic energies. Learn to draw, energise and use yantras as living instruments of power, protection and prosperity.", points: ["Sacred geometry foundations", "Energising rituals", "Daily activation practice"] },
  { icon: Flame, img: featLive, t: "Mantra", d: "The vibrational science of sound. Discover the bija mantras, their precise pronunciation, and the rhythmic disciplines that turn whispered syllables into transformation.", points: ["Bija & seed sounds", "Japa & rosary practice", "Personal mantra design"] },
  { icon: Eye, img: featCert, t: "Tantra", d: "Beyond the misconceptions — the true tantra is the science of subtle energy. Awaken inner currents through breath, intention and sacred ritual structure.", points: ["Subtle body anatomy", "Energy invocation", "Ethical practice"] },
  { icon: Disc3, img: featCommunity, t: "Chakra Balancing", d: "Map, sense and align the seven primary energy centres. Restore inner equilibrium through guided practice, sound and visualisation.", points: ["7 chakra deep dive", "Diagnostic methods", "Daily balancing flow"] },
  { icon: Gem, img: featStudy, t: "Remedies", d: "Practical, scripture-rooted solutions for life's blockages — gemstones, rituals, donations and lifestyle alignments tailored to a chart.", points: ["Gem & metal therapy", "Vedic remedies", "Lifestyle prescriptions"] },
  { icon: InfinityIcon, img: finalCosmos, t: "Past Life Regression", d: "Journey safely into soul memory. Understand recurring patterns, karmic relationships and the deeper arc of your incarnations.", points: ["Guided regression", "Pattern recognition", "Karmic resolution"] },
];

export const FeaturesAndPillars = () => {
  const [active, setActive] = useState(0);
  const f = stairFeatures[active];
  return (
    <section id="features" className="relative py-28 bg-gradient-beige">
      <div className="container max-w-7xl">
        <SectionHeader eyebrow="Inside the program" title="Everything a Grandmaster needs" sub="Six sacred stairs that form the complete arc of your transformation. Click any stair to explore." />
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* LEFT - clickable cards */}
          <div className="lg:col-span-2 space-y-3">
            {stairFeatures.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.t}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl p-5 flex items-center gap-4 transition-all duration-500 gold-border group ${isActive ? "bg-gradient-maroon text-primary-foreground shadow-maroon -translate-y-0.5" : "bg-card hover:shadow-gold hover:-translate-y-0.5"}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${isActive ? "bg-gradient-gold shadow-gold" : "bg-gradient-maroon"}`}>
                    <s.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-[10px] tracking-[0.35em] uppercase font-semibold mb-0.5 ${isActive ? "text-accent" : "text-accent"}`}>Stair 0{i + 1}</div>
                    <div className={`font-serif text-xl ${isActive ? "text-primary-foreground" : "text-primary"}`}>{s.t}</div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-all ${isActive ? "text-accent translate-x-0" : "text-muted-foreground -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT - big image + content */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 rounded-[2rem] overflow-hidden bg-card shadow-maroon gold-border">
              <div className="relative h-[360px] md:h-[440px] overflow-hidden">
                <img key={f.img} src={f.img} alt={f.t} className="w-full h-full object-cover animate-fade-in" style={{ animation: "ken-burns 14s ease-in-out infinite alternate" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full glass text-[10px] tracking-[0.4em] uppercase text-accent-glow">Stair 0{active + 1} · {f.t}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-4xl md:text-5xl text-primary-foreground text-shadow-gold">{f.t}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{f.d}</p>
                <ul className="space-y-3 mb-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-primary">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============== PROGRAMS (12 Pillars with info card) ============== */
const programs = [
  { icon: CircleDot, n: "Numerology", weeks: 8, fee: "₹49,000", tag: "Number sciences", d: "Decode the vibrational language of numbers. Master Pythagorean and Chaldean systems, life-path charting and predictive cycles for personal and client work." },
  { icon: Star, n: "Vedic Astrology", weeks: 12, fee: "₹79,000", tag: "Jyotisha · Foundational", d: "The crown jewel of cosmic sciences. Build, read and interpret birth charts using classical Parashari principles, dashas, transits and yogas." },
  { icon: Disc3, n: "KP Astrology", weeks: 10, fee: "₹69,000", tag: "Predictive precision", d: "The Krishnamurti Paddhati system — sub-lord theory, ruling planets and pinpoint horary techniques used by professional consultants." },
  { icon: Gem, n: "Gemstone Science", weeks: 6, fee: "₹39,000", tag: "Ratna Vigyan", d: "Identify, recommend and energise gemstones. Learn the planetary correspondences, quality grading and prescription protocols." },
  { icon: Home, n: "Vastu Shastra", weeks: 8, fee: "₹55,000", tag: "Sacred architecture", d: "Align homes and workspaces with cosmic flow. Directional sciences, elemental balance and remedial design without demolition." },
  { icon: ScrollText, n: "Lal Kitab", weeks: 8, fee: "₹49,000", tag: "Folk astrology", d: "The unique 'Red Book' system — its 35-year horoscope, karmic debts and famously simple yet potent household remedies." },
  { icon: Eye, n: "Face Reading", weeks: 6, fee: "₹35,000", tag: "Samudrika Shastra", d: "Read character, destiny and health from facial features, lines and proportions — the ancient art refined for modern consultation." },
  { icon: Flame, n: "Reiki Healing", weeks: 6, fee: "₹39,000", tag: "Energy healing", d: "Attunement through three levels — channel universal life force for self-healing, distance healing and client sessions." },
  { icon: Sparkles, n: "Tarot Reading", weeks: 8, fee: "₹45,000", tag: "Oracular wisdom", d: "Major and minor arcana mastery, professional spreads, intuitive interpretation and ethical client practice." },
  { icon: Sun, n: "Nakshatra", weeks: 8, fee: "₹55,000", tag: "27 lunar mansions", d: "The deepest layer of Vedic astrology — nakshatra padas, deities, symbols and their predictive applications." },
  { icon: Mountain, n: "Crystal & Rudraksha", weeks: 5, fee: "₹35,000", tag: "Sacred objects", d: "Selection, cleansing, programming and prescription of crystals and rudraksha beads for healing and spiritual practice." },
  { icon: Hand, n: "Palmistry", weeks: 7, fee: "₹42,000", tag: "Hasta Samudrika", d: "Lines, mounts, fingers and shapes — read the living blueprint of destiny written on every hand." },
];

export const Programs = () => {
  const [active, setActive] = useState(1);
  const p = programs[active];
  return (
    <section id="pillars" className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 sacred-pattern opacity-40" />
      <div className="absolute inset-0 luxury-noise opacity-25" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] text-accent/10 animate-spin-slow pointer-events-none">
        <SacredMandala className="w-full h-full" />
      </div>
      <div className="relative container max-w-7xl">
        <SectionHeader light eyebrow="12 Spiritual Pillars" title="Choose your sacred path" sub="Each program is a complete mastery — pick one and walk it deeply with our master mentors." />
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* LEFT - pillar list */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {programs.map((pr, i) => {
              const isActive = i === active;
              return (
                <button
                  key={pr.n}
                  onClick={() => setActive(i)}
                  className={`text-left rounded-2xl p-4 flex items-center gap-3 transition-all duration-500 gold-border group ${isActive ? "bg-gradient-gold text-primary shadow-gold -translate-y-0.5" : "glass hover:bg-accent/10"}`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-primary/20" : "bg-accent/15"}`}>
                    <pr.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[9px] tracking-[0.3em] uppercase font-semibold ${isActive ? "text-primary/80" : "text-accent/70"}`}>{String(i + 1).padStart(2, "0")}</div>
                    <div className={`text-sm font-semibold truncate ${isActive ? "text-primary" : "text-primary-foreground"}`}>{pr.n}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT - info card */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 rounded-[2rem] glass gold-border p-8 md:p-10 shadow-maroon relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-radial-gold opacity-60 pointer-events-none" style={{ background: "var(--gradient-radial-gold)" }} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
                      <p.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.4em] uppercase text-accent font-semibold mb-1">{p.tag}</div>
                      <h3 className="font-serif text-4xl md:text-5xl text-primary-foreground">{p.n}</h3>
                    </div>
                  </div>
                  <div className="hidden sm:block px-4 py-2 rounded-full glass gold-border text-[10px] tracking-[0.3em] uppercase text-accent">Pillar {String(active + 1).padStart(2, "0")} / 12</div>
                </div>

                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">{p.d}</p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="rounded-2xl glass p-5 gold-border">
                    <Clock className="w-5 h-5 text-accent mb-2" />
                    <div className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 mb-1">Duration</div>
                    <div className="font-display text-2xl text-accent">{p.weeks} Weeks</div>
                  </div>
                  <div className="rounded-2xl glass p-5 gold-border">
                    <GraduationCap className="w-5 h-5 text-accent mb-2" />
                    <div className="text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60 mb-1">Format</div>
                    <div className="font-display text-lg text-accent">Live + HD Recorded</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-gold p-5 shadow-gold">
                    <IndianRupee className="w-5 h-5 text-primary mb-2" />
                    <div className="text-[10px] tracking-[0.3em] uppercase text-primary/70 mb-1">Investment</div>
                    <div className="font-display text-2xl text-primary">{p.fee}</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5 mb-8">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-2 font-semibold">Includes</div>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm text-primary-foreground/85">
                    {["Live mentorship sessions", "Lifetime HD recordings", "Proprietary study material", "Official certification", "VIP community access", "1:1 doubt resolution"].map((x) => (
                      <div key={x} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent shrink-0" /><span>{x}</span></div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="lg" className="rounded-full">Enrol in {p.n}</Button>
                  <Button variant="outlineGold" size="lg" className="rounded-full">Download Brochure</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============== BONUS — now "Everything a Grandmaster Needs" ============== */
const grandmasterNeeds = [
  { icon: Video, n: "48 Weeks Live Classes", d: "Weekly immersive sessions with master mentors." },
  { icon: Library, n: "HD Recorded Lectures", d: "Lifetime access on any device, anytime." },
  { icon: ScrollText, n: "Proprietary Study Material", d: "Handcrafted manuals, charts and worksheets." },
  { icon: Users, n: "VIP Community", d: "An intimate global circle of serious seekers." },
  { icon: Award, n: "Official Certification", d: "Graduate as a certified Parashari Grandmaster." },
  { icon: MessageCircleQuestion, n: "Doubt Resolution", d: "Dedicated 1:1 mentorship and support." },
  { icon: Gift, n: "Bonus Resources", d: "Mantras, yantras, ritual guides and references." },
  { icon: CalendarClock, n: "Flexible Schedule", d: "Live + recorded format on your rhythm." },
];
export const Bonus = () => (
  <section id="bonus" className="relative py-28 overflow-hidden bg-primary text-primary-foreground">
    <img src={bonus} alt="" loading="lazy" width={1920} height={800} className="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(350 70% 12% / 0.92), hsl(350 60% 8% / 0.95))" }} />
    <div className="absolute inset-0 luxury-noise opacity-30" />

    <div className="relative container max-w-6xl text-center">
      <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass gold-border mb-6">
        <Crown className="w-4 h-4 text-accent animate-glow-pulse" />
        <span className="font-display text-xs tracking-[0.4em] uppercase text-accent font-semibold">The Complete Toolkit</span>
      </div>
      <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-5 text-shadow-gold">
        Everything a <span className="shimmer-gold">Grandmaster</span> Needs
      </h2>
      <div className="divider-ornament my-6"><span className="text-accent">✦</span></div>
      <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-14">
        Eight pillars of value that make this the most comprehensive spiritual education today — every tool, every resource, all in one sacred container.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
        {grandmasterNeeds.map((s, i) => (
          <div key={s.n} className="group relative rounded-2xl glass gold-border p-7 hover:bg-accent/10 transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-px rounded-2xl bg-gradient-gold opacity-0 group-hover:opacity-30 blur-md transition-opacity" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-display text-[10px] tracking-[0.3em] text-accent/60">0{i + 1}</span>
              </div>
              <h3 className="font-serif text-xl mb-2">{s.n}</h3>
              <p className="text-sm text-primary-foreground/65 leading-relaxed">{s.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-4 px-8 py-5 rounded-full glass gold-border">
        <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70">Total Combined Value</span>
        <span className="font-display text-2xl text-gradient-gold tracking-wider">₹2,40,000</span>
        <span className="text-primary-foreground/40">·</span>
        <span className="text-xs tracking-[0.3em] uppercase text-accent">Yours · Today's Sacred Price</span>
      </div>
    </div>
  </section>
);

/* ============== FINAL IMAGE ============== */
const testimonials = [
  { n: "Aarav Mehta", r: "Cohort 05 · Mumbai", q: "I came seeking knowledge. I left transformed. The lineage, the depth, the mentorship — nothing in India compares.", s: 5 },
  { n: "Priya Sharma", r: "Cohort 04 · Bengaluru", q: "Within weeks, my consulting practice tripled. But more importantly — I found my dharma.", s: 5 },
  { n: "Dr. Rohan Iyer", r: "Cohort 06 · Delhi", q: "A masterclass in spiritual sciences delivered with the rigour of a doctorate. Worth every rupee, and then some.", s: 5 },
];

export const Testimonials = () => (
  <section className="relative py-28 bg-gradient-beige overflow-hidden">
    <div className="absolute inset-0 sacred-pattern opacity-60" />
    <div className="relative container max-w-7xl">
      <SectionHeader eyebrow="Voices of the Lineage" title="Words from our Grandmasters" sub="Real transformations from seekers who walked this sacred path." />
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={t.n} className="relative rounded-3xl bg-card p-9 shadow-elegant hover:shadow-maroon transition-all duration-700 hover:-translate-y-2 gold-border">
            <Quote className="absolute -top-4 left-8 w-10 h-10 text-accent fill-accent/20" />
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.s }).map((_, k) => <Star key={k} className="w-4 h-4 fill-accent text-accent" />)}
            </div>
            <p className="font-serif text-xl italic text-primary leading-relaxed mb-7">"{t.q}"</p>
            <div className="flex items-center gap-4 pt-5 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-maroon flex items-center justify-center text-accent font-display text-lg shadow-maroon">
                {t.n.charAt(0)}
              </div>
              <div>
                <div className="font-display text-sm text-primary tracking-wider uppercase">{t.n}</div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground">{t.r}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
    <div className="absolute inset-0 luxury-noise opacity-25" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial-gold opacity-50" style={{ background: "var(--gradient-radial-gold)" }} />
    <div className="relative container max-w-4xl text-center">
      <div className="inline-flex items-center gap-3 mb-6">
        <span className="h-px w-12 bg-accent" />
        <span className="font-display text-xs tracking-[0.45em] uppercase text-accent font-semibold">Your Sacred Invitation</span>
        <span className="h-px w-12 bg-accent" />
      </div>
      <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 text-shadow-gold">
        Start Your Spiritual <span className="italic shimmer-gold">Mastery Journey</span> Today
      </h2>
      <p className="text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-10">
        Enrolment is by intention. The next cohort begins soon — claim your seat among the next generation of Grandmasters.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="hero" size="xl">Reserve My Sacred Seat</Button>
        <Button variant="outlineGold" size="xl">Explore Courses</Button>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] tracking-[0.3em] uppercase text-primary-foreground/60">
        <span>✦ 7-Day Sacred Guarantee</span>
        <span>✦ Lifetime Access</span>
        <span>✦ Certified Lineage</span>
      </div>
      <p className="mt-12 font-display text-sm text-primary-foreground/50 tracking-[0.4em] uppercase">
        ॐ · Parashari Grandmaster Program · Est. Wisdom of Ages
      </p>
    </div>
  </section>
);
