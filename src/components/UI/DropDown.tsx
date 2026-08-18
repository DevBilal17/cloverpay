import { getHeader } from '@/lib/getHeaders'
import Link from 'next/link'
import React from 'react'

type Item = {
  id : string,
  label : string,
  isCTA :boolean,
  hasDropdown : boolean,
  dropDownItems : DropDownItems[]
}
type DropDownItems = {
 id : string,
 label : string,
 href : string
}
const DropDown = ({item}:{item:Item}) => {
  console.log(item)
  return (
    <div className='relative group'>
      <span className='flex items-center gap-1 cursor-pointer hover:text-[#278206] transition'>
        {item?.label}
  
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
      </span>

      <div className='absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
      <div className='bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[240px]'>
        {item?.dropDownItems?.map((dropItem)=>(
        <Link key={dropItem.id} href={dropItem.href} className='block px-4 py-2.5 text-sm text-gray-600 hover:text-[#278206] hover:bg-gray-50 transition whitespace-nowrap'>
          {dropItem.label}
        </Link>
        ))}

      </div>
      </div>
    </div>
  )
}

export default DropDown
