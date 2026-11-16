export const SITE_URL = 'https://genesiswellnesspep.com'

export const CONTACT = {
  phone: '714-497-3231',
  email: 'support@genesiswellnesspep.com',
}

export interface NavItem {
  label: string
  href: string
}

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: `${SITE_URL}/about-us/` },
  { label: 'Products', href: `${SITE_URL}/products/` },
  { label: 'Skin Care', href: `${SITE_URL}/skin-care/` },
  { label: 'Merch', href: `${SITE_URL}/product-category/merch/` },
  { label: 'Performance Supplements', href: `${SITE_URL}/product-category/performance-supplements/` },
  { label: 'Blogs', href: `${SITE_URL}/blogs/` },
  { label: 'FAQs', href: `${SITE_URL}/faqs/` },
  { label: 'COAs', href: `${SITE_URL}/coas/` },
  { label: 'Contact Us', href: `${SITE_URL}/contact-us/` },
]

export interface Product {
  id: number
  name: string
  price: number
  image: string
  href: string
}

const p = (id: number, name: string, price: number, file: string, slug: string): Product => ({
  id,
  name,
  price,
  image: `/images/products/${file}`,
  href: `${SITE_URL}/product/${slug}/`,
})

export const SKIN_CARE: Product[] = [
  p(1238, 'PDRN Pink Collagen Mask (4PK)', 30, 'PDRN-Pink-Collagen-Mask-4.png', 'pdrn-pink-collagen-mask-4pk'),
  p(1239, 'GHK-CU Tallow Honey Balm 2oz', 50, 'GHK-CU-Tallow-Honey-Balm-2oz.png', 'ghk-cu-tallow-honey-balm-2oz'),
  p(1240, 'GHK-CU SNAP-8 Serum 30ml', 70, 'GHK-CU-SNAP-8-Serum-30ml.png', 'ghk-cu-snap-8-serum-30ml'),
  p(1241, 'AHk-CU GHK-CU Hair Growth Serum 30ml', 50, 'AHk-CU-GHK-CU-Hair-Growth-Serum-30ml.png', 'ahk-cu-ghk-cu-hair-growth-serum-30ml'),
]

export const RESEARCH: Product[] = [
  p(1234, 'L-Carnitine 1200mg 10ml', 75, 'L-Carnitine-1200mg-10ml.png', 'l-carnitine-1200mg-10ml'),
  p(1235, 'B-12 10ml', 50, 'B-12-10ml.png', 'b-12-10ml'),
  p(1230, 'Vesugen 20mg', 65, 'Vesugen-20mg.png', 'vesugen-20mg'),
  p(1231, 'EPO 3000iu', 80, 'EPO-3000iu.png', 'epo-3000iu'),
  p(1232, 'Livagen 20mg', 80, 'Livagen-20mg.png', 'livagen-20mg'),
  p(1233, 'IGF DES 1mg', 90, 'IGF-DES-1mg.png', 'igf-des-1mg'),
  p(1236, 'VIP 10mg', 55, 'VIP-10mg.png', 'vip-10mg'),
  p(1237, 'BPC157/TB500 20mg', 80, 'BPC157-TB500-20mg.png', 'bpc157-tb500-20mg'),
]

export const ALL_PRODUCTS = [...SKIN_CARE, ...RESEARCH]

export const FEATURES = [
  {
    title: 'Clear Product Identity',
    text: 'Each listing presents relevant compound information to support accurate peptide characterization and laboratory review.',
    anim: 'fadeInLeft',
  },
  {
    title: 'Batch-Level Documentation',
    text: 'Available batch verification records help researchers link individual products to relevant analytical information.',
    anim: 'fadeInUp',
  },
  {
    title: 'Analytical Transparency',
    text: 'Where applicable, products are supported by HPLC analysis, mass spectrometry, or other relevant analytical records.',
    anim: 'fadeInDown',
  },
  {
    title: 'Research-First Standards',
    text: 'Our catalog is intended for in vitro research, analytical work, and use within qualified controlled research environments.',
    anim: 'fadeInRight',
  },
] as const

// Copied as-is from the live page. These read as placeholder reviews (the intro
// line above them is a leftover template note). Replace with real, verifiable
// customer reviews before this goes live.
export const TESTIMONIALS_INTRO =
  'Instead of publishing unverified “results” claims, this section should highlight measurable elements of the purchasing experience.'

export const TESTIMONIALS = [
  {
    text: 'The product information was clearly organized, and the COA documentation made it easy to review the material before ordering. The overall process felt professional and research-focused',
    name: 'Daniel Harper',
    title: 'Laboratory Research Associate',
  },
  {
    text: 'I appreciated the straightforward product specifications and clear research-use positioning. Finding batch and analytical information was simple and saved time during our review process.',
    name: 'Michael Turner',
    title: 'Independent Researcher',
  },
  {
    text: 'Genesis Wellness provides a clean catalog with the technical details researchers actually look for. The documentation was accessible, and the ordering experience was smooth',
    name: 'Emily Carter',
    title: 'Research Coordinator',
  },
  {
    text: 'What stood out was the transparency. Product details, handling information, and supporting documentation were presented clearly without unnecessary claims.',
    name: 'Jason Miller',
    title: 'Laboratory Operations Specialist',
  },
  {
    text: 'The website made it easy to compare research materials and review available specifications before placing an order. Customer support was also responsive to my documentation question',
    name: 'Ryan Brooks',
    title: 'Scientific Research Consultant',
  },
  {
    text: 'Clear labeling and organized analytical information gave me a better understanding of the material I was reviewing. The entire experience was straightforward from catalog to checkout',
    name: 'Sarah Mitchell',
    title: 'Research Project Assistant',
  },
  {
    text: 'I value suppliers that keep research products properly separated from consumer-use messaging. Genesis Wellness does a good job presenting materials in a professional laboratory context',
    name: 'Andrew Collins',
    title: 'Biochemical Research Associate',
  },
  {
    text: 'The product page included the information I needed without overcomplicating things. Specifications and available batch documentation were easy to locate',
    name: 'Lauren Bennett',
    title: 'Laboratory Documentation Specialist',
  },
]

export const FAQS = [
  {
    q: 'What are Genesis Wellness research peptides intended for?',
    a: 'Genesis Wellness research peptides are intended for qualified laboratory research and scientific investigation. They are not presented as products approved for human or veterinary use.',
  },
  {
    q: 'Are Certificates of Analysis available for research peptides?',
    a: 'COA availability depends on the product and batch. Researchers should check the available analytical records and confirm that the document matches the relevant material or lot.',
  },
  {
    q: 'How can researchers evaluate peptide purity and identity?',
    a: 'Researchers can examine batch-specific documentation, including appropriate HPLC and mass spectrometry results where available. These methods help assess different characteristics and should not be treated as interchangeable.',
  },
  {
    q: 'What specifications should I check before ordering research peptides?',
    a: 'Check the compound name, labeled strength, product format, intended use, and available analytical records. Additional technical information may vary by product.',
  },
  {
    q: 'Does Genesis Wellness provide human-use instructions?',
    a: 'Genesis Wellness positions its research materials for laboratory investigation only and does not present them as approved medical treatments or provide human-use protocols.',
  },
  {
    q: 'How should research peptides be stored in laboratories?',
    a: 'Storage requirements differ by chemical structure and formulation. Follow available product-specific handling documentation rather than assuming all peptides share the same stability conditions.',
  },
]
