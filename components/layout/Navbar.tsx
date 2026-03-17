'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useScrollPosition } from '@/lib/hooks/useScrollPosition'
import ThemeToggle from '@/components/ui/ThemeToggle'

const NAV_ITEMS = [
  { label: 'About Us', href: '/aboutus' },
  { label: 'Services', href: '#', hasDropdown: true },
  { label: 'Advertising', href: '/advertising' },
  { label: 'Partner With Us', href: '/partner-with-us' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get the App', href: '#', isCta: true },
]

const SERVICES_DROPDOWN = {
  forRiders: [
    { title: '2W Rental', description: 'Affordable electric scooter rentals for daily riders', emoji: '🛵' },
    { title: 'Rent to Own', description: 'Rent an EV today and own it through easy EMIs', emoji: '🔑' },
    { title: '3W Loader', description: 'Electric three-wheeler cargo for heavy loads', emoji: '🚛' },
  ],
  forPartners: [
    { title: 'Delivery Solution', description: 'Dedicated EV riders for last-mile deliveries', emoji: '📦' },
    { title: 'Brand Advertising', description: 'Advertise your brand on our EV fleet', emoji: '📢' },
    { title: 'Fleet Management', description: 'End-to-end fleet management with IoT tracking', emoji: '🔧' },
  ],
}

const MEGA_MENU_COLUMNS = [
  {
    heading: 'Get Started',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/aboutus' },
      { label: 'Technologies', href: '#' },
      { label: 'Environment', href: '#' },
    ],
  },
  {
    heading: 'For Riders',
    links: [
      { label: '2W Services', href: '#' },
      { label: 'Rent to Own', href: '#' },
      { label: '3W Loader', href: '#' },
    ],
  },
  {
    heading: 'For Partners',
    links: [
      { label: 'Franchise (FOCO)', href: '/partner-with-us' },
      { label: 'Franchise (FOFO)', href: '/partner-with-us' },
      { label: 'Advertisement', href: '/advertising' },
      { label: 'EV for Delivery', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Blogs', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
]

const PROMO_CARDS = [
  { emoji: '🛵', title: 'Delivery Solution', subtitle: 'for your business', bg: '#0A66FF' },
  { emoji: '⚡', title: 'Ab Kamao aur bhi Zyada', subtitle: 'Unlimited Kms', bg: '#10B981' },
  { emoji: '🚛', title: '₹70,000 to ₹80,000', subtitle: 'monthly with a 3Wheeler', bg: '#0891B2' },
  { emoji: '📈', title: 'Earn 34%+ ROI', subtitle: 'in just 3 years', bg: '#F59E0B' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null)

  const isScrolled = scrollY > 80

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setServicesOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const handleServicesEnter = () => {
    if (servicesTimeout.current) clearTimeout(servicesTimeout.current)
    setServicesOpen(true)
  }

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div 
          className={`max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px] transition-all duration-500 rounded-2xl ${
            isScrolled
              ? 'bg-[var(--color-surface)]/90 backdrop-blur-xl shadow-2xl border border-[var(--color-border)]/50 mx-4 md:mx-auto'
              : 'bg-white/10 backdrop-blur-md border border-white/20 mx-4 md:mx-auto'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <Image
              src="/assets/images/logo/logo-cyan.png"
              alt="Snigoride"
              width={100}
              height={100}
              className="transition-transform duration-300 group-hover:scale-105 h-auto w-20 md:w-24"
              priority
            />
          </Link>

          {/* Desktop Inline Nav Links — centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    className={`text-base font-medium transition-colors duration-200 hover:text-[var(--color-primary)] cursor-pointer flex items-center gap-1 ${
                      isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'
                    }`}
                  >
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" className="mt-0.5">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </button>

                  {/* Services Hover Dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={handleServicesEnter}
                        onMouseLeave={handleServicesLeave}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] bg-[var(--color-surface)] rounded-2xl shadow-2xl border border-[var(--color-border)] overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-0">
                          {/* For Riders */}
                          <div className="p-6 border-r border-[var(--color-border)]">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-4">
                              For Riders
                            </h4>
                            <div className="space-y-3">
                              {SERVICES_DROPDOWN.forRiders.map((s) => (
                                <Link
                                  key={s.title}
                                  href="#"
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors group"
                                >
                                  <span className="text-2xl mt-0.5">{s.emoji}</span>
                                  <div>
                                    <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                                      {s.title}
                                    </p>
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                                      {s.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* For Partners */}
                          <div className="p-6">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] mb-4">
                              For Partners
                            </h4>
                            <div className="space-y-3">
                              {SERVICES_DROPDOWN.forPartners.map((s) => (
                                <Link
                                  key={s.title}
                                  href="#"
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--color-surface-muted)] transition-colors group"
                                >
                                  <span className="text-2xl mt-0.5">{s.emoji}</span>
                                  <div>
                                    <p className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                                      {s.title}
                                    </p>
                                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
                                      {s.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : item.isCta ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-200 hover:text-[var(--color-primary)] ${
                    isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-3">
            <div className={isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'}>
              <ThemeToggle />
            </div>
            <button
              className="p-2 cursor-pointer rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <X size={26} className={isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'} />
              ) : (
                <Menu size={26} className={isScrolled ? 'text-[var(--color-text-primary)]' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ─── Full Menu Popup (Hamburger) ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-[55]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-4 left-4 right-4 md:left-[5%] md:right-[5%] lg:left-[8%] lg:right-[8%] z-[60] bg-[var(--color-surface)] rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 md:p-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
                  <Image src="/assets/images/logo/logo-cyan.png" alt="Snigoride" width={64} height={64} className="h-auto w-16" />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-[var(--color-surface-muted)] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={28} className="text-[var(--color-text-primary)]" />
                </button>
              </div>

              <div className="border-t border-[var(--color-border)]" />

              {/* 4-Column Grid */}
              <div className="p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {MEGA_MENU_COLUMNS.map((col, colIdx) => (
                    <motion.div
                      key={col.heading}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + colIdx * 0.06, duration: 0.35 }}
                    >
                      <h3 className="text-[var(--color-primary)] font-bold text-[15px] mb-4">
                        {col.heading}
                      </h3>
                      <ul className="space-y-3">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setMenuOpen(false)}
                              className="text-[var(--color-text-primary)] text-sm hover:text-[var(--color-primary)] transition-colors duration-200"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="bg-[var(--color-primary)] px-6 md:px-8 py-5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {PROMO_CARDS.map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.06, duration: 0.3 }}
                      className="bg-white/15 rounded-xl p-4 cursor-pointer hover:bg-white/25 transition-colors"
                    >
                      <span className="text-2xl">{card.emoji}</span>
                      <p className="text-white text-sm font-bold mt-1 leading-snug">{card.title}</p>
                      <p className="text-white/70 text-xs mt-0.5">{card.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
