import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, BrandMarquee, Explore, Faq, Quality, SkinCare, Testimonials } from './components/Sections'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <SkinCare />
        <BrandMarquee />
        <About />
        <Quality />
        <Explore />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
