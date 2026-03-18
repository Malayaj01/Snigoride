'use client'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { fadeUp, staggerContainer } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

function StatItem({
  emoji,
  value,
  suffix,
  label,
}: {
  emoji: string
  value: number
  suffix: string
  label: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="text-center py-4"
    >
      <motion.span 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="text-4xl mb-3 block" aria-hidden="true"
      >
        {emoji}
      </motion.span>
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white block mb-2"
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value.toLocaleString('en-IN')}
        {suffix}
      </motion.span>
      <span className="text-sm text-white/60">{label}</span>
    </motion.div>
  )
}

export default function StatsCounter() {
  return (
    <section className="section-dark-gradient electric-lines py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="OUR IMPACT"
          title="Numbers That Drive Us"
          subtitle="Real metrics from our growing EV ride network across India."
          align="center"
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-4"
        >
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              emoji={stat.emoji}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
