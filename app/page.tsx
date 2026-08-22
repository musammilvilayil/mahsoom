"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";

const WHATSAPP_NUMBER = ""; // Add country code + number before launch, e.g. 919876543210

const programs = [
  {
    icon: "01",
    title: "Healthy Weight",
    text: "A practical routine built around balanced nutrition, portion awareness, movement and consistent coaching.",
    tag: "Weight management",
  },
  {
    icon: "02",
    title: "Daily Nutrition",
    text: "Simple ways to build a more consistent day with meal structure, protein awareness, hydration and habit tracking.",
    tag: "Everyday wellness",
  },
  {
    icon: "03",
    title: "Active Lifestyle",
    text: "Support for beginners and regular movers who want to pair nutrition habits with sustainable physical activity.",
    tag: "Fitness support",
  },
  {
    icon: "04",
    title: "Skin & Self-Care",
    text: "A four-step skincare routine focused on cleansing, toning, serum care and moisturising for a simple daily ritual.",
    tag: "Vritilife routine",
  },
];

const skincare = [
  { step: "01", title: "Cleanse", text: "Start with a gentle cleansing step to remove daily impurities and prepare the skin." },
  { step: "02", title: "Tone", text: "Follow with toner as part of a consistent morning or evening care routine." },
  { step: "03", title: "Serum", text: "Layer a serum step into the routine for focused skin-care support." },
  { step: "04", title: "Moisturise", text: "Finish by moisturising to help maintain a comfortable, nourished feel." },
];

const faqs = [
  ["Do I need to be fit before joining?", "No. The starting point is your current routine. Guidance can be adapted for beginners and people returning to an active lifestyle."],
  ["Is this a crash-diet programme?", "No. The website is intentionally centred on sustainable habits, personalised guidance and a healthy active lifestyle rather than extreme or guaranteed outcomes."],
  ["Can I ask specifically about Herbalife products?", "Yes. Product education can be discussed with the club. Always follow current product labels, suitability guidance and advice from an appropriate healthcare professional when relevant."],
  ["Do you offer skin-care guidance?", "Yes. The club can explain a simple cleanse-tone-serum-moisturise routine and the available Vritilife skin-care range."],
  ["Can I join only for nutrition guidance?", "Yes. The consultation can focus on nutrition habits, healthy-weight goals, an active lifestyle, skin self-care or a combination."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openWhatsApp(message = "Hi, I would like to know more about Mahsoom's Lifestyle Centre.") {
  if (!WHATSAPP_NUMBER) {
    scrollToId("contact");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

function TransformationCard({ index, goal }: { index: number; goal: string }) {
  return (
    <article className="transformation-card">
      <div className="compare-stage" aria-label={`Transformation layout ${index}`}>
        <div className="compare-side before-side">
          <span className="compare-label">BEFORE</span>
          <div className="person-silhouette" aria-hidden="true"><span /></div>
          <p>Real member photo</p>
        </div>
        <div className="compare-divider"><span>→</span></div>
        <div className="compare-side after-side">
          <span className="compare-label">AFTER</span>
          <div className="person-silhouette after" aria-hidden="true"><span /></div>
          <p>Real member photo</p>
        </div>
      </div>
      <div className="transformation-copy">
        <div>
          <span className="eyebrow">REAL STORY SLOT {String(index).padStart(2, "0")}</span>
          <h3>{goal}</h3>
        </div>
        <p>Replace this demo frame with a consented member journey, timeframe and verified outcome before publishing.</p>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const goal = String(form.get("goal") || "");
    const time = String(form.get("time") || "");
    const phone = String(form.get("phone") || "");
    const message = `Hi, I'm ${name}. My goal is ${goal}. Preferred time: ${time}. Phone: ${phone}. I would like a consultation.`;
    if (WHATSAPP_NUMBER) openWhatsApp(message);
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => scrollToId("home")} aria-label="Mahsoom's Lifestyle Centre home">
          <Image src="/brand-logo.webp" alt="Mahsoom's Lifestyle Centre" width={420} height={173} priority />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {[
            ["Results", "results"],
            ["Programs", "programs"],
            ["Skin Care", "skin"],
            ["How it works", "process"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button key={id} onClick={() => { scrollToId(id); setMenuOpen(false); }}>{label}</button>
          ))}
        </nav>
        <button className="header-cta" onClick={() => scrollToId("contact")}>Book consultation</button>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-grain" />
        <div className="hero-copy">
          <span className="eyebrow light">MAHSOOM&apos;S LIFESTYLE CENTRE · KERALA</span>
          <h1>Change that <em>shows.</em><br />Habits that <span>stay.</span></h1>
          <p className="hero-lede">Personalised nutrition guidance, healthy-weight support, an active lifestyle community and a simple skin self-care routine — built around you.</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollToId("results")}>See transformation format <b>↘</b></button>
            <button className="text-btn" onClick={() => scrollToId("contact")}>Start with a consultation <span>→</span></button>
          </div>
          <div className="hero-notes">
            <span>Nutrition</span><i /> <span>Healthy weight</span><i /> <span>Fitness</span><i /> <span>Skin care</span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="hero-stat card-a"><small>01</small><strong>Consult</strong><span>Understand your routine</span></div>
          <div className="hero-stat card-b"><small>02</small><strong>Personalise</strong><span>Build the plan together</span></div>
          <div className="hero-stat card-c"><small>03</small><strong>Support</strong><span>Review & stay consistent</span></div>
          <div className="hero-center"><span>THE</span><strong>CHANGE</strong><em>starts here</em></div>
        </div>
      </section>

      <section className="statement-strip">
        <p>THE HERITAGE HUB OF THE CHANGED PEOPLE</p>
        <span>•</span><p>PERSONALISED WELLNESS GUIDANCE</p><span>•</span><p>REAL PEOPLE · REAL ROUTINES</p>
      </section>

      <section className="section results-section" id="results">
        <div className="section-heading split-heading">
          <div><span className="eyebrow">01 · TRANSFORMATIONS</span><h2>Let the journey<br /><em>speak first.</em></h2></div>
          <div className="heading-note"><span>BEFORE → AFTER</span><p>This is the website&apos;s main conversion section. It is ready for real member photographs, short stories and verified measurements once consented assets are provided.</p></div>
        </div>
        <div className="transformation-grid">
          <TransformationCard index={1} goal="Healthy-weight journey" />
          <TransformationCard index={2} goal="Active lifestyle journey" />
          <TransformationCard index={3} goal="Skin self-care journey" />
        </div>
        <div className="compliance-note"><strong>Publishing rule</strong><p>No fabricated results, no guaranteed timelines. Every transformation should use real consented photos and an accurate description. Individual results vary.</p></div>
      </section>

      <section className="section programs-section" id="programs">
        <div className="section-heading"><span className="eyebrow">02 · WHAT WE SUPPORT</span><h2>One centre.<br /><em>Four lifestyle pillars.</em></h2></div>
        <div className="program-grid">
          {programs.map((item) => (
            <article key={item.title} className="program-card">
              <div className="program-top"><span>{item.icon}</span><small>{item.tag}</small></div>
              <h3>{item.title}</h3><p>{item.text}</p>
              <button onClick={() => scrollToId("contact")}>Talk about this goal <span>↗</span></button>
            </article>
          ))}
        </div>
      </section>

      <section className="nutrition-band">
        <div className="nutrition-intro"><span className="eyebrow light">NUTRITION · ROUTINE · SUPPORT</span><h2>A plan should fit your day —<br />not fight it.</h2><p>Herbalife India describes its healthy-weight approach around nutrient-containing foods, meal replacement shakes and personalised associate support. At the club, product education should always be paired with everyday food habits, activity and the current product label.</p><a href="https://www.herbalife.com/en-in/achieve-your-goals/healthy-weight" target="_blank" rel="noreferrer">Read official Herbalife India guidance ↗</a></div>
        <div className="nutrition-stack">
          {["Meal structure", "Protein awareness", "Hydration habits", "Activity rhythm", "Weekly check-ins"].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className="section skin-section" id="skin">
        <div className="skin-copy">
          <span className="eyebrow">03 · SKIN & SELF-CARE</span>
          <h2>Four steps.<br /><em>One easy ritual.</em></h2>
          <p>Herbalife India&apos;s Vritilife outer nutrition range includes Facial Cleanser, Facial Toner, Facial Serum and Moisturizer. We turn that into a simple routine visitors can understand at a glance.</p>
          <a href="https://www.herbalife.com/en-in/achieve-your-goals/skin-body-care" target="_blank" rel="noreferrer">View official skin & body care information ↗</a>
        </div>
        <div className="skin-steps">
          {skincare.map((item) => <article key={item.title}><span>{item.step}</span><div className="bottle" aria-hidden="true"><i /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="section product-section">
        <div className="section-heading split-heading"><div><span className="eyebrow">04 · PRODUCT EDUCATION</span><h2>Products are a tool.<br /><em>The routine is the system.</em></h2></div><div className="heading-note"><p>The site avoids disease-treatment claims and guaranteed body-change claims. Visitors are directed toward consultation and current label-based product information instead of a hard-sell checkout.</p></div></div>
        <div className="product-grid">
          <article className="product-feature"><div className="product-visual shake"><div className="jar">F1<small>NUTRITION</small></div></div><div><span>DAILY NUTRITION</span><h3>Formula 1 style meal-replacement guidance</h3><p>Herbalife India describes Formula 1 as a nutritional shake mix with protein, carbohydrates, vitamins and minerals, intended to be used according to label directions within an appropriate eating plan.</p></div></article>
          <article className="product-feature"><div className="product-visual green"><div className="jar slim">V<small>SKIN</small></div></div><div><span>OUTER NUTRITION</span><h3>Vritilife skin-care routine</h3><p>Cleanser, toner, serum and moisturiser are presented as a daily self-care sequence rather than medical treatment.</p></div></article>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-title"><span className="eyebrow light">05 · HOW IT WORKS</span><h2>Start small.<br />Build steadily.</h2></div>
        <div className="process-list">
          {[
            ["01", "Free conversation", "Tell us what you want to improve and what your current routine actually looks like."],
            ["02", "Personalised direction", "Choose the areas that matter now: nutrition, healthy weight, movement or skin self-care."],
            ["03", "Weekly support", "Review consistency, obstacles and next steps. Adjust the routine instead of chasing perfection."],
          ].map(([n, t, d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading"><span className="eyebrow">06 · FAQ</span><h2>Questions before<br /><em>you begin.</em></h2></div>
        <div className="faq-list">{faqs.map(([q, a], i) => <details key={q} open={i === 0}><summary><span>0{i + 1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy"><span className="eyebrow light">START YOUR JOURNEY</span><h2>Tell us what<br />you want to change.</h2><p>Share your goal and preferred time. Once the business WhatsApp number is added, this form will open a pre-filled WhatsApp enquiry.</p><div className="contact-tags"><span>No pressure</span><span>Goal-first conversation</span><span>Mobile friendly</span></div></div>
        <form onSubmit={handleSubmit} className="lead-form">
          <label>Name<input name="name" placeholder="Your name" required /></label>
          <label>Phone<input name="phone" type="tel" inputMode="tel" placeholder="Your number" required /></label>
          <label>Primary goal<select name="goal" defaultValue="Healthy weight"><option>Healthy weight</option><option>Daily nutrition</option><option>Fitness / active lifestyle</option><option>Skin & self-care</option><option>Not sure yet</option></select></label>
          <label>Preferred time<select name="time" defaultValue="Morning"><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
          <button className="primary-btn form-btn" type="submit">Prepare WhatsApp enquiry <b>↗</b></button>
          {submitted && !WHATSAPP_NUMBER && <p className="form-status">✓ Form flow is ready. Add the club&apos;s WhatsApp number in <code>app/page.tsx</code> before launch.</p>}
        </form>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/brand-logo.webp" alt="Mahsoom's Lifestyle Centre" width={360} height={148} /><p>The Heritage Hub of the Changed People</p></div>
        <div className="footer-links"><button onClick={() => scrollToId("results")}>Transformations</button><button onClick={() => scrollToId("programs")}>Programs</button><button onClick={() => scrollToId("skin")}>Skin care</button><button onClick={() => scrollToId("contact")}>Contact</button></div>
        <div className="footer-legal"><p>Independent lifestyle-centre website. Herbalife and Vritilife names/trademarks belong to their respective owner. Product information should follow current India labels and official guidance. This website does not provide medical diagnosis or treatment. Individual results vary.</p><span>© {year} Mahsoom&apos;s Lifestyle Centre.</span></div>
      </footer>

      <div className="mobile-bar"><button onClick={() => scrollToId("results")}>See Results</button><button onClick={() => scrollToId("contact")}>Book Consultation</button></div>
    </main>
  );
}
