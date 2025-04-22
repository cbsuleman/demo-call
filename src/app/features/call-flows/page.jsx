import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { PlayIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export const metadata = {
  title: 'Advanced Call Flows',
  description:
    'Master your inbound calls with CallGauge’s advanced call flow tools. Build custom routing, automate tasks, and enhance every call experience effortlessly.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Advanced Call Flows
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Take charge of your inbound calls with CallGauge’s powerful call
            flow tools. Design custom paths, automate responses, and create a
            seamless experience—all at a fraction of the cost of traditional
            platforms.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
              Try It Free
            </Button>
            <Button
              href="#demo"
              variant="outline"
              className="inline-flex items-center gap-2 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              <PlayIcon className="size-4" />
              See It in Action
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
              <Image
                src={image}
                alt={alt}
                width={750}
                height={750}
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
      title: 'What Are Call Flows?',
      description:
        'Call flows are your secret weapon for managing inbound calls. With CallGauge’s drag-and-drop builder, you can map out every step—routing calls, adding automations, and linking multiple numbers to a single flow—all in a few clicks.',
      image: '/screenshots/coming-soon.png',
      // image: '/features/call-flows-builder.jpg',
      alt: 'CallGauge Call Flow Builder',
    },
    {
      title: 'Smart Call Routing',
      description:
        'Send calls exactly where they need to go—your team, a partner, or anywhere else. Adjust ring times from 5 to 60 seconds to keep the flow smooth and efficient.',
      image: '/screenshots/coming-soon.png',
      // image: '/features/smart-routing.jpg',
      alt: 'Smart Call Routing Setup',
    },
    {
      title: 'Personalized Greetings',
      description:
        'Set the stage with custom audio. Use our text-to-speech tool or upload a file to greet callers with a professional intro or a recording notice.',
      image: '/screenshots/coming-soon.png',
      // image: '/features/greetings-editor.jpg',
      alt: 'Personalized Greetings Editor',
    },
    {
      title: 'Flexible Voicemail',
      description:
        'Catch every missed call with tailored voicemail options. Recordings can land in your inbox or get texted to any number for quick action.',
      image: '/screenshots/coming-soon.png',
      // image: '/features/voicemail-options.jpg',
      alt: 'Flexible Voicemail Options',
    },
    {
      title: 'Instant Text Alerts',
      description:
        'Keep missed calls from slipping away. Automatically ping your team or the caller with a text when a call doesn’t connect.',
      image: '/screenshots/coming-soon.png',
      // image: '/features/text-alerts.jpg',
      alt: 'Instant Text Alerts Setup',
    },
    {
      title: 'Email Automation',
      description:
        'Get the scoop on every call with automated emails. Set filters to highlight key conversations and share them with your crew right away.',
      image: '/screenshots/coming-soon.png',
      // image: '/features/email-automation.jpg',
      alt: 'Email Automation Settings',
    },
    {
      title: 'Group Ringing',
      description:
        'Cut wait times by ringing multiple numbers at once. The first to answer wins—ideal for fast-paced teams or lead distribution.',
      image: '/screenshots/coming-soon.png',
      // image: '/features/group-ringing.jpg',
      alt: 'Group Ringing Configuration',
    },
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Key Features
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Everything You Need for Call Flows
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
              See Call Flows in Action
            </Heading>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              CallGauge’s call flows simplify your workflow while packing
              premium features into an affordable package. Check out our
              6-minute demo to see how it works.
            </p>

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
              // src="/features/demo-preview.jpg"
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
      title: 'Text Forwarding',
      description: 'Route incoming texts to any number for fast replies.',
    },
    {
      title: 'Call Recording',
      description: 'Record calls for review or training, downloadable as MP3s.',
    },
    {
      title: 'Pre-Call Whispers',
      description: 'Get context before answering with a quick audio cue.',
    },
    {
      title: 'Spam Blocking',
      description: 'Filter out junk calls with a press-to-connect option.',
    },
    {
      title: 'Custom Schedules',
      description: 'Route calls based on time of day or week.',
    },
    {
      title: 'Multi-Number Support',
      description: 'Link unlimited numbers to a single flow.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Extra Tools
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          More Ways to Customize Your Flows
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
          <Subheading className="text-gray-500">
            Ready to Get Started?
          </Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Build Your Call Flow Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Sign up now and get $20 free credit to test out call flows and
            more—no commitment needed.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
              Start Now
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
            No credit card required • Instant access
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function CallFlows() {
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
