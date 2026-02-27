'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const testimonials = [
  {
    name: 'Eva De Ascencao',
    role: 'Entrepreneure',
    quote:
      'Grâce au coaching d\'Anaïs, j\'ai atteint les 100 000 € de chiffre d\'affaires en une semaine. Le travail somatique a complètement débloqué ma relation à l\'argent et au succès.',
    metric: '100K€ / semaine',
  },
  {
    name: 'Kanna AKA',
    role: 'Entrepreneure',
    quote:
      'J\'avais une peur paralysante de parler en public. Anaïs m\'a aidée à libérer ce qui était stocké dans mon corps, et aujourd\'hui je prends la parole avec confiance et plaisir.',
    metric: 'Peur vaincue',
  },
  {
    name: 'Nicolas Landrieau',
    role: 'Entrepreneur',
    quote:
      'Le coaching le plus abstrait que j\'ai connu, mais avec les résultats les plus concrets. C\'est paradoxal et pourtant c\'est exactement ça. Anaïs a un don.',
    metric: 'Résultats concrets',
  },
  {
    name: 'Matthias',
    role: 'Entrepreneur',
    quote:
      'J\'ai enfin lancé mon business et atteint mes objectifs. Le coaching somatique m\'a permis de dépasser des blocages que des années de développement personnel n\'avaient pas touchés.',
    metric: 'Business lancé',
  },
  {
    name: 'Anaëlle',
    role: 'Entrepreneure',
    quote:
      'Mon chiffre d\'affaires est passé de 2 000 € à 4 900 € par mois. Au-delà des chiffres, c\'est ma relation à moi-même qui a fondamentalement changé.',
    metric: '2K → 4.9K€/mois',
  },
]

export default function TestimonialsPreview() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-brand-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-200/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-6">
            Ce qu&apos;ils en
            <span className="text-gradient"> disent</span>
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Des transformations concrètes vécues par des entrepreneurs comme toi.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((t, i) => (
                <div key={t.name} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
                  <motion.div
                    className="relative bg-white rounded-2xl p-8 shadow-sm border border-navy-100/50 h-full flex flex-col"
                    whileHover={{ y: -4, shadow: 'lg' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-8 h-8 text-brand-300/50 mb-4" />
                    <p className="text-navy-600 leading-relaxed flex-1 text-sm">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-6 pt-6 border-t border-navy-100/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-display font-semibold text-navy-900">{t.name}</p>
                          <p className="text-navy-400 text-sm">{t.role}</p>
                        </div>
                        <span className="text-xs font-semibold tracking-wider uppercase text-brand-500 bg-brand-100 px-3 py-1 rounded-full">
                          {t.metric}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-navy-200 flex items-center justify-center text-navy-400 hover:text-navy-900 hover:border-navy-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? 'bg-brand-400 w-6' : 'bg-navy-200'
                  }`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Aller au témoignage ${i + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-navy-200 flex items-center justify-center text-navy-400 hover:text-navy-900 hover:border-navy-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link href="/temoignages" className="inline-flex items-center gap-2 text-brand-500 font-semibold hover:text-brand-600 transition-colors group">
            Voir tous les témoignages
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
