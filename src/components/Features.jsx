import {
  HiSun,
  HiFire,
  HiOutlineShieldCheck,
  HiOutlineBeaker,
} from 'react-icons/hi'
import { FaLeaf, FaShieldAlt } from 'react-icons/fa'
import { GiWaterDrop, GiHammerNails, GiRecycle } from 'react-icons/gi'
import { MdDensityMedium } from 'react-icons/md'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './SectionHeading'
import { features } from '../data/siteData'

const iconMap = {
  sun: HiSun,
  fire: HiFire,
  leaf: FaLeaf,
  hammer: GiHammerNails,
  density: MdDensityMedium,
  shield: HiOutlineShieldCheck,
  recycle: GiRecycle,
  water: GiWaterDrop,
  health: HiOutlineBeaker,
  corrosion: FaShieldAlt,
}

export default function Features() {
  const gridRef = useScrollReveal()

  return (
    <section id="features" className="relative overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div className="absolute inset-0 bg-wood-texture opacity-30" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="Built with Purpose. Backed by Science."
          description="Every product is engineered to outperform traditional materials — giving you peace of mind on every installation."
        />

        <div ref={gridRef} className="reveal grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.label}
                className="group rounded-2xl border border-stone-200/80 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-forest-800/30 hover:shadow-md"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800/10 text-forest-800 transition-colors duration-300 group-hover:bg-forest-800 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-body text-sm font-semibold leading-snug text-stone-800">
                  {feature.label}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
