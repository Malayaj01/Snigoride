'use client'
import { motion } from 'framer-motion'
import { fadeUp, cardHover } from '@/lib/animations'
import {
  Truck,
  Key,
  Megaphone,
  Bike,
  Package,
  Car,
  ArrowRight,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Key,
  Megaphone,
  Bike,
  Package,
  Car,
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const Icon = iconMap[icon] || Truck

  return (
    <motion.div
      variants={fadeUp}
      initial="rest"
      whileHover="hover"
      className="group relative bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-6 transition-colors duration-200 hover:border-[var(--color-border-hover)] cursor-pointer"
    >
      <motion.div variants={cardHover} className="h-full">
        {/* Icon */}
        <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-colors duration-200 bg-[rgba(10,102,255,0.08)] group-hover:bg-[var(--color-primary)]">
          <Icon
            size={20}
            className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-200"
          />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More */}
        <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Learn more <ArrowRight size={14} />
        </span>
      </motion.div>
    </motion.div>
  )
}
