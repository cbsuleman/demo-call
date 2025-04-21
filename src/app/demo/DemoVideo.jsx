'use client'

import { Container } from '@/components/container'
import { PlayIcon } from '@heroicons/react/16/solid'
import { useRef, useState } from 'react'

export default function DemoVideo() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="my-24">
      <Container>
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-800 shadow-xl">
          <video
            ref={videoRef}
            src="/demo/demo-video.mp4"
            className="h-full w-full object-cover"
            controls
          />
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={handlePlayClick}
            >
              <PlayIcon className="size-16 cursor-pointer text-gray-700 opacity-80 transition-opacity hover:opacity-100" />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
