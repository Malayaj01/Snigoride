'use client'
import { TESTIMONIALS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialCard from '@/components/ui/TestimonialCard'

// Helper to double/triple the array so marquee is continuous
const getInfiniteArray = (arr: typeof TESTIMONIALS, multiplier = 3) => {
  let result = []
  for (let i = 0; i < multiplier; i++) {
    result.push(...arr)
  }
  return result
}

export default function Testimonials() {
  const row1 = getInfiniteArray(TESTIMONIALS, 3)
  
  // Create a visually shifted array for row 2 so the columns don't look perfectly aligned
  const shifted = [...TESTIMONIALS.slice(2), ...TESTIMONIALS.slice(0, 2)]
  const row2 = getInfiniteArray(shifted, 3)

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-[#0A0F1A]"
      role="region"
      aria-label="Customer Testimonials"
    >
      {/* Embedded Styles for Marquee */}
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-33.3333% - 8px)); } /* -8px accounts for gap spacing perfectly */
        }
        @keyframes scrollRight {
          from { transform: translateX(calc(-33.3333% - 8px)); }
          to { transform: translateX(0); }
        }
        .marquee-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 50s linear infinite;
        }
        .marquee-right {
          display: flex;
          width: max-content;
          animation: scrollRight 50s linear infinite;
        }
        /* Mobile adjustment for faster perceived speed */
        @media (max-width: 768px) {
           .marquee-left { animation-duration: 35s; }
           .marquee-right { animation-duration: 35s; }
        }
        .marquee-group:hover .marquee-left, .marquee-group:hover .marquee-right {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Background Orbs to give the "Glass" a glowing backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[400px] md:w-[600px] aspect-square bg-blue-600/20 rounded-full blur-[100px] md:blur-[140px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[400px] md:w-[600px] aspect-square bg-teal-500/15 rounded-full blur-[100px] md:blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 mb-16 md:mb-20">
        <SectionHeading
          eyebrow="PARTNERS & RIDERS"
          title="What They Say About Us"
          subtitle="Real stories from the Snigoride network across India."
          align="center"
          light={true}
        />
      </div>

      {/* Marquees Container */}
      <div className="relative z-20 flex flex-col gap-6 md:gap-8 marquee-group">
        
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-[#0A0F1A] to-transparent z-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-[#0A0F1A] to-transparent z-30 pointer-events-none" />

        {/* Row 1 - Scrolling Left */}
        <div className="w-full overflow-hidden">
           <div className="marquee-left gap-6 px-3">
              {row1.map((t, i) => (
                 <TestimonialCard key={`row1-${i}`} {...t} />
              ))}
           </div>
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="w-full overflow-hidden">
           <div className="marquee-right gap-6 px-3">
              {row2.map((t, i) => (
                 <TestimonialCard key={`row2-${i}`} {...t} />
              ))}
           </div>
        </div>
      </div>
    </section>
  )
}
