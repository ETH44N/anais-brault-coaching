import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales',
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-navy-900 mb-8">Mentions Légales</h1>
        <div className="prose prose-navy max-w-none space-y-6 text-navy-600">
          <h2 className="font-display text-2xl text-navy-900">Éditeur du site</h2>
          <p>
            Anaïs Brault — Coach Psycho-Somatique
            <br />
            Adresse : [À compléter]
            <br />
            Email : contact@anaisbrault.fr
            <br />
            SIRET : [À compléter]
          </p>

          <h2 className="font-display text-2xl text-navy-900">Hébergement</h2>
          <p>[À compléter avec les informations de l&apos;hébergeur]</p>

          <h2 className="font-display text-2xl text-navy-900">Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, vidéos, graphismes, logo, icônes)
            est la propriété exclusive d&apos;Anaïs Brault, sauf mention contraire. Toute reproduction,
            distribution, modification, adaptation, retransmission ou publication est strictement
            interdite sans l&apos;accord écrit préalable d&apos;Anaïs Brault.
          </p>

          <h2 className="font-display text-2xl text-navy-900">Limitation de responsabilité</h2>
          <p>
            Les informations diffusées sur ce site sont présentées à titre informatif et ne
            sauraient se substituer à un avis médical ou psychologique. Anaïs Brault ne peut
            être tenue responsable de l&apos;utilisation qui est faite de ces informations.
          </p>
        </div>
      </div>
    </div>
  )
}
