'use client'
import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface ImageData {
    url: string
    title: string
    subtitle: string
}

const IMAGES: ImageData[] = [
    {
        url: '/assets/images/environment/scooter.png',
        title: 'Precision EV Rentals',
        subtitle: 'Engineered for urban efficiency and style.',
    },
    {
        url: '/assets/images/environment/three-wheeler.png',
        title: 'Heavy Cargo Solutions',
        subtitle: 'Sustainable delivery infrastructure for every need.',
    },
    {
        url: '/assets/images/environment/charging.png',
        title: 'Smart Charging Grid',
        subtitle: 'Powered by advanced IoT and renewable tech.',
    },
    {
        url: '/assets/images/environment/trucks.png',
        title: 'Future Logistics',
        subtitle: 'Leading the transition to zero-emission fleets.',
    },
    {
        url: '/assets/images/environment/rider.png',
        title: 'Seamless Deliveries',
        subtitle: 'Empowering riders with high-performance EVs.',
    },
]

export default function CoverflowCarousel() {
    const [currentIndex, setCurrentIndex] = useState(2)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
    }, [])

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)
    }, [])

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(handleNext, 4000)
        return () => clearInterval(interval)
    }, [isAutoPlaying, handleNext])

    return (
        <div
            className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-surface)] py-20"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-primary)]/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Carousel Container */}
            <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center perspective-[1500px]">
                <div className="relative w-full h-full flex items-center justify-center">
                    {IMAGES.map((img, index) => {
                        const distance = index - currentIndex
                        const absDistance = Math.abs(distance)

                        // Handle wrap-around distance for smoother cycling
                        let normalizedDistance = distance
                        if (distance > IMAGES.length / 2) normalizedDistance -= IMAGES.length
                        if (distance < -IMAGES.length / 2) normalizedDistance += IMAGES.length
                        const absNormalized = Math.abs(normalizedDistance)

                        // Calculate transforms based on distance from center
                        const x = normalizedDistance * 280 // Horizontal spacing
                        const z = absNormalized * -300 // Depth
                        const rotateY = normalizedDistance * -35 // Tilt
                        const scale = 1 - absNormalized * 0.15 // Scaling
                        const opacity = 1 - absNormalized * 0.4 // Fading
                        const zIndex = 10 - absNormalized // Stack order

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    x,
                                    z,
                                    rotateY,
                                    scale,
                                    opacity,
                                    zIndex,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 260,
                                    damping: 25,
                                }}
                                className="absolute w-[450px] h-[300px] md:w-[600px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                                onClick={() => setCurrentIndex(index)}
                            >
                                {/* Image */}
                                <Image
                                    src={img.url}
                                    alt={img.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                                    <motion.div
                                        animate={{ opacity: index === currentIndex ? 1 : 0, y: index === currentIndex ? 0 : 20 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-clash)' }}>
                                            {img.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-white/70 max-w-[400px]">
                                            {img.subtitle}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="absolute left-8 md:left-12 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-md"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="absolute right-8 md:right-12 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-md"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Indicators */}
            <div className="mt-12 flex items-center gap-3 z-10">
                {IMAGES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`transition-all duration-300 rounded-full ${i === currentIndex
                            ? 'w-8 h-2.5 bg-[var(--color-primary)]'
                            : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                            }`}
                    />
                ))}
                <button className="ml-2 text-white/40 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                </button>
            </div>
        </div>
    )
}
