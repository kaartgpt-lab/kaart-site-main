'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/moodit_about', label: 'About' },
  { href: '/services', label: 'Services' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md transition dark:border-white/10 dark:bg-black/40">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          {/* Replace with your logo if needed */}
          <span className="text-lg">YourBrand</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition hover:opacity-80 ${
                    active ? 'font-semibold text-black dark:text-white' : 'text-neutral-600 dark:text-neutral-300'
                  }`}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-black/10 transition hover:bg-black/5 dark:ring-white/10 dark:hover:bg-white/5 md:hidden">
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
        <ul className="space-y-1 border-t border-black/5 bg-white/80 p-4 backdrop-blur-md dark:border-white/10 dark:bg-black/50">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-black/5 dark:hover:bg-white/10 ${
                    active ? 'font-semibold text-black dark:text-white' : 'text-neutral-700 dark:text-neutral-300'
                  }`}>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
