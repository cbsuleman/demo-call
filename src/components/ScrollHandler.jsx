// 2. Create a ScrollHandler component that will handle the scrolling logic

'use client'

import { useEffect } from 'react'

export function ScrollHandler() {
  useEffect(() => {
    // Get the scroll target from localStorage
    const scrollTarget = localStorage.getItem('scrollTo')

    if (scrollTarget) {
      // Clear the localStorage item to prevent scrolling on subsequent visits
      localStorage.removeItem('scrollTo')

      // Find the element to scroll to
      const element = document.getElementById(scrollTarget)

      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [])

  // This component doesn't render anything visible
  return null
}
