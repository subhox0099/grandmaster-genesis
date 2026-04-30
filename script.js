/* Parashari Grandmaster — vanilla JS */

/* ===== Mandala SVG generation ===== */
(function buildMandala(){
  const svg = document.querySelector('#grand-entry .mandala-svg');
  if(!svg) return;
  const spokesG = svg.querySelector('.mandala-spokes');
  const petalsG = svg.querySelector('.mandala-petals');
  for(let i=0;i<12;i++){
    const a = (i*30*Math.PI)/180;
    const x2 = 100 + 98*Math.cos(a);
    const y2 = 100 + 98*Math.sin(a);
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1','100'); line.setAttribute('y1','100');
    line.setAttribute('x2',x2); line.setAttribute('y2',y2);
    spokesG.appendChild(line);
  }
  for(let i=0;i<8;i++){
    const p = document.createElementNS('http://www.w3.org/2000/svg','polygon');
    p.setAttribute('points','100,40 110,100 100,160 90,100');
    p.setAttribute('transform',`rotate(${i*45} 100 100)`);
    petalsG.appendChild(p);
  }
})();

/* ===== Grand Entry sequencing ===== */
(function grandEntry(){
  const el = document.getElementById('grand-entry');
  if(!el) return;
  document.body.style.overflow = 'hidden';
  setTimeout(()=> el.classList.add('opening'), 2600);
  setTimeout(()=> { el.classList.add('done'); document.body.style.overflow=''; }, 4200);
})();

/* ===== Section header injection ===== */
(function buildSectionHeaders(){
  document.querySelectorAll('.section-header').forEach(sh=>{
    const eyebrow = sh.dataset.eyebrow;
    const title = sh.dataset.title;
    const sub = sh.dataset.sub;
    const orn = `<svg viewBox="0 0 40 8" class="sh-orn" fill="currentColor"><path d="M0 4h14l3-3 3 3h14" stroke="currentColor" stroke-width="0.6" fill="none"/><circle cx="20" cy="4" r="1.2"/></svg>`;
    sh.innerHTML = `
      ${eyebrow?`<div class="sh-eyebrow-row">${orn}<span class="sh-eyebrow">${eyebrow}</span>${orn}</div>`:''}
      <h2 class="sh-title serif">${title}</h2>
      ${sub?`<p class="sh-sub">${sub}</p>`:''}
      <div class="divider-ornament"><span>✦</span></div>
    `;
  });
})();

