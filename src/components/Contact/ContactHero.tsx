import { getContactPage } from '@/lib/getContactPage'


const ContactHero = async() => {
    const {heroTitle,heroDescription} = await getContactPage()
  return (
    <section className='bg-[#278206] py-14 sm:py-20 px-4 sm:px-6 text-center'>
      <div className='max-w-xl mx-auto'>
        <h1 className='text-[26px] sm:text-[38px] lg:text-[46px] font-semibold text-white mb-4'>
          {heroTitle}
        </h1>
        <p className='text-green-100 text-sm sm:text-base'>{heroDescription}</p>
      </div>
    </section>
  )
}

export default ContactHero
