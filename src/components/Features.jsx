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
    <section id="features" className="relative overflow-hidden bg-forest-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.04%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-wood-400">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built with Purpose. Backed by Science.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-white/65">
            Every product is engineered to outperform traditional materials — giving you peace of mind on every installation.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-wood-400 to-forest-600" />
        </div>

        <div ref={gridRef} className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-wood-400/30 hover:bg-white/10"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forest-800/60 text-wood-300 transition-colors group-hover:bg-forest-700 group-hover:text-wood-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-body text-sm font-semibold leading-snug text-white">
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
