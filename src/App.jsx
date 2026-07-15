import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { seoConfig } from './data/siteData'

export default function App() {
  useEffect(() => {
    const scriptId = 'jsonld-local-business'
    let script = document.getElementById(scriptId)
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Karthik Fiber Works & Karthik Plast Wood",
      "description": seoConfig.description,
      "url": seoConfig.siteUrl + "/",
      "telephone": ["+919845466428", "+918310547285"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mahima Nest, Kurkal Subhasnagar",
        "addressLocality": "Katapady, Udupi",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.3235,
        "longitude": 74.7451
      },
      "areaServed": "Karnataka",
      "priceRange": "$$"
    }

    script.text = JSON.stringify(schemaData, null, 2)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
