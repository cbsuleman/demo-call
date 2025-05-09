import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export const metadata = {
  title: 'Call Tracking for Small Businesses',
  description:
    'Grow your small business with CallGauge’s affordable call tracking. Track leads, improve customer service, and save time with easy-to-use tools.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Call Tracking for Small Businesses
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Save up to 40% on call tracking with CallGauge—no feature
            compromises, just simple, reliable tools to help your small business
            grow.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="#">
              Start Free Trial
            </Button>
            <Button
              href="/demo"
              variant="outline"
              className="inline-flex items-center gap-2 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Only $1 per number • 99.9% Uptime • Risk-Free for 14 Days
          </p>
        </div>
      </Container>
    </div>
  )
}

function CoreTerms() {
  const smallBusinessBenefits = [
    {
      title: 'Find Your Best Leads',
      description:
        'Track where your calls come from—ads, flyers, or your website. CallGauge helps you focus on what works, so you can grow without guesswork.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Lead Tracking for Small Businesses',
    },
    {
      title: 'Simplify Customer Service',
      description:
        'Route calls, record conversations, and get notifications—all in one place. CallGauge makes it easy to keep customers happy without extra staff.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Customer Service Tools',
    },
    {
      title: 'Save Time and Money',
      description:
        'Affordable at $1 per number, CallGauge cuts costs and automates tasks like reporting and follow-ups, freeing you to run your business.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Efficiency Dashboard',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Why Small Businesses Choose CallGauge
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Grow Smarter with Call Tracking
        </Heading>
        <div className="mt-12">
          {smallBusinessBenefits.map((benefit, index) => (
            <div key={index} className="py-16">
              <div
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">
                    {benefit.description}
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src={benefit.image}
                    alt={benefit.alt}
                    width={750}
                    height={750}
                    className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 italic">
            “CallGauge saved us time and money while helping us find more
            customers. It’s perfect for small businesses!”
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — Lisa Patel, Coffee Shop Owner
          </p>
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    'Track calls from any source—online ads, signs, or word of mouth.',
    'Set up call routing with greetings, forwards, or voicemail drops.',
    'Record calls to review service quality or train your team.',
    'Forward texts to your phone for instant customer replies.',
    'Use whispers to know who’s calling before you answer.',
    'Block spam calls to keep your lines clear.',
    'Get alerts for missed calls or voicemails via SMS or email.',
    'Send auto-reports to see call trends without the hassle.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          What CallGauge Offers Small Businesses
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Simple tools to help your small business thrive without complexity:
        </p>
        <ul className="mt-6 space-y-3 text-gray-200">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="mt-1 size-5 flex-shrink-0 text-pink-600" />
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

function AdditionalFeatures() {
  const additionalInfo = [
    {
      title: 'Budget-Friendly',
      description: 'Just $1 per number—affordable for any small business.',
    },
    {
      title: 'No Tech Skills Needed',
      description: 'Easy setup—start tracking calls in minutes.',
    },
    {
      title: 'Growth Insights',
      description: 'See what drives calls and focus your efforts.',
    },
    {
      title: 'Number Porting',
      description: 'Keep your existing numbers with CallGauge.',
    },
    {
      title: 'Friendly Support',
      description: 'We’re here to help you every step of the way.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-gray-500">
          More for Small Businesses
        </Subheading>
        <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
          Small Business Essentials
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {additionalInfo.map((info, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-pink-600">
                {info.title}
              </h3>
              <p className="mt-2 text-gray-600">{info.description}</p>
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
          <Subheading className="text-gray-500">
            Ready to Grow Your Business?
          </Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Try CallGauge Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Get $20 free credit to test CallGauge’s small business tools. No
            credit card required—start growing in minutes.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="#">
              Start Free Trial
            </Button>
            <Button
              href="/demo"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Get a Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Risk-Free for 14 Days • Instant Setup
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function SmallBusinesses() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <CoreTerms />
      <FeaturesSection />
      <AdditionalFeatures />
      <CTASection />
      <Footer />
    </main>
  )
}
