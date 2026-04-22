'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const OFFER_CARDS = [
  {
    title: 'EV for Deliveries',
    description: 'Get Dedicated Rider for Last Mile Deliveries',
    image: '/assets/images/sections/ev-delivery.png',
    color: '#0A66FF',
    href: '/ev-deliveries',
    features: [
      'Dedicated professional riders',
      'Optimized last-mile routes',
      'Zero emissions, 100% green',
      'Live delivery tracking'
    ]
  },
  {
    title: '2 Wheeler Rentals',
    description: 'Save on Petrol Cost, Rent a E-scooter',
    image: '/assets/images/sections/2wheeler.png',
    color: '#10B981',
    href: '/2-wheeler-rentals',
    features: [
      'Affordable daily & monthly plans',
      'No fuel or maintenance costs',
      'Home doorstep delivery',
      'Reliable high-performance EVs'
    ]
  },
  {
    title: '3 Wheeler Rentals',
    description: 'Ensure Big Orders Delivered Emission-Free',
    image: '/assets/images/sections/3wheeler.png',
    color: '#F59E0B',
    href: '/3-wheeler-rentals',
    features: [
      'High payload cargo storage',
      'Passenger e-rickshaw options',
      'Battery swapping technology',
      'Low maintenance & running cost'
    ]
  },
  {
    title: '4 Wheeler Rentals',
    description: 'Heavy-Duty Electric Cargo for Bulk ride',
    image: '/assets/images/sections/4-wheeler-rentals.png',
    color: '#8B5CF6',
    href: '/4-wheeler-rentals',
    features: [
      'Heavy-duty bulk logistics',
      'GPS integrated fleet management',
      'Long-range battery performance',
      'Advanced safety standards'
    ]
  },
  {
    title: 'Rent-to-Own',
    description: 'Rent Today, Own Your EV Tomorrow',
    image: '/assets/images/sections/ent-to-own.png',
    color: '#EC4899',
    href: '/rent-to-own',
    features: [
      'Ownership with zero down payment',
      'Flexible weekly payment terms',
      'Full insurance coverage included',
      'Path to asset ownership'
    ]
  },
  {
    title: 'Snigo Ads',
    description: 'Advertise Your Brand on Our EV Fleet',
    image: '/assets/images/sections/snigo-ads.png',
    color: '#0EA5E9',
    href: '/snigo-ads',
    features: [
      'Maximum street-level visibility',
      'Targeted regional demographics',
      'Dynamic QR code integration',
      'Cost-effective fleet branding'
    ]
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {OFFER_CARDS.map((card, i) => (
            <Link key={card.title} href={card.href} className="block group h-full">
              <motion.div
                variants={fadeUp}
                className="flex flex-col h-full bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden group-hover:border-[var(--color-border-hover)] group-hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer"
              >
                {/* Image area */}
                <div className="relative h-[200px] shrink-0 overflow-hidden bg-[var(--color-surface-muted)]">
                  {/* Image overlay */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
                </div>

                {/* Text content */}
                <div className="flex flex-col flex-grow px-6 pb-6 pt-2">
                  <h3
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors"
                    style={{ fontFamily: 'var(--font-satoshi), system-ui, sans-serif' }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 font-medium">
                    {card.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {card.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: card.color }} />
                        <span className="text-sm text-[var(--color-text-secondary)] leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More link */}
                  <div className="flex items-center text-sm font-semibold mt-auto pt-4 border-t border-[var(--color-border)] group-hover:border-[var(--color-border-hover)] transition-colors" style={{ color: card.color }}>
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
