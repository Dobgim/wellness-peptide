import { useState } from 'react'
import type { Product } from '../data/site'
import { money, useCart } from '../context/CartContext'
import { CartIcon } from './Icons'

interface Props {
  products: Product[]
  variant: 'gold' | 'plain'
}

function ProductCard({ product, variant }: { product: Product; variant: Props['variant'] }) {
  const { add, setOpen } = useCart()
  const [added, setAdded] = useState(false)
  const gold = variant === 'gold'

  const onAdd = () => {
    add(product)
    setAdded(true)
  }

  return (
    <li
      className={`flex flex-col items-center rounded-[15px] text-center ${
        gold ? 'bg-gold px-[20px] py-[10px]' : 'bg-transparent p-0'
      }`}
    >
      <a href={product.href} className="block w-full">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="mx-auto aspect-square w-full rounded-t-[15px] object-contain transition-transform duration-500 hover:scale-[1.04]"
        />
      </a>
      <a href={product.href} className="mt-[10px] block w-full">
        <h2
          className={`m-0 font-jakarta font-semibold leading-[1.05] text-white ${
            gold ? 'text-[15px] md:text-[20px]' : 'text-[12px] md:text-[16px]'
          }`}
        >
          {product.name}
        </h2>
      </a>
      <div className="mt-[10px] font-inter text-[20px] font-bold text-white">{money(product.price)}</div>
      <button
        type="button"
        onClick={onAdd}
        className={`mt-[15px] mb-[15px] flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-[10px] bg-white py-[12px] font-inter font-semibold uppercase text-black transition-colors duration-300 hover:bg-black hover:text-white ${
          gold ? 'text-[10px] md:text-[13px]' : 'text-[11px] md:text-[13px]'
        }`}
      >
        <CartIcon className="h-[13px] w-[13px]" />
        {added ? 'Added' : 'Add to cart'}
      </button>
      {added && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="-mt-[8px] mb-[10px] cursor-pointer font-inter text-[13px] text-white underline underline-offset-2"
        >
          View cart
        </button>
      )}
    </li>
  )
}

export default function ProductGrid({ products, variant }: Props) {
  return (
    <ul
      className={`grid grid-cols-2 items-start md:grid-cols-4 ${
        variant === 'gold' ? 'gap-[15px] md:gap-[25px]' : 'gap-x-[15px] gap-y-[30px] md:gap-x-[57px] md:gap-y-[40px]'
      }`}
    >
      {products.map((p) => (
        <ProductCard key={p.id} product={p} variant={variant} />
      ))}
    </ul>
  )
}
