import { getHomePage } from "@/lib/getHomePage"
import Link from "next/link"

const CTA = async() => {
    const {ctaTitle,ctaDescription,buttonText,buttonLink} = await getHomePage()
  return (
    <section className="bg-green-50 py-14 sm:py-20 px-4 sm:px-6">
      <div className="content-container">
        <h3 className="text-[28px] sm:text-[42px] font-semibold text-heading mb-4">
            {ctaTitle}
        </h3>
        <p className="text-gray-600 mb-10 max-w-md text-[15px] sm:text-[18px]">
            {ctaDescription}
        </p>
        <Link href={buttonLink || ""} className="cta-button">
        {buttonText}
        </Link>
      </div>
    </section>
  )
}

export default CTA
