'use client'

import { Container } from '@/components/container'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { HashLoader } from 'react-spinners'

// Simple spinner component
function Spinner() {
  return (
    <div className="flex items-center justify-center">
      {/*<div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-pink-600"></div>*/}
      <HashLoader color="#e60076" size={70} loading />
    </div>
  )
}

export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Gradient background consistent with your site */}
      <GradientBackground className="absolute inset-0 z-0" />

      {/* Navbar at the top */}
      <div className="relative z-10">
        <Container>
          <Navbar />
        </Container>
      </div>

      {/* Centered loader below the Navbar */}
      <Container className="fixed inset-0 flex h-full items-center justify-center">
        <div className="text-center">
          {/* Spinner */}
          <Spinner />

          {/* Optional loading message */}
          <p className="mt-8 animate-pulse text-lg font-medium text-pink-600/40">
            Loading...
          </p>
        </div>
      </Container>
    </div>
  )
}
