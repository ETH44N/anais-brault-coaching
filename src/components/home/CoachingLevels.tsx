'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const levels = [
  {
    title: 'Mental',
    description:
      'Déconstruire les schémas de pensée limitants qui sabotent ton succès et ta sérénité.',
  },
  {
    title: 'Émotionnel',
    description:
      'Accueillir et traverser les émotions refoulées qui te bloquent. Transformer la douleur en puissance créatrice.',
  },
  {
    title: 'Somatique',
    description:
      'Libérer les tensions et traumatismes stockés dans le corps. Le corps ne ment jamais — il détient les clefs de ta transformation.',
  },
  {
    title: 'Inconscient',
    description:
      'Explorer les programmes inconscients hérités de ton histoire. Rendre visible l\'invisible pour s\'en libérer.',
  },
  {
    title: 'Comportemental',
    description:
      'Ancrer de nouveaux comportements alignés avec la personne que tu deviens.',
  },
]

export default function CoachingLevels() {
  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-5xl mx-auto px-2">
        <ScrollReveal className="mb-20">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-navy-400 mb-6 block">
            Méthode
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-navy-900 leading-[1.15] max-w-3xl">
            Cinq niveaux d&apos;intervention,
            <br />
            <em className="not-italic text-brand-500">une seule transformation</em>.
          </h2>
        </ScrollReveal>

        <div>
          {levels.map((level, i) => (
            <ScrollReveal key={level.title} delay={Math.min(i * 0.05, 0.2)}>
              <div
                className={`grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr_2fr] gap-6 md:gap-12 items-baseline py-10 ${
                  i < levels.length - 1 ? 'border-b border-navy-100' : ''
                }`}
              >
                <span className="font-display text-2xl md:text-3xl text-brand-400 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-navy-900 tracking-tight">
                  {level.title}
                </h3>
                <p className="col-span-2 md:col-span-1 md:col-start-3 text-navy-500 leading-[1.7] text-base md:text-lg">
                  {level.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
