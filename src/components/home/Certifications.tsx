'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const certs = [
  {
    src: '/certifications/cmmc-badge-navy.png',
    label: 'Certified Mastery in Coaching',
  },
  {
    src: '/certifications/cmmc-tile-navy.png',
    label: 'CMMC Method',
  },
  {
    src: '/certifications/icm-social-media-badge.png',
    label: 'ICM Certified',
  },
  {
    src: '/certifications/certificate-2024.jpg',
    label: 'Certification 2024',
  },
]

export default function Certifications() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
            Certifications
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
            Une formation
            <span className="text-gradient"> reconnue</span>
          </h2>
          <p className="text-navy-500 max-w-xl mx-auto">
            Certifiée par The Institute for Coaching Mastery sous la direction d&apos;Alyssa
            Nobriga, l&apos;une des rares coaches somatiques certifiées en France.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certs.map((c) => (
            <ScrollReveal key={c.src}>
              <div className="bg-white rounded-2xl p-6 border border-brand-100/50 shadow-sm flex flex-col items-center justify-center aspect-square">
                <div className="relative w-full flex-1 mb-3">
                  <Image
                    src={c.src}
                    alt={c.label}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-xs text-navy-500 text-center font-medium">{c.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
