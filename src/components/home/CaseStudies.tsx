'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

type Testimonial = {
  name: string
  role: string
  quote: string
  metric: string
  videoId?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Eva De Ascencao',
    role: 'Entrepreneure',
    quote:
      'Grâce au coaching d\'Anaïs, j\'ai atteint les 100 000 € de chiffre d\'affaires en une semaine. Le travail somatique a complètement débloqué ma relation à l\'argent et au succès.',
    metric: '100 000 € en une semaine',
    videoId: 'M5mMX5rxeME',
  },
  {
    name: 'Matthias',
    role: 'Entrepreneur',
    quote:
      'J\'ai enfin lancé mon business et atteint mes objectifs. Le coaching somatique m\'a permis de dépasser des blocages que des années de développement personnel n\'avaient pas touchés.',
    metric: 'Business lancé après des années de blocage',
    videoId: 'yoUGL-4iAJI',
  },
  {
    name: 'Kanna AKA',
    role: 'Entrepreneure',
    quote:
      'J\'avais une peur paralysante de parler en public. Anaïs m\'a aidée à libérer ce qui était stocké dans mon corps, et aujourd\'hui je prends la parole avec confiance et plaisir.',
    metric: 'Peur de parler en public dépassée',
  },
  {
    name: 'Nicolas Landrieau',
    role: 'Entrepreneur',
    quote:
      'Le coaching le plus abstrait que j\'ai connu, mais avec les résultats les plus concrets. C\'est paradoxal et pourtant c\'est exactement ça. Anaïs a un don.',
    metric: 'Résultats concrets, mesurables',
  },
  {
    name: 'Anaëlle',
    role: 'Entrepreneure',
    quote:
      'Mon chiffre d\'affaires est passé de 2 000 € à 4 900 € par mois. Au-delà des chiffres, c\'est ma relation à moi-même qui a fondamentalement changé.',
    metric: 'CA mensuel × 2,5',
  },
]

export default function CaseStudies() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-24">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-navy-400 mb-6 block">
            Cas clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-navy-900 leading-[1.15] max-w-3xl">
            Des entrepreneurs qui ont osé
            <br />
            <em className="not-italic text-brand-500">aller au-delà du mental</em>.
          </h2>
        </ScrollReveal>

        <div className="space-y-28 md:space-y-36">
          {testimonials.map((t) => (
            <Testimonial key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonial({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <ScrollReveal>
      <article className="max-w-3xl mx-auto">
        {t.videoId && (
          <div className="relative aspect-video overflow-hidden mb-12 ring-1 ring-navy-100">
            <iframe
              src={`https://www.youtube.com/embed/${t.videoId}`}
              title={`Témoignage de ${t.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}

        <blockquote className="font-display text-2xl md:text-[1.75rem] text-navy-800 leading-[1.45] tracking-tight">
          <span className="text-brand-400 mr-1">“</span>
          {t.quote}
          <span className="text-brand-400 ml-1">”</span>
        </blockquote>

        <div className="mt-10 pt-6 border-t border-navy-100 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
          <div>
            <p className="font-display text-lg text-navy-900">{t.name}</p>
            <p className="text-sm text-navy-400 mt-1">{t.role}</p>
          </div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-brand-500 font-medium">
            {t.metric}
          </p>
        </div>
      </article>
    </ScrollReveal>
  )
}
