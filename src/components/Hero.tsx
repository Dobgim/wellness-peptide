import { SITE_URL } from '../data/site'
import { ArrowRightIcon, CircleIcon, SdCardIcon } from './Icons'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="gw-bg-hero overflow-hidden px-5 pt-[70px] pb-[150px] md:px-0 md:pt-[250px] md:pb-[50px]">
      <div className="gw-container flex flex-col pt-[50px] md:flex-row md:items-center">
        <Reveal anim="fadeInLeft" className="flex w-full flex-col items-center md:w-1/2 md:p-[10px]">
          <ul className="flex w-full items-center justify-center rounded-[25px] border border-gold bg-gold/16 px-[10px] py-[7px] md:w-[58%]">
            <li className="flex items-center gap-[8px] font-inter text-[12px] font-medium text-white md:text-[14px]">
              <CircleIcon className="h-[8px] w-[8px]" />
              Third-Party Tested • 99%+ Purity Guaranteed
            </li>
          </ul>

          <h1 className="mt-5 pt-5 text-center font-jakarta text-[30px] leading-[1.6em] font-extrabold text-white md:text-[50px] md:leading-[64px]">
            Research Peptides for <br />
            <span className="text-gold">Laboratory Research in the USA </span>
          </h1>

          <p className="mt-5 text-center font-inter text-[14px] leading-[1.6] text-white md:text-[19px]">
            Research Peptides for Laboratory Research in the USA Genesis Wellness supplies research peptides and
            related biochemical materials for qualified laboratory investigation. Browse product specifications,
            identify available COA records, and evaluate research-grade materials with clear documentation and
            research-use-only labeling.
          </p>

          <div className="mt-5 flex w-full flex-col md:flex-row">
            <div className="mb-5 md:mb-0 md:w-[37%]">
              <a
                href={`${SITE_URL}/products/`}
                className="inline-flex items-center gap-[11px] rounded-[10px] bg-white px-[30px] py-[15px] font-inter text-[16px] font-semibold text-black transition-colors hover:bg-gold hover:text-white"
              >
                Shop All Peptides
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="md:w-[63%]">
              <a
                href={`${SITE_URL}/coas/`}
                className="inline-flex items-center gap-[11px] rounded-[10px] border-2 border-gold bg-transparent px-[30px] py-[15px] font-inter text-[16px] font-semibold text-white transition-colors hover:bg-gold"
              >
                <SdCardIcon className="h-4 w-4" />
                View COA Database
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal anim="fadeInRight" className="mt-10 w-full md:mt-0 md:w-1/2 md:p-[10px]">
          <img
            src="/images/magnific_dIpyrthXSL-1.png"
            alt="Genesis Wellness research peptide vials and box"
            className="mx-auto w-full max-w-[725px]"
          />
        </Reveal>
      </div>
    </section>
  )
}
