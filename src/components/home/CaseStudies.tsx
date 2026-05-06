'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, TrendingUp, Mic, Rocket, DollarSign, Lightbulb, type LucideIcon } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

type Testimonial = {
  name: string
  role: string
  icon: LucideIcon
  quote: string
  metric: string
  metricLabel: string
  accent: string
  videoId?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Eva De Ascencao',
    role: 'Entrepreneure',
    icon: DollarSign,
    quote:
      'Grâce au coaching d\'Anaïs, j\'ai atteint les 100 000 € de chiffre d\'affaires en une semaine. Le travail somatique a complètement débloqué ma relation à l\'argent et au succès.',
    metric: '100K€ / semaine',
    metricLabel: 'Chiffre d\'affaires',
    accent: 'from-amber-400 to-amber-500',
    videoId: 'M5mMX5rxeME',
  },
  {
    name: 'Matthias',
    role: 'Entrepreneur',
    icon: Rocket,
    quote:
      'J\'ai enfin lancé mon business et atteint mes objectifs. Le coaching somatique m\'a permis de dépasser des blocages que des années de développement personnel n\'avaient pas touchés.',
    metric: 'Business lancé',
    metricLabel: 'Objectifs atteints',
    accent: 'from-blue-400 to-blue-500',
    videoId: 'yoUGL-4iAJI',
  },
  {
    name: 'Kanna AKA',
    role: 'Entrepreneure',
    icon: Mic,
    quote:
      'J\'avais une peur paralysante de parler en public. Anaïs m\'a aidée à libérer ce qui était stocké dans mon corps, et aujourd\'hui je prends la parole avec confiance et plaisir.',
    metric: 'Peur vaincue',
    metricLabel: 'Prise de parole',
    accent: 'from-rose-400 to-rose-500',
  },
  {
    name: 'Nicolas Landrieau',
    role: 'Entrepreneur',
    icon: Lightbulb,
    quote:
      'Le coaching le plus abstrait que j\'ai connu, mais avec les résultats les plus concrets. C\'est paradoxal et pourtant c\'est exactement ça. Anaïs a un don.',
    metric: 'Abstrait → Concret',
    metricLabel: 'Transformation',
    accent: 'from-violet-400 to-violet-500',
  },
  {
    name: 'Anaëlle',
    role: 'Entrepreneure',
    icon: TrendingUp,
    quote:
      'Mon chiffre d\'affaires est passé de 2 000 € à 4 900 € par mois. Au-delà des chiffres, c\'est ma relation à moi-même qui a fondamentalement changé.',
    metric: '2K → 4.9K€/mois',
    metricLabel: 'Revenus mensuels',
    accent: 'from-emerald-400 to-emerald-500',
  },
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
            Cas clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-6">
            Des transformations
            <span className="text-gradient"> qui parlent</span>
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Des entrepreneurs comme toi qui ont osé aller au-delà du mental.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <Card key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ testimonial, index }: { testimonial: Testimonial; index: number }) {
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
          <div className={`p-8 md:p-12 ${!isEven ? 'lg:order-2' : ''}`}>
            {testimonial.videoId && (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg border border-brand-100/50">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={`Témoignage de ${testimonial.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            )}
            <Quote className="w-10 h-10 text-brand-300/40 mb-6" />
            <blockquote className="font-display text-xl md:text-2xl text-navy-800 leading-relaxed mb-8 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.accent} flex items-center justify-center text-white`}>
                <span className="font-display font-bold text-lg">{testimonial.name[0]}</span>
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

          <div className={`bg-gradient-to-br ${testimonial.accent} p-8 md:p-12 flex flex-col items-center justify-center text-white ${!isEven ? 'lg:order-1' : ''}`}>
            <Icon className="w-10 h-10 mb-4 opacity-80" />
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
              className="font-display text-2xl font-bold text-center"
            >
              {testimonial.metric}
            </motion.span>
            <p className="text-sm opacity-80 mt-2 text-center">{testimonial.metricLabel}</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
