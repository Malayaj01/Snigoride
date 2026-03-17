'use client'
import { useState, useDeferredValue, useMemo } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { CALC } from '@/lib/constants'
import { formatINR } from '@/lib/utils'
import SectionHeading from '@/components/ui/SectionHeading'

function AnimatedNumber({ value, prefix = '' }: { value: number; prefix?: string }) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 })
  const display = useTransform(spring, (v) =>
    prefix + Math.round(v).toLocaleString('en-IN')
  )

  // Update spring target when value changes
  spring.set(value)

  return (
    <motion.span
      style={{
        fontFamily: 'var(--font-jetbrains), monospace',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {display}
    </motion.span>
  )
}

export default function SavingsCalculator() {
  const [dailyKm, setDailyKm] = useState(80)
  const [vehicles, setVehicles] = useState(5)
  const [isAnnual, setIsAnnual] = useState(false)

  const deferredKm = useDeferredValue(dailyKm)
  const deferredVehicles = useDeferredValue(vehicles)

  const results = useMemo(() => {
    const monthlyDistance = deferredKm * deferredVehicles * CALC.workingDays
    const fuelSavings =
      (CALC.petrolCostPerKm - CALC.evCostPerKm) * monthlyDistance
    const maintenanceSavings =
      (CALC.petrolMaintenance - CALC.evMaintenance) * deferredVehicles
    const totalSavings = fuelSavings + maintenanceSavings
    const co2Reduced = CALC.co2PerKmPetrol * monthlyDistance

    const multiplier = isAnnual ? 12 : 1
    return {
      fuelSavings: Math.round(fuelSavings * multiplier),
      maintenanceSavings: Math.round(maintenanceSavings * multiplier),
      totalSavings: Math.round(totalSavings * multiplier),
      co2Reduced: Math.round(co2Reduced * multiplier),
      period: isAnnual ? '/year' : '/month',
    }
  }, [deferredKm, deferredVehicles, isAnnual])

  const stats = [
    { emoji: '💰', label: 'Fuel Savings', value: results.fuelSavings, prefix: '₹' },
    { emoji: '🔧', label: 'Maintenance Savings', value: results.maintenanceSavings, prefix: '₹' },
    { emoji: '🌿', label: 'CO₂ Reduced', value: results.co2Reduced, prefix: '', suffix: ` kg${results.period}` },
    { emoji: '💵', label: 'Total Savings', value: results.totalSavings, prefix: '₹' },
  ]

  return (
    <section className="bg-[var(--color-surface)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="SAVINGS CALCULATOR"
          title="How Much Can You Save?"
          subtitle="See the real cost difference between petrol and electric delivery."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left — Inputs (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Slider 1 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label
                  htmlFor="daily-km"
                  className="text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Daily delivery distance
                </label>
                <span className="text-sm font-semibold text-[var(--color-primary)] bg-[rgba(10,102,255,0.08)] px-2.5 py-1 rounded-full">
                  {dailyKm} km
                </span>
              </div>
              <input
                id="daily-km"
                type="range"
                min={10}
                max={300}
                value={dailyKm}
                onChange={(e) => setDailyKm(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                <span>10 km</span>
                <span>300 km</span>
              </div>
            </div>

            {/* Slider 2 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label
                  htmlFor="vehicles"
                  className="text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Number of vehicles
                </label>
                <span className="text-sm font-semibold text-[var(--color-primary)] bg-[rgba(10,102,255,0.08)] px-2.5 py-1 rounded-full">
                  {vehicles}
                </span>
              </div>
              <input
                id="vehicles"
                type="range"
                min={1}
                max={50}
                value={vehicles}
                onChange={(e) => setVehicles(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-[var(--color-text-secondary)] mt-1">
                <span>1</span>
                <span>50</span>
              </div>
            </div>
          </div>

          {/* Right — Results (40%) */}
          <div className="lg:col-span-2">
            {/* Monthly / Annual Toggle */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <span
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  !isAnnual
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-secondary)]'
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label={`Switch to ${isAnnual ? 'monthly' : 'annual'} view`}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer ${
                  isAnnual ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow-sm ${
                    isAnnual ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium cursor-pointer transition-colors ${
                  isAnnual
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-secondary)]'
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual
              </span>
            </div>

            {/* Stat Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="bg-[var(--color-surface-muted)] rounded-xl p-4 border border-[var(--color-border)]"
                >
                  <span className="text-lg mb-1 block" aria-hidden="true">
                    {stat.emoji}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] block">
                    <AnimatedNumber value={stat.value} prefix={stat.prefix} />
                    {stat.suffix || ''}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)] mt-1 block">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
