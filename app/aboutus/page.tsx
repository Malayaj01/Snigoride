'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronDown, Mail, ArrowDown } from 'lucide-react'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroBackground from '@/components/ui/HeroBackground'
import MeetOurTeam from '@/components/sections/MeetOurTeam'

/* ─── Animation variants ─── */
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
}

/* ─── Data ─── */
const TEAM = [
  { name: 'Akash Gupta', role: 'CEO & Founder', initials: 'AG', hue: 220 },
  { name: 'Meera Sharma', role: 'COO', initials: 'MS', hue: 340 },
  { name: 'Rahul Singh', role: 'CTO', initials: 'RS', hue: 160 },
  { name: 'Neha Kapoor', role: 'VP, Operations', initials: 'NK', hue: 40 },
  { name: 'Vikram Patel', role: 'Head of Partnerships', initials: 'VP', hue: 280 },
  { name: 'Ananya Reddy', role: 'Head of Marketing', initials: 'AR', hue: 100 },
]

const TEAM_SAYS = [
  { name: 'Akash Gupta', role: 'CEO', quote: 'We started Snigoride because we believe last-mile delivery can be 100% electric without compromising speed or reliability.', rating: 5 },
  { name: 'Meera Sharma', role: 'COO', quote: 'Our operations are powered by data. Every route is optimized, every rider is supported. That\'s the Snigo way.', rating: 5 },
  { name: 'Rahul Singh', role: 'CTO', quote: 'Building IoT-connected fleet management from scratch has been the most rewarding challenge of my career.', rating: 5 },
  { name: 'Neha Kapoor', role: 'VP, Operations', quote: 'Watching our riders go from renting to owning their EVs — that\'s what makes this work meaningful.', rating: 4 },
]

const FAQS = [
  { q: 'What does Snigoride do?', a: 'Snigoride is India\'s fastest-growing EV mobility and logistics startup. We provide electric vehicle rentals, last-mile delivery solutions, EV advertising, and franchise partnerships.' },
  { q: 'How can I rent an EV?', a: 'You can rent a 2-wheeler, 3-wheeler, or 4-wheeler EV through our platform. Simply sign up, complete KYC, choose your vehicle, and start riding.' },
  { q: 'What is the Rent-to-Own program?', a: 'Our Rent-to-Own program allows riders to rent an EV at affordable daily rates, with a portion of each payment going toward ownership. After a set period, the vehicle is fully yours.' },
  { q: 'Which cities do you operate in?', a: 'We currently operate in Hyderabad, Bengaluru, Chennai, Pune, and Kochi — with rapid expansion across Tier-2 cities.' },
  { q: 'How do I become a franchise partner?', a: 'We offer FOCO and FOFO franchise models with full operational support, branding, and technology access. Contact us through the form below to learn more.' },
]

const REASONS = [
  'Become Snigo Franchise',
  'Advertise Your Brand',
  'Join As A Snigo Rider',
  'Business Partnership',
  'Rent to Own',
]

