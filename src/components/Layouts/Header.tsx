import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { CiMail } from 'react-icons/ci'
import { getHeader } from '@/lib/getHeaders'
import { getSiteSettings } from '@/lib/getSiteSettings'
import Link from 'next/link'
import Navbar from './Navbar'
const Header =async () => {
  const siteSettings = await getSiteSettings()

  return (
    <header className='w-full sticky top-0 left-0 z-20'>
      <div className="bg-[#0A1305]">
        <div className='container mx-auto flex items-center justify-end gap-3 sm:gap-8 sm:px-6 px-4 py-2 '>
          <a href={`tel:${siteSettings?.phoneNumber?.replace(/[^\d+]/g, '')}`} className='flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition text-[11px] sm:text-[13px]'>
            <FiPhone />
            {siteSettings?.phoneNumber}
          </a>
          <a href={`mailto:${siteSettings?.emailAddress}`} className='flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-white transition text-[11px] sm:text-[13px]'>
            <CiMail />
            {siteSettings?.emailAddress}
          </a>
        </div>
      </div>
      <div className='w-full bg-white'>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header
