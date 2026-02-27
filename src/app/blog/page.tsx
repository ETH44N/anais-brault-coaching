import type { Metadata } from 'next'
import BlogContent from './BlogContent'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles sur le coaching somatique, la libération émotionnelle et la transformation des entrepreneurs. Par Anaïs Brault.',
}

export default function BlogPage() {
  return <BlogContent />
}
