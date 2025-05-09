import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { CheckIcon, PlayIcon } from '@heroicons/react/16/solid'
import DemoVideo from './DemoVideo' // Import the new client component

export const metadata = {
  title: 'Demo',
  description:
    'Experience CallGauge’s scalable call tracking in a free, 5-minute interactive demo. See how we help businesses and agencies track thousands of calls at unbeatable prices.',
}

function DemoHero() {
  return (
    <div className="relative py-24 text-center">
      <Container>
        <Subheading className="text-gray-500">
          5-Minute Interactive Demo
        </Subheading>
        <Heading as="h1" className="mt-2 text-4xl text-gray-900 md:text-5xl">
          Call Tracking That Scales, Simplified
        </Heading>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          See how CallGauge delivers enterprise-grade call tracking at a
          fraction of the cost, empowering businesses and agencies to scale
          effortlessly.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            href="#interactive-demo"
            size="lg"
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            <PlayIcon className="size-4" />
            Start Demo Now
          </Button>
          <Button
            href="#"
            variant="outline"
            className="inline-flex items-center gap-2 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
          >
            Try Free for 7 Days
          </Button>
        </div>
      </Container>
    </div>
  )
}

function DemoFeatures() {
  return (
    <div
      className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-16 pb-24 text-white lg:pt-12"
      id="interactive-demo"
    >
      <Container>
        <div className="lg:col-span-2">
          <Heading as="h2" className="text-3xl text-white md:text-4xl">
            Built for Your Success
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            CallGauge is more than just call tracking—it’s a growth engine for
            your business. Designed to deliver powerful insights at an
            affordable price, we help you optimize every call and scale with
            confidence.
          </p>
          <ul className="mt-6 space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 text-pink-600" />
              Fast setup with numbers ready in seconds
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 text-pink-600" />
              Cost-effective tracking starting at $0.50/month
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 text-pink-600" />
              Live analytics for immediate decision-making
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 text-pink-600" />
              Accurate attribution across all marketing channels
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 text-pink-600" />
              Custom dashboards tailored to your needs
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 text-pink-600" />
              Multi-user support for team collaboration
            </li>
          </ul>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            Whether you’re a small business looking to grow or an agency
            managing multiple clients, CallGauge adapts to your workflow.
            Trusted by thousands of users globally, our platform ensures you get
            the most out of every conversation.
          </p>
        </div>
      </Container>
    </div>
  )
}

function CustomPricing() {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">Need More?</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900">
            Custom Pricing for High Volume
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
            Tracking thousands of calls? Get a tailored pricing plan that
            matches your scale and goals.
          </p>
          <Button
            href="/contact"
            className="mt-8 bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700"
          >
            Request a Quote
          </Button>
        </div>
      </Container>
    </div>
  )
}

function TrialCTA() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">Ready to Start?</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Experience CallGauge Risk-Free
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Sign up today and get $20 free credit to test everything—no
            commitment needed.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              href="#"
              size="lg"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Try CallGauge Now
            </Button>
            <Button
              href="#interactive-demo"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Replay Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • Instant access
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function Demo() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <DemoHero />
      <DemoVideo />
      <DemoFeatures />
      <CustomPricing />
      {/*<TrialCTA />*/}
      <Footer />
    </main>
  )
}
