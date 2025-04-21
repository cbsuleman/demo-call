import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { ScrollHandler } from '@/components/ScrollHandler'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Pricing',
  description:
    'Traditional call tracking services like CallRail charge $3.00+ per number. With CallGauge, you only pay $0.50 per number, allowing you to track more without stretching your budget.',
}

const tiers = [
  {
    name: 'Business',
    slug: 'business',
    head: 'All core features, including:',
    description: 'Track calls & texts for one business.',
    priceMonthly: 49,
    href: '#',
    highlights: [
      { description: 'Inbound call & text tracking' },
      { description: 'Instant call tracking numbers' },
      { description: 'Call recording, routing, & call flows' },
      { description: 'AI transcription & call summaries' },
    ],
    features: [
      { section: 'Included for free', name: 'Usage credit', value: '$20 free' },
      {
        section: 'Included for free',
        name: 'Additional users',
        value: 'None included',
      },
      {
        section: 'Usage pricing',
        name: 'Local numbers',
        value: '$0.50 / month',
      },
      {
        section: 'Usage pricing',
        name: 'Toll-free numbers',
        value: '$3.00 / month',
      },
      {
        section: 'Usage pricing',
        name: 'Local minutes',
        value: '$0.045 / minute',
      },
      {
        section: 'Usage pricing',
        name: 'Toll-free minutes',
        value: '$0.055 / minute',
      },
      { section: 'Usage pricing', name: 'SMS messages', value: '$0.03 / sms' },
      { section: 'Call flow features', name: 'Call forwarding', value: true },
      { section: 'Call flow features', name: 'Call recording', value: true },
      { section: 'Call flow features', name: 'SMS forwarding', value: true },
      { section: 'Call flow features', name: 'Voicemails', value: true },
      { section: 'Call flow features', name: 'Round robin', value: false },
      { section: 'Call flow features', name: 'Multi-ringing', value: false },
      { section: 'Call flow features', name: 'Call tree menu', value: false },
      { section: 'Addons', name: 'Pay per call billing suite', value: false },
      { section: 'Addons', name: 'Spam blocker', value: '$0.015 / call' },
      { section: 'Addons', name: 'Outbound calling', value: '$0.0125 / call' },
      {
        section: 'Addons',
        name: 'AI transcriptions',
        value: '$0.008 / 15 sec',
      },
      { section: 'Addons', name: 'White labeling', value: '$49 / month' },
      { section: 'Addons', name: 'Additional users', value: '$6 / user' },
      { section: 'Addons', name: 'Port numbers in', value: 'FREE' },
    ],
  },
  {
    name: 'Client Pro',
    slug: 'client-pro',
    head: 'All Business features, plus:',
    description: 'Track calls for clients & provide a client portal.',
    priceMonthly: 79,
    href: '#',
    highlights: [
      { description: 'Client login portal' },
      { description: '10 clients included for free' },
      { description: 'Pay per call billing suite' },
      { description: 'Charge clients through CallGauge' },
    ],
    features: [
      { section: 'Included for free', name: 'Usage credit', value: '$50 free' },
      {
        section: 'Included for free',
        name: 'Additional users',
        value: '10 users',
      },
      {
        section: 'Usage pricing',
        name: 'Local numbers',
        value: '$0.50 / month',
      },
      {
        section: 'Usage pricing',
        name: 'Toll-free numbers',
        value: '$1.50 / month',
      },
      {
        section: 'Usage pricing',
        name: 'Local minutes',
        value: '$0.035 / minute',
      },
      {
        section: 'Usage pricing',
        name: 'Toll-free minutes',
        value: '$0.045 / minute',
      },
      { section: 'Usage pricing', name: 'SMS messages', value: '$0.02 / sms' },
      { section: 'Call flow features', name: 'Call forwarding', value: true },
      { section: 'Call flow features', name: 'Call recording', value: true },
      { section: 'Call flow features', name: 'SMS forwarding', value: true },
      { section: 'Call flow features', name: 'Voicemails', value: true },
      { section: 'Call flow features', name: 'Round robin', value: false },
      { section: 'Call flow features', name: 'Multi-ringing', value: false },
      { section: 'Call flow features', name: 'Call tree menu', value: false },
      { section: 'Addons', name: 'Pay per call billing suite', value: true },
      { section: 'Addons', name: 'Spam blocker', value: '$0.015 / call' },
      { section: 'Addons', name: 'Outbound calling', value: '$0.0125 / call' },
      {
        section: 'Addons',
        name: 'AI transcriptions',
        value: '$0.008 / 15 sec',
      },
      { section: 'Addons', name: 'White labeling', value: '$49 / month' },
      { section: 'Addons', name: 'Additional users', value: '$6 / user' },
      { section: 'Addons', name: 'Port numbers in', value: 'FREE' },
    ],
  },
  {
    name: 'Unlimited',
    slug: 'unlimited',
    head: 'All Client Pro features, plus:',
    description: 'Unlimited clients & best usage pricing',
    priceMonthly: 399,
    href: '#',
    highlights: [
      { description: 'Unlimited clients & users' },
      { description: 'Customizable contracts & SLA' },
      { description: 'Usage discounts for committed use' },
      { description: 'Highest priority support' },
    ],
    features: [
      {
        section: 'Included for free',
        name: 'Usage credit',
        value: '$250 free',
      },
      {
        section: 'Included for free',
        name: 'Additional users',
        value: 'Unlimited',
      },
      {
        section: 'Usage pricing',
        name: 'Local numbers',
        value: '$0.50 / month',
      },
      {
        section: 'Usage pricing',
        name: 'Toll-free numbers',
        value: '$0.95 / month',
      },
      {
        section: 'Usage pricing',
        name: 'Local minutes',
        value: '$0.025 / minute',
      },
      {
        section: 'Usage pricing',
        name: 'Toll-free minutes',
        value: '$0.035 / minute',
      },
      { section: 'Usage pricing', name: 'SMS messages', value: '$0.01 / sms' },
      { section: 'Call flow features', name: 'Call forwarding', value: true },
      { section: 'Call flow features', name: 'Call recording', value: true },
      { section: 'Call flow features', name: 'SMS forwarding', value: true },
      { section: 'Call flow features', name: 'Voicemails', value: true },
      { section: 'Call flow features', name: 'Round robin', value: true },
      { section: 'Call flow features', name: 'Multi-ringing', value: true },
      { section: 'Call flow features', name: 'Call tree menu', value: true },
      { section: 'Addons', name: 'Pay per call billing suite', value: true },
      { section: 'Addons', name: 'Spam blocker', value: '$0.015 / call' },
      { section: 'Addons', name: 'Outbound calling', value: '$0.0125 / call' },
      {
        section: 'Addons',
        name: 'AI transcriptions',
        value: '$0.008 / 15 sec',
      },
      { section: 'Addons', name: 'White labeling', value: '$49 / month' },
      { section: 'Addons', name: 'Additional users', value: '$0 / user' },
      { section: 'Addons', name: 'Port numbers in', value: 'FREE' },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Affordable Call Tracking with CallGauge</Heading>
      <Lead className="mt-6 max-w-3xl">
        Unlike CallRail, which charges $3.00+ per number, CallGauge offers
        numbers at just $0.50 each, empowering you to scale your tracking
        efforts without breaking the bank.
      </Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    // Add an ID here for the scroll target
    <div id="pricing-cards" className="relative scroll-mt-24 py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingCard({ tier }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>USD</p>
              <p>per month</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Start a free trial</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">{tier.head}</h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingTable({ selectedTier }) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

function FeatureItem({ description, disabled = false }) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/testimonials/tina-yards.jpg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                  CallGauge gives us affordable call tracking that scales with
                  our needs—something CallRail couldn’t match without a hefty
                  price tag.
                </p>
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm/6 font-medium text-white">Tina Yards</p>
                <p className="text-sm/6 font-medium">
                  <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                    VP of Sales, Protocol
                  </span>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faqs" className="scroll-mt-8">
        <Subheading className="text-center">
          Frequently Asked Questions
        </Subheading>
        <Heading as="div" className="mt-2 text-center">
          Your CallGauge Questions Answered
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
          <dl>
            <dt className="text-sm font-semibold">How does billing work?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              You pay a recurring fee (monthly, quarterly, or yearly depending
              on your choice) to use CallGauge. Alongside that, you maintain an
              account balance for usage billing (phone numbers, minutes, texts,
              etc.). We start you with a free usage credit—$20 for Business, $50
              for Client Pro, and $250 for Unlimited—applied to your balance to
              cover usage fees. When your balance drops below $5, we
              automatically charge your card on file with a $20 deposit to keep
              it positive (adjustable in the platform). For full details, check
              our payment terms.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What is the free usage credit?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              CallGauge starts you with a free usage credit applied to your
              account balance—$20 for Business, $50 for Client Pro, and $250 for
              Unlimited. This credit covers usage fees like calls, phone
              numbers, texts, and optional addons such as AI transcription
              summaries and call recording, unlike CallRail where credits are
              less common and usage costs are higher.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Can I bring my phone numbers in from another platform? How does
              porting work?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              You can port your numbers into CallGauge from platforms like
              CallRail for free at no cost. Once ported, you’ll pay CallGauge’s
              usage pricing (e.g., $0.50/month for local numbers). Porting out
              of CallGauge is $10/number, though we may offer discounts for
              large quantities on a case-by-case basis—more flexible than
              CallRail’s porting fees.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              What countries do you support?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              CallGauge currently offers numbers only in the US and Canada,
              similar to CallRail’s primary focus. We plan to expand to more
              countries but don’t have a timeline yet. Our numbers can still
              connect with international callers, and you don’t need to be a US
              or Canadian resident to use our services.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">How do I upgrade my plan?</dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              You can upgrade your CallGauge plan anytime on the billing page in
              the app—simple and seamless. Compared to CallRail, our plans
              (Business at $49, Client Pro at $79, Unlimited at $399) offer more
              value with lower usage costs and included credits.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-semibold">
              Does CallGauge have spam blocking features?
            </dt>
            <dd className="mt-4 text-sm/6 text-gray-600">
              Yes, CallGauge makes spam blocking easy. You can manually block
              numbers for free, and we offer an automated spam blocker (an addon
              at $0.015/call) that checks against a database of over 1 million
              reported spam numbers before connecting—more affordable and
              proactive than CallRail’s spam filtering options.
            </dd>
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Pricing({ searchParams }) {
  let tier =
    typeof searchParams.tier === 'string'
      ? tiers.find(({ slug }) => slug === searchParams.tier)
      : tiers[0]

  return (
    <main className="overflow-hidden">
      {/* Add the ScrollHandler at the top of your page */}
      <ScrollHandler />

      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  )
}
