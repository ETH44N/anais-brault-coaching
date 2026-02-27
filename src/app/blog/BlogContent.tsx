'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const posts = [
  {
    slug: 'coaching-somatique-explique',
    title: 'Qu\'est-ce que le coaching somatique ? Tout ce que tu dois savoir',
    excerpt:
      'Le coaching somatique est l\'une des approches de transformation les plus puissantes et les moins connues. Découvre comment ton corps détient les clefs de ta libération.',
    category: 'Coaching somatique',
    readTime: '8 min',
    date: '15 Fév 2026',
    gradient: 'from-sage-100 to-sage-200',
    accentColor: 'text-sage-600',
    bgAccent: 'bg-sage-100',
  },
  {
    slug: 'blocages-entrepreneurs-corps',
    title: 'Pourquoi ton corps bloque ton business (et comment y remédier)',
    excerpt:
      'Tu as tout optimisé : ta stratégie, ton mindset, tes process. Et pourtant, quelque chose te retient. Et si le blocage n\'était pas dans ta tête, mais dans ton corps ?',
    category: 'Entrepreneurs',
    readTime: '6 min',
    date: '2 Fév 2026',
    gradient: 'from-brand-100 to-brand-200',
    accentColor: 'text-brand-600',
    bgAccent: 'bg-brand-100',
  },
  {
    slug: 'liberation-emotionnelle-cle-succes',
    title: 'La libération émotionnelle : la clef secrète des entrepreneurs qui réussissent vraiment',
    excerpt:
      'Les entrepreneurs qui transforment leur rapport aux émotions accèdent à un niveau de succès et de bien-être que les stratégies seules ne peuvent pas atteindre.',
    category: 'Transformation',
    readTime: '10 min',
    date: '18 Jan 2026',
    gradient: 'from-violet-100 to-violet-200',
    accentColor: 'text-violet-600',
    bgAccent: 'bg-violet-100',
  },
]

export default function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-brand-50 to-sage-50" />
        <div className="absolute top-32 left-10 w-[350px] h-[350px] bg-violet-200/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-brand-200/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-6 block"
          >
            Blog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-navy-900 leading-tight mb-8"
          >
            Explorations &
            <br />
            <span className="text-gradient">réflexions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-navy-500 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Articles sur le coaching somatique, la libération émotionnelle et
            la transformation des entrepreneurs.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white pb-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <Link href={`/blog/${posts[0].slug}`} className="group block">
              <motion.article
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sage-50 to-brand-50 border border-brand-100/50"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image placeholder */}
                  <div className={`aspect-[16/10] lg:aspect-auto bg-gradient-to-br ${posts[0].gradient} flex items-center justify-center min-h-[300px]`}>
                    <div className="text-center px-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                        <span className="font-display text-3xl text-navy-700">S</span>
                      </div>
                      <p className="text-navy-400 text-sm">Image article</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-xs font-semibold tracking-widest uppercase ${posts[0].accentColor} ${posts[0].bgAccent} px-3 py-1 rounded-full`}>
                        {posts[0].category}
                      </span>
                      <span className="text-xs font-semibold tracking-wider uppercase text-navy-300 bg-navy-50 px-3 py-1 rounded-full">
                        À la une
                      </span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl text-navy-900 mb-4 group-hover:text-brand-500 transition-colors">
                      {posts[0].title}
                    </h2>

                    <p className="text-navy-500 leading-relaxed mb-6">
                      {posts[0].excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-navy-400">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {posts[0].readTime}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {posts[0].date}
                      </span>
                    </div>

                    <div className="mt-8">
                      <span className="inline-flex items-center gap-2 text-brand-500 font-semibold group-hover:gap-3 transition-all">
                        Lire l&apos;article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-white pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.15}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <motion.article
                    className="rounded-2xl overflow-hidden border border-brand-100/50 bg-white h-full flex flex-col"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image placeholder */}
                    <div className={`aspect-[16/9] bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                      <div className="text-center">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
                          <span className="font-display text-2xl text-navy-700">
                            {post.title[0]}
                          </span>
                        </div>
                        <p className="text-navy-400 text-xs">Image article</p>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-xs font-semibold tracking-widest uppercase ${post.accentColor} ${post.bgAccent} px-3 py-1 rounded-full`}>
                          {post.category}
                        </span>
                      </div>

                      <h3 className="font-display text-xl text-navy-900 mb-3 group-hover:text-brand-500 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-navy-500 text-sm leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-navy-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-b from-white to-brand-50">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
              Reçois mes réflexions
              <span className="text-gradient"> chaque semaine</span>
            </h2>
            <p className="text-navy-500 text-lg mb-8">
              Des insights sur le coaching somatique, la transformation et l&apos;entrepreneuriat.
              Directement dans ta boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="ton@email.com"
                className="flex-1 px-6 py-4 rounded-full border border-navy-200 bg-white text-navy-900 placeholder:text-navy-300 focus:outline-none focus:border-brand-400 transition-colors"
                aria-label="Adresse email"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S&apos;inscrire
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
