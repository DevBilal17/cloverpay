import getFeatures from '@/lib/getFeatures'
import { getHomePage } from '@/lib/getHomePage'

const Features = async () => {
  const { featuresTitle } = await getHomePage()
  const features = await getFeatures()
  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 content-container">
      <h3 className="text-[24px] sm:text-[36px] font-semibold  mb-14">{featuresTitle}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features?.map((feature) => (
          <div key={feature.id} className="group relative bg-gray-50 border-t-[3px] border-[#278206] p-5 sm:p-8 text-center cursor-pointer overflow-hidden transition-colors duration-300">
            <div className="absolute inset-x-0 top-0 h-0 bg-[#278206] transition-all duration-300 group-hover:h-full"></div>
            <div className="relative z-10 min-h-[100px] flex items-center justify-center">
              <h4 className="absolute text-lg font-semibold text-heading transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">{feature.title}</h4>
              <p className="absolute text-base leading-relaxed text-white transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
