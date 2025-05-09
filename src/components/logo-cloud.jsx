import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export function LogoCloud({ className }) {
  const logos = [
    { alt: 'Scribe', src: '/logo-cloud/1.svg' },
    { alt: 'Scale Your Biz', src: '/logo-cloud/2.svg' },
    { alt: 'Rock N Block', src: '/logo-cloud/3.svg' },
    { alt: 'The Elite Home', src: '/logo-cloud/4.svg' },
    { alt: 'Direct Choice Lending, Inc', src: '/logo-cloud/5.svg' },
    { alt: 'Ad Labs Marketing', src: '/logo-cloud/6.svg' },
    { alt: 'Pest Exterminate Now', src: '/logo-cloud/7.svg' },
    { alt: 'Website tigers', src: '/logo-cloud/8.svg' },
    { alt: 'Knaak', src: '/logo-cloud/9.svg' },
  ]

  return (
    <div className={`w-full overflow-hidden ${className || ''}`}>
      <Marquee
        gradient={false}
        speed={25} // Slower speed for better visibility on small screens
        pauseOnHover={true}
        className="py-4" // Consistent padding
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-2 sm:mx-4 md:mx-6 lg:mx-8" // Tighter margins on small screens
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={0}
              height={0}
              sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px" // Larger images on small screens
              className="h-24 w-auto sm:h-28 xl:h-32" // Larger base height for small screens
              style={{ objectFit: 'contain' }} // Prevent distortion
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
