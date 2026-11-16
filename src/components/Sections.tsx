import { useState } from 'react'
import { FAQS, FEATURES, RESEARCH, SITE_URL, SKIN_CARE, TESTIMONIALS, TESTIMONIALS_INTRO } from '../data/site'
import { AngleRightIcon, ArrowRightIcon, QuoteLeftIcon, QuoteRightIcon } from './Icons'
import ProductGrid from './ProductGrid'
import Reveal from './Reveal'

/* ---------------- Skin Care (44a9226) ---------------- */
export function SkinCare() {
  return (
    <section className="gw-bg-group overflow-hidden pt-[70px] pb-[50px]">
      <div className="gw-container px-[10px]">
        <div className="flex flex-col gap-3 p-[10px] md:flex-row md:items-center">
          <Reveal anim="fadeInLeft" className="md:w-1/2">
            <h2 className="gw-gradient-text m-0 font-jakarta text-[40px] leading-[1.2] font-bold">Skin Care</h2>
          </Reveal>
          <div className="flex md:w-1/2 md:justify-end">
            <a
              href={`${SITE_URL}/skin-care/`}
              className="inline-flex items-center gap-[9px] font-inter text-[16px] font-medium text-gold-2 transition-opacity hover:opacity-80"
            >
              View All
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <Reveal anim="fadeInUp" className="p-[10px]">
          <ProductGrid products={SKIN_CARE} variant="gold" />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Scrolling brand text (1a8e798) ---------------- */
export function BrandMarquee() {
  const item = (
    <p className="m-0 font-jakarta text-[50px] leading-[1.2] font-black whitespace-nowrap uppercase text-[#CF9D2C45] md:text-[200px]">
      Genesis Wellness
    </p>
  )
  return (
    <section className="overflow-hidden bg-black">
      <Reveal anim="lightSpeedIn">
        <div className="gw-marquee" style={{ ['--gap' as string]: '50px', ['--duration' as string]: '39.3s' }}>
          <div className="gw-marquee-track">{item}{item}</div>
          <div className="gw-marquee-track" aria-hidden="true">{item}{item}</div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------------- About (569fa5e) ---------------- */
export function About() {
  return (
    <section className="gw-bg-about overflow-hidden py-[50px]">
      <Reveal anim="fadeInLeft" className="gw-container flex flex-col items-center p-5 md:p-[10px]">
        <h2 className="m-0 text-center font-jakarta text-[30px] leading-[1.2] font-bold text-white md:text-[43px]">
          Research Peptide Supplier Focused on Clear Documentation
        </h2>
        <div className="mt-5 w-full text-center font-jakarta text-[14px] leading-[1.7] text-white md:w-[65%] md:text-[16px]">
          <p className="mb-[0.9rem]">
            Genesis Wellness offers peptides for research and related laboratory materials with emphasis on compound
            identity, transparent product information, and accessible analytical records where available. Each listing
            is intended to help qualified researchers review relevant specifications before placing an order.
          </p>
          <p>
            From individual research materials to multi-vial configurations, our catalog presents compound names,
            labeled strengths, and product-specific details. Available batch documentation supports informed evaluation
            without replacing independent scientific verification.
          </p>
        </div>
        <div className="flex w-full pt-5">
          <div className="flex w-1/2 justify-end p-[10px]">
            <a
              href={`${SITE_URL}/products/`}
              className="inline-flex items-center rounded-[10px] bg-gold px-[30px] py-[15px] font-inter text-[10px] font-semibold text-white transition-colors hover:bg-white hover:text-black md:text-[16px]"
            >
              View Our Products
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="flex w-1/2 justify-start p-[10px]">
            <a
              href={`${SITE_URL}/about-us/`}
              className="inline-flex w-full items-center justify-center rounded-[10px] bg-gold px-[30px] py-[15px] font-inter text-[10px] font-semibold text-white transition-colors hover:bg-white hover:text-black md:w-auto md:text-[16px]"
            >
              Read More
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------------- Quality & documentation (8b8b811) ---------------- */
export function Quality() {
  return (
    <section className="overflow-hidden bg-black py-[30px]">
      <div className="gw-container px-[10px]">
        <div className="p-[10px] md:w-1/2">
          <h2 className="m-0 font-jakarta text-[40px] leading-[1.3] font-bold">
            <span className="gw-gradient-text">Research Peptide Quality &amp; Product Documentation</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 pt-[25px] md:grid-cols-4">
          {FEATURES.map((f) => (
            <Reveal key={f.title} anim={f.anim} className="m-[10px] rounded-[15px] border border-white/22 px-5 py-[30px]">
              <img src="/images/gdsgd.png" alt="" className="mb-[11px] w-[18%] min-w-[44px]" />
              <h3 className="mb-[14px] font-sora text-[20px] leading-[1.3] font-semibold text-white">{f.title}</h3>
              <p className="m-0 font-sora text-[14px] leading-[1.7] text-white">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Explore products (a3eb2f8) ---------------- */
export function Explore() {
  return (
    <section className="gw-bg-explore overflow-hidden py-[50px]">
      <div className="gw-container p-5 md:p-[10px]">
        <Reveal anim="fadeInLeft">
          <h2 className="m-0 text-center font-jakarta text-[30px] leading-[1.2] font-bold uppercase md:text-left md:text-[40px]">
            <span className="gw-gradient-text">Explore Research Peptides &amp; Laboratory Materials</span>
          </h2>
        </Reveal>
        <Reveal anim="fadeInRight" className="mt-5">
          <ProductGrid products={RESEARCH} variant="plain" />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- Testimonials marquee (0fb3291) ---------------- */
export function Testimonials() {
  const cards = TESTIMONIALS.map((t) => (
    <li key={t.name} className="w-[300px] shrink-0 list-none md:w-[370px]">
      <figure className="m-0">
        <blockquote className="relative m-0 rounded-[10px] bg-card p-[25px] text-left">
          <QuoteLeftIcon className="mb-2 h-5 w-5 text-black" />
          <span className="block font-syne text-[16px] leading-[1.6] text-white">{t.text}</span>
          <QuoteRightIcon className="mt-2 ml-auto h-5 w-5 text-black" />
          <span className="absolute -bottom-[10px] left-[30px] h-5 w-5 rotate-45 bg-card" />
        </blockquote>
        <figcaption className="mt-[25px] text-left">
          <span className="mb-[5px] block font-syne text-[18px] font-bold text-white">{t.name}</span>
          <span className="block font-syne text-[15px] text-white">{t.title}</span>
        </figcaption>
      </figure>
    </li>
  ))
  return (
    <section className="overflow-hidden bg-black py-[50px]">
      <div className="flex flex-col items-center">
        <h2 className="m-0 px-5 text-center font-jakarta text-[30px] leading-[1.2] font-bold capitalize md:text-[50px]">
          <span className="gw-gradient-text">Why Researchers Choose Genesis Wellness</span>
        </h2>
        <Reveal anim="fadeInRight" className="mt-5 w-full px-5 md:w-[48%] md:px-0">
          <p className="m-0 text-center font-syne text-[18px] font-medium text-white">{TESTIMONIALS_INTRO}</p>
        </Reveal>
        <Reveal anim="lightSpeedIn" className="mt-8 w-full">
          <div className="gw-marquee" style={{ ['--gap' as string]: '30px', ['--duration' as string]: '60s' }}>
            <ul className="gw-marquee-track m-0 p-0">{cards}</ul>
            <ul className="gw-marquee-track m-0 p-0" aria-hidden="true">{cards}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- FAQ accordion (e360d5e) ---------------- */
export function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="gw-bg-faq overflow-hidden py-[50px]">
      <div className="gw-container flex flex-col items-center p-5 md:p-[10px]">
        <h2 className="m-0 text-center font-jakarta text-[30px] leading-[1.2] font-bold capitalize md:text-[50px]">
          <span className="gw-gradient-text">Frequently Asked Questions</span>
        </h2>
        <Reveal anim="fadeInUp" className="mt-[39px] w-full max-w-[357px] md:w-[75%] md:max-w-[75%]">
          {FAQS.map((f, i) => {
            const active = open === i
            return (
              <div key={f.q} className="mb-4">
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? null : i)}
                  className={`group flex w-full cursor-pointer items-center justify-between gap-[10px] rounded-[20px] border border-[#515151] p-5 text-left transition-colors duration-300 ${
                    active ? 'bg-white' : 'bg-[#F1F1F124] hover:bg-white'
                  }`}
                >
                  <span
                    className={`font-sora text-[14px] leading-[1.4em] font-normal md:text-[18px] md:leading-normal ${
                      active ? 'text-black' : 'text-white group-hover:text-black'
                    }`}
                  >
                    {f.q}
                  </span>
                  <AngleRightIcon
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                      active ? 'rotate-90 text-black' : 'text-[#444]'
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: active ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="bg-white px-5 pt-[10px] pb-5 font-sora text-[16px] leading-[1.6] text-[#535862]">
                      <p className="m-0">{f.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
