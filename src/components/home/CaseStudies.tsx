'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

type CarouselVideo = {
  id: string
  name: string
  role: string
  quote: string
  metric: string
}

const oneToOneVideos: CarouselVideo[] = [
  {
    id: 'M5mMX5rxeME',
    name: 'Eva De Ascencao',
    role: 'Entrepreneure',
    quote: 'Grâce au coaching d\'Anaïs, j\'ai atteint les 100 000 € de chiffre d\'affaires en une semaine. Le travail somatique a complètement débloqué ma relation à l\'argent et au succès.',
    metric: '100 000 € en une semaine',
  },
  {
    id: 'n9Ww-aPvXRc',
    name: 'Anaëlle',
    role: 'Entrepreneure',
    quote: 'Mon chiffre d\'affaires est passé de zéro à 5 000 € par mois. Au-delà des chiffres, c\'est ma relation à moi-même qui a fondamentalement changé.',
    metric: 'De 0 à 5 000 € / mois',
  },
  {
    id: 'yoUGL-4iAJI',
    name: 'Matthias',
    role: 'Entrepreneur',
    quote: 'J\'ai enfin lancé mon business et atteint mes objectifs. Le coaching somatique m\'a permis de dépasser des blocages que des années de développement personnel n\'avaient pas touchés.',
    metric: 'Business lancé après avoir été employé longtemps',
  },
  {
    id: 'GixdOYctyWM',
    name: 'Nicolas Landrieau',
    role: 'Entrepreneur',
    quote: 'Le coaching le plus abstrait que j\'ai connu, mais avec les résultats les plus concrets. C\'est paradoxal et pourtant c\'est exactement ça.',
    metric: 'Résultats concrets, mesurables',
  },
  {
    id: 'LPNNF4DOKeA',
    name: 'Kanna AKA',
    role: 'Entrepreneure',
    quote: 'J\'avais une peur paralysante de parler en public. Anaïs m\'a aidée à libérer ce qui était stocké dans mon corps, et aujourd\'hui je prends la parole avec confiance et plaisir.',
    metric: 'Peur de parler en public dépassée',
  },
]

const workshopVideos: CarouselVideo[] = [
  // Théo, Victor à ajouter quand les liens seront fournis
  {
    id: 'wh5ayVW_8QY',
    name: 'Andréa',
    role: 'Entrepreneure',
    quote: '',
    metric: '',
  },
  {
    id: '7-QKjoSuRIM',
    name: 'Pierre',
    role: 'Entrepreneur',
    quote: '',
    metric: '',
  },
  {
    id: 'jO0E6WWuJiM',
    name: 'Kanna AKA',
    role: 'Entrepreneure',
    quote: '',
    metric: '',
  },
  {
    id: 'ruBGHtwoiBQ',
    name: '',
    role: '',
    quote: '',
    metric: '',
  },
]

function Carousel({ videos, title }: { videos: CarouselVideo[]; title: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  const current = videos[selectedIndex]

  return (
    <ScrollReveal>
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-navy-400 mb-4 block">
            Témoignages
          </span>
          <h2 className="font-display text-2xl md:text-3xl text-navy-900 leading-[1.2]">
            {title}
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {videos.map((v) => (
                <div key={v.id} className="flex-[0_0_100%] min-w-0">
                  <div className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-navy-100">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={`Témoignage${v.name ? ' – ' + v.name : ''}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-[-1.5rem] top-[40%] -translate-y-1/2 bg-white border border-navy-100 rounded-full p-1.5 shadow-sm hover:bg-brand-50 transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-4 h-4 text-navy-700" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-[-1.5rem] top-[40%] -translate-y-1/2 bg-white border border-navy-100 rounded-full p-1.5 shadow-sm hover:bg-brand-50 transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-4 h-4 text-navy-700" />
          </button>
        </div>

        <div className="mt-8 min-h-[100px]">
          {current.quote && (
            <blockquote className="font-display text-lg md:text-xl text-navy-800 leading-[1.5] tracking-tight mb-6">
              <span className="text-brand-400 mr-1">"</span>
              {current.quote}
              <span className="text-brand-400 ml-1">"</span>
            </blockquote>
          )}
          {current.name && (
            <div className="pt-4 border-t border-navy-100 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <p className="font-display text-base text-navy-900">{current.name}</p>
                {current.role && <p className="text-sm text-navy-400 mt-0.5">{current.role}</p>}
              </div>
              {current.metric && (
                <p className="text-[11px] tracking-[0.25em] uppercase text-brand-500 font-medium">
                  {current.metric}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-center gap-1.5 mt-4">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === selectedIndex ? 'bg-brand-500' : 'bg-navy-200'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function CaseStudies() {
  return (
    <section className="section-padding pt-8 md:pt-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-6">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-navy-400 mb-6 block">
            Cas clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-navy-900 leading-[1.15] max-w-3xl">
            Des entrepreneurs qui ont osé
            <br />
            <em className="not-italic text-brand-500">aller au-delà du mental</em>.
          </h2>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          <Carousel videos={oneToOneVideos} title="Ils ont travaillé avec moi en 1:1" />
          <Carousel videos={workshopVideos} title="Workshops et retraites" />
        </div>
      </div>
    </section>
  )
}
