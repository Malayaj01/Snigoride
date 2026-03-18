'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'

import Link from 'next/link'

const OFFER_CARDS = [
  {
    title: 'EV for Deliveries',
    description: 'Get Dedicated Rider for Last Mile Deliveries',
    image: '/assets/images/sections/ev-delivery.png',
    color: '#0A66FF',
    href: '/ev-deliveries',
  },
  {
    title: '2 Wheeler Rentals',
    description: 'Save on Petrol Cost, Rent a E-scooter',
    image: '/assets/images/sections/2wheeler.png',
    color: '#10B981',
    href: '/2-wheeler-rentals',
  },
  {
    title: '3 Wheeler Rentals',
    description: 'Ensure Big Orders Delivered Emission-Free',
    image: '/assets/images/sections/3wheeler.png',
    color: '#F59E0B',
    href: '/3-wheeler-rentals',
  },
  {
    title: '4 Wheeler Rentals',
    description: 'Heavy-Duty Electric Cargo for Bulk ride',
    image: '/assets/images/sections/4-wheeler-rentals.png',
    color: '#8B5CF6',
    href: '/4-wheeler-rentals',
  },
  {
    title: 'Rent-to-Own',
    description: 'Rent Today, Own Your EV Tomorrow',
    image: '/assets/images/sections/ent-to-own.png',
    color: '#EC4899',
    href: '/rent-to-own',
  },
  {
    title: 'Snigo Ads',
    description: 'Advertise Your Brand on Our EV Fleet',
    image: '/assets/images/sections/snigo-ads.png',
    color: '#0EA5E9',
    href: '/snigo-ads',
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
            <Link key={card.title} href={card.href} className="block group">
              <motion.div
                variants={fadeUp}
                className="h-full bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden group-hover:border-[var(--color-border-hover)] group-hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer"
              >
                {/* Image area */}
                <div className="relative h-[200px] overflow-hidden bg-[var(--color-surface-muted)]">
                  {/* Image overlay */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
                </div>

                {/* Text content */}
                <div className="px-5 pb-5 pt-2 text-center h-full">
                  <h3
                    className="text-lg font-bold text-[var(--color-text-primary)] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors"
                    style={{ fontFamily: 'var(--font-satoshi), system-ui, sans-serif' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
