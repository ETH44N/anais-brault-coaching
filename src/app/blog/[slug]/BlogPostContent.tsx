'use client'

import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Share2, Instagram } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

const postsData: Record<string, {
  title: string
  category: string
  readTime: string
  date: string
  gradient: string
  content: string[]
}> = {
  'coaching-somatique-explique': {
    title: 'Qu\'est-ce que le coaching somatique ? Tout ce que tu dois savoir',
    category: 'Coaching somatique',
    readTime: '8 min',
    date: '15 Fév 2026',
    gradient: 'from-sage-100 to-sage-200',
    content: [
      'Le coaching somatique est une approche de transformation qui place le corps au centre du processus de changement. Contrairement aux méthodes traditionnelles qui travaillent principalement avec le mental — pensées, croyances, mindset — le coaching somatique accède directement aux expériences stockées dans le système nerveux.',
      'Le mot "soma" vient du grec et signifie "corps vivant". En coaching somatique, nous considérons que le corps n\'est pas un simple véhicule, mais un véritable réservoir de sagesse, de mémoires et d\'intelligence. Chaque tension, chaque douleur, chaque restriction physique raconte une histoire.',
      'Quand tu vis une expérience émotionnelle intense — un échec, un rejet, une humiliation — ton corps ne l\'oublie pas. Il la stocke sous forme de tension musculaire, de schémas respiratoires, de postures protectrices. Ces "armures corporelles" te protègent sur le moment, mais deviennent des prisons à long terme.',
      'Pour les entrepreneurs, les implications sont considérables. Chaque fois que tu veux prendre un risque, augmenter tes prix, te rendre visible, présenter ton travail, ton système nerveux peut activer ces anciennes protections. Résultat : procrastination, auto-sabotage, plafond de verre.',
      'Le coaching somatique t\'aide à identifier ces schémas dans ton corps, à les traverser consciemment, et à les relâcher. Ce n\'est pas de la thérapie — c\'est un processus actif de libération et de réinvention de ta relation à toi-même, à ton corps, et à ta vie.',
      'Ce qui rend cette approche si puissante, c\'est qu\'elle ne passe pas par la compréhension intellectuelle. Tu n\'as pas besoin de comprendre "pourquoi" tu es bloqué(e) pour te libérer. Le corps sait déjà. Il suffit de lui donner l\'espace et la guidance pour se libérer.',
    ],
  },
  'blocages-entrepreneurs-corps': {
    title: 'Pourquoi ton corps bloque ton business (et comment y remédier)',
    category: 'Entrepreneurs',
    readTime: '6 min',
    date: '2 Fév 2026',
    gradient: 'from-brand-100 to-brand-200',
    content: [
      'Tu as optimisé ta stratégie. Tu as travaillé ton mindset. Tu as lu les livres, suivi les formations, appliqué les méthodes. Et pourtant, quelque chose te retient. Un plafond invisible que tu n\'arrives pas à traverser.',
      'Et si je te disais que le blocage n\'est pas dans ta tête, mais dans ton corps ?',
      'Comme l\'a démontré le Dr Gabor Maté, notre corps stocke les expériences émotionnelles non traitées. Chaque fois que tu as été rejeté(e), critiqué(e), humilié(e), ton système nerveux a enregistré l\'expérience. Et il a créé un programme de protection.',
      'Ces programmes se manifestent de façon concrète dans ton business : tu n\'arrives pas à augmenter tes prix (peur du rejet). Tu procrastines sur ta visibilité (peur du jugement). Tu t\'épuises dans l\'action sans résultats proportionnels (stress chronique).',
      'La bonne nouvelle ? Ces programmes ne sont pas permanents. Le coaching somatique permet de les identifier, de les traverser, et de les remplacer par de nouvelles réponses alignées avec la personne que tu deviens.',
      'Le processus est simple, mais profond : on identifie où dans ton corps se manifeste le blocage, on crée l\'espace pour que l\'émotion sous-jacente puisse s\'exprimer, et on accompagne ton système nerveux vers une nouvelle régulation. Le résultat est une liberté que le travail mental seul ne peut pas offrir.',
    ],
  },
  'liberation-emotionnelle-cle-succes': {
    title: 'La libération émotionnelle : la clef secrète des entrepreneurs qui réussissent vraiment',
    category: 'Transformation',
    readTime: '10 min',
    date: '18 Jan 2026',
    gradient: 'from-violet-100 to-violet-200',
    content: [
      'Il y a un secret que les entrepreneurs les plus épanouis partagent, et ce n\'est ni leur stratégie, ni leur réseau, ni leur discipline. C\'est leur relation aux émotions.',
      'Dans le monde entrepreneurial, on nous apprend à "gérer" nos émotions. À les contrôler. À ne pas les laisser "interférer" avec nos décisions. Mais cette approche a un coût : elle nous coupe de notre source de créativité, d\'intuition et de connexion la plus puissante.',
      'La libération émotionnelle, c\'est l\'inverse du contrôle. C\'est le processus de retrouver la capacité à sentir pleinement — la joie comme la peine, l\'excitation comme la peur — sans être submergé(e). C\'est retrouver la fluidité émotionnelle qui est notre état naturel.',
      'Quand tu libères les émotions bloquées dans ton système, quelque chose de remarquable se produit : l\'énergie qui était utilisée pour les maintenir en place se libère. Et cette énergie devient disponible pour créer, pour innover, pour oser.',
      'Les résultats sont souvent spectaculaires et surprenants. Des entrepreneurs qui stagnaient depuis des années voient leur chiffre d\'affaires décoller. D\'autres retrouvent la passion qui les avait fait démarrer. D\'autres encore découvrent une sérénité qu\'ils ne pensaient pas possible.',
      'Byron Katie dit : "Quand tu crois tes pensées, tu souffres. Quand tu les questionnes, tu ne souffres pas." Le coaching somatique va plus loin : il ne se contente pas de questionner les pensées, il libère les émotions qui les alimentent. Et c\'est là que la magie opère.',
    ],
  },
}

