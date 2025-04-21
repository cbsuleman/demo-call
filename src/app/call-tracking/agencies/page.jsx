import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Call Tracking for Agencies',
  description:
    'Discover how CallGauge’s call tracking software helps agencies cut costs, track campaigns, and boost ROI with powerful features and affordable pricing.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Call Tracking for Agencies
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Slash your call tracking costs by up to 40% with CallGauge—without
            compromising on features or reliability. Empower your agency with
            affordable, scalable call tracking.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
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
  const agencyBenefits = [
    {
      title: 'Know Your Campaign Impact',
      description:
        'With CallGauge, answer “How did they hear about us?” automatically. Track every call back to its marketing source—online or offline—and optimize your clients’ campaigns with precision.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Campaign Tracking Dashboard',
    },
    {
      title: 'Run a Smarter Agency',
      description:
        'Boost efficiency with affordable call tracking (just $1/number). Spend less time on manual reporting and more time delivering results for your clients.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Agency Workflow',
    },
    {
      title: 'Prove Your Value',
      description:
        'Show clients real data on which campaigns drive calls and conversions. CallGauge’s analytics help you demonstrate ROI and build trust with every project.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge ROI Analytics',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Why Agencies Choose CallGauge
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Elevate Your Agency with Call Tracking
        </Heading>
        <div className="mt-12">
          {agencyBenefits.map((benefit, index) => (
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
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 italic">
            “CallGauge transformed how we track client campaigns. Setup is a
            breeze, and the ROI insights are a game-changer.”
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — Sarah Kim, Digital Agency Lead
          </p>
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    'Track every call to its source—ads, social, websites, and more—for unbeatable campaign insights.',
    'Route calls intelligently with custom flows: greetings, forwards, or automated texts.',
    'Record calls, download MP3s, and share with clients or teams for training and proof.',
    'Forward inbound SMS to any number for seamless communication.',
    'Add call whispers to give agents context before connecting.',
    'Block spam and robot calls to keep your data clean.',
    'Send SMS or email notifications for missed calls and voicemails.',
    'Generate auto-reports and email call details instantly to clients or staff.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          What CallGauge Offers Agencies
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Run a better agency with powerful, affordable call tracking tools
          designed to save time and boost results:
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
      title: 'Scalable Pricing',
      description: 'Only $1 per number—grow without breaking the bank.',
    },
    {
      title: 'Easy Integration',
      description: 'Works with Google Analytics, CRMs, and ad platforms.',
    },
    {
      title: 'Custom Reporting',
      description: 'Tailor dashboards and reports for each client.',
    },
    {
      title: 'Port Numbers',
      description: 'Bring your existing numbers to CallGauge seamlessly.',
    },
    {
      title: 'Top-Rated Support',
      description: 'Our team is here to help you succeed.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-gray-500">
          More Reasons to Choose Us
        </Subheading>
        <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
          Agency-Ready Features
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
            Ready to Scale Your Agency?
          </Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Try CallGauge Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Get $20 free credit to test CallGauge’s agency-friendly features. No
            credit card required—start tracking calls in minutes.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
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

export default function Agencies() {
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
