import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Anaïs Brault pour un appel découverte gratuit. Coaching somatique pour entrepreneurs.',
}

export default function ContactPage() {
  return <ContactContent />
}
