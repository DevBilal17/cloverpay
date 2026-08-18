import { getHomePage } from '@/lib/getHomePage'
import getOfferings from '@/lib/getOfferings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Offerings = async() => {
    const {sectionTitle,sectionDescription} = await getHomePage()
    const offerings = await getOfferings();
  return (
    <section className='py-14 sm:py-24 bg-gray-50'>
      <div className='content-container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-16 mb-10 sm:mb-24 items-start'>
            <h3 className='text-[22px] sm:text-[32px] font-semibold text-heading leading-tight'>
                {sectionTitle}
            </h3>
            <div className='text-gray-600 text-[14px] sm:text-base leading-relaxed pt-2'>
                
                {sectionDescription?.map((para,index)=><p key={para.id} className={`${index != 0 && "mt-4"}`}>{para.paragraph}</p>)}
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

            {offerings?.map((item)=>( <Link key={item.id} id={item.slug} href={"/contact"} className='group bg-white shadow-sm flex flex-col h-full rounded-t-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer'>
                    <div className='relative w-full aspect-square bg-white'>
                        <Image src={item.image.url} alt={item.image.alt} fill className='object-contain p-6 absolute inset-0 bg-transparent w-full h-full' sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw' />
                    </div>
                    <div className='bg-green-50 p-5 sm:p-7 flex flex-col flex-1'>
                        <h4 className='font-semibold  text-[17px] mb-4'>{item.name}</h4>
                        <ul className='text-[14px] text-gray-600 space-y-3 leading-snug flex-1'>
                            {item.features?.map((feature)=>(
                                <li key={feature.id} className='flex items-start gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-4 h-4 text-[#278206] mt-0.5 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>
                                    <span>{feature.text}</span>
                                    </li>
                            ))}
                        </ul>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-[#278206] font-semibold text-sm group-hover:gap-2 transition-all">Contact Us<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3.5 h-3.5" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings
