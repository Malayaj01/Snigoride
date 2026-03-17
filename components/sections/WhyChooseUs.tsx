'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Wifi, BatteryCharging, Wrench, Headset } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const IMPACT_STATS = [
  {
    value: '2 Lakh+',
    label: 'Lives Impacted with Electric Mobility',
    date: 'Aug 10, 2025',
    color: '#0A66FF',
    position: { top: '8%', right: '12%' },
  },
  {
    value: '110 Mn+',
    label: 'Deliveries Done with our EVs',
    date: 'July 25, 2025',
    color: '#EC4899',
    position: { bottom: '30%', left: '2%' },
  },
  {
    value: '55Mn+',
    label: 'Kgs of Carbon Reduced',
    date: 'June 05, 2025',
    color: '#F59E0B',
    position: { bottom: '18%', right: '4%' },
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-muted-textured py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="WHY SNIGORIDE"
          title="Why Choose SNIGORIDE"
          subtitle="Zero-emission last-mile delivery powered by technology and scale."
          align="center"
        />

        {/* Animated Ring + Stats */}
        <div className="relative w-full max-w-[700px] mx-auto mt-8" style={{ aspectRatio: '1 / 0.85' }}>

          {/* Outer subtle ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-[10%] rounded-full border border-[var(--color-border)]"
          />

          {/* Animated progress ring — SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="absolute inset-[18%] flex items-center justify-center"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
              {/* Background circle */}
              <circle
                cx="100" cy="100" r="85"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="6"
              />
              {/* Animated progress arc */}
              <motion.circle
                cx="100" cy="100" r="85"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 85}
                initial={{ strokeDashoffset: 2 * Math.PI * 85 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 85 * 0.25 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
              />
            </svg>

            {/* Center stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <span
                className="text-3xl md:text-5xl font-bold text-[var(--color-primary)]"
                style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
              >
                20k+
              </span>
              <span className="text-sm md:text-base text-[var(--color-text-secondary)] mt-1">
                Active Riders
              </span>
            </motion.div>
          </motion.div>

          {/* Floating rider avatars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-3 border-[var(--color-surface)] shadow-lg flex items-center justify-center text-2xl"
            style={{ top: '6%', left: '42%' }}
          >
            👷
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-3 border-[var(--color-surface)] shadow-lg flex items-center justify-center text-2xl"
            style={{ top: '28%', right: '10%' }}
          >
            🧑‍💼
          </motion.div>

          {/* Floating stat cards */}
          {IMPACT_STATS.map((stat, i) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, x: i === 1 ? -30 : 30, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.2, duration: 0.6, ease: 'easeOut' }}
              className="absolute bg-[var(--color-surface)] rounded-xl shadow-md border border-[var(--color-border)] px-4 py-3 flex items-start gap-3 max-w-[220px] hover:shadow-lg transition-shadow"
              style={stat.position as React.CSSProperties}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ backgroundColor: `${stat.color}18` }}
              >
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                >
                  <path
                    d="M7 1L9 5L13 5.5L10 8.5L11 13L7 11L3 13L4 8.5L1 5.5L5 5L7 1Z"
                    fill={stat.color}
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold text-[var(--color-text-primary)] leading-snug">
                  {stat.value} {stat.label}
                </p>
                <p className="text-[10px] text-[var(--color-text-secondary)] mt-1">
                  {stat.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {[
            {
              icon: Wifi,
              title: 'IOT Enabled',
              description: 'Get real-time tracking of vehicles deployed',
            },
            {
              icon: BatteryCharging,
              title: 'Robust EV Infra',
              description: 'Get extensive network of swapping stations',
            },
            {
              icon: Wrench,
              title: '90%+ uptime',
              description: 'AI powered vehicle maintenance',
            },
            {
              icon: Headset,
              title: '24/7 Support',
              description: 'AI-Enabled Chatbot for ticket resolution',
            },
          ].map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5 text-[#008744]">
                  <Icon size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
