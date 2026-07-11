import { FaWhatsapp } from 'react-icons/fa'
import { business } from '../data/siteData'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:bg-[#1fb855] hover:shadow-xl"
      aria-label={`Chat on WhatsApp at ${business.whatsappDisplay}`}
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  )
}
