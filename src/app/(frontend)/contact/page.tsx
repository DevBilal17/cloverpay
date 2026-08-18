
import ContactFormSection from '@/components/Contact/ContactFormSection'
import ContactHero from '@/components/Contact/ContactHero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get in Touch | Clover',
  description:
    'Scalable and customizable point-of-sale solutions designed to help your business operate efficiently and securely.',
}
const ContactPage = () => {
  return (
    <main className="flex-1">

      <ContactHero />
      <ContactFormSection />
    </main>
  )
}

export default ContactPage
