import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export const metadata = {
  title: 'Call Tracking for Marketers',
  description:
    'Boost your marketing ROI with CallGauge’s affordable call tracking software. Monitor campaigns, optimize ad spend, and enhance customer experience effortlessly.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Call Tracking for Marketers
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Cut call tracking costs by up to 40% with CallGauge—no compromise on
            features or reliability. Optimize your campaigns and prove your
            impact with precision.
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
  const marketerBenefits = [
    {
      title: 'Track Every Lead Source',
      description:
        'Answer “How did they hear about us?” with CallGauge. Monitor calls from ads, social, websites, and more to optimize your marketing spend and boost conversions.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Lead Source Dashboard',
    },
    {
      title: 'Increase ROI with Data',
      description:
        'Analyze call data to see which campaigns drive results. CallGauge helps you refine your sales funnel, improve conversion rates, and maximize your budget.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Marketing ROI Analytics',
    },
    {
      title: 'Enhance Customer Experience',
      description:
        'Use call insights to improve customer interactions. Review recordings, spot trends, and tailor your approach to keep satisfaction high and close more deals.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Customer Experience Insights',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Why Marketers Love CallGauge
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Supercharge Your Marketing with Call Tracking
        </Heading>
        <div className="mt-12">
          {marketerBenefits.map((benefit, index) => (
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
            “CallGauge gave us the data to double our campaign ROI. It’s a
            must-have for any marketer.”
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — Mark Evans, Marketing Consultant
          </p>
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    'Monitor calls from every channel—Google Ads, Facebook, email, and beyond.',
    'Route calls with custom flows: greetings, forwards, or automated replies.',
    'Record calls and download MP3s to analyze performance or train teams.',
    'Forward inbound texts to any number for quick follow-ups.',
    'Use call whispers to prep your team before answering.',
    'Filter spam calls to focus on real leads.',
    'Get SMS or email alerts for missed calls and voicemails.',
    'Auto-generate reports and share call details instantly.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          What CallGauge Offers Marketers
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Optimize your campaigns with tools that save time and deliver results:
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
      title: 'Affordable Pricing',
      description: 'Just $1 per number—scale without overspending.',
    },
    {
      title: 'Ad Platform Sync',
      description: 'Integrates with Google Ads, Facebook, and more.',
    },
    {
      title: 'Actionable Analytics',
      description: 'Turn call data into campaign-winning insights.',
    },
    {
      title: 'Number Porting',
      description: 'Transfer your numbers to CallGauge easily.',
    },
    {
      title: 'Reliable Support',
      description: 'Our team helps you get the most from every call.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-gray-500">More for Marketers</Subheading>
        <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
          Marketing-Ready Features
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
            Ready to Boost Your ROI?
          </Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Try CallGauge Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Get $20 free credit to test CallGauge’s marketing tools. No credit
            card required—start optimizing in minutes.
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

export default function Marketers() {
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
