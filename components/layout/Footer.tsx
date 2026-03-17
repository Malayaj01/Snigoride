'use client'
import { Linkedin } from 'lucide-react'
import { SiInstagram, SiX } from 'react-icons/si'
import { FOOTER_SERVICES, FOOTER_PARTNER } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-6">
              <img src="/assets/images/logo/logo-cyan.png" alt="Snigoride" className="h-auto w-20 md:w-28" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Powering green last-mile delivery across India.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <SiX size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Partner */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Partner
            </h4>
            <ul className="space-y-3">
              {FOOTER_PARTNER.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <span>📞</span>
                <a href="tel:+919876543210" className="hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <span>✉️</span>
                <a href="mailto:hello@SNIGORIDE.com" className="hover:text-white transition-colors duration-300">
                  hello@SNIGORIDE.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <span className="mt-0.5">📍</span>
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 SNIGORIDE Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
