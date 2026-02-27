'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Mail, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const footerLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À Propos' },
  { href: '/services', label: 'Services' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      {/* CTA Banner */}
      <div className="section-padding pb-0">
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-400/10 to-brand-500/5 border border-brand-400/20 p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Prête à transformer ta vie
              <span className="text-brand-400"> ?</span>
            </h2>
            <p className="text-navy-200 max-w-xl mx-auto mb-8 text-lg">
              Réserve ton appel découverte gratuit et explore comment le coaching somatique peut débloquer ton potentiel.
            </p>
            <Link href="/contact" className="btn-gold">
              Réserver mon appel découverte
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer Content */}
      <div className="section-padding">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <ScrollReveal delay={0.1}>
            <div>
              <span className="font-display text-2xl font-semibold">
                Anaïs<span className="text-brand-400"> Brault</span>
              </span>
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
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-display text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-navy-300 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.3}>
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

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-500 text-xs">
            © {new Date().getFullYear()} Anaïs Brault. Tous droits réservés.
          </p>
          <p className="text-navy-600 text-xs">
            Coaching somatique pour entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  )
}
