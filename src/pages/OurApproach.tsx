import { motion } from 'framer-motion'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const OurApproach = () => {
  const approaches = [
    {
      title: 'Evidence-Based Treatment',
      description: 'Our programs are grounded in the latest research and proven methodologies, ensuring the highest standards of care.',
      icon: '📊',
    },
    {
      title: 'Individual-Centered Care',
      description: 'We recognize that every person is unique. Our approach is tailored to your specific needs, preferences, and goals.',
      icon: '👤',
    },
    {
      title: 'Multidisciplinary Team',
      description: 'Our diverse team of specialists works collaboratively to provide comprehensive, integrated care across all aspects of recovery.',
      icon: '👥',
    },
    {
      title: 'Continuous Improvement',
      description: 'We regularly evaluate and refine our programs based on outcomes and feedback, ensuring we deliver the best possible care.',
      icon: '🔄',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative py-32 lg:py-40 bg-gradient-to-br from-neutral-50 via-sage-50/30 to-sage-100/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-display font-bold text-neutral-900 mb-6">
                Our Approach
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive, compassionate methodology designed to support your complete recovery journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
                >
                  <div className="text-5xl mb-6">{approach.icon}</div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                    {approach.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
                >
                  Get Started Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default OurApproach

