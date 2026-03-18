'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import Button from '@/components/ui/Button'
import HeroBackground from '@/components/ui/HeroBackground'

export default function Hero() {
  const scrollY = useScrollPosition()
  const showScrollIndicator = scrollY < 200

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-[860px] mx-auto"
      >
        {/* Eyebrow with line decoration */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
          <span className="block w-8 h-[1px] bg-white/40" />
          <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-white/80">
            ELECTRIC · EFFICIENT · EVERYWHERE
          </span>
          <span className="block w-8 h-[1px] bg-white/40" />
        </motion.div>

        {/* H1 — large serif heading */}
        <motion.h1
          variants={fadeUp}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]"
          style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
        >
          Ditch Petrol. Go Electric with India&apos;s{' '}
          <span className="text-[var(--color-primary-light)]">No.1</span> EV Rental Platform
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-[560px] mx-auto"
        >
          EV rentals, smart ride &amp; green advertising — all under one roof.
          Zero emissions, maximum efficiency.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="large" href="#contact">
            Join EV revolution NOW
          </Button>
          <Button variant="white-outline" size="large" href="#services">
            Explore Services ↓
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.14em] uppercase text-white/40">
            Scroll
          </span>
          <ChevronDown
            size={22}
            className="text-white/50 animate-bounce"
          />
        </motion.div>
      )}
    </section>
  )
}
