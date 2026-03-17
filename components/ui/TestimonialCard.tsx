'use client'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  rating: number
  comment: string
  image?: string
}

export default function TestimonialCard({
  name,
  role,
  rating,
  comment,
  image,
}: TestimonialCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  // Generate a consistent color based on name
  const hue = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360

  return (
    <div className="bg-[var(--color-surface)] rounded-xl p-6 md:p-8 border border-[var(--color-border)] relative h-full flex flex-col hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-6 text-[80px] leading-none font-bold opacity-[0.04] select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Avatar — round image holder */}
      <div className="mb-4 relative z-10">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-semibold shrink-0 border-2 border-[var(--color-border)] overflow-hidden"
          style={{ backgroundColor: image ? 'transparent' : `hsl(${hue}, 55%, 50%)` }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            initials
          )}
        </div>
      </div>

      {/* Name + Role */}
      <div className="mb-3 relative z-10">
        <p className="text-base font-semibold text-[var(--color-text-primary)]">
          {name}
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">{role}</p>
      </div>

      {/* Stars / Rating */}
      <div className="flex gap-1 mb-4 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-gray-200 text-gray-200'
            }
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-[var(--color-text-secondary)] text-sm md:text-[0.94rem] leading-relaxed flex-1 relative z-10">
        &ldquo;{comment}&rdquo;
      </p>
    </div>
  )
}
