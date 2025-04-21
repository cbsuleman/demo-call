'use client'

import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How do I track missed calls?',
      answer:
        'CallGauge can send an automatic SMS when you miss a call, alerting you or your client right away. You can also reply with a custom message, like offering a callback. This keeps you connected and responsive.',
    },
    {
      question: 'How can I track phone calls online?',
      answer:
        'Sign up for CallGauge in 30 seconds—no credit card needed. Get a local or toll-free number, forward calls to your phone, and use the online dashboard to record calls and see which campaigns are working.',
    },
    {
      question: 'How does call tracking help with marketing?',
      answer:
        'CallGauge shows you which ads or channels bring in calls by using unique numbers for each campaign. This helps you focus your budget on what works and ditch what doesn’t, saving time and money.',
    },
    {
      question: 'How does call tracking work?',
      answer:
        'CallGauge gives you a unique number that forwards calls to your line. It captures details like the caller’s number, call time, and source. Features like recording and AI transcription help you analyze and improve your campaigns.',
    },
    {
      question: 'Why should I track incoming calls?',
      answer:
        'Tracking calls with CallGauge tells you exactly which ads or sites drive leads. This lets you make smart choices about your marketing budget and focus on what brings in customers.',
    },
    {
      question: 'How do I track calls on Google Ads?',
      answer:
        'Use CallGauge to create landing pages with unique numbers for each Google Ad. Forward calls to your team and check the analytics to see which ads get the most calls, then tweak your strategy for better results.',
    },
  ]

  const leftColumnFaqs = faqs.slice(0, Math.ceil(faqs.length / 2))
  const rightColumnFaqs = faqs.slice(Math.ceil(faqs.length / 2))

  const toggleFAQ = (index, column) => {
    const globalIndex =
      column === 'left' ? index : index + leftColumnFaqs.length
    setOpenIndex(openIndex === globalIndex ? null : globalIndex)
  }

  return (
    <Container className="py-24">
      <Subheading>Frequently Asked Questions</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Everything you need to know about CallGauge.
      </Heading>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-4">
          {leftColumnFaqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index, 'left')}
                className="flex w-full items-center justify-between rounded-xl p-5 text-left focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}-left`}
              >
                <h4 className="pr-6 text-base font-semibold text-gray-900 sm:text-lg">
                  {faq.question}
                </h4>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}-left`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 p-5 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="border-l-4 border-pink-600 pl-4 text-base leading-7 text-gray-800 sm:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {rightColumnFaqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index, 'right')}
                className="flex w-full items-center justify-between rounded-xl p-5 text-left focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
                aria-expanded={openIndex === index + leftColumnFaqs.length}
                aria-controls={`faq-answer-${index}-right`}
              >
                <h4 className="pr-6 text-base font-semibold text-gray-900 sm:text-lg">
                  {faq.question}
                </h4>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                    openIndex === index + leftColumnFaqs.length
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </button>
              <div
                id={`faq-answer-${index}-right`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index + leftColumnFaqs.length
                    ? 'max-h-96 p-5 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="border-l-4 border-pink-600 pl-4 text-base leading-7 text-gray-800 sm:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
