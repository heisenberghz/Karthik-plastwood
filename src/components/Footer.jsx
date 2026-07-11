import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { business, navLinks } from '../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-forest-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="font-display text-lg font-semibold tracking-tight text-white">
              {business.name}
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
              Premium FRP fiber and WPC products — durable, affordable, and built for every project.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-wood-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-wood-400">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {business.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="inline-flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <FaPhone className="h-3 w-3" />
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`https://wa.me/${business.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-white/70 transition-colors hover:text-white"
                >
                  <FaWhatsapp className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-body text-xs font-semibold uppercase tracking-widest text-wood-400">
              Location
            </h4>
            <address className="not-italic">
              {business.address.lines.map((line) => (
                <p key={line} className="font-body text-sm leading-relaxed text-white/70">
                  {line}
                </p>
              ))}
            </address>
            <a
              href={business.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-body text-sm text-wood-400 transition-colors hover:text-wood-300"
            >
              <FaMapMarkerAlt className="h-3 w-3" />
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-body text-xs text-white/50">
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Katapady, Udupi, Karnataka
          </p>
        </div>
      </div>
    </footer>
  )
}
