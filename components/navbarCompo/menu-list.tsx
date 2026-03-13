'use client'

import { gsap } from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef, useEffect, useRef, useState } from 'react'

interface MenuItemProps {
  title: string
  url: string
  items?: { title: string; url: string; isActive?: boolean; bio: string[] }[]
  isActive?: boolean
}

const menuItems: MenuItemProps[] = [
  {
    title: 'About',
    url: '#',
    items: [
      {
        title: 'About Company',
        url: '/about',
        bio: [
          'Crestify was built from years of working closely with founders and seeing where most products struggled — not because of weak execution, but because of unclear structure.',
          'We focus on helping teams think deeply before building, defining systems that can evolve over time rather than needing constant rebuilding.',
          'This page shares our philosophy, journey, and the people behind our work.',
        ],
      },
    ],
  },
  {
    title: 'Services',
    url: '#',
    items: [
      {
        title: 'What We Do',
        url: '/services',
        bio: [
          'Our work spans the full lifecycle of building digital systems — from early product strategy and architecture to design, development, integrations, and AI-driven capabilities.',
          'Rather than offering isolated services, we approach each engagement as part of a larger system-building process.',
          'Explore how we help teams turn complex ideas into reliable, scalable products.',
        ],
      },
    ],
  },
  {
    title: 'Blog',
    url: '#',
    items: [
      {
        title: 'Insights & Thinking',
        url: '/seo-blog',
        bio: [
          'This is where we share lessons from real-world product building — covering topics like system architecture, ecommerce execution, product strategy, and scaling challenges.',
          'Our writing reflects practical experiences working alongside founders, not abstract theories.',
          'It’s a space to understand how we think about building.',
        ],
      },
    ],
  },
  {
    title: 'Projects',
    url: '#',
    items: [
      {
        title: 'Selected Work',
        url: '/digital-agency/project',
        bio: [
          'Here you’ll find a selection of systems we’ve helped design and build — spanning ecommerce platforms, SaaS products, internal tools, and data-driven applications.',
          'Some work is public, while much operates quietly behind the scenes.',
          'What connects them all is a focus on structure, reliability, and long-term performance.',
        ],
      },
    ],
  },
  {
    title: 'Career',
    url: '#',
    items: [
      {
        title: 'Work With Us',
        url: '/career',
        bio: [
          'Crestify operates as a small, focused team that values thoughtful building over rapid volume.',
          'We look for people who enjoy solving complex problems, working closely with founders, and contributing to systems that evolve over time.',
          'If you care about building things that truly make sense, you’ll feel at home here.',
        ],
      },
    ],
  },
  {
    title: 'Team',
    url: '#',
    items: [
      {
        title: 'The People',
        url: '/team',
        bio: [
          'Behind every system we build is a collaborative group of product thinkers, designers, and engineers working closely together.',
          'We operate with a hands-on approach, staying deeply involved in both the thinking and execution stages of every project.',
          'Meet the people who bring Crestify’s philosophy to life.',
        ],
      },
    ],
  },
  {
    title: 'Faq',
    url: '#',
    items: [
      {
        title: 'Common Questions',
        url: '/faq',
        bio: [
          'Most teams approach us with similar questions — about when to involve us, how collaborations typically work, and what to expect from the engagement process.',
          'This section addresses those questions to help you better understand how we operate and whether there’s a strong fit.',
        ],
      },
    ],
  },
]

