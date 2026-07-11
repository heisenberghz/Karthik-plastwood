import { useState } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { galleryImages, galleryCategories } from '../data/siteData'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const gridRef = useScrollReveal()

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const navigate = (dir) => {
    if (lightboxIndex === null) return
    const next =
      dir === 'next'
        ? (lightboxIndex + 1) % filtered.length
        : (lightboxIndex - 1 + filtered.length) % filtered.length
    setLightboxIndex(next)
  }

  return (
    <section id="gallery" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Gallery"
          title="Our Work in Action"
          description="Browse our doors, frames, windows, wall panels, and completed installations."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 font-body text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:ring-forest-800/30 hover:text-forest-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-forest-950/0 transition-colors duration-300 group-hover:bg-forest-950/30" />
              <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-1 font-body text-xs font-semibold text-forest-900 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                {image.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <HiX className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); navigate('prev') }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous image"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); navigate('next') }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next image"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-sm text-white/70">
            {filtered[lightboxIndex].category} — {lightboxIndex + 1} / {filtered.length}
          </p>
        </div>
      )}
    </section>
  )
}
