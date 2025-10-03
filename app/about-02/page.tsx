import AboutHero from '@/components/aboutpage-02/AboutHero'
import TeamGallery from '@/components/aboutpage-02/TeamGallery'
import Clients from '@/components/homepage-03/Clients'
import ServicesV3 from '@/components/homepage-03/ServicesV3'
import HeroAbout from '@/components/homepage-07/HeroAbout'
import CtaV2 from '@/components/shared/CtaV2'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import SkewMarquee from '@/components/shared/SkewMarquee'
import Video from '@/components/shared/Video'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'

export const metadata = {
  title: 'About-02',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <AboutHero />
      <Video />
      <HeroAbout spacingTop="pt-10 sm:pt-16 md:pt-[100px] mb-10 lg:mb-20" />
      <SkewMarquee />
      <ServicesV3 />
      <TeamGallery />
      <Clients />
      <FaqV2 />
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
          Whether you’re building a new product, redesigning an existing platform, or scaling your store — we’re here to
          help you make it happen.
        </p>
        <h3 className="mt-5 text-balance text-center text-lg font-medium leading-[1.4] tracking-[0.32px]">
          📧 kaarthq@gmail.com | 📞 +91-7992028684
        </h3>
      </CTA>
    </LayoutOne>
  )
}

export default AboutPage
