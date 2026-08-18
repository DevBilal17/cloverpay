import { getSiteSettings } from '@/lib/getSiteSettings'
import Image from 'next/image'
import React from 'react'

const Footer = async() => {
  const {logo,copyrightText,legalText} = await getSiteSettings()
  return (
    <footer className='bg-[#0a1305] text-white pt-16 sm:pt-24 px-4 sm:px-6'>
      <div className='content-container pb-8 sm:pb-12'>
        <Image src={logo?.url} alt={logo?.alt} height={logo?.height}  width={logo?.width} className='h-6 w-auto brightness-0 invert mb-6' />
        <p className='text-gray-500/60 text-[13px] mb-6'>{copyrightText}</p>
        <p className='text-gray-500/60 text-sm leading-relaxed max-w-5xl'>{legalText}</p>
      </div>
    </footer>
  )
}

export default Footer
