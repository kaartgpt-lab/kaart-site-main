import Clients from '@/components/homepage-03/Clients'
import AboutV4 from '@/components/homepage-04/AboutV4'
import HeroV11 from '@/components/homepage-04/HeroV11'
import ImageMarque from '@/components/homepage-04/ImageMarque'
import ProjectServices from '@/components/homepage-04/ProjectServices'
import ServicesV5 from '@/components/homepage-04/ServicesV5'
import TestimonialV5 from '@/components/homepage-04/TestimonialV5'
import ClientsV3 from '@/components/shared/ClientsV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Photography Studio - Rivor',
}

const HomeMoodit = () => {
  return (
    <LayoutOne>
      <HeroV11 />
      <AboutV4 />

      <ProjectServices />
      <ClientsV3 />
      <ServicesV5 />
      <Clients />
      <TestimonialV5 />
      <ImageMarque />

      <CTA showContactForm>
        Let’s
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/07.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/06.png' },
          ]}
        />
        Create
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Something Iconic</span>
      </CTA>
    </LayoutOne>
  )
}

export default HomeMoodit
