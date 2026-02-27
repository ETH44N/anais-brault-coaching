import type { Metadata } from 'next'
import BlogPostContent from './BlogPostContent'

const posts: Record<string, { title: string; description: string }> = {
  'coaching-somatique-explique': {
    title: 'Qu\'est-ce que le coaching somatique ?',
    description: 'Le coaching somatique est l\'une des approches de transformation les plus puissantes. Découvre comment ton corps détient les clefs de ta libération.',
  },
  'blocages-entrepreneurs-corps': {
    title: 'Pourquoi ton corps bloque ton business',
    description: 'Tu as tout optimisé et pourtant quelque chose te retient. Et si le blocage n\'était pas dans ta tête ?',
  },
  'liberation-emotionnelle-cle-succes': {
    title: 'La libération émotionnelle : la clef du succès',
    description: 'Les entrepreneurs qui transforment leur rapport aux émotions accèdent à un niveau de succès inédit.',
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  return {
    title: post?.title ?? 'Article',
    description: post?.description ?? '',
  }
}

export default function BlogPostPage() {
  return <BlogPostContent />
}
