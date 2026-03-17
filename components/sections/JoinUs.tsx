'use client'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const STEPS = [
  {
    title: 'Complete Your KYC',
    description: 'Add your personal details like Aadhaar, PAN, and Bank details!',
  },
  {
    title: 'Choose Your Scooter',
    description: 'Select your scooter like swappable battery scooter or fixed battery.',
  },
  {
    title: 'Start Earning',
    description: 'Activate your client ID and begin deliveries to earn more!',
  },
  {
    title: 'Own Your EV',
    description: 'Complete your tenure and the vehicle is fully yours — zero lump sum.',
  },
]

export default function JoinUs() {
  return (
    <section className="bg-[var(--color-surface-muted)] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="GET STARTED"
          title="How To Join SNIGORIDE"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Left — Steps Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-[var(--color-border)]" />

            <div className="space-y-10">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
                  className="relative flex items-start gap-4 pl-0"
                >
                  {/* Step dot/icon */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-md">
                      <CheckCircle2 size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="pt-0.5">
                    <h3
                      className="text-lg md:text-xl font-bold text-[var(--color-primary)]"
                      style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed mt-1.5">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative arrow (on first step) */}
                  {i === 0 && (
                    <motion.svg
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.3 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      width="48" height="48" viewBox="0 0 48 48" fill="none"
                      className="absolute -right-2 top-6 text-[var(--color-text-secondary)] hidden md:block"
                    >
                      <path
                        d="M8 8 C20 12, 28 24, 36 40"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M32 36 L36 40 L40 36"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — App Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-[260px] md:w-[300px]">
              {/* Phone bezel */}
              <div className="bg-[var(--color-surface)] rounded-[32px] border-2 border-[var(--color-border)] shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="bg-[var(--color-primary)] px-6 pt-8 pb-6">
                  <div className="w-16 h-1.5 rounded-full bg-white/30 mx-auto mb-5" />
                  <p className="text-white text-center text-sm font-bold">Last Mile Deliveries</p>
                  <p className="text-white/70 text-center text-xs mt-1">
                    Maximize your Earning by delivering more orders
                  </p>
                </div>

                {/* Buttons */}
                <div className="px-6 py-6 space-y-3">
                  <button className="w-full py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-bold">
                    Log In
                  </button>
                  <button className="w-full py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-bold bg-transparent">
                    Create Account
                  </button>
                </div>

                {/* Logo */}
                <div className="pb-6 flex items-center justify-center gap-2">
                  <img src="/assets/images/logo/logo-cyan.png" alt="SNIGORIDE" className="w-6 h-6" />
                  <span className="text-xs font-bold text-[var(--color-text-secondary)]">
                    SNIGORIDE
                  </span>
                </div>
              </div>
            </div>

            {/* Floating card behind phone */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 md:right-0 top-8 bg-[var(--color-primary)] text-white rounded-2xl p-4 shadow-xl w-[140px] hidden sm:block"
            >
              <div className="text-2xl mb-1">🛵</div>
              <p className="text-xs font-bold">ZYPP PILOT</p>
              <p className="text-[10px] text-white/70 mt-0.5">Start riding today</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
