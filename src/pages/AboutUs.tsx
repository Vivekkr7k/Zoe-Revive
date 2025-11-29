import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import teamImage from '../assets/Gallery/Team.jpg'

const AboutUs = () => {
  const values = [
    {
      title: 'Compassion',
      description: 'We approach every individual with empathy, understanding, and genuine care for their wellbeing.',
      icon: '❤️',
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of care through continuous learning and evidence-based practices.',
      icon: '⭐',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles in everything we do.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'We embrace new approaches and technologies to provide the most effective treatment options.',
      icon: '💡',
    },
  ]


  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-neutral-50 via-sage-50/30 to-sage-100/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sage-600 text-sm font-semibold mb-4">• ABOUT US</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 mb-4">
                  ZOE REVIVE TRUST
                </h1>
                <p className="text-lg text-sage-600 font-medium italic mb-6">
                  Perceiving Change
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-sage-800 mb-6">
                  The Place Where Recovery Begins
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Don't Lose Yourself to Alcohol or Drugs. Win Yourself Back.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Feeling stuck with alcohol or drug use? Lost control? Losing health, peace or relationships? You don't have to fight this alone—help exists.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  We provide personalized treatment designed to heal both the body and the emotional patterns behind alcohol and drug addiction. Our long-term relapse prevention includes compassionate care, guidance, and accountability every step of the journey.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25"
                  >
                    Get in Touch
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full">
                  <img
                    src={teamImage}
                    alt="Zoe Revive Trust Team"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative min-h-[80vh] flex items-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-sage-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default AboutUs


