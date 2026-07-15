import { useState, useEffect } from 'react'
import { HiChevronLeft as LeftIcon, HiChevronRight as RightIcon, HiX as CloseIcon } from 'react-icons/hi'
import { products } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Products() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % products.length))
  }

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + products.length) % products.length))
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        nextLightboxImage()
      } else if (e.key === 'ArrowLeft') {
        prevLightboxImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex])

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  return (
    <section id="products" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Our Products"
          title="Engineered for Every Project"
          description="Browse through our high-performance doors and frames. Click on any image to view in full resolution."
        />

        {/* Staggered Masonry Showcase (Design B) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid mb-6 group relative cursor-pointer overflow-hidden rounded-2xl border border-stone-200/80 bg-cream-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-forest-800/30 block"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              {/* Subtle Hover Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-wood-400">
                  {product.brand}
                </span>
                <h4 className="font-display text-base font-semibold text-white mt-1">
                  {product.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer p-2.5 z-55 bg-white/10 hover:bg-white/20 rounded-full"
            aria-label="Close lightbox"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prevLightboxImage()
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white hover:text-stone-900 cursor-pointer z-55 shadow-md"
            aria-label="Previous image"
          >
            <LeftIcon className="h-7 w-7" />
          </button>

          {/* Main Image Container */}
          <div
            className="max-h-[85vh] max-w-[90vw] md:max-w-[75vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={products[lightboxIndex].image}
              alt={products[lightboxIndex].name}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
            {/* Caption details below image */}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-wider text-wood-400 font-semibold">
                {products[lightboxIndex].brand}
              </span>
              <h3 className="text-white font-display text-lg font-semibold mt-1">
                {products[lightboxIndex].name}
              </h3>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              nextLightboxImage()
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-white hover:text-stone-900 cursor-pointer z-55 shadow-md"
            aria-label="Next image"
          >
            <RightIcon className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  )
}
