import { getHomePage } from '@/lib/getHomePage'
import React from 'react'

const Intro = async() => {
    const {introTitle,introDescription} = await getHomePage()
  return (
    <section className='py-14 sm:py-20 px-4 sm:px-6 bg-green-50'>
      <div className='content-container text-center'>
        <h2 className='text-[24px] sm:text-[32px] font-semibold text-heading leading-[1.2] mb-6 whitespace-pre-line'>{introTitle}</h2>
        <p className='max-w-3xl mx-auto text-[14px] sm:text-[16px] text-gray-600 leading-relaxed'>{introDescription}</p>
      </div>
    </section>
  )
}

export default Intro