export default function BlogPostContent() {
  const { slug } = useParams<{ slug: string }>()
  const post = postsData[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-display text-3xl text-navy-900 mb-4">Article non trouvé</h1>
          <Link href="/blog" className="btn-primary">Retour au blog</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`bg-gradient-to-br ${post.gradient} pt-32 pb-20 px-6 md:px-12`}>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-navy-500 hover:text-navy-900 transition-colors mb-8 text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-500 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
                {post.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-navy-900 leading-tight mt-6 mb-8"
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 text-sm text-navy-500"
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} de lecture
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <article className="max-w-3xl mx-auto">
          {post.content.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className="text-navy-600 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            </ScrollReveal>
          ))}

          {/* Share bar */}
          <ScrollReveal>
            <div className="mt-16 pt-8 border-t border-navy-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-300 to-sage-300 flex items-center justify-center">
                    <span className="font-display font-bold text-white">AB</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-navy-900">Anaïs Brault</p>
                    <p className="text-navy-400 text-sm">Coach Psycho-Somatique</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/anaisbrault/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-400 hover:text-brand-500 hover:border-brand-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <button
                    className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-400 hover:text-brand-500 hover:border-brand-500 transition-colors"
                    aria-label="Partager"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Related CTA */}
          <ScrollReveal>
            <div className="mt-12 rounded-2xl bg-brand-50 border border-brand-100 p-8 md:p-12 text-center">
              <h3 className="font-display text-2xl text-navy-900 mb-4">
                Envie d&apos;aller plus loin ?
              </h3>
              <p className="text-navy-500 mb-6 max-w-md mx-auto">
                Réserve ton appel découverte gratuit et explore comment le coaching somatique peut transformer ta vie.
              </p>
              <Link href="/contact" className="btn-primary">
                Réserver mon appel découverte
              </Link>
            </div>
          </ScrollReveal>
        </article>
      </section>
    </>
  )
}
