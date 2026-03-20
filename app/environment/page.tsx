'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CoverflowCarousel from '@/components/ui/CoverflowCarousel'
import StackedBrands from '@/components/ui/StackedBrands'
import SectionHeading from '@/components/ui/SectionHeading'

export default function EnvironmentPage() {
    return (
        <main className="min-h-screen bg-[var(--color-surface)]">
            <Navbar />

            {/* Hero Section with 3D Carousel */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionHeading
                            eyebrow="IMMERSIVE SHOWCASE"
                            title="The Future EV Environment"
                            subtitle="Explore our cutting-edge fleet and innovative infrastructure through our interactive environment showcase."
                            align="center"
                        />
                    </motion.div>
                </div>

                {/* 3D Carousel */}
                <CoverflowCarousel />
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

            {/* Brand Partnerships Section */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary-light)]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-[1200px] mx-auto px-6 mb-16">
                    <SectionHeading
                        eyebrow="ELITE PARTNERSHIPS"
                        title="Brands That Drive Us"
                        subtitle="We collaborate with industry leaders to deliver the most reliable and efficient EV solutions."
                        align="left"
                    />
                </div>

                {/* Stacked Animated Cards */}
                <StackedBrands />
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/sections/grid.png')] bg-repeat" />
                <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                        style={{ fontFamily: 'var(--font-clash)' }}
                    >
                        Ready to Start Your <span className="text-[var(--color-primary)]">EV Journey?</span>
                    </motion.h2>
                    <p className="text-xl text-white/60 mb-10 leading-relaxed">
                        Join thousands of riders and businesses transition to sustainable, cost-effective transportation.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-10 py-4 bg-[var(--color-primary)] text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-[var(--color-primary)]/30">
                            Join Us Now
                        </button>
                        <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
