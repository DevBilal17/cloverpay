import getApps from '@/lib/getApps'
import { getHomePage } from '@/lib/getHomePage'
import Image from 'next/image'
import React from 'react'

const Apps = async () => {
  const { appsTitle } = await getHomePage()
  const apps = await getApps()
  return (
    <section className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6">
      <div className="content-container text-center">
        <h3 className="text-[24px] sm:text-[36px] font-semibold text-heading mb-16">{appsTitle}</h3>
        <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-14 gap-y-6 sm:gap-y-10">
          {apps.map((app) => (
            <div key={app.id} className="flex flex-col items-center gap-3">
              <div className="w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] relative rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                <Image
                  // @ts-ignore
                  src={app.icon?.url}
                  // @ts-ignore

                  alt={app.icon?.alt}
                  // @ts-ignore

                  width={app.icon?.width}
                  // @ts-ignore

                  height={app.icon?.height}
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>
              <span className="text-base font-semibold text-heading">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Apps
