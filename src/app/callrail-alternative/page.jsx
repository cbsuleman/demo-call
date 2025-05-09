import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'CallGauge vs. CallRail: Top Call Tracking Alternative for 2025',
  description:
    'Compare CallGauge and CallRail to find the best call tracking software for your business. Discover why CallGauge is the top alternative with affordable pricing and powerful features.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">
            Call Tracking Showdown
          </Subheading>
          <Heading as="h1" className="mt-2 text-4xl text-gray-900 md:text-5xl">
            CallGauge vs. CallRail: The Best Call Tracking Alternative
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Looking for a CallRail alternative? CallGauge offers unbeatable
            pricing at $1 per number, simple setup, and powerful features to
            scale your call tracking—perfect for agencies and growing
            businesses.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full text-white shadow-md sm:w-auto" href="#">
              Try CallGauge Free
            </Button>
            <Button
              href="/demo"
              variant="outline"
              className="w-full border-gray-300 text-gray-700 shadow-md hover:bg-gray-100 sm:w-auto"
            >
              See a Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            $20 Free Credit • No Credit Card Needed • Instant Setup
          </p>
        </div>
      </Container>
    </div>
  )
}

function ComparisonSection() {
  const features = [
    {
      name: 'Cost per US Phone Number',
      callGauge: '$1.00 per number',
      callRail: '$3.00 per number',
    },
    {
      name: 'All Essential Call Tracking Features',
      callGauge: 'Yes',
      callRail: 'Yes',
    },
    {
      name: 'Ease of Use',
      callGauge: 'Intuitive and streamlined',
      callRail: 'More complex setup',
    },
    {
      name: 'White Labeling',
      callGauge: 'Full branding on custom URL',
      callRail: 'Limited customization',
    },
    {
      name: 'Client Management',
      callGauge: 'Seamless billing and client dashboards',
      callRail: 'Cumbersome for agencies',
    },
    {
      name: 'Real-Time Client Access',
      callGauge: 'Instant, customizable logins',
      callRail: 'Less flexible',
    },
    {
      name: 'Automated Client Invoicing',
      callGauge: 'Built-in automation',
      callRail: 'Not available',
    },
    {
      name: 'Inbound Call Attribution',
      callGauge: 'Detailed source tracking',
      callRail: 'Standard tracking',
    },
    {
      name: 'AI Transcription & Summaries',
      callGauge: 'Included on all plans',
      callRail: 'Higher tiers only',
    },
    {
      name: 'SMS, Voicemail & Calls Management',
      callGauge: 'Unified platform',
      callRail: 'Fragmented tools',
    },
    {
      name: 'Pricing Scalability',
      callGauge: 'Track 3x more numbers affordably',
      callRail: 'Higher costs for scale',
    },
    {
      name: 'Call Whisper & Recording',
      callGauge: 'Yes',
      callRail: 'Yes',
    },
    {
      name: 'Support for High Volume',
      callGauge: 'Optimized for scale',
      callRail: 'Suited for smaller accounts',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Heading
          as="h2"
          className="text-center text-3xl text-gray-900 md:text-4xl"
        >
          CallGauge vs. CallRail: Feature Comparison
        </Heading>
        <p className="mt-6 text-center text-lg text-gray-600">
          See why CallGauge is the smarter choice for cost-effective, scalable
          call tracking.
        </p>
        <div className="mt-12 overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-900">
                  Feature
                </th>
                <th className="px-6 py-4 font-semibold text-gray-900">
                  CallGauge
                </th>
                <th className="px-6 py-4 font-semibold text-gray-900">
                  CallRail
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-4 text-gray-700">{feature.name}</td>
                  <td className="px-6 py-4 text-gray-900">
                    {feature.callGauge}
                  </td>
                  <td className="px-6 py-4 text-gray-900">
                    {feature.callRail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Button className="w-full text-white shadow-md sm:w-auto" href="#">
            Try CallGauge Free
          </Button>
          <Button
            href="/port-request"
            variant="outline"
            className="w-full border-gray-300 text-gray-700 shadow-md hover:bg-gray-100 sm:w-auto"
          >
            Port Your Numbers
          </Button>
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  const callGaugeBenefits = [
    'Buy numbers for just $1—track 3x more campaigns affordably.',
    'Set up call flows in minutes with drag-and-drop simplicity.',
    'White-label dashboards for seamless client branding.',
    'AI transcription and summaries included on every plan.',
    'Unified SMS, voicemail, and call management in one platform.',
    'Automated invoicing to streamline agency billing.',
    'Port numbers for free in 3-7 days with expert support.',
    'Scalable for high-volume agencies without hidden fees.',
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Heading
          as="h2"
          className="text-center text-3xl text-gray-900 md:text-4xl"
        >
          Why Choose CallGauge?
        </Heading>
        <p className="mt-6 text-center text-lg text-gray-600">
          CallGauge is built for businesses and agencies that want powerful call
          tracking without the complexity or cost of CallRail.
        </p>
        <ul className="mx-auto mt-12 max-w-3xl space-y-4">
          {callGaugeBenefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="mt-1 size-5 flex-shrink-0 text-pink-600" />
              <span className="text-lg text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

function AlternativesSection() {
  const alternatives = [
    {
      name: 'WhatConverts',
      description:
        'Tracks calls, forms, and chats for a holistic lead view. CallGauge offers lower pricing for call-focused businesses.',
    },
    {
      name: 'CallTrackingMetrics',
      description:
        'Combines call tracking with contact center tools. CallGauge is simpler and more affordable for agencies.',
    },
    {
      name: 'Invoca',
      description:
        'AI-powered tracking for complex campaigns. CallGauge provides a budget-friendly, user-friendly alternative.',
    },
    {
      name: 'Nimbata',
      description:
        'Focuses on call analytics and lead scoring. CallGauge excels in scalability and client management.',
    },
    {
      name: 'Ringba',
      description:
        'Pay-per-call focus with customization. CallGauge offers broader features at a lower cost.',
    },
  ]

  return (
    <div className="bg-white py-24">
      <Container>
        <Heading
          as="h2"
          className="text-center text-3xl text-gray-900 md:text-4xl"
        >
          Other CallRail Alternatives
        </Heading>
        <p className="mt-6 text-center text-lg text-gray-600">
          While CallGauge leads for affordability and ease, here are other
          options to consider.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {alternatives.map((alt, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {alt.name}
              </h3>
              <p className="mt-2 text-gray-600">{alt.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] py-24 text-white">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-300">Ready to Switch?</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-white md:text-4xl">
            Make the Move to CallGauge
          </Heading>
          <Lead className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Join hundreds of businesses saving on call tracking with CallGauge.
            Get started with $20 free credit and experience the difference
            today.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full text-white shadow-md sm:w-auto" href="#">
              Try CallGauge Free
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="w-full border-gray-300 text-white shadow-md hover:bg-gray-800 sm:w-auto"
            >
              Contact Support
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Risk-Free for 14 Days • Instant Setup
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function CallRailAlternative() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <ComparisonSection />
      <FeaturesSection />
      <AlternativesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
