'use client'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroBackground from '@/components/ui/HeroBackground'

/* ─── Animation helpers ─── */
const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const } },
})

/* ─── SVG Icons ─── */
function EvIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
      <circle cx="24" cy="24" r="6" fill="var(--color-primary)" />
    </svg>
  )
}
function ViewsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M16 34 C16 34 20 20 24 14 C28 20 32 34 32 34" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="34" r="4" fill="var(--color-primary)" opacity="0.6" />
      <circle cx="32" cy="34" r="4" fill="var(--color-primary)" opacity="0.6" />
      <circle cx="24" cy="14" r="4" fill="var(--color-primary)" />
    </svg>
  )
}
function DeliveryIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="18" cy="20" r="6" fill="var(--color-primary)" opacity="0.7" />
      <circle cx="30" cy="20" r="6" fill="var(--color-primary)" opacity="0.5" />
      <path d="M24 32 C20 28 14 30 14 34" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M24 32 C28 28 34 30 34 34" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 16 L34 12" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function DashboardIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="10" y="12" width="28" height="20" rx="3" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
      <rect x="14" y="16" width="8" height="4" rx="1" fill="var(--color-primary)" opacity="0.5" />
      <rect x="26" y="16" width="8" height="4" rx="1" fill="var(--color-primary)" opacity="0.5" />
      <rect x="14" y="24" width="20" height="4" rx="1" fill="var(--color-primary)" opacity="0.3" />
      <line x1="24" y1="32" x2="24" y2="36" stroke="var(--color-primary)" strokeWidth="2" />
      <line x1="18" y1="36" x2="30" y2="36" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function PriceIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M14 32 L22 18 L30 26 L36 14" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14" cy="32" r="3" fill="var(--color-primary)" opacity="0.5" />
      <circle cx="36" cy="14" r="3" fill="var(--color-primary)" />
    </svg>
  )
}
function TransparencyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="22" r="12" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
      <path d="M24 22 L24 14" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 22 L30 22" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 36 L28 36" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="22" r="2" fill="var(--color-primary)" />
    </svg>
  )
}
function SupportIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="20" r="10" stroke="var(--color-primary)" strokeWidth="2.5" fill="none" />
      <path d="M14 20 C14 20 12 20 12 24 C12 28 14 28 14 28" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
      <path d="M34 20 C34 20 36 20 36 24 C36 28 34 28 34 28" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
      <circle cx="20" cy="18" r="1.5" fill="var(--color-primary)" />
      <circle cx="28" cy="18" r="1.5" fill="var(--color-primary)" />
      <path d="M20 24 C22 26 26 26 28 24" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M34 26 C36 30 30 34 24 36" stroke="var(--color-primary)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}
function TechIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="16" y="22" width="16" height="10" rx="3" fill="var(--color-primary)" opacity="0.3" />
      <circle cx="20" cy="28" r="3" fill="var(--color-primary)" opacity="0.7" />
      <circle cx="28" cy="28" r="3" fill="var(--color-primary)" opacity="0.7" />
      <path d="M24 22 L24 16" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 16 L28 16" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 14 C14 14 16 10 18 12" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 14 C34 14 32 10 30 12" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 18 C12 16 14 18 14 18" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 18 C36 16 34 18 34 18" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* City building icons */
