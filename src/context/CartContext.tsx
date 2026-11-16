import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ALL_PRODUCTS, type Product } from '../data/site'

export interface CartLine {
  product: Product
  qty: number
}

interface CartState {
  lines: CartLine[]
  count: number
  subtotal: number
  open: boolean
  setOpen: (v: boolean) => void
  add: (p: Product) => void
  setQty: (id: number, qty: number) => void
  remove: (id: number) => void
}

const CartContext = createContext<CartState | null>(null)
const KEY = 'gw-cart'

function load(): Record<number, number> {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [qtys, setQtys] = useState<Record<number, number>>(load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(qtys))
    } catch {
      /* storage unavailable */
    }
  }, [qtys])

  const value = useMemo<CartState>(() => {
    const lines = ALL_PRODUCTS.filter((p) => qtys[p.id] > 0).map((p) => ({ product: p, qty: qtys[p.id] }))
    return {
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.product.price, 0),
      open,
      setOpen,
      add: (p) => setQtys((q) => ({ ...q, [p.id]: (q[p.id] || 0) + 1 })),
      setQty: (id, qty) => setQtys((q) => ({ ...q, [id]: Math.max(0, qty) })),
      remove: (id) =>
        setQtys((q) => {
          const next = { ...q }
          delete next[id]
          return next
        }),
    }
  }, [qtys, open])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}

export const money = (n: number) => `$${n.toFixed(2)}`
