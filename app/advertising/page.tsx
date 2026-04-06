'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Shirt, Bike, ShieldCheck, Truck, Package, MapPin, ArrowRight } from 'lucide-react'
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
  { title: 'T-Shirt',      icon: <Shirt strokeWidth={1} className="w-[1em] h-[1em] text-yellow-300 drop-shadow-lg" />, desc: 'Our riders can become brand ambassadors by wearing t-shirts featuring your logo and messaging. This personal touch creates a stronger connection with the audience on every delivery.' },
  { title: 'Electric 2W',  icon: <Bike strokeWidth={1} className="w-[1em] h-[1em] text-teal-300 drop-shadow-lg" />, desc: 'Our electric scooters, widely used in urban areas, provide a mobile advertising canvas. Your brand can gain extensive exposure as our scooters navigate through high-traffic zones daily.' },
  { title: 'Helmet',       icon: <ShieldCheck strokeWidth={1} className="w-[1em] h-[1em] text-rose-300 drop-shadow-lg" />, desc: 'Helmets are a vital part of our rider\'s gear, offering another prime location for your brand. With your logo prominently displayed, every ride becomes a promotional event.' },
  { title: '3W Loader',    icon: <Truck strokeWidth={1} className="w-[1em] h-[1em] text-indigo-300 drop-shadow-lg" />, desc: 'Our electric 3-wheelers cover wider routes with large branding panels. The bigger canvas ensures maximum visibility across industrial zones, markets, and residential areas.' },
  { title: 'Delivery Box', icon: <Package strokeWidth={1} className="w-[1em] h-[1em] text-fuchsia-300 drop-shadow-lg" />, desc: 'The delivery box is front and centre during every order handoff. Your brand logo on the box ensures a moment of direct engagement with the end customer at point of delivery.' },
]

const CITIES = [
  { city: 'Delhi',      state: 'Delhi' },
  { city: 'Noida',      state: 'Uttar Pradesh' },
  { city: 'Gurugram',   state: 'Haryana' },
  { city: 'Faridabad',  state: 'Haryana' },
  { city: 'Ghaziabad',  state: 'Uttar Pradesh' },
  { city: 'Dehradun',   state: 'Uttarakhand' },
  { city: 'Haldwani',   state: 'Uttarakhand' },
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
            BRANDING SPOTLIGHT (BENTO GRID)
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 section-muted-textured relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[var(--color-text-secondary)] text-sm font-semibold tracking-widest uppercase mb-3"
              >
                Explore The Canvas
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
              >
                Give a spotlight to your brand
              </motion.h2>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
              
              {/* Card 0: T-Shirt (1x1) */}
              <motion.div
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group col-span-1 row-span-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-8"
              >
                {/* Vibrant Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-600/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-6 right-6 text-6xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 origin-bottom-right">
                  {BRANDING[0].icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{BRANDING[0].title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">{BRANDING[0].desc}</p>
                </div>
              </motion.div>

              {/* Card 1: Electric 2W (Featured - 2x2 on Desktop) */}
              <motion.div
                variants={fadeUp(1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group col-span-1 md:col-span-2 row-span-1 md:row-span-2 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-center p-8 md:p-12"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-700/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex-1 mb-8 md:mb-0 md:pr-8">
                  <span className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold rounded-full mb-4 border border-[var(--color-primary)]/30">
                    Highest Visibility
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-4">{BRANDING[1].title}</h3>
                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed max-w-md">{BRANDING[1].desc}</p>
                </div>

                <div className="relative z-10 text-[100px] md:text-[140px] lg:text-[180px] drop-shadow-2xl group-hover:scale-110 group-hover:translate-x-4 transition-transform duration-700">
                  {BRANDING[1].icon}
                </div>
              </motion.div>

              {/* Card 2: Helmet (1x1) */}
              <motion.div
                variants={fadeUp(2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group col-span-1 row-span-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-red-700/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-6 right-6 text-6xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 origin-bottom-right drop-shadow-xl">
                  {BRANDING[2].icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{BRANDING[2].title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">{BRANDING[2].desc}</p>
                </div>
              </motion.div>

              {/* Card 3: 3W Loader (1x1) */}
              <motion.div
                variants={fadeUp(3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group col-span-1 row-span-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-700/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-6 right-6 text-6xl group-hover:scale-110 group-hover:-translate-x-2 transition-transform duration-500 origin-bottom-right drop-shadow-xl">
                  {BRANDING[3].icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{BRANDING[3].title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">{BRANDING[3].desc}</p>
                </div>
              </motion.div>

              {/* Card 4: Delivery Box (2x1 on Desktop) */}
              <motion.div
                variants={fadeUp(4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group col-span-1 md:col-span-2 row-span-1 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-md overflow-hidden hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500 flex items-center p-8 md:px-12"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-700/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 text-[80px] drop-shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 mr-8 hidden sm:block">
                  {BRANDING[4].icon}
                </div>
                
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-text-primary)] mb-2">{BRANDING[4].title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-lg">{BRANDING[4].desc}</p>
                </div>
                
                {/* Mobile emoji fallback */}
                <div className="absolute top-6 right-6 text-5xl group-hover:scale-110 sm:hidden">
                  {BRANDING[4].icon}
                </div>
              </motion.div>

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

            <div className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto">
              {CITIES.map((c, i) => (
                <motion.div
                  key={c.city}
                  variants={fadeUp(i)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group relative flex items-center gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] rounded-full px-7 py-4 cursor-default transition-all duration-400 shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Glowing active dot */}
                  <div className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
                  </div>

                  {/* Icon */}
                  <div className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors duration-300 shrink-0">
                    <MapPin size={22} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col text-left pr-2">
                    <h3 className="text-[0.95rem] font-bold text-[var(--color-text-primary)] leading-tight mb-0.5">{c.city}</h3>
                    <p className="text-[10px] text-[var(--color-primary)] font-semibold tracking-wide uppercase">{c.state}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[1000px] mx-auto bg-[#0A0F1A] border border-[var(--color-primary)]/20 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-full bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-teal-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}>
                Ready to Put Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[var(--color-primary)]">Brand on Wheels?</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl mb-10 max-w-[600px] mx-auto leading-relaxed">
                Get in touch with our advertising team to explore custom branding packages starting at just <span className="text-white font-bold tracking-wide border-b border-teal-400/50 pb-0.5">₹0.10/view</span>.
              </p>
              
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-[var(--color-primary)] text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_var(--color-primary)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
