'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const mentorPhotos = [
  '/mentor/alyssa-1.jpg',
  '/mentor/alyssa-2.jpg',
  '/mentor/alyssa-3.jpg',
  '/mentor/alyssa-4.jpg',
  '/mentor/alyssa-5.jpg',
]

export default function MentorSection() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={mentorPhotos[0]}
                  alt="Anaïs avec Alyssa Nobriga"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="absolute -bottom-px left-0 bg-cream-100 px-6 pt-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-navy-400 font-medium">Mentor</p>
                <p className="font-display text-xl text-navy-900 mt-1">Alyssa Nobriga</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-navy-400 mb-6 block">
                Lignée
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] text-navy-900 mb-10 leading-[1.15]">
                Formée à l&apos;école d&apos;
                <em className="not-italic text-brand-500">Alyssa Nobriga</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-navy-700 text-lg leading-[1.7] mb-6">
                Psychologue clinicienne somatique, titulaire de masters en psychologie clinique
                et en psychologie spirituelle, Alyssa Nobriga est la fondatrice de The Institute
                for Coaching Mastery — l&apos;une des rares écoles à intégrer thérapie somatique,
                psychologie en profondeur et stratégie d&apos;alignement.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-navy-700 text-lg leading-[1.7]">
                C&apos;est cette transmission directe qui façonne chaque accompagnement
                que je propose : présence incarnée, lecture corporelle, et la conviction que
                la transformation se vit dans le corps avant de se penser.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-4 gap-2 mt-12">
                {mentorPhotos.slice(1).map((src, i) => (
                  <motion.div
                    key={src}
                    className="relative aspect-square overflow-hidden bg-brand-50"
                    whileHover={{ opacity: 0.85 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={src}
                      alt={`Anaïs avec Alyssa Nobriga ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
