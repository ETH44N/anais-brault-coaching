'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const mentorPhotos = [
  '/mentor/alisa-1.jpg',
  '/mentor/alisa-2.jpg',
  '/mentor/alisa-3.jpg',
  '/mentor/alisa-4.jpg',
  '/mentor/alisa-5.jpg',
]

export default function MentorSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-cream-100 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <motion.div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={mentorPhotos[0]}
                  alt="Anaïs avec sa mentor Alisa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl px-5 py-3 shadow-xl border border-brand-100">
                <p className="text-xs uppercase tracking-widest text-brand-500 font-semibold">Mentor</p>
                <p className="font-display text-lg text-navy-900">Alisa</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
                Lignée
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-8 leading-tight">
                Formée par
                <span className="text-gradient"> Alisa</span>,
                <br />une référence du coaching somatique
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-navy-600 text-lg leading-relaxed mb-6">
                Mon approche s&apos;ancre dans une transmission directe. J&apos;ai été formée
                par Alisa, mentor reconnue dans le coaching somatique, qui m&apos;a transmis
                l&apos;art d&apos;écouter le corps comme on écoute un texte sacré.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-navy-600 text-lg leading-relaxed">
                Cet héritage façonne chaque accompagnement que je propose : une présence
                profonde, une lecture fine, et la conviction que la transformation se vit
                dans le corps avant de se penser.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-4 gap-3 mt-10">
                {mentorPhotos.slice(1).map((src, i) => (
                  <motion.div
                    key={src}
                    className="relative aspect-square rounded-xl overflow-hidden border border-brand-100/50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={src}
                      alt={`Anaïs avec Alisa ${i + 2}`}
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
