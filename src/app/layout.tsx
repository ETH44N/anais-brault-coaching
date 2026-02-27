import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: {
    default: 'Anaïs Brault — Coach Psycho-Somatique pour Entrepreneurs',
    template: '%s | Anaïs Brault',
  },
  description:
    'Coaching somatique transformateur pour entrepreneurs. Libère tes blocages émotionnels et corporels pour débloquer ton plein potentiel. Certifiée par The Institute for Coaching Mastery.',
  keywords: [
    'coaching somatique',
    'coach entrepreneurs',
    'Anaïs Brault',
    'coaching psycho-somatique',
    'libération émotionnelle',
    'coaching France',
    'développement personnel entrepreneurs',
    'somatic coaching',
  ],
  authors: [{ name: 'Anaïs Brault' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.anaisbrault.fr',
    siteName: 'Anaïs Brault Coaching',
    title: 'Anaïs Brault — Coach Psycho-Somatique pour Entrepreneurs',
    description:
      'Coaching somatique transformateur pour entrepreneurs. Libère tes blocages pour vivre une vie plus libre et joyeuse.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anaïs Brault — Coach Psycho-Somatique',
    description: 'Coaching somatique transformateur pour entrepreneurs.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <PageTransition>
          <div className="flex-1">{children}</div>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
