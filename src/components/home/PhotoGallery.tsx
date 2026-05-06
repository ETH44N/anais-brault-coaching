'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const galleryPhotos = [
  '/photos/anais-1.jpg',
  '/photos/anais-2.jpg',
  '/photos/anais-3.jpg',
  '/photos/anais-4.jpg',
  '/photos/anais-5.jpg',
  '/photos/anais-6.jpg',
  '/photos/anais-7.jpg',
  '/photos/anais-8.jpg',
  '/photos/anais-9.jpg',
  '/photos/coaching-approach.jpg',
  '/photos/meditation.jpg',
  '/photos/anais-12.jpg',
]

export default function PhotoGallery() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
            Univers
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-4">
            Plonge dans
            <span className="text-gradient"> l&apos;univers</span>
          </h2>
          <p className="text-navy-500 max-w-xl mx-auto text-lg">
            Quelques instants de présence, de pratique et de joie partagée.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryPhotos.map((src, i) => (
            <ScrollReveal key={src} delay={Math.min(i * 0.04, 0.4)}>
              <motion.div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-50 cursor-zoom-in"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`Photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