interface MenuListProps {
  onItemClick?: () => void
}

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>((props, ref) => {
  const { onItemClick } = props
  const pathname = usePathname()

  const [activeItems, setActiveItems] = useState<string[]>([])
  const [lockedItem, setLockedItem] = useState<string | null>(null)
  const [initialLoad, setInitialLoad] = useState(true)

  const dropdownRefsMap = useRef(new Map<string, HTMLUListElement | null>())

  // Set active based on current route
  useEffect(() => {
    let foundParent = false

    menuItems.forEach((item) => {
      if (item.items) {
        const activeSubItem = item.items.find(
          (subItem) => pathname === subItem.url || pathname.startsWith(subItem.url + '/'),
        )

        if (activeSubItem) {
          setActiveItems([item.title])
          setLockedItem(item.title)
          foundParent = true
        }
      }
    })

    if (!foundParent) {
      const topLevelMatch = menuItems.find(
        (item) => pathname === item.url || (item.url !== '#' && pathname.startsWith(item.url + '/')),
      )

      if (topLevelMatch) {
        setActiveItems([topLevelMatch.title])
        setLockedItem(topLevelMatch.title)
      }
    }

    setInitialLoad(false)
  }, [pathname])

  // GSAP dropdown animation
  useEffect(() => {
    menuItems.forEach((item) => {
      const dropdownRef = dropdownRefsMap.current.get(item.title)
      if (!dropdownRef) return

      if (activeItems.includes(item.title)) {
        gsap.set(dropdownRef, { display: 'block', autoAlpha: 0, x: 10 })
        gsap.to(dropdownRef, {
          autoAlpha: 1,
          x: 0,
          duration: 0.2,
          ease: 'power3.in',
        })
      } else {
        gsap.to(dropdownRef, {
          autoAlpha: 0,
          x: 10,
          duration: 0.15,
          ease: 'power3.out',
          onComplete: () => {
            gsap.set(dropdownRef, { display: 'none' })
          },
        })
      }
    })
  }, [activeItems])

  const setDropdownRef = (el: HTMLUListElement | null, title: string) => {
    if (el) dropdownRefsMap.current.set(title, el)
  }

  const isLinkActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + '/')
  }

  return (
    <ul ref={ref} className="menu-list">
      {menuItems.map((item) => (
        <li
          key={item.title}
          className={`menu-list-item menu-list-item-anchor ${activeItems.includes(item.title) ? 'active' : ''}`}>
          <a
            href={item.url}
            onMouseEnter={() => {
              if (window.innerWidth > 768 && !lockedItem) {
                setActiveItems([item.title])
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 768 && !lockedItem) {
                setActiveItems([])
              }
            }}
            onClick={(e) => {
              e.preventDefault()

              if (lockedItem === item.title) {
                setLockedItem(null)
                setActiveItems([])
              } else {
                setLockedItem(item.title)
                setActiveItems([item.title])
              }
            }}
            className="menu-list-item-text text-[28px] leading-[70px] text-white md:text-[42px] xl:text-[56px] xl:leading-[90px]">
            {item.title}
          </a>

          {item.items && (
            <ul
              ref={(el) => setDropdownRef(el, item.title)}
              className={`menu-list-item-dropdown relative left-0 h-fit max-h-[60vh] w-full gap-x-4 overflow-y-auto md:absolute md:left-[48%] md:max-h-none md:w-[350px] md:overflow-visible md:pb-0 lg:left-[33%] lg:w-[650px] xl:left-[44%] ${
                item.title === 'Home'
                  ? '!grid !grid-cols-1 lg:-mt-[70px] lg:!grid-cols-2'
                  : '!grid !grid-cols-1 lg:top-5'
              } ${activeItems.includes(item.title) ? 'block' : 'hidden'}`}>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    href={subItem.url}
                    onClick={() => {
                      onItemClick && onItemClick()
                    }}
                    className={`menu-list-item-dropdown-list inline-block pb-1 pl-3 text-base leading-8 text-white hover:text-[#12D8CC] md:text-3xl md:leading-[50px] ${
                      isLinkActive(subItem.url) ? 'active' : ''
                    }`}>
                    {subItem.title}
                  </Link>
                  <br />
                  <br />
                  {subItem.bio.map((point, index) => (
                    <p key={index}>
                      <p key={index} className="text-sm text-gray-400">
                        {point}
                      </p>
                      <br />
                    </p>
                  ))}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
})

MenuList.displayName = 'MenuList'
