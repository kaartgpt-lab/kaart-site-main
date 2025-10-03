'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        Our Mission
      </h3>
      <p ref={revealRef} className="reveal-text-2 mt-5 max-w-4xl">
        To empower ambitious founders, startups, and enterprises by creating digital products that are functional,
        scalable, and beautifully designed.
        <br /> Whether it’s a storefront, a dashboard, or an app — our goal is always the same: make it seamless for the
        user and impactful for the business.
      </p>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        We specialize in designing cutting-edge web experiences that flawlessly blend creativity with innovative
        technology.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
