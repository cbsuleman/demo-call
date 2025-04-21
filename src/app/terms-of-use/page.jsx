import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'

export const metadata = {
  title: 'Terms of Use',
  description:
    'Review the Terms of Use for CallGauge, outlining the rules and conditions for using our call tracking services.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Heading as="h1" className="text-4xl text-gray-900 md:text-5xl">
            Terms of Use
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Welcome to CallGauge. These Terms of Use govern your access to and
            use of our call tracking platform and services. By using CallGauge,
            you agree to these terms.
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
  const terms = [
    {
      title: '1. Acceptance of Terms',
      description:
        'By accessing or using CallGauge’s services, you agree to be bound by these Terms of Use, our Privacy Policy, and any additional terms referenced herein. If you do not agree, please do not use our services.',
    },
    {
      title: '2. Use of Services',
      description:
        'CallGauge provides call tracking, routing, and analytics tools. You may use these services for lawful purposes only. You are responsible for maintaining the confidentiality of your account and for all activities under your account.',
    },
    {
      title: '3. Subscription and Payment',
      description:
        'Some features require a paid subscription. You agree to provide accurate billing information and authorize us to charge your payment method for the fees outlined in your plan. All fees are non-refundable unless stated otherwise.',
    },
    {
      title: '4. Intellectual Property',
      description:
        'All content, software, and technology provided by CallGauge are our property or licensed to us. You may not copy, modify, distribute, or reverse-engineer any part of our services without prior written consent.',
    },
    {
      title: '5. User Conduct',
      description:
        'You agree not to use CallGauge to send spam, engage in illegal activities, or violate the rights of others. We reserve the right to suspend or terminate your account for violations of these terms.',
    },
    {
      title: '6. Limitation of Liability',
      description:
        'CallGauge is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.',
    },
    {
      title: '7. Termination',
      description:
        'We may terminate or suspend your access to CallGauge at our discretion, with or without notice, for any reason, including breach of these terms. You may cancel your account at any time via your account settings.',
    },
    {
      title: '8. Changes to Terms',
      description:
        'We may update these Terms of Use from time to time. We’ll notify you of significant changes via email or within the platform. Continued use after changes constitutes acceptance.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-center text-gray-500">Key Terms</Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Your Agreement with CallGauge
        </Heading>
        <div className="mx-auto mt-12 max-w-3xl">
          {terms.map((term, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900">
                {term.title}
              </h3>
              <p className="mt-2 text-lg text-gray-600">{term.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function UpdatesSection() {
  const updates = [
    'We regularly enhance CallGauge with new features to improve your call tracking experience.',
    'Planned maintenance may cause brief service interruptions; we’ll schedule these during low-traffic periods whenever possible.',
    'Significant updates or changes to service availability will be communicated via email or in-app notifications.',
    'We may introduce new pricing tiers or adjust existing ones, with advance notice to existing users.',
    'Feature rollouts may be phased, starting with select users before full deployment.',
    'Temporary outages due to unforeseen technical issues will be resolved as quickly as possible.',
    'You can provide feedback on updates directly through your account dashboard.',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pt-72 pb-24 text-white lg:pt-36">
      <Container>
        <Heading as="h2" className="text-3xl text-white md:text-4xl">
          Service Updates and Notices
        </Heading>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          We’re dedicated to keeping CallGauge cutting-edge and reliable. Here’s
          how we handle updates and service changes:
        </p>
        <ul className="mt-6 space-y-3 text-gray-200">
          {updates.map((update, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="mt-1 size-5 flex-shrink-0 text-pink-600" />
              <span className="text-lg">{update}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

function AdditionalFeatures() {
  const additionalTerms = [
    {
      title: 'Governing Law',
      description:
        'These terms are governed by the laws of the State of Delaware, USA.',
    },
    {
      title: 'Dispute Resolution',
      description:
        'Any disputes will be resolved through binding arbitration in Delaware.',
    },
    {
      title: 'Third-Party Services',
      description:
        'CallGauge may integrate with third-party tools; their terms apply separately.',
    },
    {
      title: 'Data Usage',
      description: 'We collect and use data as outlined in our Privacy Policy.',
    },
    {
      title: 'Contact Us',
      description: 'Questions? Reach us at support@callgauge.com.',
    },
  ]

  return (
    <div className="py-24">
      <Container>
        <Subheading className="text-gray-500">Additional Details</Subheading>
        <Heading as="h2" className="mt-2 text-3xl text-gray-900 md:text-4xl">
          More Terms to Know
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {additionalTerms.map((term, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-pink-600">
                {term.title}
              </h3>
              <p className="mt-2 text-gray-600">{term.description}</p>
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
            Agree to our terms and get $20 free credit to explore CallGauge—no
            credit card required.
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

export default function TermsOfUse() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <CoreTerms />
      <UpdatesSection />
      <AdditionalFeatures />
      <CTASection />
      <Footer />
    </main>
  )
}
