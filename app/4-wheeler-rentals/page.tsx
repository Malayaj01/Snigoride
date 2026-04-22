import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import HeroBackground from '@/components/ui/HeroBackground'
import { Truck, ActivitySquare, Battery, ShieldAlert } from 'lucide-react'

const FEATURES = [
  {
    icon: Truck,
    title: 'Heavy-duty bulk logistics',
    description: 'Robust electric vehicles capable of handling your heaviest cargo requirements with ease.'
  },
  {
    icon: ActivitySquare,
    title: 'GPS integrated fleet management',
    description: 'Advanced telematics for insightful fleet monitoring, routing, and management.'
  },
  {
    icon: Battery,
    title: 'Long-range battery performance',
    description: 'Extended mileage per charge to cover vast inter-city routes effortlessly.'
  },
  {
    icon: ShieldAlert,
    title: 'Advanced safety standards',
    description: 'Equipped with the latest safety features to protect your cargo and your drivers.'
  }
]

export default function FourWheelerRentalsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 w-full max-w-4xl bg-[#111827]/80 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="text-center md:text-left mb-10 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-clash)' }}>
              4 Wheeler Rentals
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Heavy-Duty Electric Cargo for Bulk ride
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="bg-[#8B5CF6]/20 p-3 rounded-lg text-[#8B5CF6] shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
             <Button variant="primary" href="/contact">Get Started</Button>
             <Button variant="outline" href="/">Back to Home</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
