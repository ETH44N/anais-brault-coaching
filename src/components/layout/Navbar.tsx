'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm shadow-navy-900/5 py-3'
          : 'bg-transparent py-6',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="relative z-50" aria-label="Anaïs Brault — Accueil">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <span className="font-display text-lg text-navy-900 tracking-wide">Anaïs Brault</span>
          </motion.div>
        </Link>

        <Link href="/#contact" className="btn-primary text-xs sm:text-sm px-4 sm:px-6 py-2.5 group">
          <span className="hidden sm:inline">Candidater pour un 1:1</span>
          <span className="sm:hidden">Candidater</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </nav>
    </motion.header>
  )
}
