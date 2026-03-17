'use client'

const PARTNERS = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
  'Partner 6',
]

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-10 px-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none shrink-0">
      <span className="text-sm font-semibold text-[var(--color-text-secondary)] tracking-wide whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function TrustBar() {
  return (
    <section className="bg-[var(--color-surface-muted)] py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-center text-xs font-medium text-[var(--color-text-secondary)] tracking-wide uppercase mb-6">
          Trusted by leading businesses across India
        </p>
      </div>

      {/* Desktop: static row */}
      <div className="hidden md:flex items-center justify-center gap-12 max-w-[1200px] mx-auto px-6">
        {PARTNERS.map((name) => (
          <PartnerLogo key={name} name={name} />
        ))}
      </div>

      {/* Mobile: marquee scroll */}
      <div className="md:hidden relative">
        <div className="animate-marquee flex items-center gap-12 w-max">
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <PartnerLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-surface-muted)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-surface-muted)] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
