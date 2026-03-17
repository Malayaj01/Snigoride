'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(2)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const isPaused = useRef(false)

  const maxIndex = TESTIMONIALS.length - cardsToShow

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth >= 768 ? 2 : 1)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Auto-rotation
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        if (!isPaused.current) next()
      }, 5000)
    }
    startAutoPlay()
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [next])

  return (
    <section
      className="section-muted-textured py-16 md:py-24"
      role="region"
      aria-label="Customer Testimonials"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Partners Say"
          subtitle="Real stories from riders, businesses, and franchise partners across India."
          align="center"
        />

        <div
          className="relative"
          onMouseEnter={() => (isPaused.current = true)}
          onMouseLeave={() => (isPaused.current = false)}
          onFocus={() => (isPaused.current = true)}
          onBlur={() => (isPaused.current = false)}
        >
          {/* Cards */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 px-2.5"
                  style={{ width: `${100 / cardsToShow}%` }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${TESTIMONIALS.length}`}
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer z-10 hidden md:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer z-10 hidden md:flex"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8" role="tablist">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  i === currentIndex
                    ? 'bg-[var(--color-primary)] w-6'
                    : 'bg-[var(--color-border)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
