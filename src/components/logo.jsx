'use client'

export function Logo({ className }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return <img src="/logo/logo-main.png" alt="" className="w-40" />
}

export function Mark({ className }) {
  return (
    <img src="/logo/logo-mask.png" alt="CallGauge" className={`${className}`} />
  )
}
