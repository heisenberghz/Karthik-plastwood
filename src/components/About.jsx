import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { aboutContent } from '../data/siteData'

const pillarIcons = {
  Quality: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  Durability: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  'Customer Satisfaction': (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
  'Affordable Pricing': (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
}

const pillarDescriptions = {
  Quality: 'Uncompromised standards in manufacturing and premium raw materials.',
  Durability: 'Weatherproof, water proof, termite proof, and long-lasting designs.',
  'Customer Satisfaction': 'Custom configurations tailored to Udupi and Karnataka builders.',
  'Affordable Pricing': 'Direct manufacturing pricing that ensures affordability.',
}

export default function About() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section id="about" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="absolute inset-0 bg-wood-texture opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="About Us"
          title="Built to Last. Priced to Trust."
          description="Two specialized brands under one roof — delivering premium fiber and WPC solutions across Karnataka."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column: Descriptions */}
          <div ref={leftRef} className="reveal space-y-6">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-800/10 text-forest-800">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  Karthik Fiber Works
                </h3>
              </div>
              <p className="font-body leading-relaxed text-stone-600">
                {aboutContent.fiberWorks}
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-wood-400/20 text-wood-600">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h2v-2h-2zm-2-2H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-900">
                  Karthik Plast Wood
                </h3>
              </div>
              <p className="font-body leading-relaxed text-stone-600">
                {aboutContent.plastWood}
              </p>
            </div>
          </div>

          {/* Right Column: Pillars Grid */}
          <div ref={rightRef} className="reveal grid gap-4 sm:grid-cols-2">
            {aboutContent.pillars.map((pillar) => (
              <div
                key={pillar}
                className="flex flex-col gap-4 rounded-2xl border border-stone-200/60 bg-white p-6 shadow-sm hover:border-forest-800/20 transition-all duration-300"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest-800/10 text-forest-800">
                  {pillarIcons[pillar]}
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-forest-900">
                    {pillar}
                  </h4>
                  <p className="mt-2 font-body text-sm leading-relaxed text-stone-500">
                    {pillarDescriptions[pillar]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
