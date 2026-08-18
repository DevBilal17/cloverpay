
import Apps from "@/components/Home/Apps"
import CTA from "@/components/Home/CTA"
import Features from "@/components/Home/Features"
import Hero from "@/components/Home/Hero"
import Industries from "@/components/Home/Industries"
import IntegratedSolutions from "@/components/Home/IntegratedSolutions"
import Intro from "@/components/Home/Intro"
import Offerings from "@/components/Home/Offerings"
import Promo from "@/components/Home/Promo"


const HomePage = async() => {

  return (
    <main className="flex-1">
      <Hero />
      <Promo/>
      <Intro/>
      <Offerings/>
      <Features/>
      <Industries/>
      <IntegratedSolutions/>
      <Apps/>
      <CTA/>
    </main>
  )
}

export default HomePage
