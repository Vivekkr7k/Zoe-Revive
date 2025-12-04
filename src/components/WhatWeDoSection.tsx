import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import zrtPic14 from '../assets/Gallery/ZRT PICS 14.JPG'
import zrtPic1 from '../assets/Gallery/ZRT PICS 1.jpg'
import zrtPic16 from '../assets/Gallery/ZRT PICS 16.JPG'

const WhatWeDoSection = () => {
  const cards = [
    {
      type: 'dark',
      value: '94%',
      title: 'Client Satisfaction Rate',
      description: 'Our client satisfaction rate reflects the trust, care, and results we consistently deliver. From personalized treatment to compassionate support,',
      hasButton: true,
    },
    {
      type: 'light',
      value: '12+',
      title: 'Years of Experience',
      description: 'With over 12 years of dedicated service, our clinic has helped thousands find lasting recovery. Our experience ensures you receive trusted,',
    },
    {
      type: 'accent',
      value: '15',
      title: 'Skilled Team Members',
      description: 'Our team includes 15 licensed professionals from doctors and therapists to counselors and support staff all working together to deliver.',
    },
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-12"
        >
          <p className="text-sage-600 text-sm font-semibold mb-3">• WHAT WE DO</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-800 leading-tight">
            Comprehensive treatment for healing mind and body
          </h2>
        </motion.div>

        {/* First Row: Image, Dark Card, Image */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
          {/* Image 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            <img
              src={zrtPic14}
              alt="Recovery and treatment activities"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-sage-800 rounded-2xl p-8 lg:p-10 text-white shadow-xl flex flex-col"
          >
            <div className="text-6xl lg:text-7xl font-bold mb-4">{cards[0].value}</div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">{cards[0].title}</h3>
            <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-6 flex-grow">
              {cards[0].description}
            </p>
            {cards[0].hasButton && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-sage-800 bg-sage-400 rounded-full hover:bg-sage-300 transition-colors duration-200 shadow-lg"
                >
                  Book A Consultation
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            <img
              src={zrtPic1}
              alt="Recovery support and care"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Second Row: Light Card, Image, Green Card */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Light Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-sage-100 rounded-2xl p-8 lg:p-10 text-sage-800 shadow-xl"
          >
            <div className="text-6xl lg:text-7xl font-bold mb-4">{cards[1].value}</div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">{cards[1].title}</h3>
            <p className="text-sage-700 text-base lg:text-lg leading-relaxed">
              {cards[1].description}
            </p>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]"
          >
            <img
              src={zrtPic16}
              alt="Treatment and wellness activities"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Green Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-sage-600 rounded-2xl p-8 lg:p-10 text-white shadow-xl"
          >
            <div className="text-6xl lg:text-7xl font-bold mb-4">{cards[2].value}</div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">{cards[2].title}</h3>
            <p className="text-white/90 text-base lg:text-lg leading-relaxed">
              {cards[2].description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection

