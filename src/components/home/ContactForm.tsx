'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Loader2, ArrowRight, AlertCircle } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [idealLife, setIdealLife] = useState('')
  const [goal, setGoal] = useState('')
  const [currentSituation, setCurrentSituation] = useState('')
  const [socialLink, setSocialLink] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [whyNotYet, setWhyNotYet] = useState('')
  const [revenue, setRevenue] = useState('')
  const [meditationScale, setMeditationScale] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, socialLink, idealLife, goal, currentSituation, obstacle, revenue, meditationScale }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Une erreur est survenue.')
      setStatus('success')
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Une erreur est survenue.'
      setErrorMsg(message)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden bg-navy-900 text-white scroll-mt-24"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sage-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-400 mb-4 block">
              Candidature
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Candidater pour
              <span className="text-brand-400"> un 1:1</span>
            </h2>
            <p className="text-navy-300 max-w-xl mx-auto text-lg">
              Anaïs accueille un nombre limité de personnes. Réponds à ces questions
              pour qu&apos;elle évalue si l&apos;accompagnement est juste pour toi.
            </p>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage-400/20 text-sage-300 mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                Merci{name ? `, ${name}` : ''} !
              </h3>
              <p className="text-navy-300 max-w-md mx-auto">
                Ta candidature a bien été reçue. Tu es maintenant en liste d&apos;attente — Anaïs lit personnellement chaque réponse et te recontactera dès que possible. Merci pour ta patience.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field
                  label="Prénom"
                  required
                  value={name}
                  onChange={setName}
                  maxLength={200}
                  placeholder="Ton prénom"
                />
                <Field
                  label="Ton WhatsApp"
                  required
                  type="tel"
                  value={email}
                  onChange={setEmail}
                  maxLength={320}
                  placeholder="+33 6 00 00 00 00"
                />
              </div>

              <Field
                label="Ton Instagram, LinkedIn ou YouTube"
                value={socialLink}
                onChange={setSocialLink}
                maxLength={500}
                placeholder="https://..."
              />

              <TextareaField
                label="Décris-moi ta vie idéale"
                hint="Si tu avais une baguette magique, qu'est-ce que tu changerais dans ta vie ?"
                required
                value={idealLife}
                onChange={setIdealLife}
                rows={5}
              />

              <TextareaField
                label="Quel est l'objectif que tu aimerais atteindre ?"
                required
                value={goal}
                onChange={setGoal}
                rows={4}
              />

              <TextareaField
                label="Où en es-tu maintenant ?"
                hint="Où est-ce que tu en es dans ta vie par rapport à ces objectifs ?"
                required
                value={currentSituation}
                onChange={setCurrentSituation}
                rows={5}
              />

              <TextareaField
                label="Qu'est-ce qui, te connaissant, pourrait t'en empêcher ? Qu'est-ce qui fait que tu n'as pas encore atteint ces objectifs ?"
                hint="Ex : procrastination, peur du jugement, manque de discipline, perfectionnisme, doute de soi…"
                required
                value={obstacle}
                onChange={setObstacle}
                rows={5}
              />

              <TextareaField
                label="Quel est le chiffre d'affaires mensuel de ton entreprise ?"
                required
                value={revenue}
                onChange={setRevenue}
                rows={2}
              />

              <div>
                <label className="block">
                  <span className="text-sm font-medium text-navy-200 mb-2 block">
                    Sur une échelle de 1 à 10, à quel point es-tu familier·e avec les pratiques de visualisation et de méditation ?
                    <span className="text-brand-400"> *</span>
                  </span>
                  <div className="flex gap-2 flex-wrap mt-3">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setMeditationScale(String(n))}
                        className={`w-10 h-10 rounded-xl border text-sm font-medium transition-all ${
                          meditationScale === String(n)
                            ? 'bg-brand-400 border-brand-400 text-white'
                            : 'bg-white/5 border-white/10 text-navy-300 hover:border-brand-400/60'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </label>
              </div>

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{errorMsg}</p>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full justify-center disabled:opacity-60"
                whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.99 }}
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Envoyer ma candidature
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </motion.button>

              <p className="text-navy-500 text-xs text-center">
                Tes réponses sont confidentielles. Anaïs te recontacte personnellement.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Field({
  label,
  hint,
  required,
  type = 'text',
  value,
  onChange,
  maxLength,
  placeholder,
}: {
  label: string
  hint?: string
  required?: boolean
  type?: string
  value: string
  onChange: (v: string) => void
  maxLength?: number
  placeholder?: string
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-200 mb-2 block">
        {label}
        {required && <span className="text-brand-400"> *</span>}
      </span>
      {hint && <span className="text-xs text-navy-400 mb-2 block">{hint}</span>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-navy-500 focus:outline-none focus:border-brand-400/60 focus:bg-white/10 transition-all"
      />
    </label>
  )
}

function TextareaField({
  label,
  hint,
  required,
  value,
  onChange,
  rows,
}: {
  label: string
  hint?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  rows: number
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-navy-200 mb-2 block">
        {label}
        {required && <span className="text-brand-400"> *</span>}
      </span>
      {hint && <span className="text-xs text-navy-400 mb-2 block italic">{hint}</span>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={5000}
        rows={rows}
        className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-navy-500 focus:outline-none focus:border-brand-400/60 focus:bg-white/10 transition-all resize-y leading-relaxed"
      />
      <span className="text-xs text-navy-500 mt-1 block text-right">
        {value.length} / 5000
      </span>
    </label>
  )
}
