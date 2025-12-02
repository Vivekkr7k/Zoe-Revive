import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What types of addictions do you treat?',
      answer: 'At Zoe Revive Trust, we specialize in treating alcohol and drug addiction. We provide comprehensive treatment programs for individuals struggling with alcohol use disorder and various substance use disorders. Our holistic approach addresses the physical, mental, and spiritual aspects of addiction to support complete recovery.',
    },
    {
      question: 'What treatment programs are available?',
      answer: 'We offer a comprehensive range of treatment programs including inpatient rehabilitation, outpatient services, intensive outpatient programs (IOP), partial hospitalization programs (PHP), and specialized programs for various substance use disorders. Each program is tailored to meet individual needs and recovery goals.',
    },
    {
      question: 'How long does a typical program last?',
      answer: 'Program duration varies based on individual needs and the type of program selected. Inpatient programs typically range from 30 to 90 days, while outpatient programs can last from several weeks to several months. Our team will work with you to determine the most appropriate timeline for your recovery journey.',
    },
    {
      question: 'Will my information be kept confidential?',
      answer: 'Absolutely. We strictly adhere to HIPAA regulations and maintain the highest standards of confidentiality. All patient information is protected and shared only with authorized personnel directly involved in your care. Your privacy and dignity are our top priorities.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative min-h-[80vh] flex items-center bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="mb-8 lg:mb-10">
              <p className="text-sage-600 text-sm font-semibold mb-3 flex items-center">
                <span className="w-2 h-2 rounded-full bg-sage-600 mr-2"></span>
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-800 leading-tight">
                What you should know about our treatment
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-neutral-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <span className="text-sage-600 font-bold text-lg flex-shrink-0">
                        {index + 1}.
                      </span>
                      <span className="text-lg font-semibold text-sage-800">
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <svg
                        className="w-6 h-6 text-sage-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pl-14">
                          <p className="text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&h=1000&fit=crop"
                alt="Therapist assisting patient with exercise"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              
              {/* Overlay Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Question Mark Icon */}
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-sage-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sage-800 font-bold text-lg">
                    Relax, We've Got the Answers
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection

