'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Philosophy() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column — first in DOM so title appears above image on mobile */}
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
                Philosophie
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 mb-8 leading-tight">
                De l&apos;intellect au
                <span className="text-gradient"> corps</span>,
                <br />la vraie intelligence
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-navy-500 text-lg leading-relaxed mb-6">
                Formée en philosophie, j&apos;ai longtemps cru que les réponses se trouvaient dans la tête. 
                Puis j&apos;ai parcouru une dizaine de pays en auto-stop, et mon corps m&apos;a appris ce que 
                mon mental ne pouvait pas comprendre.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-navy-500 text-lg leading-relaxed mb-8">
                Aujourd&apos;hui, certifiée par <a href="https://www.alyssanobriga.com/applynow/" target="_blank" rel="noopener noreferrer" className="text-navy-700 font-semibold hover:text-brand-500 transition-colors underline underline-offset-2">The Institute for Coaching Mastery</a> sous
                la direction d&apos;Alyssa Nobriga, je suis l&apos;une des rares coaches somatiques en France.
                Je me forme également en psychologie spirituelle auprès de l&apos;<a href="https://www.universityofsantamonica.edu/" target="_blank" rel="noopener noreferrer" className="text-navy-700 font-semibold hover:text-brand-500 transition-colors underline underline-offset-2">University of Santa Monica</a>.
                Mon approche intègre les enseignements de <em>Gabor Maté</em>, <em>Byron Katie</em> et <em>Teal Swan</em> pour
                une transformation qui touche chaque niveau de ton être.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-8">
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">ICM</p>
                  <p className="text-navy-400 text-sm mt-1">Certification</p>
                </div>
                <div className="w-px bg-navy-100 hidden sm:block" />
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">5</p>
                  <p className="text-navy-400 text-sm mt-1">Niveaux d&apos;intervention</p>
                </div>
                <div className="w-px bg-navy-100 hidden sm:block" />
                <div>
                  <p className="font-display text-3xl font-bold text-gradient">100%</p>
                  <p className="text-navy-400 text-sm mt-1">Holistique</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image Column */}
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-sage-100 to-brand-100"
                style={{ y: imageY }}
              >
                <Image
                  src="/anais-portrait.jpg"
                  alt="Anaïs Brault, coach psycho-somatique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              <motion.div
                className="hidden md:block absolute -bottom-6 right-6 bg-white rounded-2xl p-5 shadow-xl border border-brand-100 max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="divide-y divide-navy-100">
                  {[
                    { value: '3 ans', label: 'formée en philosophie' },
                    { value: '2 ans', label: 'formée en coaching auprès d\'Alyssa Nobriga' },
                    { value: 'Master', label: 'en psychologie spirituelle à l\'Université de Santa Monica' },
                    { value: '10+', label: 'pays parcourus en auto-stop, une quête de sens devenue une méthode' },
                  ].map(({ value, label }) => (
                    <div key={value} className="py-3 flex items-start gap-3">
                      <span className="font-display text-xl font-bold text-gradient w-20 flex-shrink-0">{value}</span>
                      <span className="text-navy-500 text-xs leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
