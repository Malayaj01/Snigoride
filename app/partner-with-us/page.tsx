'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Handshake } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function PartnerWithUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Animated Background Image */}
          <motion.div
            initial={{ filter: 'blur(20px)', scale: 1.05 }}
            animate={{ filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-[url('/assets/images/contact-bg.jpg')] bg-cover bg-center"
          />
          {/* Subtle Dark Gradient Overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,26,10,0.3) 0%, rgba(10,26,10,0.6) 100%)' }} />

          {/* Wave Separator Transition */}
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

          <div className="relative z-10 text-center px-6 max-w-[850px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20"
            >
              <Handshake className="text-white" size={32} />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              {['Partner', 'With', 'Us'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-white/80 text-lg md:text-xl mt-6 max-w-[600px] mx-auto leading-relaxed"
            >
              Collaborate with SNIGORIDE for franchise, fleet, and business opportunities that drive sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a
                href="#coming-soon"
                className="inline-block mt-10 bg-[var(--color-primary)] text-white px-9 py-4 rounded-full text-base font-bold hover:bg-[var(--color-primary-dark)] hover:scale-105 transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/25"
              >
                Explore Opportunities
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <ArrowDown size={20} className="text-white/40 animate-bounce" />
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            COMING SOON SECTION
        ══════════════════════════════════════════ */}
        <section id="coming-soon" className="py-24 px-6 flex flex-col items-center justify-center">
          <div className="text-center max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}>
              Building the Future of Mobility Partnerships
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed mb-8">
              We are currently refining our partnership programs to provide maximum value to our franchise owners and business collaborators. Check back soon for detailed information on how you can join the SNIGORIDE revolution.
            </p>
            <div className="inline-block bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-6 py-3 rounded-xl text-base font-semibold">
              🚧 Full content launching soon
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
