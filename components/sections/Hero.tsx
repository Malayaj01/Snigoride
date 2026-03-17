'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import Button from '@/components/ui/Button'

export default function Hero() {
  const scrollY = useScrollPosition()
  const showScrollIndicator = scrollY < 200

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        initial={{ filter: 'blur(20px)', scale: 1.05 }}
        animate={{ filter: 'blur(0px)', scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 bg-[url('/assets/images/contact-bg.jpg')] bg-cover bg-center"
      />
      
      {/* Subtle Dark Gradient Overlay for text readability */}
      <div 
        className="absolute inset-0 z-[2]" 
        style={{ background: 'linear-gradient(180deg, rgba(10,26,10,0.3) 0%, rgba(10,26,10,0.6) 100%)' }} 
      />

      {/* Wave Separator Transition with Living Energy Animations */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg
          className="relative block w-full h-[20px] sm:h-[30px] md:h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 L1200,40 L1200,0 Q600,80 0,0 Z"
            className="fill-[var(--color-surface)]"
          />
          {/* Layer 1: Wide Blue Energy Wave (Right) */}
          <path
            d="M0,0 Q600,80 1200,0"
            fill="none"
            className="energy-line-1"
          />
          {/* Layer 2: Medium Green Energy Wave (Left) */}
          <path
            d="M0,0 Q600,80 1200,0"
            fill="none"
            className="energy-line-2"
          />
          {/* Layer 3: Fast White Core Spark (Right) */}
          <path
            d="M0,0 Q600,80 1200,0"
            fill="none"
            className="energy-line-core"
          />
        </svg>
      </div>

      {/* Animated floating particles — preserved from original for extra depth */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: 4 + Math.random() * 4,
              height: 4 + Math.random() * 4,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

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
            Contact Us
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
