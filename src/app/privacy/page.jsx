import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Privacy Notice',
  description:
    'Learn how CallGauge collects, uses, and protects your personal information in our Privacy Notice.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Privacy Notice
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            At CallGauge, we value your privacy. This Privacy Notice explains
            how we collect, use, and safeguard your personal information when
            you use our call tracking services.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
              Get Started
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="inline-flex items-center gap-2 border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CoreTerms() {
  const privacyPoints = [
    {
      title: '1. Information We Collect',
      description:
        'We collect personal information you provide (e.g., name, email, billing details), call data (e.g., caller ID, call duration), and usage data (e.g., IP address, device info) to deliver and improve our services.',
    },
    {
      title: '2. How We Use Your Information',
      description:
        'Your data is used to provide call tracking features, process payments, send notifications, analyze usage trends, and comply with legal obligations.',
    },
    {
      title: '3. Data Sharing',
      description:
        'We may share your information with service providers (e.g., payment processors), legal authorities when required, or in the event of a business transfer (e.g., merger). We do not sell your personal data.',
    },
    {
      title: '4. Data Security',
      description:
        'We implement industry-standard measures (e.g., encryption, access controls) to protect your data, though no system is completely immune to breaches.',
    },
    {
      title: '5. Your Rights',
      description:
        'Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data. Contact us to exercise these rights.',
    },
    {
      title: '6. Cookies and Tracking',
      description:
        'We use cookies and similar technologies to enhance your experience, track usage, and deliver targeted features. You can manage cookie preferences via your browser.',
    },
    {
      title: '7. Data Retention',
      description:
        'We retain your data as long as necessary to provide services, meet legal requirements, or resolve disputes, after which it is securely deleted.',
    },
    {
      title: '8. Children’s Privacy',
      description:
        'CallGauge is not intended for users under 13. We do not knowingly collect data from children, and we’ll delete such data if discovered.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">
          Privacy Basics
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          How We Handle Your Data
        </Heading>
        <div className="mx-auto mt-12 max-w-3xl">
          {privacyPoints.map((point, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900">
                {point.title}
              </h3>
              <p className="mt-2 text-lg text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function DataPractices() {
  const practices = [
    'We encrypt sensitive data (e.g., call recordings) both in transit and at rest.',
    'Third-party vendors we work with are vetted for compliance with privacy standards.',
    'You can opt out of non-essential data collection (e.g., analytics) via your account settings.',
    'Call data is anonymized where possible to protect caller identities.',
    'We conduct regular security audits to identify and address vulnerabilities.',
    'International data transfers comply with applicable laws (e.g., GDPR, CCPA).',
    'You’ll be notified promptly in the event of a data breach affecting your information.',
    'Changes to this Privacy Notice will be communicated via email or in-app alerts.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          Our Data Practices
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          We’re committed to transparency and security. Here’s how we manage
          your data:
        </p>
        <ul className="mt-6 space-y-3 text-gray-200">
          {practices.map((practice, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="mt-1 size-5 flex-shrink-0 text-pink-600" />
              <span className="text-lg">{practice}</span>
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
      title: 'Legal Compliance',
      description:
        'We adhere to privacy laws like GDPR, CCPA, and HIPAA where applicable.',
    },
    {
      title: 'Third-Party Links',
      description:
        'Our site may link to external services; their privacy policies apply.',
    },
    {
      title: 'Updates to Notice',
      description:
        'We may revise this notice; check back for the latest version.',
    },
    {
      title: 'Contact Us',
      description: 'Reach us at privacy@callgauge.com with privacy questions.',
    },
    {
      title: 'Effective Date',
      description: 'This Privacy Notice is effective as of April 10, 2025.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-gray-500">Additional Details</Subheading>
        <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
          More Privacy Info
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
            Ready to Join CallGauge?
          </Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
            Start Using CallGauge Today
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Explore CallGauge with confidence—your privacy is our priority. Get
            $20 free credit, no credit card required.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="w-full sm:w-auto" href="/signup">
              Sign Up Now
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-gray-300 text-gray-700 transition-all duration-300 hover:bg-gray-100"
            >
              Contact Support
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

export default function Privacy() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <CoreTerms />
      <DataPractices />
      <AdditionalFeatures />
      <CTASection />
      <Footer />
    </main>
  )
}