/* ===== Navbar scroll ===== */
(function nav(){
  const nav = document.getElementById('navbar');
  const onScroll = ()=> nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();

/* ===== HERO carousel ===== */
const heroSlides = [
  { img:'/assets/hero-cosmos.jpg', eyebrow:'Sacred Sciences · Live Cohort', title:'Become a Grandmaster of Spiritual Sciences', sub:'A 48-week guided journey through the timeless wisdom of the Parashari tradition.' },
  { img:'/assets/hero-yantra.jpg', eyebrow:'12 Pillars · 1 Sacred Path', title:'Choose ANY 1 Course from 12 Spiritual Pillars', sub:'Numerology, Vedic Astrology, KP, Vastu, Lal Kitab, Tarot & more — master one deeply.' },
  { img:'/assets/hero-aura.jpg', eyebrow:'Bonus Worth ₹40,000', title:'Get 6 Spiritual Stairs Absolutely Free', sub:'Yantra · Mantra · Tantra · Chakra Balancing · Remedies · Past Life Regression.' },
  { img:'/assets/hero-temple.jpg', eyebrow:'Live + Recorded · Lifetime Mindset', title:'48 Weeks of Transformative Learning', sub:'HD recorded lectures, live mentorship, proprietary study material & official certification.' },
];
(function buildHero(){
  const stage = document.getElementById('hero-stage');
  const dotsWrap = document.getElementById('hero-dots');
  if(!stage) return;
  heroSlides.forEach((s,idx)=>{
    const titleParts = s.title.split(' ');
    const lastIdx = titleParts.length-1;
    const titleHtml = titleParts.map((w,k)=> k===lastIdx
      ? `<span class="italic shimmer-gold">${w}</span>`
      : `<span>${w}</span>`).join(' ');
    const slide = document.createElement('div');
    slide.className = 'hero-slide' + (idx===0?' active':'');
    slide.innerHTML = `
      <img src="${s.img}" alt="${s.title}" />
      <div class="hero-overlay"></div>
      <div class="hero-noise"></div>
      <div class="hero-pattern"></div>
      <div class="hero-fade-bottom"></div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-inner">
            <div class="rate-row">
              <div class="stars">★★★★★</div>
              <span class="rate-text">Rated 4.9 · 10,000+ Seekers</span>
            </div>
            <div class="eyebrow-pill">
              <span class="spark"></span>
              <span class="label">${s.eyebrow}</span>
            </div>
            <h1 class="hero-title serif">${titleHtml}</h1>
            <div class="hero-rule"></div>
            <p class="hero-sub">${s.sub}</p>
            <div class="hero-ctas">
              <button class="btn btn-hero btn-xl">Reserve My Seat →</button>
              <button class="btn btn-outline-gold btn-xl">Explore Curriculum</button>
            </div>
            <div class="trust-bar">
              <span><span class="icon">🛡</span> 7-Day Sacred Guarantee</span>
              <span><span class="icon">🏅</span> Certified Lineage</span>
              <span><span class="icon">👥</span> 1:1 Mentorship</span>
            </div>
          </div>
        </div>
      </div>
    `;
    stage.appendChild(slide);
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Slide ${idx+1}`);
    if(idx===0) dot.classList.add('active');
    dot.addEventListener('click', ()=> setHero(idx));
    dotsWrap.appendChild(dot);
  });

  // floating mandala spinner
  const spin = document.createElement('div'); spin.className='hero-spin'; stage.appendChild(spin);

  let current = 0;
  function setHero(i){
    current = (i+heroSlides.length)%heroSlides.length;
    [...stage.querySelectorAll('.hero-slide')].forEach((el,k)=>{
      el.classList.toggle('active', k===current);
      // restart ken-burns by replacing img animation
      const img = el.querySelector('img');
      if(img && k===current){ img.style.animation='none'; void img.offsetWidth; img.style.animation=''; }
    });
    [...dotsWrap.children].forEach((d,k)=> d.classList.toggle('active', k===current));
  }
  setInterval(()=> setHero(current+1), 5000);
})();

/* ===== Why grid ===== */
const whyItems = [
  { i:'📖', t:'Structured Ancient Wisdom', d:'Centuries-old sciences taught in a clear, progressive curriculum.' },
  { i:'🧭', t:'Practical Real-World Use', d:'Apply every lesson to life, career, relationships and self-mastery.' },
  { i:'✨', t:'Beginner to Advanced', d:'No prior knowledge needed — graduate as a confident practitioner.' },
  { i:'∞',  t:'Lifetime Mindset Shift', d:'Tools, rituals and frameworks that stay with you forever.' },
];
(function buildWhy(){
  const grid = document.getElementById('why-grid');
  whyItems.forEach((w,i)=>{
    const el = document.createElement('div');
    el.className='why-card gold-border';
    el.style.transitionDelay = (i*120)+'ms';
    el.innerHTML = `
      <span class="why-card-num">0${i+1}</span>
      <div class="why-icon">${w.i}</div>
      <h3>${w.t}</h3>
      <p>${w.d}</p>
      <div class="why-underline"></div>
    `;
    grid.appendChild(el);
  });
})();

/* ===== Benefits grid ===== */
const benefits = [
  { i:'💼', t:'Career Opportunities', d:'Build a thriving consulting practice.' },
  { i:'❤', t:'Personal Growth', d:'Heal patterns. Reclaim your power.' },
  { i:'👁', t:'Spiritual Awareness', d:'See life through cosmic lenses.' },
  { i:'🔥', t:'Healing & Energy', d:'Channel and balance subtle forces.' },
  { i:'⭐', t:'Cosmic Confidence', d:'Decisions guided by deeper knowing.' },
  { i:'👑', t:'Legacy Mastery', d:'Become a guide for generations.' },
];
(function buildBenefits(){
  const grid = document.getElementById('benefits-grid');
  benefits.forEach((b,i)=>{
    const el = document.createElement('div');
    el.className='benefit-card glass gold-border';
    el.innerHTML = `
      <div class="benefit-head">
        <div class="benefit-icon">${b.i}</div>
        <span class="benefit-num">0${i+1}</span>
      </div>
      <h3>${b.t}</h3>
      <p>${b.d}</p>
    `;
    grid.appendChild(el);
  });
})();

/* ===== Stairs (6 spiritual stairs) ===== */
const stairs = [
  { i:'✨', img:'/assets/feature-study.jpg', t:'Yantra', d:"Master the sacred geometric diagrams that channel cosmic energies. Learn to draw, energise and use yantras as living instruments of power, protection and prosperity.", points:["Sacred geometry foundations","Energising rituals","Daily activation practice"] },
  { i:'🔥', img:'/assets/feature-live.jpg', t:'Mantra', d:"The vibrational science of sound. Discover the bija mantras, their precise pronunciation, and the rhythmic disciplines that turn whispered syllables into transformation.", points:["Bija & seed sounds","Japa & rosary practice","Personal mantra design"] },
  { i:'👁', img:'/assets/feature-cert.jpg', t:'Tantra', d:"Beyond the misconceptions — the true tantra is the science of subtle energy. Awaken inner currents through breath, intention and sacred ritual structure.", points:["Subtle body anatomy","Energy invocation","Ethical practice"] },
  { i:'◎', img:'/assets/feature-community.jpg', t:'Chakra Balancing', d:"Map, sense and align the seven primary energy centres. Restore inner equilibrium through guided practice, sound and visualisation.", points:["7 chakra deep dive","Diagnostic methods","Daily balancing flow"] },
  { i:'💎', img:'/assets/feature-study.jpg', t:'Remedies', d:"Practical, scripture-rooted solutions for life's blockages — gemstones, rituals, donations and lifestyle alignments tailored to a chart.", points:["Gem & metal therapy","Vedic remedies","Lifestyle prescriptions"] },
  { i:'∞', img:'/assets/final-cosmos.jpg', t:'Past Life Regression', d:"Journey safely into soul memory. Understand recurring patterns, karmic relationships and the deeper arc of your incarnations.", points:["Guided regression","Pattern recognition","Karmic resolution"] },
];
(function buildStairs(){
  const strip = document.getElementById('stairs-strip');
  if(!strip) return;
  
  strip.classList.add('timeline-container');
  
  strip.innerHTML = stairs.map((s,i)=>{
    const isEven = i % 2 === 0;
    return `
      <div class="timeline-row ${isEven ? 'timeline-left' : 'timeline-right'}">
        <div class="premium-strip">
          <div class="timeline-img">
            <img src="${s.img}" alt="${s.t}" />
            <div class="timeline-img-overlay"></div>
            <div class="premium-tag">
              <span class="premium-tag-num">0${i+1}</span>
              <span class="premium-tag-text">Level</span>
            </div>
          </div>
          <div class="timeline-info">
            <div class="watermark-number">0${i+1}</div>
            <div class="timeline-icon-title">
              <div class="timeline-icon">${s.i}</div>
              <h3 class="premium-text-gold">${s.t}</h3>
            </div>
            <ul class="timeline-points">
              ${s.points.map(p=>`<li>${p}</li>`).join('')}
            </ul>
            <div class="explore-arrow">
               <span>Unlock Mastery</span>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ 
        if(e.isIntersecting){ 
          e.target.classList.add('in-view'); 
          io.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.15 });
    strip.querySelectorAll('.timeline-row').forEach(row => io.observe(row));
  } else {
    strip.querySelectorAll('.timeline-row').forEach(row => row.classList.add('in-view'));
  }
})();

/* ===== Programs (12 pillars) ===== */
const programs = [
  { i:'◉', n:'Numerology', weeks:8, fee:'₹49,000', tag:'Number sciences', d:"Decode the vibrational language of numbers. Master Pythagorean and Chaldean systems, life-path charting and predictive cycles for personal and client work." },
  { i:'★', n:'Vedic Astrology', weeks:12, fee:'₹79,000', tag:'Jyotisha · Foundational', d:"The crown jewel of cosmic sciences. Build, read and interpret birth charts using classical Parashari principles, dashas, transits and yogas." },
  { i:'◎', n:'KP Astrology', weeks:10, fee:'₹69,000', tag:'Predictive precision', d:"The Krishnamurti Paddhati system — sub-lord theory, ruling planets and pinpoint horary techniques used by professional consultants." },
  { i:'💎', n:'Gemstone Science', weeks:6, fee:'₹39,000', tag:'Ratna Vigyan', d:"Identify, recommend and energise gemstones. Learn the planetary correspondences, quality grading and prescription protocols." },
  { i:'🏠', n:'Vastu Shastra', weeks:8, fee:'₹55,000', tag:'Sacred architecture', d:"Align homes and workspaces with cosmic flow. Directional sciences, elemental balance and remedial design without demolition." },
  { i:'📜', n:'Lal Kitab', weeks:8, fee:'₹49,000', tag:'Folk astrology', d:"The unique 'Red Book' system — its 35-year horoscope, karmic debts and famously simple yet potent household remedies." },
  { i:'👁', n:'Face Reading', weeks:6, fee:'₹35,000', tag:'Samudrika Shastra', d:"Read character, destiny and health from facial features, lines and proportions — the ancient art refined for modern consultation." },
  { i:'🔥', n:'Reiki Healing', weeks:6, fee:'₹39,000', tag:'Energy healing', d:"Attunement through three levels — channel universal life force for self-healing, distance healing and client sessions." },
  { i:'✨', n:'Tarot Reading', weeks:8, fee:'₹45,000', tag:'Oracular wisdom', d:"Major and minor arcana mastery, professional spreads, intuitive interpretation and ethical client practice." },
  { i:'☀', n:'Nakshatra', weeks:8, fee:'₹55,000', tag:'27 lunar mansions', d:"The deepest layer of Vedic astrology — nakshatra padas, deities, symbols and their predictive applications." },
  { i:'⛰', n:'Crystal & Rudraksha', weeks:5, fee:'₹35,000', tag:'Sacred objects', d:"Selection, cleansing, programming and prescription of crystals and rudraksha beads for healing and spiritual practice." },
  { i:'✋', n:'Palmistry', weeks:7, fee:'₹42,000', tag:'Hasta Samudrika', d:"Lines, mounts, fingers and shapes — read the living blueprint of destiny written on every hand." },
];
(function buildPrograms(){
  const list = document.getElementById('programs-list');
  const card = document.getElementById('program-card');
  let active = 1;
  function pad(n){ return String(n).padStart(2,'0'); }
  function renderList(){
    list.innerHTML = programs.map((p,i)=>`
      <button class="program-btn gold-border ${i===active?'active':''}" data-idx="${i}">
        <span class="ic">${p.i}</span>
        <span>
          <span class="pn-num">${pad(i+1)}</span><br/>
          <span class="pn-title">${p.n}</span>
        </span>
      </button>
    `).join('');
    list.querySelectorAll('.program-btn').forEach(b=>{
      b.addEventListener('click', ()=>{ active = +b.dataset.idx; renderList(); renderCard(); });
    });
  }
  function renderCard(){
    const p = programs[active];
    card.innerHTML = `
      <div class="program-card-inner">
        <div class="pc-head">
          <div class="pc-head-left">
            <div class="pc-icon">${p.i}</div>
            <div>
              <div class="pc-tag">${p.tag}</div>
              <h3 class="pc-name serif">${p.n}</h3>
            </div>
          </div>
          <span class="pc-pillar">Pillar ${pad(active+1)} / 12</span>
        </div>
        <p class="pc-desc">${p.d}</p>
        <div class="pc-meta">
          <div class="meta-card">
            <div class="meta-ic">⏱</div>
            <div class="meta-label">Duration</div>
            <div class="meta-value">${p.weeks} Weeks</div>
          </div>
          <div class="meta-card">
            <div class="meta-ic">🎓</div>
            <div class="meta-label">Format</div>
            <div class="meta-value sm">Live + HD Recorded</div>
          </div>
          <div class="meta-card highlight">
            <div class="meta-ic">₹</div>
            <div class="meta-label">Investment</div>
            <div class="meta-value">${p.fee}</div>
          </div>
        </div>
        <div class="includes">
          <div class="includes-label">Includes</div>
          <div class="includes-grid">
            <div>Live mentorship sessions</div>
            <div>Lifetime HD recordings</div>
            <div>Proprietary study material</div>
            <div>Official certification</div>
            <div>VIP community access</div>
            <div>1:1 doubt resolution</div>
          </div>
        </div>
        <div class="pc-ctas">
          <button class="btn btn-hero btn-pill">Enrol in ${p.n}</button>
          <button class="btn btn-outline-gold btn-pill">Download Brochure</button>
        </div>
      </div>
    `;
  }
  renderList(); renderCard();
})();

/* ===== Bonus grid ===== */
const bonusItems = [
  { i:'🎬', n:'48 Weeks Live Classes', d:'Weekly immersive sessions with master mentors.' },
  { i:'📚', n:'HD Recorded Lectures', d:'Lifetime access on any device, anytime.' },
  { i:'📜', n:'Proprietary Study Material', d:'Handcrafted manuals, charts and worksheets.' },
  { i:'👥', n:'VIP Community', d:'An intimate global circle of serious seekers.' },
  { i:'🏅', n:'Official Certification', d:'Graduate as a certified Parashari Grandmaster.' },
  { i:'❓', n:'Doubt Resolution', d:'Dedicated 1:1 mentorship and support.' },
  { i:'🎁', n:'Bonus Resources', d:'Mantras, yantras, ritual guides and references.' },
  { i:'📅', n:'Flexible Schedule', d:'Live + recorded format on your rhythm.' },
];
(function buildBonus(){
  const grid = document.getElementById('bonus-grid');
  bonusItems.forEach((b,i)=>{
    const el = document.createElement('div');
    el.className='bonus-card gold-border';
    el.innerHTML = `
      <div class="row">
        <div class="bonus-icon">${b.i}</div>
        <span class="bonus-num">0${i+1}</span>
      </div>
      <h3>${b.n}</h3>
      <p>${b.d}</p>
    `;
    grid.appendChild(el);
  });
})();

/* ===== Testimonials ===== */
const testimonials = [
  { n:'Aarav Mehta', r:'Cohort 05 · Mumbai', q:"I came seeking knowledge. I left transformed. The lineage, the depth, the mentorship — nothing in India compares.", s:5 },
  { n:'Priya Sharma', r:'Cohort 04 · Bengaluru', q:"Within weeks, my consulting practice tripled. But more importantly — I found my dharma.", s:5 },
  { n:'Dr. Rohan Iyer', r:'Cohort 06 · Delhi', q:"A masterclass in spiritual sciences delivered with the rigour of a doctorate. Worth every rupee, and then some.", s:5 },
];
(function buildTestimonials(){
  const grid = document.getElementById('testimonials-grid');
  testimonials.forEach(t=>{
    const el = document.createElement('div'); el.className='t-card gold-border';
    el.innerHTML = `
      <div class="t-quote">"</div>
      <div class="t-stars">${'★'.repeat(t.s)}</div>
      <p class="t-text">"${t.q}"</p>
      <div class="t-foot">
        <div class="t-avatar">${t.n.charAt(0)}</div>
        <div>
          <div class="t-name">${t.n}</div>
          <div class="t-role">${t.r}</div>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
})();

/* ===== Reveal-on-scroll (why cards) ===== */
(function reveal(){
  if(!('IntersectionObserver' in window)) {
    document.querySelectorAll('.why-card').forEach(c=>c.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.why-card').forEach(c=> io.observe(c));
})();
