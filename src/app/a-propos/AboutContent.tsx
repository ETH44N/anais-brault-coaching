'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, GraduationCap, Heart, Star } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const timeline = [
  {
    year: 'Études',
    icon: GraduationCap,
    title: 'Formation en philosophie',
    description:
      'Une quête intellectuelle profonde pour comprendre la nature humaine, le sens de la vie et les mécanismes de la souffrance.',
  },
  {
    year: 'Voyage',
    icon: MapPin,
    title: '10+ pays en auto-stop',
    description:
      'Un voyage initiatique à travers le monde qui révèle une vérité : le corps sait ce que le mental ignore. La sagesse est incarnée.',
  },
  {
    year: 'Révélation',
    icon: Heart,
    title: 'De l\'intellect au corps',
    description:
      'La découverte du coaching somatique comme pont entre la compréhension intellectuelle et la transformation vécue dans le corps.',
  },
  {
    year: 'Certification',
    icon: Star,
    title: 'ICM — Alyssa Nobriga',
    description:
      'Certification par The Institute for Coaching Mastery. L\'une des rares coaches somatiques certifiées en France.',
  },
]

const influences = [
  {
    name: 'Gabor Maté',
    focus: 'Trauma & Corps',
    description: 'Comprendre comment les traumatismes se stockent dans le corps et impactent notre santé et nos comportements.',
  },
  {
    name: 'Teal Swan',
    focus: 'Ombre & Inconscient',
    description: 'Explorer les parts d\'ombre et les programmes inconscients pour intégrer toutes les dimensions de notre être.',
  },
  {
    name: 'Byron Katie',
    focus: 'Mental & Croyances',
    description: 'Questionner les croyances limitantes et les schémas de pensée qui créent la souffrance.',
  },
]

export default function AboutContent() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-brand-50 to-cream-100" />
          <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-sage-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-brand-200/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6 block"
          >
            À Propos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 leading-tight mb-8"
          >
            Le chemin de l&apos;intellect
            <br />
            <span className="text-gradient">au corps</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-navy-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Mon parcours m&apos;a appris que la vraie transformation ne passe pas par la compréhension,
            mais par l&apos;expérience vécue dans le corps. Voici mon histoire.
          </motion.p>
        </div>
      </section>

      {/* Intro video */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-10">
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
              En vidéo
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Découvre Anaïs en quelques minutes
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-100/50 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/2oyoE9gEsK8"
                title="Découvre Anaïs Brault"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story / Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Mon parcours
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              De la philosophie académique au coaching somatique, un chemin de découverte qui a tout changé.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-300 via-sage-300 to-brand-300" />

            {timeline.map((item, i) => {
              const Icon = item.icon
              const isEven = i % 2 === 0
              return (
                <ScrollReveal
                  key={item.title}
                  delay={i * 0.15}
                  direction={isEven ? 'left' : 'right'}
                  className="relative mb-16 last:mb-0"
                >
                  <div className={`flex items-start gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`hidden md:block flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                      <span className="text-sm font-semibold tracking-widest uppercase text-brand-400">
                        {item.year}
                      </span>
                      <h3 className="font-display text-2xl text-navy-900 mt-2 mb-3">{item.title}</h3>
                      <p className="text-navy-500 leading-relaxed">{item.description}</p>
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-300 flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-brand-500" />
                      </div>
                    </div>

                    {/* Mobile content */}
                    <div className="md:hidden flex-1">
                      <span className="text-sm font-semibold tracking-widest uppercase text-brand-400">
                        {item.year}
                      </span>
                      <h3 className="font-display text-xl text-navy-900 mt-2 mb-3">{item.title}</h3>
                      <p className="text-navy-500 leading-relaxed text-sm">{item.description}</p>
                    </div>

                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-gradient-to-b from-white to-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-sage-100 via-brand-100 to-cream-200">
                  <Image
                    src="/anais-portrait.jpg"
                    alt="Anaïs Brault, coach psycho-somatique"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-brand-200/30 -z-10" />
              </div>
            </ScrollReveal>

            {/* Bio text */}
            <div>
              <ScrollReveal>
                <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
                  Qui suis-je
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-8">
                  Anaïs Brault
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-navy-600 text-lg leading-relaxed mb-6">
                  J&apos;ai étudié la philosophie en cherchant dans les livres les réponses aux grandes questions
                  de l&apos;existence. Puis un jour, j&apos;ai tout quitté pour parcourir le monde en auto-stop —
                  une dizaine de pays, le pouce levé, le cœur ouvert.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-navy-600 text-lg leading-relaxed mb-6">
                  Sur la route, j&apos;ai découvert que la vraie sagesse n&apos;habite pas dans la tête,
                  mais dans le corps. Que nos blocages, nos peurs, nos limitations ne sont pas des
                  problèmes à résoudre mentalement — ce sont des expériences à traverser physiquement.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-navy-600 text-lg leading-relaxed mb-8">
                  Aujourd&apos;hui, je mets cette compréhension au service des entrepreneurs qui ont tout
                  réussi en apparence, mais qui sentent qu&apos;il manque quelque chose d&apos;essentiel.
                  Ensemble, nous libérons ce qui est bloqué pour accéder à une vie plus libre,
                  plus joyeuse, et un business qui reflète qui ils sont vraiment.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Link href="/contact" className="btn-primary group">
                  Discutons ensemble
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Influences */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
              Influences
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Les penseurs qui m&apos;inspirent
            </h2>
            <p className="text-navy-500 max-w-xl mx-auto">
              Mon approche est nourrie par les travaux de trois pionniers de la transformation humaine.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {influences.map((inf, i) => (
              <ScrollReveal key={inf.name} delay={i * 0.15}>
                <motion.div
                  className="bg-brand-50 rounded-2xl p-8 border border-brand-100/50 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs font-semibold tracking-widest uppercase text-brand-400 mb-4 block">
                    {inf.focus}
                  </span>
                  <h3 className="font-display text-2xl text-navy-900 mb-4">{inf.name}</h3>
                  <p className="text-navy-500 leading-relaxed">{inf.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-white to-brand-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-16">
              Ce en quoi je <span className="text-gradient">crois</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Le corps ne ment jamais',
                text: 'Ton corps stocke tout : les blessures, les joies, les vérités que tu n\'oses pas regarder. L\'écouter, c\'est accéder à ta plus grande sagesse.',
              },
              {
                title: 'La transformation est une expérience',
                text: 'Comprendre ne suffit pas. La vraie transformation se vit dans le corps, dans l\'émotion, dans l\'instant présent.',
              },
              {
                title: 'Le succès sans alignement est vide',
                text: 'Ton business ne peut pas aller plus loin que toi. Quand tu te libères intérieurement, tout s\'ouvre extérieurement.',
              },
              {
                title: 'Chacun porte sa propre sagesse',
                text: 'Je ne suis pas là pour te dire quoi faire. Je suis là pour t\'aider à écouter ce que ton corps sait déjà.',
              },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="text-left bg-white rounded-2xl p-8 border border-navy-100/30 shadow-sm h-full">
                  <h3 className="font-display text-xl text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-navy-500 leading-relaxed">{value.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
