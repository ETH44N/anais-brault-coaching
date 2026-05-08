'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Mail, Youtube, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          <ScrollReveal delay={0.1}>
            <div>
              <Image
                src="/logo-white.png"
                alt="Anaïs Brault"
                width={200}
                height={56}
                className="h-12 w-auto"
              />
              <p className="text-navy-300 mt-4 leading-relaxed max-w-sm">
                Coach psycho-somatique certifiée. Accompagnement transformateur pour entrepreneurs en quête d&apos;alignement intérieur.
              </p>
              <div className="flex gap-4 mt-6">
                <motion.a
                  href="https://www.instagram.com/anaisbrault/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-navy-300 hover:text-brand-400 hover:border-brand-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="mailto:contact@anaisbrault.fr"
                  className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-navy-300 hover:text-brand-400 hover:border-brand-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@Ana%C3%AFsBrault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-navy-700 flex items-center justify-center text-navy-300 hover:text-brand-400 hover:border-brand-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-3 text-sm text-navy-300">
                <li>
                  <a href="mailto:contact@anaisbrault.fr" className="hover:text-brand-400 transition-colors">
                    contact@anaisbrault.fr
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/anaisbrault/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-400 transition-colors"
                  >
                    @anaisbrault
                  </a>
                </li>
                <li className="pt-4">
                  <Link href="/mentions-legales" className="hover:text-brand-400 transition-colors">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/politique-de-confidentialite" className="hover:text-brand-400 transition-colors">
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-xs">
            © {new Date().getFullYear()} Anaïs Brault. Tous droits réservés.
          </p>
          <p className="text-navy-600 text-xs">Coaching somatique pour entrepreneurs</p>
        </div>
      </div>
    </footer>
  )
}
