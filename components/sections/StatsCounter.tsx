'use client'
import { motion } from 'framer-motion'
import { STATS } from '@/lib/constants'
import { useCountUp } from '@/lib/hooks/useCountUp'
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
  const { count, ref } = useCountUp(value, 2000)

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="text-center py-4"
    >
      <span className="text-2xl mb-2 block" aria-hidden="true">
        {emoji}
      </span>
      <span
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white block mb-2"
        style={{
          fontFamily: 'var(--font-jetbrains), monospace',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {count.toLocaleString('en-IN')}
        {suffix}
      </span>
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
