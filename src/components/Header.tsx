import { useState } from 'react'
import { NAV, SITE_URL } from '../data/site'
import { useCart } from '../context/CartContext'
import {
  BoxOpenIcon,
  CartIcon,
  CheckIcon,
  CheckSquareIcon,
  CloseIcon,
  LockIcon,
  MenuIcon,
  SdCardIcon,
  SearchIcon,
  UserIcon,
} from './Icons'
import SearchModal from './SearchModal'

const TOP_LIST = [
  { Icon: BoxOpenIcon, text: 'Free Shipping Over $150' },
  { Icon: CheckIcon, text: '99%+ Purity' },
  { Icon: CheckSquareIcon, text: 'Same-Day Shipping Before 4 PM EST' },
]
const BOTTOM_LIST = [
  { Icon: CheckSquareIcon, text: 'Third-Party Tested' },
  { Icon: SdCardIcon, text: 'COA with Every Product' },
  { Icon: BoxOpenIcon, text: 'Fast Shipping' },
  { Icon: LockIcon, text: 'Secure Checkout' },
]

function IconList({ items, gap }: { items: typeof TOP_LIST; gap: number }) {
  return (
    <ul className="flex flex-wrap items-center justify-center" style={{ columnGap: gap, rowGap: 6 }}>
      {items.map(({ Icon, text }) => (
        <li key={text} className="flex items-center gap-[5px] font-inter text-[13px] font-normal text-white">
          <Icon className="h-[14px] w-[14px] shrink-0" />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}

function CartButton({ size = 52 }: { size?: number }) {
  const { count, setOpen } = useCart()
  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label={`Open cart, ${count} items`}
      className="relative flex shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-gold bg-transparent text-white transition-colors hover:bg-gold/20"
      style={{ width: size, height: size }}
    >
      <CartIcon className="h-[45%] w-[45%]" />
      <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 font-inter text-[11px] font-bold text-black">
        {count}
      </span>
    </button>
  )
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ---------- Desktop / tablet header (bcd520c) ---------- */}
      <header className="relative z-20 mb-[-200px] hidden bg-transparent md:block">
        <div className="gw-container flex items-center">
          <div className="w-[15%] p-[10px]">
            <a href="/" aria-label="Genesis Wellness home">
              <img src="/images/new-logo-3.png" alt="Genesis Wellness" className="w-[80%] rounded-full" />
            </a>
          </div>

          <div className="flex w-[60.333%] flex-col items-center gap-5 p-[10px]">
            <IconList items={TOP_LIST} gap={33} />
            <nav className="w-full rounded-[33px] bg-gold" aria-label="Main">
              <ul className="flex flex-wrap items-center justify-center px-[10px] lg:px-0">
                {NAV.map((item, i) => (
                  <li key={item.label} className="mx-[10px]">
                    <a
                      href={item.href}
                      className={`block px-0 py-[2px] font-inter text-[10px] font-medium transition-colors duration-200 hover:text-black lg:px-[4px] lg:py-[14px] lg:text-[18px] ${
                        i === 0 ? 'text-black' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <IconList items={BOTTOM_LIST} gap={30} />
          </div>

          <div className="flex w-[24%] items-center justify-end p-[10px]">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="mr-[5px] flex h-10 w-10 cursor-pointer items-center justify-center text-white"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <CartButton />
            <div className="pl-0 lg:pl-[15px]">
              <a
                href={`${SITE_URL}/account/`}
                className="flex items-center gap-[11px] rounded-[10px] bg-gold p-[11px] font-inter text-[14px] font-semibold text-white transition-opacity hover:opacity-90 lg:px-[30px] lg:py-[15px] lg:text-[16px]"
              >
                Account
                <UserIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- Mobile header (ae1bc39) ---------- */}
      <header className="relative z-10 mb-[-120px] px-5 md:hidden">
        <div className="flex items-center">
          <div className="w-[30%]">
            <a href="/" aria-label="Genesis Wellness home">
              <img src="/images/new-logo-3.png" alt="Genesis Wellness" className="w-full rounded-full" />
            </a>
          </div>
          <div className="flex w-[70%] items-center justify-end">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-10 w-10 cursor-pointer items-center justify-center text-white"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <div className="px-[5px]">
              <CartButton size={40} />
            </div>
            <a
              href={`${SITE_URL}/account/`}
              aria-label="Account"
              className="mr-[10px] flex items-center rounded-[6px] bg-gold p-[10px] text-white"
            >
              <UserIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex cursor-pointer items-center justify-center rounded-[3px] bg-gold p-[0.25em] text-white"
            >
              {menuOpen ? <CloseIcon className="h-[22px] w-[22px]" /> : <MenuIcon className="h-[22px] w-[22px]" />}
            </button>
          </div>
        </div>

        <nav
          aria-label="Mobile"
          className={`absolute inset-x-0 top-full z-30 origin-top bg-white shadow-lg transition-all duration-300 ${
            menuOpen ? 'visible scale-y-100 opacity-100' : 'invisible scale-y-0 opacity-0'
          }`}
        >
          <ul>
            {NAV.map((item, i) => (
              <li key={item.label} className="border-b border-[#e8e8e8] last:border-0">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-5 py-[13px] font-roboto text-[15px] font-medium transition-colors hover:bg-[#55595c] hover:text-white ${
                    i === 0 ? 'bg-[#55595c] text-white' : 'text-[#494c4f]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
