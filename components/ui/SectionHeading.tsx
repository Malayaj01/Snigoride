'use client'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center')}>
      <div
        className={cn(
          'flex items-center gap-2.5 mb-4',
          align === 'center' && 'justify-center'
        )}
      >
        <span
          className="block w-[2px] h-4 rounded-full"
          style={{ background: light ? '#FFFFFF' : 'var(--color-primary)' }}
        />
        <span
          className={cn(
            'text-[11px] font-semibold tracking-[0.12em] uppercase',
            light ? 'text-white/80' : 'text-[var(--color-primary)]'
          )}
          style={{ fontFamily: 'var(--font-satoshi), system-ui, sans-serif' }}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] mb-4',
          light ? 'text-white' : 'text-[var(--color-text-primary)]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-white/70' : 'text-[var(--color-text-secondary)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
