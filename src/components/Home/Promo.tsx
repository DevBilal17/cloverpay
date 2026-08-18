import { getHomePage } from '@/lib/getHomePage'
import Image from 'next/image'
import React from 'react'

const Promo = async() => {
    const home = await getHomePage() 
    const {promoImage1,promoImage2,promoImage3} = home
  return (
    <section className='py-10 sm:py-16 content-container grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3'>
        <Image src={promoImage1?.url} alt={promoImage1?.alt} width={promoImage1?.width} height={promoImage1?.height}  className='w-full h-auto hover:scale-105 transition-transform duration-500'/>
                <Image src={promoImage2?.url} alt={promoImage2?.alt} width={promoImage2?.width} height={promoImage2?.height}  className='w-full h-auto hover:scale-105 transition-transform duration-500'/>
                        <Image src={promoImage3?.url} alt={promoImage3?.alt} width={promoImage3?.width} height={promoImage3?.height}  className='w-full h-auto hover:scale-105 transition-transform duration-500'/>
    </section>
  )
}

export default Promo
