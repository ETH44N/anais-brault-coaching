import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-8xl font-display font-bold text-gradient mb-4">404</p>
        <h1 className="font-display text-3xl text-navy-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-navy-500 max-w-md mx-auto mb-8">
          Cette page n&apos;existe pas ou a été déplacée.
          Retourne à l&apos;accueil pour continuer ta navigation.
        </p>
        <Link href="/" className="btn-primary">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
