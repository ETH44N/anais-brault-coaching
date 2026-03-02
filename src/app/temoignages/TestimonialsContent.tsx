'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Quote, Star, TrendingUp, Mic, Rocket, DollarSign, Lightbulb } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const testimonials = [
  {
    name: 'Eva De Ascencao',
    role: 'Entrepreneure',
    icon: DollarSign,
    quote:
      'Grâce au coaching d\'Anaïs, j\'ai atteint les 100 000 € de chiffre d\'affaires en une semaine. Le travail somatique a complètement débloqué ma relation à l\'argent et au succès. Ce qui a changé, ce n\'est pas ma stratégie — c\'est quelque chose de bien plus profond, dans mon corps, dans ma façon d\'être.',
    metric: '100K€ / semaine',
    metricLabel: 'Chiffre d\'affaires',
    accent: 'from-amber-400 to-amber-500',
  },
  {
    name: 'Kanna AKA',
    role: 'Entrepreneure',
    icon: Mic,
    quote:
      'J\'avais une peur paralysante de parler en public. Cela impactait tout : mes présentations, mes lives, ma visibilité. Anaïs m\'a aidée à libérer ce qui était stocké dans mon corps, et aujourd\'hui je prends la parole avec confiance et plaisir. Je ne savais même pas que c\'était possible.',
    metric: 'Peur vaincue',
    metricLabel: 'Prise de parole',
    accent: 'from-rose-400 to-rose-500',
  },
  {
    name: 'Nicolas Landrieau',
    role: 'Entrepreneur',
    icon: Lightbulb,
    quote:
      'Le coaching le plus abstrait que j\'ai connu, mais avec les résultats les plus concrets. C\'est paradoxal et pourtant c\'est exactement ça. On travaille sur des choses qui ne se voient pas, qui ne s\'expliquent pas facilement, et pourtant les résultats sont là, tangibles, mesurables. Anaïs a un don.',
    metric: 'Abstrait → Concret',
    metricLabel: 'Transformation',
    accent: 'from-violet-400 to-violet-500',
  },
  {
    name: 'Matthias',
    role: 'Entrepreneur',
    icon: Rocket,
    quote:
      'J\'ai enfin lancé mon business et atteint mes objectifs. Le coaching somatique m\'a permis de dépasser des blocages que des années de développement personnel n\'avaient pas touchés. Ce n\'est pas du mindset, ce n\'est pas de la motivation — c\'est quelque chose de plus profond qui se libère dans le corps.',
    metric: 'Business lancé',
    metricLabel: 'Objectifs atteints',
    accent: 'from-blue-400 to-blue-500',
  },
  {
    name: 'Anaëlle',
    role: 'Entrepreneure',
    icon: TrendingUp,
    quote:
      'Mon chiffre d\'affaires est passé de 2 000 € à 4 900 € par mois. Mais au-delà des chiffres, c\'est ma relation à moi-même qui a fondamentalement changé. Je me sens plus libre, plus alignée, plus joyeuse. Et ça se reflète dans tout : mon business, mes relations, ma vie.',
    metric: '2K → 4.9K€/mois',
    metricLabel: 'Revenus mensuels',
    accent: 'from-emerald-400 to-emerald-500',
  },
]

function MetricCounter({ metric, inView }: { metric: string; inView: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
      className="font-display text-2xl font-bold"
    >
      {metric}
    </motion.span>
  )
}

export default function TestimonialsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-cream-100 to-sage-50" />
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-brand-200/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6 block"
          >
            Témoignages
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 leading-tight mb-8"
          >
            Des transformations
            <br />
            <span className="text-gradient">qui parlent d&apos;elles-mêmes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Des entrepreneurs comme toi qui ont osé aller au-delà du mental.
            Voici leurs histoires.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-900 py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '100+', label: 'Entrepreneurs accompagnés' },
              { number: '5', label: 'Niveaux d\'intervention' },
              { number: '95%', label: 'Recommanderaient' },
              { number: '∞', label: 'Potentiel libéré' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-brand-400">{stat.number}</p>
                  <p className="text-navy-300 text-sm mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-white to-brand-50">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
              Prêt(e) à écrire <span className="text-gradient">ta propre histoire</span> ?
            </h2>
            <p className="text-navy-500 text-lg mb-10">
              Chaque transformation commence par un premier pas. Le tien commence ici.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary group">
                Remplir le formulaire
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Voir les services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = testimonial.icon
  const isEven = index % 2 === 0

  return (
    <ScrollReveal direction={isEven ? 'left' : 'right'}>
      <div
        ref={ref}
        className="relative bg-brand-50/50 rounded-3xl border border-brand-100/50 overflow-hidden"
      >
        <div className={`grid lg:grid-cols-[1fr_300px] ${!isEven ? 'lg:grid-cols-[300px_1fr]' : ''} gap-0`}>
          {/* Content */}
          <div className={`p-8 md:p-12 ${!isEven ? 'lg:order-2' : ''}`}>
            <Quote className="w-10 h-10 text-brand-300/40 mb-6" />
            <blockquote className="font-display text-xl md:text-2xl text-navy-800 leading-relaxed mb-8 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.accent} flex items-center justify-center text-white`}>
                <span className="font-display font-bold text-lg">
                  {testimonial.name[0]}
                </span>
              </div>
              <div>
                <p className="font-display font-semibold text-navy-900">{testimonial.name}</p>
                <p className="text-navy-400 text-sm">{testimonial.role}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-brand-400 text-brand-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Metric panel */}
          <div className={`bg-gradient-to-br ${testimonial.accent} p-8 md:p-12 flex flex-col items-center justify-center text-white ${!isEven ? 'lg:order-1' : ''}`}>
            <Icon className="w-10 h-10 mb-4 opacity-80" />
            <MetricCounter metric={testimonial.metric} inView={inView} />
            <p className="text-sm opacity-80 mt-2">{testimonial.metricLabel}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
