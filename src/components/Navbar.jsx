import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.substring(1))
    
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -75% 0px', // Trigger in the upper-middle region of viewport
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavLinkClick = (e, href) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const el = document.getElementById(targetId)
    if (el) {
      const offset = 80 // offset for sticky navbar height
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
      setOpen(false)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream-50/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`rounded-lg px-4 py-2 font-body text-sm transition-colors ${
                    isActive
                      ? scrolled
                        ? 'bg-forest-800/10 font-bold text-forest-800'
                        : 'bg-white/15 font-bold text-white shadow-sm'
                      : scrolled
                        ? 'font-medium text-stone-700 hover:bg-forest-800/5 hover:text-forest-800'
                        : 'font-medium text-stone-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-4 ml-auto md:ml-0">
          <a
            href="tel:+919845466428"
            className="hidden rounded-lg bg-forest-800 px-5 py-2.5 font-body text-sm font-semibold text-white shadow-md transition-all hover:bg-forest-900 hover:shadow-lg md:inline-flex"
          >
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
              scrolled || open
                ? 'text-forest-900 hover:bg-forest-800/5'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <HiX className="h-6 w-6" /> : <HiMenuAlt3 className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 top-[72px] z-40 bg-cream-50/98 backdrop-blur-sm md:hidden">
          <ul className="flex flex-col gap-1 px-5 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`block rounded-xl px-4 py-3.5 font-body text-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-forest-800/10 font-bold text-forest-800'
                      : 'font-medium text-stone-800 transition-colors hover:bg-forest-800/5 hover:text-forest-800'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4 border-t border-stone-200 pt-4">
              <a
                href="tel:+919845466428"
                className="block rounded-xl bg-forest-800 px-4 py-3.5 text-center font-body text-base font-semibold text-white"
              >
                Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
