'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

// Create a custom link component for special navigation
function NavigateWithScroll({ href, children, scrollTarget }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    // Store the scroll target in localStorage
    if (scrollTarget) {
      localStorage.setItem('scrollTo', scrollTarget)
    }

    // Navigate to the page
    router.push(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
    >
      {children}
    </a>
  )
}

const links = [
  { href: '/features', label: 'Features', id: 'features-nav' },
  { href: '/pricing', label: 'Pricing', id: 'pricing-nav' },
  { href: '/company', label: 'Company', id: 'company-nav' },
  { href: '#', label: 'Login', id: 'login-nav' },
  { href: '/demo', label: 'Demo', id: 'demo-nav' },
  {
    href: '/pricing',
    label: 'Try it free',
    scrollTo: 'pricing-cards',
    id: 'try-free-nav',
  },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label, scrollTo, id }) => (
        <PlusGridItem key={id} className="relative flex">
          {scrollTo ? (
            <NavigateWithScroll href={href} scrollTarget={scrollTo}>
              {label}
            </NavigateWithScroll>
          ) : (
            <Link
              href={href}
              className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/[2.5%]"
            >
              {label}
            </Link>
          )}
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  const router = useRouter()

  const handleNavClick = (href, scrollTo) => {
    if (scrollTo) {
      localStorage.setItem('scrollTo', scrollTo)
    }
    router.push(href)
  }

  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label, scrollTo, id }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={id}
          >
            {scrollTo ? (
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(href, scrollTo)
                }}
                className="text-base font-medium text-gray-950"
              >
                {label}
              </a>
            ) : (
              <Link href={href} className="text-base font-medium text-gray-950">
                {label}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
