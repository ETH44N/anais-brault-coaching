'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Sparkles,
  Users,
  Zap,
  Heart,
  Brain,
  Eye,
  Repeat,
} from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const services = [
  {
    icon: Sparkles,
    title: 'Coaching Individuel',
    subtitle: 'Transformation profonde',
    description:
      'Un accompagnement sur-mesure pour entrepreneurs prêts à libérer les blocages corporels et émotionnels qui limitent leur expansion personnelle et professionnelle.',
    features: [
      'Sessions individuelles en visio ou en présentiel',
      'Travail sur les 5 niveaux : somatique, émotionnel, mental, inconscient, comportemental',
      'Libération des traumatismes stockés dans le corps',
      'Déblocage des patterns qui limitent ton business',
      'Intégration entre les sessions avec exercices personnalisés',
      'Suivi et support par message entre les sessions',
    ],
    highlight: true,
  },
  {
    icon: Users,
    title: 'Séminaires',
    subtitle: 'Expérience collective',
    description:
      'Des expériences immersives en groupe pour vivre la puissance de la transformation collective et accéder à des dimensions impossibles à atteindre seul(e).',
    features: [
      'Expériences immersives sur plusieurs jours',
      'Dynamique de groupe pour amplifier la transformation',
      'Pratiques somatiques guidées en live',
      'Cercles de partage et d\'intégration',
      'Connexion avec une communauté d\'entrepreneurs alignés',
      'Suivi post-séminaire inclus',
    ],
    highlight: false,
  },
]

const processSteps = [
  {
    number: '01',
    icon: Eye,
    title: 'Prise de conscience',
    description: 'Identifier ce qui te bloque vraiment — souvent là où tu ne regardes pas.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Libération somatique',
    description: 'Traverser les tensions et émotions stockées dans ton corps pour les relâcher.',
  },
  {
    number: '03',
    icon: Heart,
    title: 'Intégration émotionnelle',
    description: 'Accueillir et transformer les émotions qui émergent en puissance créatrice.',
  },
  {
    number: '04',
    icon: Brain,
    title: 'Reprogrammation',
    description: 'Remplacer les schémas limitants par de nouvelles croyances alignées.',
  },
  {
    number: '05',
    icon: Repeat,
    title: 'Ancrage',
    description: 'Ancrer les nouveaux comportements pour une transformation durable.',
  },
]

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-brand-50 to-sage-50" />
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-brand-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6 block"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 leading-tight mb-8"
          >
            Un accompagnement à la
            <br />
            <span className="text-gradient">hauteur de ton ambition</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Des formules pensées pour les entrepreneurs qui veulent aller au-delà du développement
            personnel classique et accéder à une transformation véritable.
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={service.title} delay={i * 0.15}>
                  <motion.div
                    className={`relative rounded-3xl p-8 lg:p-10 h-full flex flex-col ${
                      service.highlight
                        ? 'bg-navy-900 text-white shadow-2xl shadow-navy-900/20 ring-1 ring-brand-400/30'
                        : 'bg-brand-50 border border-brand-100'
                    }`}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-400 rounded-full text-xs font-semibold text-navy-900 tracking-wider uppercase">
                        Le plus populaire
                      </div>
                    )}

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      service.highlight
                        ? 'bg-brand-400/20 text-brand-400'
                        : 'bg-white text-brand-500 shadow-sm'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`text-xs font-semibold tracking-widest uppercase mb-2 block ${
                      service.highlight ? 'text-brand-300' : 'text-brand-400'
                    }`}>
                      {service.subtitle}
                    </span>

                    <h3 className="font-display text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>

                    <p className={`leading-relaxed mb-8 ${
                      service.highlight ? 'text-navy-200' : 'text-navy-500'
                    }`}>
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            service.highlight ? 'text-brand-400' : 'text-sage-500'
                          }`} />
                          <span className={`text-sm ${
                            service.highlight ? 'text-navy-200' : 'text-navy-500'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={service.highlight ? 'btn-gold w-full justify-center' : 'btn-secondary w-full justify-center'}
                    >
                      Postuler
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-to-b from-white to-brand-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
              Processus
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-6">
              Comment se déroule la
              <span className="text-gradient"> transformation</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.number} delay={i * 0.1}>
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white border border-brand-100 flex items-center justify-center shadow-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-brand-500" />
                    </motion.div>
                    <span className="text-xs font-semibold text-brand-400 tracking-wider">{step.number}</span>
                    <h3 className="font-display text-lg text-navy-900 mt-2 mb-2">{step.title}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Questions fréquentes
            </h2>
          </ScrollReveal>

          {[
            {
              q: 'Qu\'est-ce que le coaching somatique ?',
              a: 'Le coaching somatique est une approche de transformation qui passe par le corps. Contrairement au coaching classique qui travaille principalement avec le mental, le coaching somatique accède aux blocages stockés dans le système nerveux et le corps pour les libérer. C\'est l\'une des approches les plus profondes et durables qui existent.',
            },
            {
              q: 'Est-ce que ça fonctionne en visio ?',
              a: 'Absolument. Le coaching somatique est tout aussi puissant en visio qu\'en présentiel. Le corps est accessible partout où tu es, et la connexion se fait naturellement à travers l\'écran. La majorité de mes clients sont accompagnés en visio avec des résultats exceptionnels.',
            },
            {
              q: 'Combien de temps dure un accompagnement ?',
              a: 'Chaque parcours est unique. En général, un accompagnement dure entre 3 et 6 mois pour permettre une transformation profonde et durable. Nous définissons ensemble la durée optimale en fonction de tes objectifs.',
            },
            {
              q: 'C\'est pour qui ?',
              a: 'Pour les entrepreneurs qui ont déjà un certain niveau de succès extérieur mais qui sentent qu\'il leur manque quelque chose d\'essentiel. Qui veulent aller au-delà du développement personnel classique et accéder à une transformation qui touche chaque dimension de leur être.',
            },
          ].map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <FaqItem question={faq.q} answer={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-navy-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
      >
        <span className="font-display text-lg text-navy-900 group-hover:text-brand-500 transition-colors">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 text-xl leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-navy-500 leading-relaxed pb-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
