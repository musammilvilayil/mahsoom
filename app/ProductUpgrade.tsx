"use client";

import { useEffect, useRef } from "react";

const WA_NUMBER = "919074677303";

const products = [
  {
    name: "Formula 1 Nutritional Shake Mix",
    kicker: "Healthy weight · Meal replacement",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/press-release-images/herbalife-india-launches-formula1-dates-caramel-shake.png?dpr=off&qlt=85&ts=1784009320123",
    description:
      "Herbalife India's current Formula 1 range includes Dates Caramel alongside Vanilla, Dutch Chocolate, Mango, Kulfi and Rose Kheer. Formula 1 is positioned as a nutritional shake mix and should be used only according to the current product label and an appropriate eating plan.",
    highlights: ["Dates Caramel + 5 existing flavours", "Protein, fibre, vitamins & minerals", "Use according to current label"],
    source:
      "https://www.herbalife.com/en-in/about-herbalife/press-room/press-releases/herbalife-india-launches-formula-1-dates-caramel-nutritional-shake",
    message: "Hi, I would like to know about Formula 1 and whether it suits my nutrition goal.",
  },
  {
    name: "Liftoff®",
    kicker: "Active lifestyle · Energy beverage",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/press-release-images/herbalife-india-launches-liftoff-zero-sugar-drink.png?dpr=off&qlt=85&ts=1763123162154",
    description:
      "Liftoff® is a watermelon-flavoured, zero-added-sugar effervescent drink from Herbalife India that contains caffeine. It is presented here for product awareness; suitability and serving directions should always follow the current label.",
    highlights: ["Watermelon flavour", "Zero added sugar", "Contains caffeine · check suitability"],
    source:
      "https://www.herbalife.com/en-in/about-herbalife/press-room/press-releases/herbalife-india-launches-liftoff-zero-sugar-energy-drink",
    message: "Hi, I would like to know more about Liftoff and its usage guidance.",
  },
  {
    name: "vritilife Outer Nutrition",
    kicker: "Skin & body care · Everyday routine",
    image:
      "https://www.herbalife.com/dmassets/market-reusable-assets/emea/india/images/press-release-images/vritilife-outer-nutrition-range-launch.png?dpr=off&qlt=85&ts=1756184835330",
    description:
      "The vritilife skincare range includes Facial Cleanser, Facial Toner, Facial Serum and Moisturizer. Herbalife India describes the range as Ayurveda-inspired, combining botanicals with modern formulation for everyday skincare.",
    highlights: ["Cleanser · Toner · Serum · Moisturizer", "Ayurveda-inspired skincare", "Everyday self-care, not medical treatment"],
    source:
      "https://www.herbalife.com/en-in/about-herbalife/press-room/press-releases/herbalife-india-forays-into-skincare-segment-with-vritilife-outer-nutrition-range",
    message: "Hi, I would like to know about the vritilife skincare routine and available products.",
  },
];

const ranges = [
  {
    number: "01",
    title: "Healthy Weight",
    text: "Meal replacement, protein boosters, hydration and energy/metabolism categories — matched to the person's goal and current routine.",
  },
  {
    number: "02",
    title: "Fitness & Performance",
    text: "Hydration, recovery, protein and energy categories designed around an active lifestyle and training routine.",
  },
  {
    number: "03",
    title: "Daily Nutrition & Health",
    text: "Protein, vitamins and supplements, hydration and energy categories for everyday nutrition awareness.",
  },
  {
    number: "04",
    title: "Targeted Nutrition",
    text: "Herbalife India lists targeted categories such as digestive, heart, brain, immune, bone & joint, eye, women's, men's and skin health. Product choice should follow label guidance and individual suitability.",
  },
  {
    number: "05",
    title: "Skin & Body Care",
    text: "A simple skincare journey centred on cleansing, toning, serum care and moisturising, with consultation before choosing a routine.",
  },
];

