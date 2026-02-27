'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Send,
  CheckCircle,
  Loader2,
  Instagram,
  Mail,
  Calendar,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const contactSchema = z.object({
  name: z.string().min(2, 'Ton prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Merci d\'entrer une adresse email valide'),
  subject: z.string().min(1, 'Merci de choisir un sujet'),
  message: z.string().min(10, 'Ton message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactContent() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    // Placeholder: integrate with email service (SendGrid, Resend, etc.)
    await new Promise((r) => setTimeout(r, 2000))
    setStatus('success')
    reset()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-brand-50 to-cream-100" />
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6 block"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 leading-tight mb-8"
          >
            Prête à commencer
            <br />
            <span className="text-gradient">ta transformation ?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Envoie-moi un message ou réserve directement ton appel découverte gratuit.
            Chaque grande transformation commence par un premier pas.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-white pt-0 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Calendar,
                title: 'Appel Découverte',
                description: '30 min gratuites pour explorer tes besoins',
                action: 'Réserver un créneau',
                href: '#',
                accent: 'from-brand-400 to-brand-500',
              },
              {
                icon: Mail,
                title: 'Email',
                description: 'contact@anaisbrault.fr',
                action: 'Envoyer un email',
                href: 'mailto:contact@anaisbrault.fr',
                accent: 'from-sage-400 to-sage-500',
              },
              {
                icon: Instagram,
                title: 'Instagram',
                description: '@anaisbrault',
                action: 'Suivre sur Instagram',
                href: 'https://www.instagram.com/anaisbrault/',
                accent: 'from-violet-400 to-violet-500',
              },
            ].map((card, i) => {
              const Icon = card.icon
              return (
                <ScrollReveal key={card.title} delay={i * 0.1}>
                  <motion.a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block bg-brand-50 rounded-2xl p-8 border border-brand-100/50 group text-center h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${card.accent} flex items-center justify-center text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">{card.title}</h3>
                    <p className="text-navy-500 text-sm mb-4">{card.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-brand-500 font-semibold group-hover:gap-3 transition-all">
                      {card.action}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.a>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Left info */}
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
                  Écris-moi
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                  Un message,
                  <br />
                  <span className="text-gradient">un début</span>
                </h2>
                <p className="text-navy-500 text-lg leading-relaxed mb-8">
                  Que tu aies une question, une envie, ou simplement un ressenti à partager,
                  je lis chaque message personnellement et je réponds sous 48h.
                </p>
                <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100/50">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-brand-500" />
                    <span className="font-display font-semibold text-navy-900">Ce que tu peux me partager</span>
                  </div>
                  <ul className="space-y-2 text-sm text-navy-500">
                    <li>• Tes questions sur le coaching somatique</li>
                    <li>• Ta situation actuelle et tes objectifs</li>
                    <li>• Tes doutes (c&apos;est normal et bienvenu)</li>
                    <li>• Tout ce qui te traverse</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="right">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-sage-50 rounded-3xl p-12 border border-sage-200 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="font-display text-2xl text-navy-900 mb-3">
                      Message envoyé !
                    </h3>
                    <p className="text-navy-500 mb-8">
                      Merci pour ton message. Je te réponds sous 48h maximum.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-navy-100/30 space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                        Prénom
                      </label>
                      <motion.div
                        animate={errors.name ? { x: [-4, 4, -4, 4, 0] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <input
                          id="name"
                          type="text"
                          {...register('name')}
                          className={`w-full px-5 py-3.5 rounded-xl border bg-brand-50/50 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 transition-all ${
                            errors.name
                              ? 'border-red-300 focus:ring-red-200'
                              : 'border-navy-100 focus:ring-brand-200 focus:border-brand-300'
                          }`}
                          placeholder="Ton prénom"
                        />
                      </motion.div>
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-xs mt-1.5"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                        Email
                      </label>
                      <motion.div
                        animate={errors.email ? { x: [-4, 4, -4, 4, 0] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <input
                          id="email"
                          type="email"
                          {...register('email')}
                          className={`w-full px-5 py-3.5 rounded-xl border bg-brand-50/50 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? 'border-red-300 focus:ring-red-200'
                              : 'border-navy-100 focus:ring-brand-200 focus:border-brand-300'
                          }`}
                          placeholder="ton@email.com"
                        />
                      </motion.div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-xs mt-1.5"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        {...register('subject')}
                        className={`w-full px-5 py-3.5 rounded-xl border bg-brand-50/50 text-navy-900 focus:outline-none focus:ring-2 transition-all appearance-none ${
                          errors.subject
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-navy-100 focus:ring-brand-200 focus:border-brand-300'
                        }`}
                      >
                        <option value="">Choisis un sujet</option>
                        <option value="coaching">Coaching individuel</option>
                        <option value="seminaire">Séminaire</option>
                        <option value="decouverte">Appel découverte</option>
                        <option value="question">Question générale</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                        Message
                      </label>
                      <motion.div
                        animate={errors.message ? { x: [-4, 4, -4, 4, 0] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <textarea
                          id="message"
                          rows={5}
                          {...register('message')}
                          className={`w-full px-5 py-3.5 rounded-xl border bg-brand-50/50 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 transition-all resize-none ${
                            errors.message
                              ? 'border-red-300 focus:ring-red-200'
                              : 'border-navy-100 focus:ring-brand-200 focus:border-brand-300'
                          }`}
                          placeholder="Partage ce qui te traverse..."
                        />
                      </motion.div>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-500 text-xs mt-1.5"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center disabled:opacity-60"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer mon message
                        </>
                      )}
                    </motion.button>

                    <p className="text-navy-400 text-xs text-center">
                      Je réponds personnellement sous 48h maximum.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
