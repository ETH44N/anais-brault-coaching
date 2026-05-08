'use client'

import { ChevronDown } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function IntroVideo() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-500 mb-4 block">
            En vidéo
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 mb-4">
            Découvre ce qui devient possible en
            <span className="text-gradient"> travaillant avec moi</span>
          </h2>
          <ChevronDown className="mx-auto mt-2 w-6 h-6 text-brand-500" />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-100/50 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/2oyoE9gEsK8"
              title="Découvre Anaïs Brault"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
