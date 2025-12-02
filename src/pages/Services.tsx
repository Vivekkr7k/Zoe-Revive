import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: 'Detoxification Program',
      description: 'A medically supervised program that helps individuals safely withdraw from alcohol.',
    },
    {
      title: 'Individualized Treatment Plans',
      description: 'Personalized treatment plans tailored to each client\'s unique needs and goals.',
    },
    {
      title: 'Group Therapy',
      description: 'Group sessions that provide support, education, and community building.',
    },
    {
      title: 'Cognitive-Behavioral Therapy (CBT)',
      description: 'A type of therapy that helps individuals identify and change negative thought patterns.',
    },
    {
      title: 'Family Therapy',
      description: 'Therapy sessions that involve family members to help them understand addiction and support their loved one\'s recovery.',
    },
    {
      title: 'Aftercare Planning',
      description: 'Planning and support to help clients transition back to daily life after treatment.',
    },
    {
      title: 'Mindfulness-Based Therapies',
      description: 'Therapies that help individuals cultivate mindfulness and reduce stress.',
    },
    {
      title: 'Holistic Therapies',
      description: 'Alternative therapies such as yoga, meditation, or art therapy.',
    },
    {
      title: 'Dual Diagnosis Treatment',
      description: 'Treatment for individuals with co-occurring mental health and addiction issues.',
    },
    {
      title: 'Support Groups',
      description: 'Ongoing support groups for clients and their families.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-neutral-50 via-sage-50/30 to-sage-100/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sage-600 text-sm font-semibold mb-4">• SERVICES</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We are proud to offer a range of programs and services, including:
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100"
                >
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-sage-800 mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
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
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25"
                >
                  Book a Consultation
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
      </main>
      <Footer />
    </div>
  )
}

export default Services


