'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import {
  Truck,
  Key,
  Megaphone,
  Bike,
  Package,
  Car,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Key,
  Megaphone,
  Bike,
  Package,
  Car,
}

interface MegaMenuProps {
  isOpen: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] bg-[var(--color-surface)] rounded-xl shadow-lg border border-[var(--color-border)] p-4 z-50"
        >
          <div className="grid grid-cols-2 gap-1">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Truck
              return (
                <a
                  key={service.id}
                  href="#services"
                  className="group flex items-start gap-3 p-3 rounded-lg transition-all duration-150 hover:bg-[#EFF6FF] hover:border-l-[3px] hover:border-l-[var(--color-primary)] border-l-[3px] border-l-transparent"
                >
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(10,102,255,0.08)] group-hover:bg-[var(--color-primary)] transition-colors duration-150 shrink-0 mt-0.5">
                    <Icon
                      size={18}
                      className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-150"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {service.title}
                    </p>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                      {service.description}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
