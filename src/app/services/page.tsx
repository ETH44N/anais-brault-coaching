import type { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Découvrez les accompagnements de coaching somatique d\'Anaïs Brault : coaching individuel pour entrepreneurs, séminaires et visualisations guidées.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
