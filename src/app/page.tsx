import Hero from '@/components/home/Hero'
import CaseStudies from '@/components/home/CaseStudies'
import CoachingLevels from '@/components/home/CoachingLevels'
import IntroVideo from '@/components/home/IntroVideo'
import Philosophy from '@/components/home/Philosophy'
import MentorSection from '@/components/home/MentorSection'
import PhotoGallery from '@/components/home/PhotoGallery'
import Certifications from '@/components/home/Certifications'
import ContactForm from '@/components/home/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Anaïs's video presentation first */}
      <IntroVideo />

      {/* Social proof — case studies */}
      <CaseStudies />

      {/* The work: methodology */}
      <CoachingLevels />
      <Philosophy />


      <Certifications />

      <ContactForm />
    </>
  )
}
