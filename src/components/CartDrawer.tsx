import { useEffect } from 'react'
import { SITE_URL } from '../data/site'
import { money, useCart } from '../context/CartContext'
import { CloseIcon } from './Icons'

export default function CartDrawer() {
  const { open, setOpen, lines, subtotal, setQty, remove } = useCart()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  return (
    <div className={`fixed inset-0 z-[90] ${open ? 'visible' : 'invisible'}`}>
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setOpen(false)}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute top-0 right-0 flex h-full w-full max-w-[400px] flex-col bg-white text-black shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
          <h2 className="font-jakarta text-xl font-bold">Your Cart</h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close cart" className="cursor-pointer">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-auto px-6 py-4">
          {lines.length === 0 ? (
            <p className="mt-10 text-center font-inter text-black/60">No products in the cart.</p>
          ) : (
            <ul className="space-y-4">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 border-b border-black/10 pb-4">
                  <img src={product.image} alt="" className="h-16 w-16 rounded-lg bg-black/5 object-contain" />
                  <div className="flex-1">
                    <a href={product.href} className="font-jakarta text-sm font-semibold hover:text-gold">
                      {product.name}
                    </a>
                    <div className="mt-1 font-inter text-sm text-black/60">{money(product.price)}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => setQty(product.id, qty - 1)}
                        className="h-7 w-7 cursor-pointer rounded border border-black/20"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-inter text-sm">{qty}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => setQty(product.id, qty + 1)}
                        className="h-7 w-7 cursor-pointer rounded border border-black/20"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(product.id)}
                    aria-label={`Remove ${product.name}`}
                    className="cursor-pointer self-start text-black/40 hover:text-black"
                  >
                    <CloseIcon className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-black/10 px-6 py-5">
          <div className="mb-4 flex justify-between font-inter font-semibold">
            <span>Subtotal:</span>
            <span>{money(subtotal)}</span>
          </div>
          <a
            href={`${SITE_URL}/cart/`}
            className="mb-2 block rounded-[10px] border-2 border-gold py-3 text-center font-inter font-semibold text-black hover:bg-gold hover:text-white"
          >
            View cart
          </a>
          <a
            href={`${SITE_URL}/checkout/`}
            className="block rounded-[10px] bg-gold py-3 text-center font-inter font-semibold text-white hover:bg-black"
          >
            Checkout
          </a>
        </div>
      </aside>
    </div>
  )
}
