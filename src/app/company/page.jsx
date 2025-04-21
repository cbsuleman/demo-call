import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'

export const metadata = {
  title: 'Company',
  description:
    'We’re on a mission to empower businesses with affordable, scalable call tracking solutions that maximize ROI.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">
        Empowering businesses with smarter call tracking.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We’re on a mission to empower businesses with affordable, scalable call
        tracking solutions that maximize ROI.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            At CallGauge, we’re dedicated to revolutionizing how businesses
            track and optimize their inbound calls. Our mission is to provide
            cost-effective tools that deliver actionable insights, helping
            companies of all sizes grow without the burden of high costs or
            complex systems.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            We’re obsessed with simplicity and value—offering local numbers at
            just $0.50 each and plans that scale with our customers’ needs. From
            solo entrepreneurs to agencies managing multiple clients, we’re here
            to make call tracking accessible, affordable, and powerful.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>The Numbers</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Raised</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={5} end={10} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Businesses Served</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={8} end={15} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Calls Tracked</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={50} end={75} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Clients Managed</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={20} end={40} />K
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Built by call tracking innovators.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        CallGauge was founded by a team passionate about making call tracking
        accessible, with backing from investors who believe in affordable
        innovation.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            CallGauge began when founders Alex, Sarah, and Jordan, former
            marketing and tech specialists, saw businesses struggling with
            overpriced call tracking tools like CallRail. They wondered: why not
            build a solution that’s powerful yet affordable? Starting with a
            simple idea—local numbers at $0.50 each—they created CallGauge to
            disrupt the industry.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Today, CallGauge empowers over 15,000 businesses and agencies with
            intuitive call tracking, from solo marketers to large teams managing
            thousands of clients. Our platform delivers insights at a fraction
            of the cost, helping customers track more and spend less.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="/contact">
              Get in touch
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Head of Sales"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Lead Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Product Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Product Manager"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Marketing Lead"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Engineer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="UX Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="Customer Success Lead"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Backed by visionaries in tech.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We’re proud to be supported by leading investors who share our vision
        for affordable, impactful call tracking solutions.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Remington Schwartz is a tech investment powerhouse, supporting
            innovative startups that challenge industry norms. Their expertise
            in scaling SaaS solutions has been instrumental in CallGauge’s
            growth.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel invests in forward-thinking companies that redefine markets.
            Their belief in CallGauge’s mission to make call tracking affordable
            and scalable has fueled our rapid expansion.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Values() {
  return (
    <Container className="my-32">
      <Subheading>Our Values</Subheading>
      <Heading as="h3" className="mt-2">
        What drives us every day.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        At CallGauge, our core principles guide everything we do, from building
        intuitive tools to supporting our customers’ growth.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Core Principles</Subheading>
          <ul className="mt-6 space-y-6 text-sm/6 text-gray-600">
            <li>
              <strong>Affordability:</strong> We believe powerful call tracking
              shouldn’t break the bank. That’s why we offer numbers at just
              $0.50 and transparent pricing to help businesses of all sizes
              thrive.
            </li>
            <li>
              <strong>Simplicity:</strong> Our platform is designed to be
              intuitive, so you can set up call flows and gain insights without
              wading through complexity.
            </li>
            <li>
              <strong>Innovation:</strong> We’re always pushing to deliver
              cutting-edge features—like AI transcription included in every
              plan—to keep you ahead of the curve.
            </li>
            <li>
              <strong>Customer Success:</strong> Your growth is our priority. We
              provide fast, expert support to ensure you get the most out of
              CallGauge.
            </li>
          </ul>
          <div className="mt-10">
            <Button href="/signup" className="w-full sm:w-auto">
              Start with CallGauge
            </Button>
          </div>
        </div>
        <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
          <img
            alt=""
            src="/testimonials/veronica-winton.jpg"
            className="absolute inset-0 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
          />
          <div className="relative p-10">
            <p className="text-xl/7 text-white">
              “Our values shape every decision, ensuring we deliver tools that
              are affordable, simple, and innovative.”
            </p>
            <p className="mt-6 border-t border-white/20 pt-6 text-sm/6 font-medium text-white">
              CallGauge Team
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      <Investors />
      <Values />
      <Footer />
    </main>
  )
}
