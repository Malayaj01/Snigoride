'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, ExternalLink, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

/* ─── Office Data ─── */
const OFFICES = [
  {
    city: 'Hyderabad',
    address: 'Plot 42, Hitec City, Madhapur, Hyderabad, Telangana - 500081',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3!2d78.37!3d17.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSGl0ZWMgQ2l0eQ!5e0!3m2!1sen!2sin!4v1609459200000',
  },
  {
    city: 'Bengaluru',
    address: '611, 3rd Floor, 80 Feet Road, 6th Block, Koramangala, Bengaluru, Karnataka - 560095',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.61!3d12.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS29yYW1hbmdhbGE!5e0!3m2!1sen!2sin!4v1609459200000',
  },
  {
    city: 'Chennai',
    address: '12, Nungambakkam High Road, 4th Floor, Nungambakkam, Chennai, Tamil Nadu - 600034',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.24!3d13.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTnVuZ2FtYmFra2Ft!5e0!3m2!1sen!2sin!4v1609459200000',
  },
]

const REASONS = [
  'Become Snigo Franchise',
  'Advertise Your Brand',
  'Join As A Snigo Rider',
  'Business Partnership',
  'Rent to Own',
]

/* ─── Building SVG Icons ─── */
function BuildingIcon({ hue }: { hue: number }) {
  const color = `hsl(${hue}, 70%, 42%)`
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="12" y="14" width="14" height="30" rx="2" fill={color} opacity="0.9" />
      <rect x="30" y="22" width="14" height="22" rx="2" fill={color} opacity="0.7" />
      <rect x="16" y="19" width="3" height="3" rx="0.5" fill="white" />
      <rect x="16" y="25" width="3" height="3" rx="0.5" fill="white" />
      <rect x="16" y="31" width="3" height="3" rx="0.5" fill="white" />
      <rect x="21" y="19" width="3" height="3" rx="0.5" fill="white" />
      <rect x="21" y="25" width="3" height="3" rx="0.5" fill="white" />
      <rect x="21" y="31" width="3" height="3" rx="0.5" fill="white" />
      <rect x="34" y="27" width="3" height="3" rx="0.5" fill="white" />
      <rect x="34" y="33" width="3" height="3" rx="0.5" fill="white" />
      <rect x="39" y="27" width="3" height="3" rx="0.5" fill="white" />
      <rect x="39" y="33" width="3" height="3" rx="0.5" fill="white" />
      <rect x="18" y="38" width="5" height="6" rx="1" fill="white" />
    </svg>
  )
}

