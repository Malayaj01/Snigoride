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
    <div className="relative h-full flex flex-col p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 dark:bg-black/20 dark:hover:bg-black/40 hover:scale-105 hover:border-white/20 transition-all duration-500 overflow-hidden group w-[320px] md:w-[400px] shrink-0 cursor-pointer shadow-lg shadow-black/20">
      
      {/* A sweeping glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

      {/* Decorative quote mark */}
      <span
        className="absolute top-4 right-6 text-[80px] leading-none font-bold opacity-10 select-none pointer-events-none text-white mix-blend-overlay"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Avatar */}
      <div className="mb-5 relative z-10 flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0 border-2 border-white/20 overflow-hidden shadow-lg"
          style={{ backgroundColor: image ? 'transparent' : `hsl(${hue}, 60%, 45%)` }}
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
        <div className="relative z-10">
          <p className="text-base font-bold text-white tracking-wide">
            {name}
          </p>
          <p className="text-[#a0aabf] text-sm font-medium mt-0.5">{role}</p>
        </div>
      </div>

      {/* Stars / Rating */}
      <div className="flex gap-1 mb-5 relative z-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-white/20 text-white/20'
            }
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-200 text-sm md:text-[0.95rem] leading-relaxed flex-1 relative z-10 font-medium italic">
        &ldquo;{comment}&rdquo;
      </p>
    </div>
  )
}
