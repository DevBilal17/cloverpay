import { getContactPage } from '@/lib/getContactPage'
import { getSiteSettings } from '@/lib/getSiteSettings'
import Form from './Form'

const ContactFormSection = async () => {
  const { callUsLabel, emailUsLabel, infoBoxText } = await getContactPage()
  const { emailAddress, phoneNumber } = await getSiteSettings()
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6">
      <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col gap-4">
          <a
            href={`tel:${phoneNumber?.replace(/[^\d+]/g, '')}`}
            className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:bg-green-50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#278206]/10 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone w-5 h-5 text-[#278206]"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
            </div>

            <div>
              <p className="text-xs font-semibold text-heading uppercase tracking-wide mb-1">
                {callUsLabel}
              </p>
              <p className="text-sm text-gray-600 group-hover:text-[#278206] transition">
                {phoneNumber}
              </p>
            </div>
          </a>
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-4 bg-gray-50 rounded-xl p-5 hover:bg-green-50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#278206]/10 flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-5 h-5 text-clover-green"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </div>

            <div>
              <p className="text-xs font-semibold text-heading uppercase tracking-wide mb-1">
                {emailUsLabel}
              </p>
              <p className="text-sm text-gray-600 group-hover:text-[#278206] transition">
                {emailAddress}
              </p>
            </div>
          </a>

          <div className="hidden md:block mt-4 bg-green-50 rounded-xl p-6 border border-green-100">
            <p className="text-sm text-gray-600 leading-relaxed">{infoBoxText}</p>
          </div>
        </div>

        <Form/>
      </div>
    </section>
  )
}

export default ContactFormSection
