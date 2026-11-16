import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

export type Anim = 'fadeInLeft' | 'fadeInRight' | 'fadeInUp' | 'fadeInDown' | 'lightSpeedIn'

interface Props {
  anim: Anim
  as?: ElementType
  className?: string
  children: ReactNode
}

/** Elementor-style entrance animation: hidden until scrolled into view, then plays once. */
export default function Reveal({ anim, as: Tag = 'div', className = '', children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`gw-anim ${anim} ${inView ? 'gw-in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
