import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const OurApproachSection = () => {
  const approaches = [
    {
      title: 'Safe Detox',
      description: 'Medically supervised detoxification process designed to safely manage withdrawal symptoms and ensure your physical wellbeing throughout the detox phase.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Personalized Plan',
      description: 'Individual treatment plans tailored to your unique needs, preferences, and recovery goals, ensuring the most effective path to lasting wellness.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: '100% Confidential',
      description: 'Complete privacy ensuring your personal information and treatment journey are protected. Your recovery is completely private and secure.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'One-on-One Support',
      description: 'Dedicated one-on-one support from our caring team members who are committed to your success and available whenever you need guidance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'A Team That Cares',
      description: 'Our compassionate team is dedicated to your recovery, providing personalized care, guidance, and accountability every step of the journey.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-neutral-50 via-sage-50/30 to-sage-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-12"
        >
          <p className="text-sage-600 text-sm font-semibold mb-3">• WHY CHOOSE US</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Personalized treatment designed to heal both the body and the emotional patterns behind alcohol and drug addiction.
          </p>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Long-term relapse prevention with compassionate care, guidance, and accountability every step of the journey.
          </p>
        </motion.div>

        {/* Approach Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
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
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 mb-6">
                {approach.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-sage-800 mb-4">
                {approach.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-neutral-600 leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
            >
              Get Started Today
              <svg
                className="ml-2 w-5 h-5"
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
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurApproachSection

