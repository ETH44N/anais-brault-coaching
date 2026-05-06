import Hero from '@/components/home/Hero'
import IntroVideo from '@/components/home/IntroVideo'
import Philosophy from '@/components/home/Philosophy'
import CoachingLevels from '@/components/home/CoachingLevels'
import MentorSection from '@/components/home/MentorSection'
import CaseStudies from '@/components/home/CaseStudies'
import PhotoGallery from '@/components/home/PhotoGallery'
import Certifications from '@/components/home/Certifications'
import ContactForm from '@/components/home/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroVideo />
      <Philosophy />
      <CoachingLevels />
      <MentorSection />
      <CaseStudies />
      <PhotoGallery />
      <Certifications />
      <ContactForm />
    </>
  )
}
