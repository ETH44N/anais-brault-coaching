'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Brain, Heart, Zap, Eye, Repeat } from 'lucide-react'

const levels = [
  {
    icon: Zap,
    title: 'Somatique',
    description: 'Libérer les tensions et traumatismes stockés dans le corps. Le corps ne ment jamais — il détient les clefs de ta transformation.',
    color: 'from-sage-400 to-sage-500',
    bgColor: 'bg-sage-50',
    borderColor: 'border-sage-200',
  },
  {
    icon: Heart,
    title: 'Émotionnel',
    description: 'Accueillir et traverser les émotions refoulées qui te bloquent. Transformer la douleur en puissance créatrice.',
    color: 'from-rose-400 to-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
  },
  {
    icon: Brain,
    title: 'Mental',
    description: 'Déconstruire les schémas de pensée limitants qui sabotent ton succès et ta sérénité.',
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Eye,
    title: 'Inconscient',
    description: 'Explorer les programmes inconscients hérités de ton histoire. Rendre visible l\'invisible pour s\'en libérer.',
    color: 'from-violet-400 to-violet-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
  },
  {
    icon: Repeat,
    title: 'Comportemental',
    description: 'Ancrer de nouveaux comportements alignés avec la personne que tu deviens. Du savoir au faire, du faire à l\'être.',
    color: 'from-brand-400 to-brand-500',
    bgColor: 'bg-brand-100',
    borderColor: 'border-brand-200',
  },
]

function ProgressBar({ index, inView }: { index: number; inView: boolean }) {
  return (
    <div className="w-full h-1 bg-navy-100 rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${levels[index].color}`}
        initial={{ width: '0%' }}
        animate={inView ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

export default function CoachingLevels() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-300/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
            Méthode
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-6">
            5 niveaux de
            <span className="text-gradient"> transformation</span>
          </h2>
          <p className="text-navy-500 max-w-2xl mx-auto text-lg">
            Une approche unique qui intègre chaque dimension de ton être pour une transformation profonde et durable.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {levels.map((level, i) => {
            const Icon = level.icon
            return (
              <ScrollReveal key={level.title} delay={i * 0.1}>
                <motion.div
                  className={`relative p-8 rounded-2xl border ${level.borderColor} ${level.bgColor}/50 backdrop-blur-sm group cursor-default h-full`}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-navy-900 mb-3">
                    {level.title}
                  </h3>
                  <p className="text-navy-500 leading-relaxed mb-6 text-sm">
                    {level.description}
                  </p>

                  <ProgressBar index={i} inView={isInView} />

                  <div className="absolute top-4 right-4 text-5xl font-display font-bold text-navy-900/[0.03]">
                    0{i + 1}
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
