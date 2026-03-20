'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

const BRANDS = [
    {
        name: 'Ola Electric',
        tagline: 'The Future of Mobility',
        description: 'Pioneering the electric revolution with India\'s best-selling EV scooters. Experience unmatched performance and smart connectivity.',
        color: '#D4FF00', // Ola lime green
        logo: 'OLA',
        icon: Zap,
        image: '/assets/images/environment/ola-scooter.png',
        alignment: 'left'
    },
    {
        name: 'SNIGO Baguss',
        tagline: 'Unmatched Performance',
        description: 'Heavy-duty electric loaders designed for reliability and maximum load capacity. Built for the toughest logistics challenges.',
        color: '#00D4FF', // Cyan/Blue
        logo: 'BAGUSS',
        icon: ShieldCheck,
        image: '/assets/images/environment/baguss-loader.png',
        alignment: 'right'
    }
]

export default function StackedBrands() {
    return (
        <section className="py-24 bg-[var(--color-surface)] overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6">
                <div className="flex flex-col gap-20">
                    {BRANDS.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            initial={{
                                opacity: 0,
                                x: brand.alignment === 'left' ? -100 : 100,
                                rotateY: brand.alignment === 'left' ? 20 : -20
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                rotateY: 0
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: index * 0.2
                            }}
                            className={`relative group w-full ${brand.alignment === 'right' ? 'md:ml-auto' : ''
                                } md:max-w-[90%]`}
                        >
                            {/* Card Background with Glow */}
                            <div
                                className="absolute inset-0 blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 rounded-[3rem]"
                                style={{ backgroundColor: brand.color }}
                            />

                            <div className="relative bg-[var(--color-surface-muted)] border border-[var(--color-border)] rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-white/20 min-h-[500px] flex flex-col justify-center">
                                {/* Decorative Pattern */}
                                <div className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none translate-x-1/3 -translate-y-1/3">
                                    <div className="w-full h-full rounded-full border-[50px] border-white" />
                                </div>

                                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                                    {/* Brand Content */}
                                    <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
                                        <span
                                            className="text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
                                            style={{ color: brand.color }}
                                        >
                                            {brand.tagline}
                                        </span>
                                        <h3
                                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                                            style={{ fontFamily: 'var(--font-clash)' }}
                                        >
                                            {brand.logo}
                                        </h3>
                                        <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-[550px] mb-10 leading-relaxed">
                                            {brand.description}
                                        </p>

                                        <motion.button
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-4 text-white text-lg font-bold group/btn"
                                        >
                                            Explore Partnership
                                            <ArrowRight className="transition-transform group-hover/btn:translate-x-2" size={24} />
                                        </motion.button>
                                    </div>

                                    {/* Brand Visual / Image */}
                                    <div className="relative w-full lg:w-[50%] aspect-square lg:aspect-video order-1 lg:order-2 flex items-center justify-center">
                                        <div
                                            className="absolute inset-0 blur-[60px] opacity-20 rounded-full"
                                            style={{ backgroundColor: brand.color }}
                                        />
                                        <motion.div
                                            whileHover={{ scale: 1.05, rotate: brand.alignment === 'left' ? -2 : 2 }}
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={brand.image}
                                                alt={brand.name}
                                                fill
                                                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Vertical brand mark */}
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block opacity-10 pointer-events-none">
                                    <span className="text-8xl font-black text-white mix-blend-overlay rotate-90 inline-block uppercase tracking-widest whitespace-nowrap">
                                        {brand.name}
                                    </span>
                                </div>

                                {/* Progress bar line at bottom */}
                                <div
                                    className="absolute bottom-0 left-0 h-2 transition-all duration-1000 w-0 group-hover:w-full"
                                    style={{ backgroundColor: brand.color }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
