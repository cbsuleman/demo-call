import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer' // Using your updated Footer
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon, PlayIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Scalable Call Tracking Numbers',
  description:
    'Monitor hundreds or thousands of phone numbers without breaking the bank. Get local, toll-free, or vanity numbers with the industry’s most competitive pricing—perfect for agencies and businesses of all sizes.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Scalable Call Tracking Numbers
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Track as many phone numbers as your business needs—hundreds or
            thousands—without the high costs. CallGauge offers local, toll-free,
            and vanity numbers at unbeatable prices, built for agencies and
            growing companies.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
              Get Started Free
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="inline-flex items-center gap-2 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              <PlayIcon className="size-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureHighlight({ title, description, image, alt, reverse = false }) {
  return (
    <div className="py-16">
      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reverse ? 'lg:flex-row-reverse' : ''}`}
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {description}
            </p>
          </div>
          {image && (
            <div className="relative">
              <img
                src={image}
                alt={alt}
                className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

function CoreFeatures() {
  const features = [
    {
      title: 'What Are Tracking Numbers?',
      description:
        'Tracking numbers are special phone numbers that reveal the source of every call. With CallGauge, you assign unique numbers to each marketing channel—ads, websites, or forms—to see exactly what’s driving your inbound calls.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Tracking Numbers Dashboard',
    },
    {
      title: 'Affordable Scalability',
      description:
        'Need hundreds of numbers? Thousands? CallGauge has you covered with local numbers at just $0.50/month and toll-free at $0.95/month—far cheaper than competitors—so you can scale without budget strain.',
      image: '/screenshots/coming-soon.png',
      alt: 'Scalable Pricing Options',
    },
    {
      title: 'Local & Toll-Free Options',
      description:
        'Choose from a wide range of area codes for local presence or go with toll-free numbers to boost your brand. Vanity numbers are available too, making your business memorable and trackable.',
      image: '/screenshots/coming-soon.png',
      alt: 'Number Selection Interface',
    },
    {
      title: 'Track Every Source',
      description:
        'Pinpoint where calls come from—online ads, social posts, or offline campaigns. CallGauge shows you caller locations, call durations, and more, so you know what’s working.',
      image: '/screenshots/coming-soon.png',
      alt: 'Source Tracking Analytics',
    },
    {
      title: 'Optimize Your Campaigns',
      description:
        'Use tracking numbers to measure ad performance. See which keywords or channels generate calls, then double down on what delivers results—no more guessing or wasted spend.',
      image: '/screenshots/coming-soon.png',
      alt: 'Campaign Optimization Tools',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Key Benefits
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Why Scalable Tracking Numbers Matter
        </Heading>
      </Container>
      {features.map((feature, index) => (
        <FeatureHighlight key={index} {...feature} reverse={index % 2 === 1} />
      ))}
    </div>
  )
}

function DemoSection() {
  return (
    <div
      className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36"
      id="demo"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Heading as="h2" className="text-3xl text-white md:text-4xl">
              See Scalable Tracking in Action
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Discover how CallGauge makes tracking thousands of numbers simple
              and affordable. Watch our 6-minute demo to see it work for your
              business.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Low-cost scaling
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Easy number
                management
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Actionable
                insights
              </li>
            </ul>
            <Button
              className="mt-8 inline-flex items-center gap-2"
              href="/demo"
            >
              <PlayIcon className="size-5" />
              Watch Demo Now
            </Button>
            <p className="mt-2 text-sm text-gray-400">No sign-up required</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-800 shadow-xl">
            {/* <div className="absolute inset-0 h-auto backdrop-blur-xs"></div>
            <img
              src="https://callscaler.com/wp-content/uploads/2020/10/callscaler-cheap-call-tracking-1024x702.jpg"
              alt="Demo preview"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon className="size-16 cursor-pointer text-gray-700 opacity-80 transition-opacity hover:opacity-100" />
            </div> */}
            <video src="/demo/demo-video.mp4" controls></video>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AdditionalFeatures() {
  const features = [
    {
      title: 'Instant Setup',
      description: 'Get new numbers in minutes—no delays or complicated steps.',
    },
    {
      title: 'Number Porting',
      description: 'Bring your existing numbers to CallGauge for free.',
    },
    {
      title: 'Real-Time Insights',
      description: 'Monitor call activity as it happens with live data.',
    },
    {
      title: 'Custom Caller ID',
      description: 'Show your brand name or number on every call.',
    },
    {
      title: 'Multi-Channel Attribution',
      description: 'Track calls across web, print, and more.',
    },
    {
      title: 'Bulk Number Management',
      description: 'Handle large sets of numbers with ease.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          More Advantages
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Extra Tools for Tracking Success
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-pink-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">Ready to Scale?</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Start Tracking Numbers Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Sign up now and get $20 free credit to explore scalable call
            tracking—no risk, no limits.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
              Try It Now
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card needed • Instant setup
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function ScalableCallTrackingNumbers() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <CoreFeatures />
      <DemoSection />
      <AdditionalFeatures />
      <CTASection />
      <Footer />
    </main>
  )
}