function CityIcon1() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="14" y="12" width="12" height="30" rx="2" fill="var(--color-primary)" opacity="0.85" />
      <rect x="28" y="20" width="10" height="22" rx="2" fill="var(--color-primary)" opacity="0.65" />
      <rect x="17" y="16" width="3" height="3" rx="0.5" fill="white" /><rect x="17" y="22" width="3" height="3" rx="0.5" fill="white" />
      <rect x="22" y="16" width="3" height="3" rx="0.5" fill="white" /><rect x="22" y="22" width="3" height="3" rx="0.5" fill="white" />
      <rect x="31" y="24" width="3" height="3" rx="0.5" fill="white" /><rect x="31" y="30" width="3" height="3" rx="0.5" fill="white" />
      <rect x="19" y="36" width="4" height="6" rx="1" fill="white" />
    </svg>
  )
}
function CityIcon2() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="18" y="28" width="16" height="4" fill="var(--color-primary)" opacity="0.7" />
      <rect x="22" y="14" width="8" height="14" rx="4" stroke="var(--color-primary)" strokeWidth="2" fill="none" />
      <rect x="14" y="32" width="4" height="10" fill="var(--color-primary)" opacity="0.5" />
      <rect x="34" y="32" width="4" height="10" fill="var(--color-primary)" opacity="0.5" />
      <line x1="26" y1="14" x2="26" y2="10" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
function CityIcon3() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="16" y="28" width="20" height="14" rx="2" fill="var(--color-primary)" opacity="0.3" />
      <rect x="20" y="18" width="12" height="10" rx="1" fill="var(--color-primary)" opacity="0.6" />
      <path d="M26 10 L18 18 L34 18 Z" fill="var(--color-primary)" opacity="0.8" />
      <rect x="20" y="32" width="3" height="4" rx="0.5" fill="white" /><rect x="26" y="32" width="3" height="4" rx="0.5" fill="white" />
      <rect x="32" y="32" width="3" height="4" rx="0.5" fill="white" />
    </svg>
  )
}
function CityIcon4() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <rect x="12" y="22" width="10" height="20" rx="2" fill="var(--color-primary)" opacity="0.5" />
      <rect x="24" y="14" width="14" height="28" rx="2" fill="var(--color-primary)" opacity="0.8" />
      <rect x="14" y="26" width="3" height="3" rx="0.5" fill="white" /><rect x="14" y="32" width="3" height="3" rx="0.5" fill="white" />
      <rect x="27" y="18" width="3" height="3" rx="0.5" fill="white" /><rect x="33" y="18" width="3" height="3" rx="0.5" fill="white" />
      <rect x="27" y="24" width="3" height="3" rx="0.5" fill="white" /><rect x="33" y="24" width="3" height="3" rx="0.5" fill="white" />
      <rect x="27" y="30" width="3" height="3" rx="0.5" fill="white" /><rect x="33" y="30" width="3" height="3" rx="0.5" fill="white" />
      <rect x="29" y="36" width="4" height="6" rx="1" fill="white" />
      <path d="M20 22 L17 16 L14 22" stroke="var(--color-primary)" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

/* ─── Data ─── */
const STATS = [
  { icon: <EvIcon />,           title: '20,000+ EVs',            desc: 'Go hyperlocal with our growing EV Fleet.' },
  { icon: <ViewsIcon />,        title: '250 Million+ Views',     desc: 'Our EVs attract attention everywhere.' },
  { icon: <DeliveryIcon />,     title: '5M+ Deliveries/Month',   desc: 'Delivery offers visibility beyond ads.' },
  { icon: <DashboardIcon />,    title: 'Tracking Dashboard',     desc: 'Visibility of where your advertisement is.' },
  { icon: <PriceIcon />,        title: 'From ₹0.10/View',        desc: 'High visibility reduces cost per view.' },
  { icon: <TransparencyIcon />, title: '100% Transparency',      desc: 'Audit reports on branding count.' },
  { icon: <SupportIcon />,      title: 'Dedicated Support',      desc: 'To solve your queries and doubts.' },
  { icon: <TechIcon />,         title: 'Tech Enabled',           desc: 'AI Powered intelligence for seamless execution.' },
]

