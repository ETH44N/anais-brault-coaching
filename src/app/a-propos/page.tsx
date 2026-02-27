import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'À Propos',
  description:
    'Découvrez le parcours d\'Anaïs Brault : de la philosophie au coaching somatique. Certifiée par The Institute for Coaching Mastery, elle aide les entrepreneurs à se libérer de leurs blocages.',
}

export default function AboutPage() {
  return <AboutContent />
}
