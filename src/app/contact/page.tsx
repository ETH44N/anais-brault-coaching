import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Anaïs Brault pour commencer votre transformation. Coaching somatique pour entrepreneurs.',
}

export default function ContactPage() {
  return <ContactContent />
}
