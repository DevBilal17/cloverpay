import { getHomePage } from '@/lib/getHomePage'
import getIndustries from '@/lib/getIndustries'
import Image from 'next/image'

const Industries = async () => {
  const { industriesTitle } = await getHomePage()
  const industries = await getIndustries()
  return (
    <div className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6 content-container text-center">
      <h3 className="text-[24px] sm:text-[36px] font-semibold text-heading mb-16">
        {industriesTitle}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-14 gap-y-6 sm:gap-y-10">
        {industries?.map((industry) => (
          <div key={industry.id} className="flex flex-col items-center gap-3">
            <div className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] rounded-xl bg-white border border-gray-200 flex items-center justify-center">
              <Image
                src={industry.icon?.url}
                alt={industry.icon?.alt}
                width={industry.icon?.width}
                height={industry.icon?.height}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <span className="text-base font-semibold text-heading">{industry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Industries
