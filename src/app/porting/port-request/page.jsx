import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Submit Port Request',
  description:
    'Start porting your phone numbers to CallGauge. Fill out our form to transfer your numbers seamlessly and for free.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Submit Your Port Request
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Port your numbers to CallGauge easily and at no cost. Complete the
            form below to begin the process, which typically takes 3-7 business
            days.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              className="w-full text-white shadow-md sm:w-auto"
              href="#port-form"
            >
              Start Porting
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="w-full border-gray-300 text-gray-700 shadow-md hover:bg-gray-100 sm:w-auto"
            >
              Contact Support
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Free to Port • Takes 3-7 Days • $1 per Number
          </p>
        </div>
      </Container>
    </div>
  )
}

function FormSection() {
  return (
    <div className="bg-white py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Porting Instructions
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Start Porting Your Numbers
        </Heading>
        <p className="mt-6 text-center text-lg text-gray-600">
          Porting can take 3-7 business days. Contact your current provider for
          your port-out details (including PIN) before filling out this form.{' '}
          <Link
            href="/bulk-port-request"
            className="text-pink-600 hover:underline"
          >
            Porting in bulk? Download our bulk port request form.
          </Link>
        </p>
        <div id="port-form" className="relative mx-auto mt-12 max-w-2xl">
          <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-blue-600 opacity-20 blur-xl" />
          <form
            className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
            action="/api/port-request"
            method="POST"
            encType="multipart/form-data"
          >
            <Heading as="h3" className="mb-6 text-xl text-gray-900">
              Port Request Form
            </Heading>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Your name"
                    required
                    className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CallGauge Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your CallGauge email"
                    required
                    className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="numbers"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number(s) to Port
                </label>
                <input
                  type="text"
                  id="numbers"
                  name="numbers"
                  placeholder="Separate by commas (e.g., +1234567890, +0987654321)"
                  required
                  className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Ensure numbers are available to port.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Current Service Provider Details
                </h4>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="provider-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Provider Name
                    </label>
                    <input
                      type="text"
                      id="provider-name"
                      name="provider-name"
                      placeholder="Your provider"
                      required
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="account-type"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Account Type
                    </label>
                    <select
                      id="account-type"
                      name="account-type"
                      required
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                    >
                      <option value="">Select type</option>
                      <option value="business">Business</option>
                      <option value="personal">Personal</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="authorized-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Authorized Name on Account
                    </label>
                    <input
                      type="text"
                      id="authorized-name"
                      name="authorized-name"
                      placeholder="Legal first & last name"
                      required
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="billing-phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Billing Phone Number
                    </label>
                    <input
                      type="tel"
                      id="billing-phone"
                      name="billing-phone"
                      placeholder="Primary contact number"
                      required
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="end-user-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      End User Name
                    </label>
                    <input
                      type="text"
                      id="end-user-name"
                      name="end-user-name"
                      placeholder="Business name, if applicable"
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pin-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      id="pin-code"
                      name="pin-code"
                      placeholder="Your PIN"
                      required
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Request your PIN from your provider’s support team.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Phone Service Address
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Provide the address where phone calls take place, as
                  registered with your provider. This may differ from your
                  billing address. For multiple locations, submit separate
                  requests. Need help? Request a Customer Service Record (CSR)
                  from your provider.
                </p>
                <div className="mt-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    placeholder="Enter service address"
                    required
                    rows="5"
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                  ></textarea>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  Letter of Authorization
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  A signed Letter of Authorization (LOA) dated within the last
                  30 days is required, along with a recent bill copy. Download,
                  complete, and upload the appropriate LOA below.
                </p>
                <div className="mt-4 space-y-4">
                  <p>
                    <Link
                      href="/loa-local"
                      className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:underline"
                    >
                      Download Local Number LOA
                    </Link>
                    {' • '}
                    <Link
                      href="/loa-toll-free"
                      className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:underline"
                    >
                      Download Toll-Free Number LOA
                    </Link>
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="loa-attached"
                        required
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      />
                      I’ve attached a Letter of Authorization for this port
                      request.
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        name="bill-attached"
                        required
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      />
                      I’ve attached a recent bill copy from my current provider.
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="loa-local-upload"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Local Number Letter of Authorization
                    </label>
                    <input
                      type="file"
                      id="loa-local-upload"
                      name="loa-local-upload"
                      accept=".pdf,.doc,.docx"
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 text-gray-700 shadow-sm transition-all file:mr-4 file:h-12 file:rounded-md file:border-0 file:bg-gray-100 file:px-4 file:text-gray-700 hover:file:bg-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="loa-toll-free-upload"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Toll-Free Number Letter of Authorization
                    </label>
                    <input
                      type="file"
                      id="loa-toll-free-upload"
                      name="loa-toll-free-upload"
                      accept=".pdf,.doc,.docx"
                      className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 text-gray-700 shadow-sm transition-all file:mr-4 file:h-12 file:rounded-md file:border-0 file:bg-gray-100 file:px-4 file:text-gray-700 hover:file:bg-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bill-upload"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recent Bill Copy
                    </label>
                    <input
                      type="file"
                      id="bill-upload"
                      name="bill-upload"
                      accept=".pdf,.jpg,.png"
                      required
                      className="file:mr- Tijdens mt-1 block h-12 w-full rounded-md border-gray-300 px-3 text-gray-700 shadow-sm transition-all file:h-12 file:rounded-md file:border-0 file:bg-gray-100 file:px-4 file:text-gray-700 hover:file:bg-gray-200 focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full text-white shadow-md transition-all duration-300"
              >
                Submit Port Request
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  const portingBenefits = [
    'Port numbers into CallGauge for free—no upfront costs.',
    'Keep your existing numbers for uninterrupted service.',
    'Configure call flows before numbers go live.',
    'Pay only $1 per number after porting.',
    'Reach support for help obtaining your porting PIN.',
    'Submit bulk requests for multiple numbers easily.',
    'Port out for a $10 fee if needed.',
    'Use ported numbers with all CallGauge features.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          Benefits of Porting with CallGauge
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Why porting your numbers to CallGauge is the smart choice:
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

function CTASection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">Need Help Porting?</Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            We’re Here to Assist
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Have questions about porting or need help with your PIN? Contact our
            support team or start your free trial to explore CallGauge’s
            features.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              className="w-full text-white shadow-md sm:w-auto"
              href="/contact"
            >
              Contact Support
            </Button>
            <Button
              href="#"
              variant="outline"
              className="w-full border-gray-300 text-gray-700 shadow-md hover:bg-gray-100 sm:w-auto"
            >
              Start Free Trial
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            $20 Free Credit • Risk-Free for 14 Days
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function PortRequest() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <FormSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
