import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SectionHeading({ label, title, description }) {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="reveal mx-auto mb-14 max-w-2xl text-center">
      {label && (
        <span className="mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 font-body text-base leading-relaxed text-stone-600">
          {description}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-forest-700 to-wood-400" />
    </div>
  )
}
