'use client'

import Image from 'next/image'
import logoMain from '/public/logo/logo-main.png'
import logoMask from '/public/logo/logo-mask.png'

export function Logo({ className }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return <Image src={logoMain} alt="" className="w-40" />
}

export function Mark({ className }) {
  return <Image src={logoMask} alt="CallGauge" />
}