const BRANDING = [
  { title: 'T-Shirt',      emoji: '👕', desc: 'Our riders can become brand ambassadors by wearing t-shirts featuring your logo and messaging. This personal touch creates a stronger connection with the audience on every delivery.' },
  { title: 'Electric 2W',  emoji: '🛵', desc: 'Our electric scooters, widely used in urban areas, provide a mobile advertising canvas. Your brand can gain extensive exposure as our scooters navigate through high-traffic zones daily.' },
  { title: 'Helmet',       emoji: '⛑️', desc: 'Helmets are a vital part of our rider\'s gear, offering another prime location for your brand. With your logo prominently displayed, every ride becomes a promotional event.' },
  { title: '3W Loader',    emoji: '🚛', desc: 'Our electric 3-wheelers cover wider routes with large branding panels. The bigger canvas ensures maximum visibility across industrial zones, markets, and residential areas.' },
  { title: 'Delivery Box',  emoji: '📦', desc: 'The delivery box is front and centre during every order handoff. Your brand logo on the box ensures a moment of direct engagement with the end customer at point of delivery.' },
]

const CITIES = [
  { city: 'Hyderabad',  riders: '6500+', icon: <CityIcon1 /> },
  { city: 'Bengaluru',  riders: '3000+', icon: <CityIcon2 /> },
  { city: 'Chennai',    riders: '500+',  icon: <CityIcon3 /> },
  { city: 'Pune',       riders: '6500+', icon: <CityIcon4 /> },
]

/* ─── Page ─── */
export default function AdvertisingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <HeroBackground />

          <div className="relative z-10 text-center px-6 max-w-[850px] mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              {['Generate', 'Business', 'Leads'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {['on', 'Wheels'].map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <a
                href="#stats"
                className="inline-block mt-10 bg-[var(--color-primary)] text-white px-9 py-4 rounded-full text-base font-bold hover:bg-[var(--color-primary-dark)] hover:scale-105 transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/25"
              >
                Advertise your Brand
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
          >
            <ArrowDown size={20} className="text-white/40 animate-bounce" />
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════
            STATS / FEATURES GRID (8 cards in 4×2)
        ══════════════════════════════════════════ */}
        <section id="stats" className="py-20 px-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.title}
                  variants={fadeUp(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-[var(--color-surface-muted)] rounded-2xl p-7 text-center transition-all duration-300 hover:shadow-lg cursor-default"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1.5">{stat.title}</h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            BRANDING SPOTLIGHT
        ══════════════════════════════════════════ */}
        <section className="py-20 px-6 section-muted-textured">
          <div className="max-w-[1100px] mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[var(--color-text-secondary)] text-sm mb-2"
            >
              Explore a range of branding.
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-12"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              Give a spotlight to your brand
            </motion.h2>

            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BRANDING.slice(0, 3).map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  {/* Image placeholder */}
                  <div className="h-[200px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-6xl">
                    {item.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-[740px]">
              {BRANDING.slice(3).map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp(i + 3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <div className="h-[200px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-6xl">
                    {item.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            YOUR AUDIENCE IS HERE
        ══════════════════════════════════════════ */}
        <section className="py-20 px-6">
          <div className="max-w-[1000px] mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] text-center mb-4"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              Your Audience is Here. So Are We.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[var(--color-text-secondary)] text-center text-sm md:text-base mb-14 max-w-[500px] mx-auto"
            >
              Promote your brand with a sustainability tag and leverage our massive on-ground presence.
            </motion.p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {CITIES.map((c, i) => (
                <motion.div
                  key={c.city}
                  variants={fadeUp(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 text-center hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <div className="flex justify-center mb-3">{c.icon}</div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">{c.city}</h3>
                  <p className="text-sm text-[var(--color-primary)] font-medium">{c.riders} Active Riders</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════════ */}
        <section className="py-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[900px] mx-auto bg-[var(--color-primary)] rounded-3xl p-10 md:p-14 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}>
              Ready to Put Your Brand on Wheels?
            </h2>
            <p className="text-white/80 text-base mb-8 max-w-[500px] mx-auto">
              Get in touch with our advertising team to explore custom branding packages starting at just ₹0.10/view.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[var(--color-primary)] px-8 py-3.5 rounded-full text-base font-bold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started Today
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
