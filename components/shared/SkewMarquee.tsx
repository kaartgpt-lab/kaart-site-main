'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const MARQUEE_IMAGES = [
  { id: 1, src: "/images/skew/Frame 2121457455.png" },
  { id: 2, src: "/images/skew/Frame 2121457456.png" },
  { id: 3, src: "/images/skew/Frame 2121457457.png" },
  { id: 4, src: "/images/skew/Frame 2121457458.png" },
  { id: 5, src: "/images/skew/Frame 2121457459.png" },
  { id: 6, src: "/images/skew/Frame 2121457460.png" },
  { id: 7, src: "/images/skew/Frame 2121457461.png" },
  { id: 8, src: "/images/skew/Frame 2121457462.png" },
  { id: 9, src: "/images/skew/Frame 2121457455.png" },
  { id: 10, src: "/images/skew/Frame 2121457456.png" },
  { id: 11, src: "/images/skew/Frame 2121457457.png" },
  { id: 12, src: "/images/skew/Frame 2121457458.png" },
];

const SkewMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  function createMarqueeScroll(target: HTMLElement, partSelector: string) {
    const items = gsap.utils.toArray<HTMLElement>(partSelector)
    const totalWidth = target.scrollWidth / 2

    gsap.to(target, {
      x: `-=${totalWidth}`,
      duration: items.length,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0)),
      },
    })
  }

  useGSAP(
    () => {
      if (containerRef.current && marqueeRef.current) {
        createMarqueeScroll(marqueeRef.current, '.marquee-part')

        gsap.from(containerRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
            end: 'top 50%',
            scrub: false,
            once: true,
          },
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        })
      }
    },
    { scope: containerRef },
  )

  return (
    /* Added overflow-hidden to the section to stop horizontal scroll */
    <section className="relative w-full overflow-hidden pb-16 pt-24 lg:pb-48">
      <div
        ref={containerRef}
        className="marquee-container"
        style={{
          /* Changed -200px to -50px on mobile via a CSS variable approach 
             or just using a standard transform that is less aggressive 
          */
          transform: 'rotateX(30deg) rotateY(17deg) rotateZ(342deg) skew(7deg, 359deg)',
          transformStyle: 'preserve-3d',
          marginLeft: '-10%' // This helps center the skewed content without hard pixel offsets
        }}>
        <div ref={marqueeRef} className="flex flex-nowrap gap-3 md:gap-5">
          {MARQUEE_IMAGES.map((img) => (
            <figure key={img.id} className="marquee-part z-50 flex flex-shrink-0 items-center justify-center">
              {/* Added responsive sizing: smaller on mobile, original on desktop */}
              <div className="relative h-[220px] w-[200px] md:h-[400px] md:w-[370px]">
                <Image 
                  fill
                  src={img.src} 
                  alt={`Marquee ${img.id}`} 
                  className="object-contain"
                  sizes="(max-width: 768px) 200px, 370px"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Inline style fix for the specific mobile offset */}
      <style jsx>{`
        .marquee-container {
          translate: -50px 0px;
        }
        @media (min-width: 1024px) {
          .marquee-container {
            translate: -200px 0px;
          }
        }
      `}</style>
    </section>
  )
}

export default SkewMarquee