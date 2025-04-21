import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Number Porting',
  description:
    'Port your phone numbers to CallGauge easily and for free. Keep your existing numbers and start tracking calls seamlessly.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Port Your Phone Numbers to CallGauge
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Bring your existing numbers to CallGauge at no cost. Configure them
            easily and start tracking calls with our affordable, reliable
            platform.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/porting/port-request">
              Submit Port Request
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="inline-flex items-center gap-2 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Contact Support
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free to Port In • $1 per Number • Risk-Free for 14 Days
          </p>
        </div>
      </Container>
    </div>
  )
}

function CoreTerms() {
  const portingFaqs = [
    {
      question: 'How long does porting take?',
      answer:
        'Porting typically takes 3-7 business days, depending on your current provider. Once approved, you’ll have time to configure your numbers in CallGauge.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Porting Timeline',
    },
    {
      question: 'Is there a cost to port numbers?',
      answer:
        'Porting into CallGauge is free! There’s a $10 one-time fee to port numbers out, ensuring flexibility if you ever need to leave.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Porting Cost Details',
    },
    {
      question: 'What’s needed for a port request?',
      answer:
        'You’ll need details about your current provider and a porting PIN. Check our Port Request Form for all requirements.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Port Request Form',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Common Questions
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Porting Made Simple
        </Heading>
        <div className="mt-12">
          {portingFaqs.map((faq, index) => (
            <div key={index} className="py-16">
              <div
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-lg text-gray-600">{faq.answer}</p>
                </div>
                <div className="relative">
                  <img
                    src={faq.image}
                    alt={faq.alt}
                    className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  const portingBenefits = [
    'Port numbers in for free—no hidden fees.',
    'Keep your existing numbers for seamless transitions.',
    'Configure numbers before they go live in CallGauge.',
    'Only $1 per number after porting—affordable and scalable.',
    'Get a porting PIN from your provider to start the process.',
    'Contact support for help with port requests or PINs.',
    'Port out for a $10 fee if you ever need to leave.',
    'Use ported numbers with all CallGauge features instantly.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          Why Port with CallGauge
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Everything you need for hassle-free number porting:
        </p>
        <ul className="mt-6 space-y-3 text-gray-200">
          {portingBenefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="mt-1 size-5 flex-shrink-0 text-pink-600" />
              <span className="text-lg">{benefit}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

function AdditionalFeatures() {
  const relatedFeatures = [
    {
      title: 'Affordable Numbers',
      description: 'Use ported numbers for just $1 each—no extra costs.',
      link: '/features',
    },
    {
      title: 'Call Routing',
      description: 'Set up greetings, forwards, or multi-ring flows.',
      link: '/features',
    },
    {
      title: 'Voicemail Tracking',
      description: 'Monitor voicemails and texts with ease.',
      link: '/features',
    },
    {
      title: 'Analytics',
      description: 'Track calls to optimize your campaigns.',
      link: '/features',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-gray-500">Explore More</Subheading>
        <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
          Features for Ported Numbers
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
          {relatedFeatures.map((feature, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-pink-600">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              <Link
                href={feature.link}
                className="mt-2 inline-block text-sm font-medium text-gray-700 hover:text-pink-600"
              >
                Learn More
              </Link>
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
          <Subheading className="text-gray-500">Ready to Port?</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Start Using Your Numbers with CallGauge
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Port your numbers for free and get $20 free credit to test
            CallGauge’s call tracking tools. No credit card needed—begin in
            minutes.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/porting/port-request">
              Submit Port Request
            </Button>
            <Button
              href="/signup"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Start Free Trial
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

export default function Porting() {
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
