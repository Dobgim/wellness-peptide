# Genesis Wellness – React rebuild

React 19 + TypeScript + Tailwind CSS v4 (Vite) rebuild of the genesiswellnesspep.com home page.

```bash
npm install
npm run dev      # http://localhost:5330
npm run build
```

## Where things live
- `src/data/site.ts`: nav links, products, features, testimonials, FAQs, contact details
- `src/components/`: Header, Hero, Sections (skin care, marquee, about, quality, explore, testimonials, FAQ), Footer, CartDrawer, SearchModal
- `src/index.css`: theme colours/fonts, Elementor entrance animations, marquee, section backgrounds
- `public/images/`: logo, product shots, icons, badges

## Still to do
- **Section backgrounds**: the WordPress backgrounds (`Rectangle-1.png`, `Group.png`, `dgda.png`, `dfhdhf.png`, `dfhdhf-1.png` from `/wp-content/uploads/2026/07/`) weren't in the saved page. Put them in `public/images/bg/` and they load automatically over the gradient fallbacks.
- **Testimonials**: the names and quotes are copied from the live page and read as placeholders. Replace them with real customer reviews.
- **Cart**: the cart is client-side (localStorage). "View cart" and "Checkout" link to the WooCommerce cart/checkout on the live site.
- Inner pages (About, Products, COAs, …) still link to the WordPress site.
