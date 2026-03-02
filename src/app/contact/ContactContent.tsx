'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Send,
  CheckCircle,
  Loader2,
  Instagram,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const contactSchema = z.object({
  name: z.string().min(2, 'Ton prénom doit contenir au moins 2 caractères'),
  email: z.string().email('Merci d\'entrer une adresse email valide'),
  idealLife: z.string().min(10, 'Prends le temps de décrire ta vie idéale — même quelques phrases suffisent'),
  currentSituation: z.string().min(10, 'Dis-moi où tu en es, même brièvement'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactContent() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Erreur lors de l\'envoi.')
      setStatus('success')
      reset()
    } catch (err: any) {
      setErrorMsg(err.message || 'Une erreur est survenue. Réessaie plus tard.')
      setStatus('error')
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-5 py-3.5 rounded-xl border bg-brand-50/50 text-navy-900 placeholder:text-navy-300 focus:outline-none focus:ring-2 transition-all ${
      hasError
        ? 'border-red-300 focus:ring-red-200'
        : 'border-navy-100 focus:ring-brand-200 focus:border-brand-300'
    }`

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
            Remplis ce formulaire pour que je puisse mieux te connaître.
            Chaque grande transformation commence par un premier pas.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-white pt-0 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
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

          {/* Form Section */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* Left info */}
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
                  Formulaire
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
                  Parle-moi de
                  <br />
                  <span className="text-gradient">toi</span>
                </h2>
                <p className="text-navy-500 text-lg leading-relaxed mb-8">
                  Avant de travailler ensemble, j&apos;ai besoin de mieux te comprendre.
                  Réponds à ces deux questions avec ton cœur — il n&apos;y a pas de bonne
                  ou de mauvaise réponse.
                </p>
                <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-brand-500" />
                    <span className="font-display font-semibold text-navy-900">Pourquoi ces questions ?</span>
                  </div>
                  <ul className="space-y-2 text-sm text-navy-500">
                    <li>• Pour comprendre ce qui t&apos;anime profondément</li>
                    <li>• Pour mesurer l&apos;écart entre ta vision et ta réalité</li>
                    <li>• Pour savoir si mon accompagnement est fait pour toi</li>
                    <li>• Pour préparer un échange qui a du sens</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <div>
              {status === 'success' ? (
                <div className="bg-sage-50 rounded-3xl p-12 border border-sage-200 text-center">
                  <CheckCircle className="w-16 h-16 text-sage-500 mx-auto mb-6" />
                  <h3 className="font-display text-2xl text-navy-900 mb-3">
                    Merci pour ta confiance !
                  </h3>
                  <p className="text-navy-500 mb-8">
                    J&apos;ai bien reçu tes réponses. Je les lis personnellement et je reviens vers toi très vite.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Renvoyer le formulaire
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-navy-100/30 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                      Prénom
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className={inputClass(!!errors.name)}
                      placeholder="Ton prénom"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email')}
                      className={inputClass(!!errors.email)}
                      placeholder="ton@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-navy-100/50" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-xs font-semibold tracking-widest uppercase text-brand-400">
                        Tes réponses
                      </span>
                    </div>
                  </div>

                  {/* Question 1 */}
                  <div>
                    <label htmlFor="idealLife" className="block text-sm font-medium text-navy-700 mb-1">
                      Question 1
                    </label>
                    <p className="text-navy-500 text-sm mb-3 leading-relaxed">
                      Décris-moi ta vie idéale. Si tu avais une baguette magique, qu&apos;est-ce que tu
                      changerais dans ta vie ? Comment tu aimerais te sentir plus souvent ?
                    </p>
                    <textarea
                      id="idealLife"
                      rows={5}
                      {...register('idealLife')}
                      className={`${inputClass(!!errors.idealLife)} resize-none`}
                      placeholder="Laisse parler ton cœur..."
                    />
                    {errors.idealLife && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.idealLife.message}</p>
                    )}
                  </div>

                  {/* Question 2 */}
                  <div>
                    <label htmlFor="currentSituation" className="block text-sm font-medium text-navy-700 mb-1">
                      Question 2
                    </label>
                    <p className="text-navy-500 text-sm mb-3 leading-relaxed">
                      Où est-ce que tu en es maintenant dans ta vie par rapport à ces objectifs ?
                    </p>
                    <textarea
                      id="currentSituation"
                      rows={5}
                      {...register('currentSituation')}
                      className={`${inputClass(!!errors.currentSituation)} resize-none`}
                      placeholder="Dis-moi où tu en es aujourd'hui..."
                    />
                    {errors.currentSituation && (
                      <p className="text-red-500 text-xs mt-1.5">{errors.currentSituation.message}</p>
                    )}
                  </div>

                  {/* Error message */}
                  {status === 'error' && errorMsg && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm text-center">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer mes réponses
                      </>
                    )}
                  </button>

                  <p className="text-navy-400 text-xs text-center">
                    Je lis chaque réponse personnellement et je reviens vers toi rapidement.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
