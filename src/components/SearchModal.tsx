import { useEffect, useRef, useState } from 'react'
import { ALL_PRODUCTS } from '../data/site'
import { money } from '../context/CartContext'
import { CloseIcon, SearchIcon } from './Icons'

/** ElementsKit header-search style full-screen popup. */
export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('')
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => input.current?.focus(), 50)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const term = q.trim().toLowerCase()
  const results = term ? ALL_PRODUCTS.filter((p) => p.name.toLowerCase().includes(term)) : []

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
      className={`fixed inset-0 z-[100] flex items-start justify-center bg-black/90 px-4 pt-[18vh] transition-opacity duration-300 ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close search"
        className="absolute top-6 right-6 cursor-pointer text-white hover:text-gold"
      >
        <CloseIcon className="h-7 w-7" />
      </button>
      <div className="w-full max-w-[700px]" onClick={(e) => e.stopPropagation()}>
        <form
          className="flex items-center border-b-2 border-white/40 focus-within:border-gold"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search..."
            className="w-full bg-transparent py-4 font-inter text-2xl text-white outline-none placeholder:text-white/50"
          />
          <SearchIcon className="h-6 w-6 text-white" />
        </form>
        {term && (
          <ul className="mt-6 max-h-[50vh] overflow-auto">
            {results.length === 0 && <li className="font-inter text-white/70">No products found.</li>}
            {results.map((p) => (
              <li key={p.id}>
                <a href={p.href} className="flex items-center gap-4 rounded-lg p-2 hover:bg-white/10">
                  <img src={p.image} alt="" className="h-14 w-14 object-contain" />
                  <span className="flex-1 font-jakarta font-semibold text-white">{p.name}</span>
                  <span className="font-inter font-bold text-gold">{money(p.price)}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
