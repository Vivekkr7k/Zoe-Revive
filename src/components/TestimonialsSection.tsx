import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Testimonial {
  name: string
  role: string
  text: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'RAJU',
    role: 'recovered Alcoholic',
    text: 'I found hope and strength at Zoe Revive. The staff guided me every step of the way with love and compassion.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RAJU&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    name: 'RAMKUMAR',
    role: 'recovering Alcoholic',
    text: 'The care I received in Zoe Revive helped me believe in myself again. Grateful for this place and its team!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RAMKUMAR&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    name: 'PAPPU',
    role: 'recovered Addict',
    text: 'I am healthy and hopeful today because of the treatment and support at Zoe Revive. They made the, seemingly, impossible task of bringing ME to recovery path and love the world as it is - POSSIBLE. Thanks to the wonderful people there.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PAPPU&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    name: 'NAVEEN',
    role: 'Elder Brother of a Recovering Addict (Multiple)',
    text: 'The team at Zoe Revive, definitely know what they are doing, for they changed my brother - who was in a vegetative state due to prolonged use of Alcohol and Drugs - to someone who is energetic, compassionate, loving and lovable now. A BIG THANKS to their staff and counsellors.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NAVEEN&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    name: 'Anonymous',
    role: 'recovered addict',
    text: 'I was stuck in a cycle of addiction for years, but the team at Zoe helped me break free. Their support and guidance gave me the tools I needed to stay sober.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous1&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    name: 'Anonymous',
    role: 'recovered addict',
    text: 'I thought I had hit rock bottom, but Zoe showed me there was hope. Their program helped me address my addiction and find a new purpose in life.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous2&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    name: 'Anonymous',
    role: 'recovered addict',
    text: 'We were at our wit\'s end, but Zoe Revive Trust gave us hope. Their compassionate and professional staff helped our loved one overcome addiction and rebuild their life.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous3&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
  {
    name: 'Anonymous',
    role: 'recovered addict',
    text: 'I was skeptical at first, but the team at Zoe Revive really care about their patients. They went above and beyond to support our family.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anonymous4&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf',
  },
]

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const cardsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / cardsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const getCurrentTestimonials = () => {
    const startIndex = currentPage * cardsPerPage
    return testimonials.slice(startIndex, startIndex + cardsPerPage)
  }

  return (
    <section className="relative min-h-[80vh] flex items-center bg-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Patients Say
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous page"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next page"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Grid Carousel Content */}
          <div className="px-8 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-3 gap-6 lg:gap-8"
              >
                {getCurrentTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={currentPage * cardsPerPage + index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 flex flex-col h-full min-h-[350px]"
                  >
                    {/* Stars */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-sage-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text - Flex grow to push author to bottom */}
                    <p className="text-white/90 text-lg leading-relaxed mb-6 flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Author - Fixed at bottom */}
                    <div className="flex items-center space-x-4 mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-white/70 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

