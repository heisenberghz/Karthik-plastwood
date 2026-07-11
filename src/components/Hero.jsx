import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import { business } from '../data/siteData'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Premium WPC door in a modern home"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-900/75 to-forest-900/40" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-wood-400" />
            <span className="font-body text-xs font-medium uppercase tracking-widest text-white/90">
              FRP & WPC Manufacturing
            </span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Karthik Fiber Works
            <span className="mt-2 block text-2xl font-normal text-wood-300 sm:text-3xl">
              & Karthik Plast Wood
            </span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-white/80 sm:text-xl">
            {business.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`tel:${business.phones[0].tel}`}
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-7 py-3.5 font-body text-sm font-semibold text-forest-900 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <FaPhone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1fb855] hover:shadow-xl"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 border-t border-white/15 pt-8">
            {['Termite Proof', 'Water Proof', 'Eco Friendly'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg className="h-5 w-5 text-wood-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-body text-sm font-medium text-white/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
          aria-label="Scroll to about section"
        >
          <span className="font-body text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-5 rounded-full border-2 border-current p-1">
            <div className="mx-auto h-1.5 w-1 animate-bounce rounded-full bg-current" />
          </div>
        </a>
      </div>
    </section>
  )
}
