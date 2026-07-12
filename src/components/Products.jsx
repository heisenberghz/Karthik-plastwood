import { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { products } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [isMinimal, setIsMinimal] = useState(false) // State to toggle between Design A and Design B

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToSlide = (index) => {
    if (isTransitioning || index === activeIndex) return
    setIsTransitioning(true)
    setActiveIndex(index)
  }

  useEffect(() => {
    if (!isTransitioning) return
    const timer = setTimeout(() => setIsTransitioning(false), 500)
    return () => clearTimeout(timer)
  }, [isTransitioning])

  useEffect(() => {
    if (hovered || isTransitioning) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [hovered, isTransitioning])

  const activeProduct = products[activeIndex]

  return (
    <section id="products" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Our Products"
          title="Engineered for Every Project"
          description="Browse through our high-performance solutions — interactive installation showcase."
        />

        {/* Design Style Toggle */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-xl bg-stone-100 p-1 border border-stone-200 shadow-sm">
            <button
              type="button"
              onClick={() => setIsMinimal(false)}
              className={`rounded-lg px-4 py-2 font-body text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                !isMinimal
                  ? 'bg-forest-800 text-white shadow-sm'
                  : 'text-stone-600 hover:text-forest-800'
              }`}
            >
              Detailed View (Design A)
            </button>
            <button
              type="button"
              onClick={() => setIsMinimal(true)}
              className={`rounded-lg px-4 py-2 font-body text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                isMinimal
                  ? 'bg-forest-800 text-white shadow-sm'
                  : 'text-stone-600 hover:text-forest-800'
              }`}
            >
              Minimal Slideshow (Design B)
            </button>
          </div>
        </div>

        <div
          className="relative mx-auto max-w-5xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Main Slider Display */}
          {isMinimal ? (
            /* Design B: Minimal Full-Box Slideshow */
            <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-cream-50 shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] md:h-[500px] w-full overflow-hidden bg-stone-100">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className={`h-full w-full object-cover transition-all duration-500 ${
                    isTransitioning ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                  }`}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/25 via-transparent to-transparent" />
              </div>
            </div>
          ) : (
            /* Design A: Detailed Split Carousel */
            <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-cream-50 shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-12 items-stretch">
                {/* Left Column: Product Info */}
                <div
                  className={`p-8 md:p-12 md:col-span-5 flex flex-col justify-center transition-opacity duration-500 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-forest-700 bg-forest-800/10 px-3 py-1.5 rounded-full">
                      {activeProduct.brand}
                    </span>
                    <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold text-forest-900 leading-tight">
                      {activeProduct.name}
                    </h3>
                    <p className="mt-4 font-body text-stone-600 text-sm md:text-base leading-relaxed">
                      {activeProduct.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <a
                      href={`https://wa.me/+919845466428?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(activeProduct.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-forest-800 px-5 py-3 font-body text-xs md:text-sm font-semibold text-white shadow-md transition-all hover:bg-forest-900 hover:shadow-lg"
                    >
                      Enquire Now
                    </a>
                  </div>
                </div>

                {/* Right Column: Product Image */}
                <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto md:h-[480px] overflow-hidden bg-stone-100">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className={`h-full w-full object-cover transition-all duration-500 ${
                      isTransitioning ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
                    }`}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          )}

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border border-stone-200 text-forest-800 shadow-md transition-all hover:scale-105 hover:bg-forest-800 hover:text-white hover:border-forest-800 z-10 cursor-pointer"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white border border-stone-200 text-forest-800 shadow-md transition-all hover:scale-105 hover:bg-forest-800 hover:text-white hover:border-forest-800 z-10 cursor-pointer"
            aria-label="Next slide"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === activeIndex ? 'bg-forest-800 w-8' : 'bg-stone-300 w-2.5 hover:bg-stone-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
