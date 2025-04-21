import Marquee from 'react-fast-marquee'

export function LogoCloud({ className }) {
  const logos = [
    {
      alt: 'Scribe',
      src: '/logo-cloud/1.svg',
    },
    {
      alt: 'Scale Your Biz',
      src: '/logo-cloud/2.svg',
    },
    {
      alt: 'Rock N Block',
      src: '/logo-cloud/3.svg',
    },
    {
      alt: 'The Elite Home',
      src: '/logo-cloud/4.svg',
    },
    {
      alt: 'Direct Choice Lending, Inc',
      src: '/logo-cloud/5.svg',
    },
    {
      alt: 'Ad Labs Marketing',
      src: '/logo-cloud/6.svg',
    },
    {
      alt: 'Pest Exterminate Now',
      src: '/logo-cloud/7.svg',
    },
    {
      alt: 'Website tigers',
      src: '/logo-cloud/8.svg',
    },
    {
      alt: 'Knaak',
      src: '/logo-cloud/9.svg',
    },
  ]

  return (
    <div className={`w-full overflow-hidden ${className || ''}`}>
      <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-8">
        {logos.map((logo, index) => (
          <div key={index} className="mx-5 sm:mx-6 md:mx-8 lg:mx-12">
            <img
              alt={logo.alt}
              src={logo.src}
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 xl:h-32"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
