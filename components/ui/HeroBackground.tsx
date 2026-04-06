'use client'
import { motion } from 'framer-motion'

export default function HeroBackground() {
  return (
    <>
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

      {/* Animated floating particles */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        {[
          { w: 5.2, h: 6.8, left: 15, top: 20 },
          { w: 7.1, h: 4.5, left: 29, top: 45 },
          { w: 4.8, h: 7.3, left: 43, top: 70 },
          { w: 6.4, h: 5.6, left: 57, top: 20 },
          { w: 5.9, h: 4.2, left: 71, top: 45 },
          { w: 7.6, h: 6.1, left: 85, top: 70 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: p.w,
              height: p.h,
              left: `${p.left}%`,
              top: `${p.top}%`,
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
    </>
  )
}
