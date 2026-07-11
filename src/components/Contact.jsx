import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { business } from '../data/siteData'

export default function Contact() {
  const infoRef = useScrollReveal()
  const mapRef = useScrollReveal()

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Contact Us"
          title="Let's Build Something Durable"
          description="Reach out for product enquiries, bulk orders, or to visit our facility in Katapady, Udupi."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div ref={infoRef} className="reveal space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-forest-900">
                {business.name}
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800/10 text-forest-800">
                  <HiOutlineLocationMarker className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-stone-800">Address</p>
                  {business.address.lines.map((line) => (
                    <p key={line} className="font-body text-sm leading-relaxed text-stone-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-800/10 text-forest-800">
                  <FaPhone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-stone-800">Phone</p>
                  <div className="mt-1 flex flex-col gap-1">
                    {business.phones.map((phone) => (
                      <a
                        key={phone.tel}
                        href={`tel:${phone.tel}`}
                        className="font-body text-sm text-forest-700 transition-colors hover:text-forest-900 hover:underline"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {business.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-forest-800 px-6 py-3 font-body text-sm font-semibold text-white shadow-md transition-all hover:bg-forest-900 hover:shadow-lg"
                >
                  <FaPhone className="h-3.5 w-3.5" />
                  Call {phone.display}
                </a>
              ))}
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-body text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1fb855] hover:shadow-lg"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={business.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 font-body text-sm font-semibold text-stone-700 transition-all hover:border-forest-800/30 hover:text-forest-800"
              >
                <FaMapMarkerAlt className="h-3.5 w-3.5" />
                Get Directions
              </a>
            </div>
          </div>

          <div ref={mapRef} className="reveal overflow-hidden rounded-2xl border border-stone-200 shadow-lg">
            <iframe
              title="Karthik Fiber Works & Karthik Plast Wood location"
              src={business.mapsEmbed}
              className="h-[400px] w-full grayscale-[20%] contrast-[1.05] lg:h-full lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
