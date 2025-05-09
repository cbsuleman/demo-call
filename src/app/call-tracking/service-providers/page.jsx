import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export const metadata = {
  title: 'Call Tracking for Service Providers',
  description:
    'Streamline your service business with CallGauge’s affordable call tracking. Manage leads, improve service, and grow your customer base with ease.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Call Tracking for Service Providers
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Reduce call tracking costs by up to 40% with CallGauge—get reliable
            tools to manage jobs, delight customers, and grow your service
            business.
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
  const serviceProviderBenefits = [
    {
      title: 'Capture Every Job Lead',
      description:
        'Track calls from ads, referrals, or your website. CallGauge ensures you never miss a job opportunity, helping you book more appointments.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Lead Capture for Service Providers',
    },
    {
      title: 'Deliver Top-Notch Service',
      description:
        'Route calls to the right team member, record interactions, and follow up fast. CallGauge keeps your customers happy and coming back.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Service Delivery Tools',
    },
    {
      title: 'Work Smarter, Not Harder',
      description:
        'Automate call handling and reporting for just $1 per number. CallGauge saves you time so you can focus on serving clients, not managing calls.',
      image: '/screenshots/coming-soon.png',
      alt: 'CallGauge Efficiency Dashboard',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Why Service Providers Choose CallGauge
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Power Your Service Business with Call Tracking
        </Heading>
        <div className="mt-12">
          {serviceProviderBenefits.map((benefit, index) => (
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
            “CallGauge keeps our plumbing jobs on track. We catch every lead and
            keep customers happy—it’s a lifesaver!”
          </p>
          <p className="mt-2 text-sm text-gray-500">
            — Tom Rivera, Plumbing Service Owner
          </p>
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  const features = [
    'Track calls from any source—online ads, flyers, or customer referrals.',
    'Route calls with custom greetings, forwards, or team assignments.',
    'Record calls to ensure quality or resolve disputes.',
    'Forward texts to your mobile for instant job updates.',
    'Add whispers to know the job details before picking up.',
    'Block spam calls to stay focused on real customers.',
    'Get SMS or email alerts for missed calls and voicemails.',
    'Auto-send call reports to keep your records straight.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          What CallGauge Offers Service Providers
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Efficient tools to manage calls and grow your service business:
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
      title: 'Low Cost',
      description: 'Only $1 per number—fits any service budget.',
    },
    {
      title: 'Simple Setup',
      description: 'Start tracking calls without tech headaches.',
    },
    {
      title: 'Job Insights',
      description: 'See which calls turn into bookings.',
    },
    {
      title: 'Keep Your Numbers',
      description: 'Port existing numbers to CallGauge.',
    },
    {
      title: 'Expert Help',
      description: 'Support tailored for service pros.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-gray-500">
          More for Service Providers
        </Subheading>
        <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
          Service-Ready Features
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
            Ready to Streamline Your Work?
          </Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Try CallGauge Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Get $20 free credit to test CallGauge’s service provider tools. No
            credit card required—start managing calls in minutes.
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

export default function ServiceProviders() {
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
