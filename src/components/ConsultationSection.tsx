import { motion } from 'framer-motion'
import { useState } from 'react'

const ConsultationSection = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="relative min-h-[80vh] flex items-center bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-12 lg:p-16 shadow-xl text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
            CALL NOW!
          </h2>
          
          <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-6">
            Take the first step towards your recovery. Schedule a free consultation with our expert team to discuss your needs and learn how we can help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+917204218699"
              className="text-2xl font-bold text-sage-600 hover:text-sage-700 transition-colors"
            >
              +91 7204218699
            </a>
            <span className="text-neutral-400">/</span>
            <a
              href="tel:+919739860177"
              className="text-2xl font-bold text-sage-600 hover:text-sage-700 transition-colors"
            >
              +91 9739860177
            </a>
          </div>
          
          <p className="text-lg text-neutral-500 mb-8">
            Call us for more information
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="flex-1 px-6 py-4 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:border-transparent text-base"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-base font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2 whitespace-nowrap"
              >
                Send
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ConsultationSection

