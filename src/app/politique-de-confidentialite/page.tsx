import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-navy-900 mb-8">Politique de Confidentialité</h1>
        <div className="prose prose-navy max-w-none space-y-6 text-navy-600">
          <h2 className="font-display text-2xl text-navy-900">Collecte des données</h2>
          <p>
            Les données personnelles collectées sur ce site (nom, email, message) sont
            exclusivement utilisées pour répondre à vos demandes de contact et, si vous
            y avez consenti, pour vous envoyer des communications relatives au coaching.
          </p>

          <h2 className="font-display text-2xl text-navy-900">Utilisation des données</h2>
          <p>
            Vos données ne sont jamais vendues, échangées ou louées à des tiers.
            Elles sont conservées de manière sécurisée et supprimées sur simple demande.
          </p>

          <h2 className="font-display text-2xl text-navy-900">Cookies</h2>
          <p>
            Ce site peut utiliser des cookies pour améliorer l&apos;expérience utilisateur
            et mesurer l&apos;audience. Vous pouvez configurer votre navigateur pour refuser
            les cookies.
          </p>

          <h2 className="font-display text-2xl text-navy-900">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
            de suppression et de portabilité de vos données personnelles.
            Pour exercer ces droits, contactez : contact@anaisbrault.fr
          </p>

          <h2 className="font-display text-2xl text-navy-900">Contact</h2>
          <p>
            Pour toute question relative à la protection de vos données,
            vous pouvez nous contacter à : contact@anaisbrault.fr
          </p>
        </div>
      </div>
    </div>
  )
}
