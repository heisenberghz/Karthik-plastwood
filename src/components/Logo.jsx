export default function Logo({ className = '', compact = false }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`}>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-800 shadow-md transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <rect x="6" y="4" width="20" height="24" rx="1" fill="#FAFAF8" />
          <rect x="9" y="7" width="6" height="8" rx="0.5" fill="#2D6A4F" opacity="0.6" />
          <circle cx="22" cy="16" r="1.5" fill="#2D6A4F" />
          <path
            d="M4 28h24"
            stroke="#D4A574"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {!compact && (
        <div className="hidden text-left leading-tight sm:block">
          <span className="block font-display text-sm font-semibold tracking-tight text-forest-900">
            Karthik Fiber Works
          </span>
          <span className="block text-[11px] font-medium tracking-wide text-stone-500">
            & Karthik Plast Wood
          </span>
        </div>
      )}
    </a>
  )
}
