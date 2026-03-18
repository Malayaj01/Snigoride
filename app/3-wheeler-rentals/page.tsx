import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import HeroBackground from '@/components/ui/HeroBackground'

export default function ThreeWheelerRentalsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 max-w-2xl bg-black/40 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6" style={{ fontFamily: 'var(--font-clash)' }}>
            3 Wheeler Rentals
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            Ensure Big Orders Delivered Emission-Free
          </p>
          <div className="inline-block px-4 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold rounded-full mb-8">
            Coming Soon
          </div>
          <div>
            <Button variant="primary" href="/">Back to Home</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
