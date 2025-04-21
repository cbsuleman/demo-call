import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  title: 'CallGauge Support',
  description:
    'Unlock exceptional support for CallGauge. Dive into our FAQs or connect with our expert team—your success is our priority.',
}

function HeroSection() {
  return (
    <div className="relative py-24">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-500">
            World-Class Assistance
          </Subheading>
          <Heading as="h1" className="mt-2 text-4xl text-gray-900 md:text-5xl">
            CallGauge Support Hub
          </Heading>
          <Lead className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Whether you’re troubleshooting or exploring features, our team is
            here to empower your CallGauge experience with fast, expert support.
            Let’s get you back to scaling effortlessly.
          </Lead>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              className="w-full text-white shadow-md sm:w-auto"
              href="/signup"
            >
              Start Now for Free
            </Button>
            <Button
              href="/demo"
              variant="outline"
              className="hover:text-gray7 w-full border-gray-300 text-gray-700 shadow-md hover:bg-gray-100 sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Heading as="h2" className="text-3xl text-gray-900 md:text-4xl">
              We’re Here to Help
            </Heading>
            <p className="text-lg leading-relaxed text-gray-600">
              Our support team is dedicated to your success. Expect a response
              within 1 business day—or faster if you catch us online.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 shadow-sm">
                <EnvelopeIcon className="size-8 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <a
                    href="mailto:support@callgauge.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    support@callgauge.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 shadow-sm">
                <PhoneIcon className="size-8 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <span className="text-gray-600">+1 (800) 555-GAUGE</span>
                  <p className="text-sm text-gray-500">M-F, 9 AM - 5 PM EST</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4 shadow-sm">
                <ChatBubbleLeftRightIcon className="size-8 text-pink-600" />
                <div>
                  <p className="font-semibold text-gray-900">Live Chat</p>
                  <p className="text-gray-600">Coming soon—stay tuned!</p>
                </div>
              </div>
            </div>
          </div>
          <div id="contact-form" className="relative">
            <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-blue-600 opacity-20 blur-xl" />
            <form className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-xl">
              <Heading as="h3" className="mb-6 text-xl text-gray-900">
                Send Us a Message
              </Heading>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your CallGauge email"
                    className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What’s on your mind?"
                    className="mt-1 block h-12 w-full rounded-md border-gray-300 px-3 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us how we can assist"
                    rows={5}
                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm transition-all focus:border-blue-600 focus:ring-blue-600"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full cursor-pointer text-white shadow-md transition-all duration-300"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: 'What if my area code isn’t available?',
      answer:
        'No worries—grab numbers from another provider and port them into CallGauge. Our porting guide makes it a breeze.',
    },
    {
      question: 'How do I stop spam and robo-calls?',
      answer:
        'Turn on Spam Shield for just $0.01 per call. It’s smart enough to block junk calls automatically—find it in your dashboard.',
    },
    {
      question: 'Do you offer numbers outside the US and Canada?',
      answer:
        'Yes, we now include the UK, with more regions on the way. Keep an eye out for updates!',
    },
    {
      question: 'How do I cancel my plan?',
      answer:
        'In “Billing,” scroll to the bottom and hit “Cancel Subscription.” Heads up: your numbers will be released when you do.',
    },
    {
      question: 'Why aren’t my calls recording?',
      answer:
        'Recordings kick in only when both sides connect. Double-check “Record Calls” in your call flow settings—or let us troubleshoot it for you.',
    },
    {
      question: 'How do I port numbers in or out?',
      answer:
        'Head to our Porting Hub for a step-by-step guide. It’s fast, simple, and hassle-free.',
    },
    {
      question: 'Is CallGauge down right now?',
      answer:
        'Visit our Status Page for live updates. If everything’s green and you’re still stuck, we’re here to help.',
    },
    {
      question: 'How does billing work with CallGauge?',
      answer:
        'You get $20 free to start, then pick a plan and pay for usage. Top up your balance anytime in “Billing”—details in our Pricing Terms.',
    },
  ]

  return (
    <div className="bg-gray-50 py-24" id="faqs">
      <Container>
        <Subheading className="text-center text-gray-500">
          Your Questions, Answered
        </Subheading>
        <Heading
          as="h2"
          className="mt-2 text-center text-3xl text-gray-900 md:text-4xl"
        >
          Frequently Asked Questions
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  const benefits = [
    'Unlimited scalability with plans starting at $0.50/month per number',
    'Real-time analytics to optimize your campaigns instantly',
    'Seamless integrations with your favorite tools',
    '24/7 access to our knowledge base and community forums',
    'Priority support for enterprise users',
  ]

  return (
    <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] py-24 text-white">
      <Container>
        <div className="text-center">
          <Subheading className="text-gray-300">
            Maximize Your Potential
          </Subheading>
          <Heading as="h2" className="mt-2 text-3xl text-white md:text-4xl">
            Supercharge Your Business with CallGauge
          </Heading>
          <Lead className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            From startups to global enterprises, CallGauge empowers thousands of
            users with cutting-edge call tracking. Start with $20 free credit
            and see why we’re the choice for growth-driven teams.
          </Lead>
          <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-gray-300">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-pink-600">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center gap-4">
            <Button
              className="w-full text-white shadow-md sm:w-auto"
              href="/signup"
            >
              Start Now for Free
            </Button>
            <Button
              href="/demo"
              variant="outline"
              className="w-full border-gray-300 text-white shadow-md transition-all duration-300 hover:bg-gray-800 hover:text-gray-700 sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            No credit card needed • Instant setup • Cancel anytime
          </p>
        </div>
      </Container>
    </div>
  )
}

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <HeroSection />
      <ContactSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
