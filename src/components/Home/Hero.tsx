import { getHomePage } from '@/lib/getHomePage'
import { getSiteSettings } from '@/lib/getSiteSettings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Hero = async() => {
    const home = await getHomePage()

    const {heroTitle,heroDescription,backgroundImage,  ctaButtonText,
    ctaButtonLink} = home
    const {logo} = await getSiteSettings()
  return (
    <section className='relative h-[60vh] sm:h-[70vh] lg:h-[740px] bg-clover-green overflow-hidden'>
      <Image src={backgroundImage?.url} alt={backgroundImage?.alt || ""} width={backgroundImage?.width} height={backgroundImage?.height}  className='w-full h-full object-cover object-center absolute top-0 left-0 right-0 bottom-0' />
      <div className='content-container relative h-full z-10 flex items-center'>
   <div className='max-w-xl text-white'>
         <div className='mb-3 sm:mb-4'>
            <Image src={logo?.url} alt={logo?.alt} width={logo?.width} height={logo?.height} className='h-[28px] sm:h-[40px] w-auto brightness-0 invert' />
        </div>
        <h1 className='text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5 tracking-tight'>{heroTitle}</h1>
        <p className='text-[14px] sm:text-[17px] mb-6 sm:mb-8 text-blue-50 leading-relaxed opacity-90'>{heroDescription}</p>
        <Link className='cta-button' href={ctaButtonLink}>{ctaButtonText}</Link>
   </div>
      </div>
    </section>
  )
}

export default Hero