const lifestyle = [
  {
    image: "https://images.pexels.com/photos/9475700/pexels-photo-9475700.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "NUTRITION",
    title: "Build a routine you can repeat.",
  },
  {
    image: "https://images.pexels.com/photos/6740514/pexels-photo-6740514.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "EVERYDAY WELLNESS",
    title: "Food habits first. Products with context.",
  },
  {
    image: "https://images.pexels.com/photos/13822303/pexels-photo-13822303.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "ACTIVE LIFESTYLE",
    title: "Move, fuel, recover, repeat.",
  },
];

function wa(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ProductUpgrade() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const process = document.querySelector(".process-section");
    if (section && process?.parentElement && section.nextElementSibling !== process) {
      process.parentElement.insertBefore(section, process);
    }
  }, []);

  return (
    <section ref={sectionRef} className="pu-section" id="products">
      <div className="pu-lifestyle">
        {lifestyle.map((item) => (
          <article className="pu-life-card" key={item.label}>
            <img src={item.image} alt="Lifestyle model preview" loading="lazy" />
            <div className="pu-life-overlay">
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <small>STOCK LIFESTYLE IMAGE · CLIENT PREVIEW</small>
            </div>
          </article>
        ))}
      </div>

      <div className="pu-head">
        <div>
          <span className="pu-eyebrow">05 · PRODUCT AWARENESS</span>
          <h2>Know the range.<br /><em>Choose by goal.</em></h2>
        </div>
        <div className="pu-intro">
          <strong>HERBALIFE INDIA · REFERENCE PREVIEW</strong>
          <p>
            This section helps visitors understand what different product categories are for before they start a conversation. Availability at Mahsoom&apos;s Lifestyle Centre may vary — confirm on WhatsApp.
          </p>
        </div>
      </div>

      <div className="pu-product-grid">
        {products.map((product, index) => (
          <article className="pu-product" key={product.name}>
            <div className="pu-product-media">
              <span className="pu-ref-badge">OFFICIAL HERBALIFE INDIA REFERENCE</span>
              <div className="pu-product-index">0{index + 1}</div>
              <img
                src={product.image}
                alt={`${product.name} official Herbalife India reference`}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0";
                }}
              />
              <div className="pu-fallback" aria-hidden="true">
                <b>{index === 0 ? "F1" : index === 1 ? "LIFT" : "V"}</b>
                <small>PRODUCT REFERENCE</small>
              </div>
            </div>
            <div className="pu-product-copy">
              <span>{product.kicker}</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ul>
                {product.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="pu-actions">
                <a className="pu-primary" href={wa(product.message)} target="_blank" rel="noreferrer">Ask on WhatsApp ↗</a>
                <a className="pu-secondary" href={product.source} target="_blank" rel="noreferrer">Official source ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pu-range-head">
        <span className="pu-eyebrow">SHOP BY GOAL · EDUCATION FIRST</span>
        <h3>What kind of support are you looking for?</h3>
      </div>
      <div className="pu-range-grid">
        {ranges.map((range) => (
          <article className="pu-range-card" key={range.title}>
            <span>{range.number}</span>
            <h4>{range.title}</h4>
            <p>{range.text}</p>
            <a href={wa(`Hi, I would like guidance about the ${range.title} product category and programme at Mahsoom's Lifestyle Centre.`)} target="_blank" rel="noreferrer">Explore this goal →</a>
          </article>
        ))}
      </div>

      <div className="pu-note">
        <b>CLIENT PREVIEW / ASSET NOTE</b>
        <p>
          Herbalife and vritilife product names, trademarks and official product imagery belong to their respective owner. These official-source images are included as reference visuals for the client preview. Before final public marketing, use the authorised marketing assets supplied to the client/Herbalife Associate. Product information should always follow the current India label; products are not presented here as diagnosing, treating, preventing or curing disease. Individual results vary.
        </p>
      </div>
    </section>
  );
}
