'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

const OFFER_CARDS = [
  {
    title: 'EV for Deliveries',
    description: 'Get Dedicated Rider for Last Mile Deliveries',
    image: '/assets/images/sections/ev-delivery.jpg',
    color: '#0A66FF',
  },
  {
    title: '2 Wheeler Rentals',
    description: 'Save on Petrol Cost, Rent a E-scooter',
    image: '/assets/images/sections/2wheeler.jpg',
    color: '#10B981',
  },
  {
    title: '3 Wheeler Rentals',
    description: 'Ensure Big Orders Delivered Emission-Free',
    image: '/assets/images/sections/3wheeler.jpg',
    color: '#F59E0B',
  },
  {
    title: '4 Wheeler Rentals',
    description: 'Heavy-Duty Electric Cargo for Bulk ride',
    image: '/assets/images/sections/4wheeler.jpg',
    color: '#8B5CF6',
  },
  {
    title: 'Rent-to-Own',
    description: 'Rent Today, Own Your EV Tomorrow',
    image: '/assets/images/sections/rent-to-own.jpg',
    color: '#EC4899',
  },
  {
    title: 'Snigo Ads',
    description: 'Advertise Your Brand on Our EV Fleet',
    image: '/assets/images/sections/snigo-ads.jpg',
    color: '#0EA5E9',
  },
]

export default function WhatWeOffer() {
  return (
    <section id="services" className="bg-[var(--color-surface)] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="What We Offer"
          subtitle="Comprehensive EV solutions for businesses, riders, and brands."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2"
        >
          {OFFER_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="group bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-border-hover)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer"
            >
              {/* Image area */}
              <div className="relative h-[200px] overflow-hidden bg-[var(--color-surface-muted)]">
                <div
                  className="absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}15, ${card.color}08)`,
                  }}
                >
                  {/* Placeholder — shows emoji until real images are added */}
                  <span className="text-5xl opacity-40">
                    {i === 0 ? '🚚' : i === 1 ? '🛵' : i === 2 ? '📦' : i === 3 ? '🚗' : i === 4 ? '🔑' : '📢'}
                  </span>
                </div>
                {/* Image overlay — uncomment when real images are available */}
                {/* <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> */}

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
              </div>

              {/* Text content */}
              <div className="px-5 pb-5 pt-2 text-center">
                <h3
                  className="text-lg font-bold text-[var(--color-text-primary)] mb-1.5"
                  style={{ fontFamily: 'var(--font-satoshi), system-ui, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
