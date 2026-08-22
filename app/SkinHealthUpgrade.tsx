"use client";

import { useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "919074677303";
const PRODUCT_IMAGE = "https://cf-images.us-east-1.prod.boltdns.net/v1/jit/4108187562001/e8e6dab2-e8a7-44ed-9171-17c741d1e1e2/main/1280x720/10s442ms/match/image.jpg";
const OFFICIAL_LABEL = "https://assets.herbalifenutrition.com/content/dam/regional/apac/en_in/consumable_content/product-catalog-assets/images/2023/08-Aug/HNSkin%20Booster.pdf";
const OFFICIAL_VIDEO = "https://en.video.herbalife.co.in/detail/videos/social-media-assets/video/6392670185112/nourishment-that-begins-from-within.?autoStart=true";

function wa(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function SkinHealthUpgrade() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const oldSkin = document.querySelector<HTMLElement>(".skin-section");
    if (oldSkin) oldSkin.style.display = "none";

    const section = sectionRef.current;
    const productSection = document.querySelector<HTMLElement>(".product-section");
    const productUpgrade = document.querySelector<HTMLElement>("#products");
    const anchor = productUpgrade || productSection;
    if (section && anchor?.parentElement && section.nextElementSibling !== anchor) {
      anchor.parentElement.insertBefore(section, anchor);
    }
    if (section) section.style.visibility = "visible";

    const navButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".nav-links button"));
    const skinButton = navButtons.find((button) => button.textContent?.trim() === "Skin Care");
    if (skinButton) skinButton.textContent = "Skin Health";

    const headerImage = document.querySelector<HTMLImageElement>(".brand img");
    if (headerImage) {
      headerImage.src = "/brand-logo-clean.webp";
      headerImage.removeAttribute("srcset");
    }
    const footerImage = document.querySelector<HTMLImageElement>(".footer-brand img");
    if (footerImage) {
      footerImage.src = "/brand-logo-clean.webp";
      footerImage.removeAttribute("srcset");
    }
  }, []);

  return (
    <section ref={sectionRef} className="skin-health-upgrade" id="skin-health">
      <div className="shu-copy">
        <span className="shu-eyebrow">03 · SKIN HEALTH · FROM WITHIN</span>
        <h2>Nourish from within.<br /><em>Support skin health.</em></h2>
        <p className="shu-lede">
          For Mahsoom&apos;s skin-health story, HN‑Skin Booster is a better fit than showing empty cleanser and serum placeholders. It is a nutraceutical drink mix built around hydrolyzed fish collagen and selected vitamins, with current Herbalife India material positioning it to support skin hydration, elasticity and overall skin health.
        </p>
        <div className="shu-actions">
          <a className="shu-primary" href={wa("Hi, I would like to know about HN-Skin Booster, its benefits and availability at Mahsoom's Lifestyle Centre.")} target="_blank" rel="noreferrer">Ask about HN‑Skin Booster ↗</a>
          <a className="shu-secondary" href={OFFICIAL_LABEL} target="_blank" rel="noreferrer">View official label ↗</a>
        </div>
        <p className="shu-small">Product availability and packaging can change. Confirm current stock and suitability with the centre and follow the current India product label.</p>
      </div>

      <div className="shu-stage">
        <div className="shu-product-card">
          <span className="shu-reference">OFFICIAL HERBALIFE INDIA REFERENCE</span>
          <img src={PRODUCT_IMAGE} alt="HN-Skin Booster Herbalife India product reference" loading="lazy" referrerPolicy="no-referrer" />
          <div className="shu-product-title">
            <small>ORANGE FLAVOUR · SKIN HEALTH</small>
            <strong>HN‑Skin Booster</strong>
            <span>Nutraceutical · Not for medicinal use</span>
          </div>
        </div>

        <div className="shu-benefits">
          <article>
            <span>01</span>
            <strong>Hydrolyzed fish collagen</strong>
            <p>The current India label lists collagen peptide as a key ingredient. Contains fish-derived collagen.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Vitamin support</strong>
            <p>Includes vitamins C, B2, B6, niacin (B3) and biotin as part of the skin-health formulation.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Hydration & elasticity support</strong>
            <p>Herbalife India&apos;s current product education highlights support for skin hydration, elasticity and overall skin health.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Simple daily serving</strong>
            <p>Current label directions: mix one 10 g sachet with 240 ml water, one serving per day for adults. Do not exceed label directions.</p>
          </article>
        </div>

        <div className="shu-source-row">
          <a href={OFFICIAL_VIDEO} target="_blank" rel="noreferrer">Official Herbalife product education ↗</a>
          <span>REFERENCE IMAGE FOR CLIENT PREVIEW · USE AUTHORISED ASSOCIATE ASSETS FOR FINAL CAMPAIGNS</span>
        </div>
      </div>
    </section>
  );
}
