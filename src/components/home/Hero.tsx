'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-cream-100 to-brand-50" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-sage-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-400/5 to-transparent rounded-full" />
      </motion.div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,24,41,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,24,41,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-start justify-center pt-16 pointer-events-none select-none">
        <Image
          src="/logo-blue.png"
          alt=""
          width={700}
          height={200}
          className="w-[80vw] max-w-2xl opacity-[0.06] object-contain"
          priority
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ opacity, scale }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-navy-900 mb-8"
        >
          Et si la clef pour{' '}
          <span className="relative inline-block">
            <span className="text-gradient">débloquer ton business</span>
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              <motion.path
                d="M2 8C50 2 100 4 150 6C200 8 250 4 298 6"
                stroke="url(#gold-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              />
              <defs>
                <linearGradient id="gold-gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#c9a96e" />
                  <stop offset="1" stopColor="#b8944f" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>
          <br />
          était là où tu t&apos;y attendais
          <br />
          <em className="not-italic text-brand-500">le moins</em>
          <span className="text-brand-400"> ?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-navy-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Libère les blocages enfouis dans ton corps pour accéder à une vie plus libre,
          plus alignée, et un business qui reflète enfin qui tu es vraiment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link href="#contact" className="btn-primary group w-full sm:w-auto justify-center">
              Candidater pour un 1:1
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScLTyk1L4WLQuSZz0exoL4q28_thZZIUQVEaV6UzneGw67XYQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group text-sm w-full sm:w-auto justify-center"
            >
              <span className="hidden sm:inline">Se former au coaching somatique</span>
              <span className="sm:hidden">Se former</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-navy-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage-400" />
            <span>Certifiée ICM</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-400" />
            <span>+100 entrepreneurs accompagnés</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-sage-400" />
            <span>5 niveaux d&apos;intervention</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-navy-300/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 rounded-full bg-navy-300/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
