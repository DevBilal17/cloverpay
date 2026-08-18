import { getHeader } from '@/lib/getHeaders'
import { getSiteSettings } from '@/lib/getSiteSettings'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DropDown from '../UI/DropDown'

const Navbar = async () => {
  const siteSettings = await getSiteSettings()
  const header = await getHeader()
  const logo = siteSettings?.logo
  const navigationItems = header?.navigationItems
  return (
    <nav className="container mx-auto flex items-center justify-between gap-3 sm:gap-8 sm:px-6 px-4 py-3 sm:py-5">
      <Link href={'/'} className="shrink-0">
        <Image
          src={logo?.url}
          alt="site-logo"
          width={logo?.width}
          height={logo?.height}
          loading='eager'
          className="h-5 sm:h-9 w-auto"
        />
      </Link>

      <ul className='flex items-center gap-6'>
        {navigationItems?.map((item, index) => {
          return (
            <>
              {item.hasDropdown && <DropDown key={item.id} item={item}  />}
              {item.isCTA && <Link className='cta-button' key={item.id} href={item.href}>{item.label}</Link>}
            </>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
