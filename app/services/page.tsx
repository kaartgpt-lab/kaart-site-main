import ServicesV14 from '@/components/homepage-16/ServicesV14'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Services ',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Services"
        title="Services"
        italicTitle=""
        scale
        description="Explore our innovative cutting-edge no-code websites designed to captivate and engage your visitors effortlessly"
        spacing="relative overflow-hidden max-sm:pb-10 max-md:pt-44 max-md:pb-16 md:py-44 lg:py-[200px]"
      />
      <ServicesV14 />
      <Process />
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
        <p className="mt-5 text-balance text-center text-lg leading-[1.4] tracking-[0.32px]">
          Tell us about your project — Shopify store, web app, mobile app, or automation — and we’ll propose the most
          effective build plan.
        </p>
      </CTA>
    </LayoutOne>
  )
}

export default ServicesPage
