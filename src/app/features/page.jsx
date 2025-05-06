import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon, PlayIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export const metadata = {
  title: 'Features',
  description:
    'Discover CallGauge’s powerful call tracking features: affordable numbers, advanced call flows, voicemail tracking, analytics, and more—all at unbeatable prices.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Powerful Call Tracking, Simplified
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg">
            CallGauge delivers enterprise-grade call tracking features at a
            fraction of the cost of competitors like CallRail. Streamline your
            workflow, gain deeper insights, and boost ROI—all in one platform.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button href="/signup" size="lg" variant="primary">
              Start Free Trial
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="inline-flex items-center gap-2"
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

function FeatureHighlight({
  title,
  description,
  image,
  badge,
  learnMoreHref,
  reverse = false,
}) {
  return (
    <div className="py-16">
      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reverse ? 'lg:flex-row-reverse' : ''}`}
        >
          <div>
            <div className="relative flex items-start gap-x-2">
              <h2 className="text-2xl font-bold">{title}</h2>
              {badge && (
                <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-medium text-white sm:-right-12">
                  {badge}
                </span>
              )}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {description}
            </p>
            {learnMoreHref && (
              <Link
                href={learnMoreHref}
                className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
              >
                Learn More →
              </Link>
            )}
          </div>
          <div className="relative">
            <Image
              src={image}
              width={750}
              height={750}
              alt={title}
              className="w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

function CoreFeatures() {
  const features = [
    {
      title: 'Advanced Call Flows',
      description:
        'Design sophisticated call routing with ease. Set up call forwarding, simultaneous multi-ringing, round-robin distribution, or custom IVR menus. Add professional greetings, hold music, or time-based routing to optimize every call experience.',
      image: '/screenshots/coming-soon.png',
      learnMoreHref: '/features/call-flows',
    },
    {
      title: 'Affordable Numbers',
      description:
        'Monitor hundreds or thousands of phone numbers for just $1 each. Get local, toll-free, or vanity numbers with the industry’s most competitive pricing—perfect for agencies and businesses of all sizes.',
      image: '/screenshots/coming-soon.png',
      learnMoreHref: '/features/tracking-numbers',
    },
    {
      title: 'Dynamic Number Insertion',
      description:
        'Pinpoint the exact online source of every call. Our dynamic insertion technology swaps numbers on your website based on visitor origin—SEO, PPC, social, or referrals—giving you crystal-clear attribution.',
      image: '/screenshots/coming-soon.png',
      badge: 'NEW',
    },
    {
      title: 'Client Portal Access',
      description:
        'Empower your clients with their own branded portal. They can log in to view real-time call data, recordings, and analytics—enhancing transparency and trust without extra work on your end.',
      image: '/screenshots/coming-soon.png',
    },
    {
      title: 'AI-Powered Call Insights',
      description:
        'Leverage cutting-edge AI to transcribe every call and generate concise summaries. Get one-sentence overviews plus detailed bullet points highlighting key details—saving you hours of manual review.',
      image: '/screenshots/coming-soon.png',
      badge: 'NEW',
    },
    {
      title: 'Smart Automations',
      description:
        'Automate post-call workflows with SMS or email notifications. Integrate with Zapier to connect CallGauge to thousands of apps, streamlining your processes and boosting efficiency.',
      image: '/screenshots/coming-soon.png',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">Core Features</Subheading>
        <Heading as="h2" className="mt-2 text-center text-3xl md:text-4xl">
          Everything You Need to Master Call Tracking
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
              Maximize Efficiency, Minimize Costs
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              CallGauge eliminates the complexity of call tracking while
              delivering premium features at budget-friendly prices. Watch our
              6-minute demo to see how we save you time, money, and effort.
            </p>
            <ul className="mt-6 space-y-3 text-gray-200">
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Affordable
                pricing
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Seamless
                attribution
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="size-5 text-pink-600" /> Automated
                reporting
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
            {/* <div className="absolute inset-0 h-auto backdrop-blur-xs"></div> */}
            {/* <img
              src="/screenshots/dummy2.png"
              alt="Demo preview"
              className="h-full w-full object-cover"
            /> */}
            <video src="/demo/demo-video.mp4" controls></video>
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon className="size-16 cursor-pointer text-gray-700 opacity-80 transition-opacity hover:opacity-100" />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AdditionalFeatures() {
  const features = [
    {
      title: 'Call Recording & Playback',
      description:
        'Capture every call, review recordings, and download MP3s for training or sharing.',
    },
    {
      title: 'Call Whisper Contextualization',
      description:
        'Hear a brief message before connecting to provide context for each call.',
    },
    {
      title: 'Pay-Per-Call Billing',
      description:
        'Charge clients based on qualified calls, perfect for performance-based models.',
    },
    {
      title: 'Spam Protection',
      description:
        'Block robocalls and spam with Press 1 verification and advanced filtering.',
    },
    {
      title: 'Voicemail Tracking',
      description:
        'Monitor voicemails with custom greetings or time-based rules for seamless management.',
    },
    {
      title: 'Real-Time Notifications',
      description:
        'Get instant alerts for missed calls or voicemails via SMS or email.',
    },
    {
      title: 'Analytics',
      description:
        'Track call performance with intuitive, customizable reports and dashboards.',
    },
    {
      title: 'White-Label Branding',
      description:
        'Personalize CallGauge with your logo and domain for a professional touch.',
    },
    {
      title: 'Number Porting',
      description:
        'Seamlessly transfer existing numbers to CallGauge with zero downtime.',
    },
    {
      title: 'SMS Forwarding',
      description: 'Route inbound texts to any number for quick responses.',
    },
    {
      title: 'Automated Reporting',
      description:
        'Schedule and send detailed call reports to your team or clients.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center">Additional Tools</Subheading>
        <Heading as="h2" className="mt-2 text-center text-3xl md:text-4xl">
          Comprehensive Features for Every Need
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
          <Subheading className="text-gray-500">Get Started Today</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Experience CallGauge Risk-Free
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Sign up now and get $20 free credit to explore all features—no
            commitment required.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
              Try CallGauge Now
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              No credit card required • Instant access
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Features() {
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
