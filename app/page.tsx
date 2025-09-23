import DigitalSolutionBlog from '@/components/homepage-02/DigitalSolutionBlog'
import HeroV2 from '@/components/homepage-02/HeroV2'
import PortfolioV2 from '@/components/homepage-02/PortfolioV2'
import ProcessV2 from '@/components/homepage-02/ProcessV2'
import About from '@/components/shared/About'
import CTA from '@/components/shared/CTA'
import ClientsV3 from '@/components/shared/ClientsV3'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Video from '@/components/shared/Video'
import Marquee from '@/components/shared/Marquee'
import ServicesV6 from '@/components/shared/ServicesV6'
import ProcessV5 from '@/components/homepage-06/ProcessV5'
import PortfolioV3 from '@/components/homepage-03/PortfolioV3'
import PricingCard from '@/components/homepage-07/PricingCard'
import TestimonialV2 from '@/components/shared/TestimonialV2'
import Sarthak from '@/components/shared/Sarthak'

export const metadata = {
  title: 'Digital Solutions Agency - Rivor',
}

const Home = () => {
  return (
    <LayoutOne>
      <HeroV2 />
      <Video />
      <About marquee={true} />
      <Marquee withBorder={false} />
      <ServicesV6 />
      <ProcessV5 />
      <PortfolioV3 />
      <TestimonialV2 />
      <PricingCard />
      <Sarthak />
      <CTA showContactForm>
        Let’s
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Create
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Something Iconic</span>
      </CTA>
    </LayoutOne>
  )
}

export default Home
