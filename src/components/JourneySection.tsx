import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import zrtPic13 from '../assets/Gallery/ZRT PICS 13.JPG'
import zrtPic10 from '../assets/Gallery/ZRT PICS 10.JPG'
import zrtPic15 from '../assets/Gallery/ZRT PICS 15.JPG'
import zrtPic5 from '../assets/Gallery/ZRT PICS 5.jpg'

const JourneySection = () => {
  const journeyImages = [
    {
      src: zrtPic13,
      alt: 'Yoga and meditation group session',
      title: 'Mindful Practices',
    },
    {
      src: zrtPic10,
      alt: 'Group therapy and educational session',
      title: 'Group Support',
    },
    {
      src: zrtPic15,
      alt: 'Meditation and wellness activities',
      title: 'Wellness Journey',
    },
    {
      src: zrtPic5,
      alt: 'Medical professional providing care',
      title: 'Professional Care',
    },
  ]

  return (
    <section className="relative min-h-[80vh] flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid - 4 Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {journeyImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-sage-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-semibold">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 leading-tight">
              Your journey to recovery starts with us
            </h2>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              Zoe Revive is a leading rehabilitation organization. We are dedicated to providing comprehensive, personalized care to help you achieve lasting recovery and improved quality of life. With over 12+ years of experience, we've helped thousands of individuals reclaim their lives.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-base font-medium text-neutral-700">Evidence-based methods</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-base font-medium text-neutral-700">Individualized treatment programs</span>
              </div>
            </div>

            {/* Experience Stat */}
            <div className="pt-4">
              <div className="text-6xl font-bold text-sage-800">12+</div>
              <p className="text-lg text-neutral-600 mt-2">Years of experience in our company</p>
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/our-approach"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
              >
                Discover Us
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
      </div>
    </section>
  )
}

export default JourneySection

