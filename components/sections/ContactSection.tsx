'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', website: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.name || form.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    } else if (form.name.length > 100) {
      newErrors.name = 'Name must be under 100 characters'
    }

    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (form.phone && !/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number'
    }

    if (!form.message || form.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (form.message.length > 1000) {
      newErrors.message = 'Message must be under 1000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (form.website) return

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleBlur = (field: keyof FormErrors) => {
    validate()
  }

  return (
    <section id="contact" className="section-muted-textured py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Contact Us"
          subtitle="Have a question or want to partner with us? We'd love to hear from you."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left — Map (60%) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl overflow-hidden h-[400px] border border-[var(--color-border)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31680958677!2d78.24323065!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SNIGORIDE Office Location - Hyderabad"
              />
            </div>
          </motion.div>

          {/* Right — Form (40%) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-[var(--color-success)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  Thank you!
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Our team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot */}
                <input
                  name="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Name <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onBlur={() => handleBlur('name')}
                    aria-invalid={!!errors.name}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] ${
                      errors.name
                        ? 'border-[var(--color-error)]'
                        : 'border-[var(--color-border)]'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-[var(--color-error)] mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Email <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => handleBlur('email')}
                    aria-invalid={!!errors.email}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] ${
                      errors.email
                        ? 'border-[var(--color-error)]'
                        : 'border-[var(--color-border)]'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-[var(--color-error)] mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Phone <span className="text-xs text-[var(--color-text-secondary)]">(optional)</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    onBlur={() => handleBlur('phone')}
                    aria-invalid={!!errors.phone}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] ${
                      errors.phone
                        ? 'border-[var(--color-error)]'
                        : 'border-[var(--color-border)]'
                    }`}
                    placeholder="9876543210"
                  />
                  {errors.phone && (
                    <p className="text-xs text-[var(--color-error)] mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--color-text-primary)] mb-1.5"
                  >
                    Message <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={!!errors.message}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors duration-200 outline-none resize-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] ${
                      errors.message
                        ? 'border-[var(--color-error)]'
                        : 'border-[var(--color-border)]'
                    }`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && (
                    <p className="text-xs text-[var(--color-error)] mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting}
                  className="w-full disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