export default function ContactPage() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState(OFFICES[0].city)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false)

  const activeOffice = OFFICES.find((o) => o.city === selectedCity) || OFFICES[0]

  return (
    <>
      <Navbar />
      <main>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Animated Background Image */}
          <motion.div
            initial={{ filter: 'blur(20px)', scale: 1.05 }}
            animate={{ filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-[url('/assets/images/contact-bg.jpg')] bg-cover bg-center"
          />
          {/* Subtle Dark Gradient Overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,26,10,0.3) 0%, rgba(10,26,10,0.6) 100%)' }} />

          {/* Wave Separator Transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
            <svg
              className="relative block w-full h-[20px] sm:h-[30px] md:h-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 L1200,40 L1200,0 Q600,80 0,0 Z"
                className="fill-[var(--color-surface)]"
              />
              {/* Layer 1: Wide Blue Energy Wave (Right) */}
              <path
                d="M0,0 Q600,80 1200,0"
                fill="none"
                className="energy-line-1"
              />
              {/* Layer 2: Medium Green Energy Wave (Left) */}
              <path
                d="M0,0 Q600,80 1200,0"
                fill="none"
                className="energy-line-2"
              />
              {/* Layer 3: Fast White Core Spark (Right) */}
              <path
                d="M0,0 Q600,80 1200,0"
                fill="none"
                className="energy-line-core"
              />
            </svg>
          </div>

          <div className="relative z-10 text-center px-6 max-w-[850px] mx-auto mt-[-40px]">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1]"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              {['Get', 'In'].map((word, i) => (
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
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="inline-block text-[var(--color-primary-light)]"
              >
                Touch!
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-6 text-white/80 text-lg md:text-xl"
            >
              Join Us in our Mission Zero Emission
            </motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            OUR OFFICES
        ══════════════════════════════════════════ */}
        <section className="pt-10 pb-20 px-6 relative overflow-hidden">
          {/* Decorative glowing blobs to fill white space with brand theme */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[var(--color-primary)] opacity-[0.07] dark:opacity-[0.15] blur-[100px] md:blur-[140px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[var(--color-success)] opacity-[0.06] dark:opacity-[0.12] blur-[100px] md:blur-[120px] rounded-full" />
          </div>

          <div className="max-w-[1000px] mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] text-center mb-4"
              style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
            >
              Our Offices
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[var(--color-text-secondary)] text-center text-sm md:text-base mb-2"
            >
              How can we help you out?
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-[var(--color-text-secondary)] text-center text-sm md:text-base mb-12"
            >
              Reach out to us in the nearest office.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OFFICES.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedCity(office.city)}
                  className={`bg-[var(--color-surface)] rounded-2xl border p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedCity === office.city
                      ? 'border-[var(--color-primary)] shadow-md'
                      : 'border-[var(--color-border)]'
                  }`}
                >
                  <div className="flex justify-center mb-4">
                    <BuildingIcon hue={i === 0 ? 160 : i === 1 ? 200 : 140} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{office.city}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{office.address}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            GET IN TOUCH FORM + MAP
        ══════════════════════════════════════════ */}
        <section className="py-20 px-6 section-muted-textured">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-[var(--color-surface)] rounded-3xl border border-[var(--color-border)] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left — Info + Map */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="p-8 md:p-10"
                >
                  <h2
                    className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-2"
                    style={{ fontFamily: 'var(--font-clash), Georgia, serif' }}
                  >
                    Get In <span className="text-[var(--color-primary)]">Touch</span> !
                  </h2>
                  <p className="text-[var(--color-text-secondary)] text-sm md:text-base mb-4 leading-relaxed max-w-[400px]">
                    Join India&apos;s Largest EV Rental Platform and Go 100% Electric With Us.
                  </p>
                  <div className="flex items-center gap-2 mb-8">
                    <Mail size={16} className="text-[var(--color-primary)]" />
                    <a href="mailto:help@SNIGORIDE.com" className="text-[var(--color-primary)] text-sm font-medium hover:underline">
                      help@SNIGORIDE.com
                    </a>
                  </div>

                  {/* Map with city selector */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(activeOffice.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-primary)] text-sm font-medium flex items-center gap-1 hover:underline"
                      >
                        Open in Maps <ExternalLink size={12} />
                      </a>

                      {/* City dropdown */}
                      <div className="relative">
                        <button
                          onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                          className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 cursor-pointer hover:border-[var(--color-primary)] transition-colors"
                        >
                          {selectedCity}
                          <ChevronDown size={14} className={`transition-transform ${cityDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {cityDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.15 }}
                              className="absolute right-0 top-full mt-1 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-lg overflow-hidden z-10 min-w-[140px]"
                            >
                              {OFFICES.map((o) => (
                                <button
                                  key={o.city}
                                  onClick={() => { setSelectedCity(o.city); setCityDropdownOpen(false) }}
                                  className={`w-full text-left text-sm px-4 py-2.5 cursor-pointer transition-colors ${
                                    selectedCity === o.city
                                      ? 'bg-[var(--color-primary)] text-white'
                                      : 'text-[var(--color-text-primary)] hover:bg-[var(--color-surface-muted)]'
                                  }`}
                                >
                                  {o.city}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-[var(--color-border)] h-[250px]">
                      <iframe
                        src={activeOffice.mapUrl}
                        width="100%" height="100%"
                        style={{ border: 0 }}
                        allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${activeOffice.city} Office`}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right — Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-[var(--color-border)]"
                >
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center h-full text-center py-12"
                    >
                      <div className="text-6xl mb-4">✅</div>
                      <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Thank You!</h3>
                      <p className="text-[var(--color-text-secondary)]">We&apos;ll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true) }} className="space-y-6">
                      {/* Choose Reason */}
                      <div>
                        <label className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 block">
                          Choose The Reason
                        </label>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                          {REASONS.map((r) => (
                            <label key={r} className="flex items-center gap-2.5 cursor-pointer group">
                              <span className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                                selectedReason === r ? 'border-[var(--color-primary)]' : 'border-gray-300 group-hover:border-[var(--color-primary)]'
                              }`}>
                                {selectedReason === r && (
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-[10px] h-[10px] rounded-full bg-[var(--color-primary)]"
                                  />
                                )}
                              </span>
                              <input type="radio" name="reason" value={r} checked={selectedReason === r} onChange={() => setSelectedReason(r)} className="sr-only" />
                              <span className="text-sm text-[var(--color-primary)] font-medium">{r}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Form fields — appear after reason selection */}
                      <AnimatePresence>
                        {selectedReason ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4 overflow-hidden"
                          >
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
                          </motion.div>
                        ) : (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[var(--color-text-secondary)] text-sm py-8 text-center"
                          >
                            Please select a reason to continue
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
