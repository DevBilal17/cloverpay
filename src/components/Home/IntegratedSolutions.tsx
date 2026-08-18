import { getHomePage } from '@/lib/getHomePage'
import getIntegratedSolutions from '@/lib/getIntegratedSolutions'
import Image from 'next/image'
import Link from 'next/link'

const IntegratedSolutions = async () => {
  const { solutionsTitle } = await getHomePage()
  const integratedSolutions = await getIntegratedSolutions()
  return (
    <section className="py-14 sm:py-20 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="content-container">
        <h3 className="text-[24px] sm:text-[36px] font-semibold text-heading mb-10 text-center">
            {solutionsTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {integratedSolutions?.map((solution) => (
            <div key={solution.id} className="group relative h-[260px] sm:h-[340px] rounded-lg overflow-hidden cursor-pointer">
              <Image
              src={solution?.image.url}
              alt={solution?.image.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0 w-full h-full"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end">
                <h4 className="text-white text-[18px] sm:text-[24px] font-semibold transition-all duration-300 group-hover:-translate-y-2">
                    {solution.title}
                </h4>
                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {solution.description}
                  </p>
                  <Link href={solution?.ctaLink} className="inline-flex items-center gap-2 text-[#278206] font-semibold text-sm border-b border-[#278206] pb-0.5">
                    {solution.ctaText}
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
                      className="lucide lucide-arrow-right w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntegratedSolutions
