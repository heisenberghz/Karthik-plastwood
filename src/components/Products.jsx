import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { products } from '../data/siteData'

export default function Products() {
  const gridRef = useScrollReveal()

  return (
    <section id="products" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Our Products"
          title="Engineered for Every Project"
          description="From FRP fiber solutions to WPC doors and wall panels — built for homes, builders, and commercial spaces."
        />

        <div ref={gridRef} className="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-cream-50 transition-all duration-300 hover:-translate-y-1 hover:border-forest-800/20 hover:shadow-xl"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-forest-800 backdrop-blur-sm">
                  {product.brand}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-forest-900">
                  {product.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-stone-600">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
