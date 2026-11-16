import { CONTACT, SITE_URL } from '../data/site'
import { EnvelopeIcon, PhoneIcon } from './Icons'

const QUICK = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: `${SITE_URL}/about-us/` },
  { label: 'Products', href: `${SITE_URL}/products/` },
  { label: 'FAQs', href: `${SITE_URL}/faqs/` },
  { label: 'COAs', href: `${SITE_URL}/coas/` },
  { label: 'Contact Us', href: `${SITE_URL}/contact-us/` },
]
const SUPPORT = [
  { label: 'Privacy Policy', href: `${SITE_URL}/privacy-policy/` },
  { label: 'Terms of Use', href: `${SITE_URL}/terms-of-use/` },
]

function ContactCard({ icon, title, value, href }: { icon: string; title: string; value: string; href: string }) {
  return (
    <div className="m-[10px] rounded-[20px] border-2 border-white bg-black p-5 text-center shadow-[0_0_10px_rgba(0,0,0,0.5)] md:w-[30%]">
      <img src={icon} alt="" className="mx-auto mb-[15px] w-[16%] min-w-[44px]" />
      <h3 className="mb-[8px] font-sora text-[18px] font-semibold text-white">{title}</h3>
      <a href={href} className="font-sora text-[13px] text-white hover:text-gold md:text-[15px]">
        {value}
      </a>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="px-[10px] pt-[30px] pb-5 md:px-0">
        <div className="gw-container">
          <div className="flex flex-col md:flex-row md:justify-center">
            <ContactCard icon="/images/400.png" title="Phone Number" value={CONTACT.phone} href={`tel:${CONTACT.phone}`} />
            <ContactCard icon="/images/500.png" title="Email Address" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          </div>

          <div className="flex flex-col gap-6 pt-[31px] md:flex-row md:gap-0">
            <div className="p-[10px] md:w-[38.08%]">
              <a href="/" aria-label="Genesis Wellness home">
                <img src="/images/02265-1-1.png" alt="Genesis Wellness" className="w-[60%] md:w-[42%]" />
              </a>
              <p className="mt-5 max-w-[328px] font-sora text-[14px] leading-[1.65] text-white md:max-w-[85%]">
                Genesis Wellness products are intended solely for laboratory, analytical, and in vitro research
                purposes. They are not intended to diagnose, treat, cure, prevent, or mitigate any disease or medical
                condition. Product information is provided for research identification and documentation purposes only.
              </p>
            </div>

            <div className="p-[10px] md:w-[18.236%]">
              <h4 className="mb-5 font-sora text-[20px] font-semibold text-white">Quick Links</h4>
              <ul className="space-y-[6px]">
                {QUICK.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="font-sora text-[15px] text-white transition-colors hover:text-gold">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-[10px] md:w-[18.665%]">
              <h4 className="mb-5 font-sora text-[20px] font-semibold text-white">Support</h4>
              <ul className="space-y-[6px]">
                {SUPPORT.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="font-sora text-[15px] text-white transition-colors hover:text-gold">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-[10px] md:flex-1">
              <h4 className="mb-5 font-sora text-[20px] font-semibold text-white">Contact Us</h4>
              <ul className="space-y-[13px]">
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-[10px] font-sora text-[15px] text-white hover:text-gold"
                  >
                    <EnvelopeIcon className="h-[18px] w-[18px] shrink-0" />
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center gap-[10px] font-sora text-[15px] text-white hover:text-gold"
                  >
                    <PhoneIcon className="h-[18px] w-[18px] shrink-0" />
                    {CONTACT.phone}
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex">
                <div className="w-1/2 p-[10px]">
                  <img src="/images/New-Project-2.webp" alt="Norton secured" className="w-full rounded-[20px]" />
                </div>
                <div className="w-1/2 p-[10px]">
                  <img src="/images/New-Project-1.webp" alt="PCI DSS compliant" className="w-full rounded-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white py-[10px]">
        <p className="m-0 p-[10px] text-center font-sora text-[15px] text-white">
          Copyright @ 2026 Genesis Wellness Peptides LLC
        </p>
      </div>
    </footer>
  )
}
