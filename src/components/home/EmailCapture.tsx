'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, CheckCircle, Loader2, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Placeholder: integrate with Mailchimp, ConvertKit, etc.
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  return (
    <section className="section-padding relative overflow-hidden bg-navy-900 text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sage-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <ScrollReveal>
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-500 mb-8"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
            >
              <Download className="w-7 h-7 text-navy-900" />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Visualisation guidée
              <span className="text-brand-400"> gratuite</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-navy-300 text-lg max-w-xl mx-auto mb-10">
              Reçois ta visualisation somatique guidée et commence à libérer les tensions 
              qui bloquent ton expansion dès aujourd&apos;hui.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 text-sage-300"
                >
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg font-medium">
                    Merci ! Vérifie ta boîte mail.
                  </span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ton@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-navy-400 focus:outline-none focus:border-brand-400/50 focus:bg-white/15 transition-all"
                    aria-label="Adresse email"
                  />
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gold whitespace-nowrap disabled:opacity-60"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Recevoir ma visualisation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-navy-600 text-xs mt-6">
              En t&apos;inscrivant, tu acceptes de recevoir des emails de ma part. Désinscription possible à tout moment.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
