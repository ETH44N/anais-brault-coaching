'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/services', label: 'Services' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm shadow-navy-900/5 py-3'
            : 'bg-transparent py-6'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <motion.span
              className="font-display text-2xl font-semibold tracking-tight text-navy-900"
              whileHover={{ scale: 1.02 }}
            >
              Anaïs
              <span className="text-brand-400"> Brault</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300',
                    pathname === link.href
                      ? 'text-navy-900'
                      : 'text-navy-400 hover:text-navy-700'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <Link href="/contact" className="btn-primary text-xs px-6 py-2.5">
                Commencer
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <motion.span
                className="block h-0.5 bg-navy-900 rounded-full"
                animate={{
                  width: isMobileOpen ? 24 : 24,
                  rotate: isMobileOpen ? 45 : 0,
                  y: isMobileOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 bg-navy-900 rounded-full"
                animate={{
                  width: isMobileOpen ? 0 : 16,
                  opacity: isMobileOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-0.5 bg-navy-900 rounded-full"
                animate={{
                  width: isMobileOpen ? 24 : 20,
                  rotate: isMobileOpen ? -45 : 0,
                  y: isMobileOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-50"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'font-display text-3xl transition-colors',
                      pathname === link.href
                        ? 'text-brand-400'
                        : 'text-navy-900 hover:text-brand-400'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-4"
              >
                <Link href="/contact" className="btn-gold">
                  Commencer
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