/* ─── Page ─── */
export default function AboutUsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedReason, setSelectedReason] = useState(REASONS[0])
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <>
      <Navbar />
      <main>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <HeroBackground />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-[800px] mx-auto">
            {/* Word-by-word staggered heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              {['Join', 'us', 'in', 'our', 'mission'].map((word, i) => (
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
              {['zero', 'emission'].map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="inline-block mr-[0.3em] text-[var(--color-primary-light)]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <a
                href="#get-in-touch"
                className="inline-block mt-10 bg-[var(--color-primary)] text-white px-9 py-4 rounded-full text-base font-bold hover:bg-[var(--color-primary-dark)] hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Contact us
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
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
            OUR MISSION — slide from left
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
            <motion.div
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="hidden md:block"
            >
              <div className="w-1 h-24 bg-[var(--color-primary)] rounded-full" />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p custom={0} variants={fadeIn} className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3">
                OUR MISSION
              </motion.p>
              <motion.h2 custom={1} variants={fadeIn} className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}>
                Powering Sustainable Last-Mile Mobility
              </motion.h2>
              <motion.p custom={2} variants={fadeIn} className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
                At Snigoride, our mission is to replace every petrol-powered delivery vehicle with an electric one. We believe that sustainable logistics is not just environmentally responsible — it&apos;s economically smarter. By combining cutting-edge IoT technology, AI-powered route optimisation, and an ever-growing rider network, we&apos;re building India&apos;s greenest last-mile delivery platform.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            OUR VISION — slide from right
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 section-muted-textured">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            >
              <motion.p custom={0} variants={fadeIn} className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 md:text-right">
                OUR VISION
              </motion.p>
              <motion.h2 custom={1} variants={fadeIn} className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:text-right" style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}>
                An Electric Future for Every Indian City
              </motion.h2>
              <motion.p custom={2} variants={fadeIn} className="text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed md:text-right">
                We envision a future where every last-mile delivery in India is 100% electric. From Tier-1 metros to Tier-3 towns, Snigoride aims to make clean, affordable EV logistics accessible to businesses of all sizes — empowering riders, reducing carbon footprints, and creating a new economy of green mobility entrepreneurs.
              </motion.p>
            </motion.div>
            <motion.div
              variants={slideFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="hidden md:block"
            >
              <div className="w-1 h-24 bg-[var(--color-primary)] rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MEET OUR TEAM — interactive radial
        ══════════════════════════════════════════ */}
        <MeetOurTeam team={TEAM} />

        {/* ══════════════════════════════════════════
            WHAT OUR TEAM SAYS
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6 section-muted-textured">
          <div className="max-w-[1200px] mx-auto">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 text-center">
              TEAM VOICES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-14 text-center"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              What Our Team Says
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TEAM_SAYS.map((t, i) => (
                <motion.div
                  key={t.name}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 md:p-8 relative hover:shadow-lg transition-all duration-300"
                >
                  <span className="absolute top-3 right-5 text-[80px] leading-none font-bold opacity-[0.04] select-none pointer-events-none" aria-hidden="true">&ldquo;</span>

                  {/* Avatar + Info */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ backgroundColor: `hsl(${TEAM.find(m => m.name === t.name)?.hue || 200}, 55%, 50%)` }}
                    >
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-text-primary)]">{t.name}</p>
                      <p className="text-xs text-[var(--color-text-secondary)]">{t.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={14} className={idx < t.rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'} />
                    ))}
                  </div>

                  <p className="text-[var(--color-text-secondary)] text-sm md:text-[0.94rem] leading-relaxed relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FAQs — animated accordion
        ══════════════════════════════════════════ */}
        <section className="py-24 px-6">
          <div className="max-w-[800px] mx-auto">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3 text-center">FAQ</motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-12 text-center"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-surface)] hover:border-[var(--color-border-hover)] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-sm md:text-base font-semibold text-[var(--color-text-primary)] pr-4">
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={18} className="shrink-0 text-[var(--color-text-secondary)]" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            GET IN TOUCH
        ══════════════════════════════════════════ */}
        <section id="get-in-touch" className="py-24 px-6 section-muted-textured">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)] mb-3">REACH OUT</motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-4xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
              >
                Get In Touch!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[var(--color-text-secondary)] mt-3 max-w-[600px] mx-auto"
              >
                Join India&apos;s Largest EV Rental Platform and Go 100% Electric With Us.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 mt-3 text-sm text-[var(--color-text-secondary)]"
              >
                <Mail size={14} />
                <a href="mailto:help@Snigoride.com" className="hover:text-[var(--color-primary)] transition-colors">
                  help@Snigoride.com
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map */}
              <motion.div
                variants={slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-[var(--color-border)] h-[400px] lg:h-auto shadow-sm"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6!2d78.48!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzQ4LjAiTiA3OMKwMjgnNDguMCJF!5e0!3m2!1sen!2sin!4v1609459200000"
                  width="100%" height="100%"
                  style={{ border: 0, minHeight: 400 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Snigoride Office Location"
                />
              </motion.div>

              {/* Form */}
              <motion.div
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm"
              >
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Thank You!</h3>
                    <p className="text-[var(--color-text-secondary)]">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true) }} className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 block">
                        Choose The Reason
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {REASONS.map((r) => (
                          <label
                            key={r}
                            className={`border rounded-full px-4 py-2 text-xs font-medium cursor-pointer transition-all duration-200 ${
                              selectedReason === r
                                ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-sm'
                                : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                            }`}
                          >
                            <input type="radio" name="reason" value={r} checked={selectedReason === r} onChange={() => setSelectedReason(r)} className="sr-only" />
                            {r}
                          </label>
                        ))}
                      </div>
                    </div>

                    <input type="text" placeholder="Name" required className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-transparent text-sm text-[var(--color-text-primary)] focus:border-[var(--color-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)]" />
                    <input type="email" placeholder="Email" required className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-transparent text-sm text-[var(--color-text-primary)] focus:border-[var(--color-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)]" />
                    <input type="tel" placeholder="Mobile Number" required className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-transparent text-sm text-[var(--color-text-primary)] focus:border-[var(--color-primary)] outline-none transition-colors placeholder:text-[var(--color-text-secondary)]" />
                    <select className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-transparent text-sm text-[var(--color-text-secondary)] focus:border-[var(--color-primary)] outline-none transition-colors" defaultValue="">
                      <option value="" disabled>How Many Vehicles</option>
                      <option value="1-5">1–5</option>
                      <option value="6-20">6–20</option>
                      <option value="21-50">21–50</option>
                      <option value="50+">50+</option>
                    </select>

                    <button type="submit" className="w-full bg-[var(--color-primary)] text-white py-3.5 rounded-xl text-sm font-bold hover:bg-[var(--color-primary-dark)] hover:shadow-lg transition-all duration-300 cursor-pointer">
                      Submit
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
