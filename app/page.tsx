import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/layout/BackToTop'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import Hero from '@/components/sections/Hero'
import WhatWeOffer from '@/components/sections/WhatWeOffer'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import StatsCounter from '@/components/sections/StatsCounter'
import JoinUs from '@/components/sections/JoinUs'
import SavingsCalculator from '@/components/sections/SavingsCalculator'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhatWeOffer />
        <WhyChooseUs />
        <StatsCounter />
        <JoinUs />
        <SavingsCalculator />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  )
}
