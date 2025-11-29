import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Practical Based Solution',
      description: 'Our practical approach focuses on real-world applications and hands-on techniques that empower you to overcome challenges and build lasting resilience. We combine proven methodologies with personalized strategies tailored to your unique situation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Integrated Benefit Solution',
      description: 'Our integrated approach ensures comprehensive care that addresses all aspects of your recovery journey. We coordinate multiple treatment modalities, support services, and resources to provide a seamless, holistic rehabilitation experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-sage-600 flex items-center justify-center text-white mb-6">
                {solution.icon}
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-sage-800 mb-4">
                {solution.title}
              </h3>
              
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                {solution.description}
              </p>

              <Link
                to="/our-approach"
                className="inline-flex items-center text-sage-600 font-semibold hover:text-sage-700 transition-colors group"
              >
                Read More
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection

