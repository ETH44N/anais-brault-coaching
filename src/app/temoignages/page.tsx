import type { Metadata } from 'next'
import TestimonialsContent from './TestimonialsContent'

export const metadata: Metadata = {
  title: 'Témoignages',
  description:
    'Découvrez les transformations vécues par les entrepreneurs accompagnés par Anaïs Brault. Des résultats concrets grâce au coaching somatique.',
}

export default function TestimonialsPage() {
  return <TestimonialsContent />
}
