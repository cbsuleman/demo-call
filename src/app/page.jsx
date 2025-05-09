import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQSection } from '@/components/FAQSection' // Import the new component
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export const metadata = {
  description:
    'CallGauge helps you maximize ROI with affordable, scalable call tracking for businesses and agencies.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="#"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              White label CallGauge with your own URL ✨
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-8xl/[0.8]">
            The scalable call tracking platform built for growth.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Maximize ROI with CallGauge — just $0.50 per phone number compared
            to $3.00 at competitors.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          Your complete call tracking solution at industry-low pricing.
        </Heading>
        <Screenshot
          width={1216}
          height={786}
          // src="/screenshots/app.png" // Replace with actual CallGauge dashboard screenshot
          src="/screenshots/dummy2.png" // Replace with actual CallGauge dashboard screenshot
          className="mt-16 sm:max-w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Call Attribution</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Attribute inbound calls and optimize your marketing.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Source Tracking"
          title="See the source of inbound calls"
          description="Attribute inbound calls to specific campaigns with dynamic number insertion and easy call routing."
          graphic={
            <div className="relative h-80">
              <Image src="/screenshots/dummy2.png" fill alt="" />
            </div>
            // <div className="h-80 bg-[url(/screenshots/dummy2.png)] bg-[size:786px_486px] bg-[left_-80px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Lead Insights"
          title="Learn how you’re getting leads"
          description="Understand which marketing channels drive calls and double down on what works best."
          graphic={
            // <div className="absolute inset-0 bg-[url(/screenshots/dummy2.png)] bg-[size:786px_486px] bg-[left_-80px_top_-112px] bg-no-repeat" />
            <div className="relative h-80">
              <Image src="/screenshots/dummy2.png" fill alt="" />
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Setup"
          title="Easy call routing & recording"
          description="Set up hundreds of numbers in minutes with call recording and routing to streamline operations."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Scale"
          title="Track 6x more numbers"
          description="Grow faster with disruptive pricing—track more campaigns without increasing your budget."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Global Reach"
          title="Process over 1M calls yearly"
          description="CallGauge supports growing businesses and agencies worldwide with unmatched scalability."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Client Management & Phone Operations</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Manage clients and handle all things phone effortlessly.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Client Billing"
            title="Effortlessly bill clients per call"
            description="Automate client invoicing and charge on a pay-per-call basis with real-time access."
            graphic={
              // <div className="h-80 bg-[url(/screenshots/dummy2.png)] bg-[size:851px_344px] bg-no-repeat" />

              <div className="relative h-80">
                <Image src="/screenshots/dummy2.png" fill alt="" />
              </div>

              // <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="White Labeling"
            title="White label on your URL"
            description="Deliver a first-class experience with your branding and a custom domain."
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Phone Features"
            title="Call recording & whisper"
            description="Use call recording, whisper messages, and AI transcription to optimize performance."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="SMS & Voicemail"
            title="Streamline phone operations"
            description="Manage SMS, voicemail, and calls with automated missed call notifications."
            graphic={
              // <div className="h-80 bg-[url(/screenshots/dummy2.png)] bg-[size:851px_344px] bg-no-repeat" />
              <div className="relative h-80">
                <Image src="/screenshots/dummy2.png" fill alt="" />
              </div>
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-10 sm:py-20 md:py-24 lg:py-32">
          <FeatureSection />
          <BentoSection />
        </div>
        <DarkBentoSection />
        <FAQSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
