import { motion } from 'framer-motion'
import teamImage from '../assets/Gallery/Team.jpg'

const TeamSection = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-neutral-50 via-sage-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image - Larger and better proportioned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full">
              <img
                src={teamImage}
                alt="Zoe Revive Trust Team"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-800/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Text Content - More compact and organized */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sage-600 text-sm font-semibold mb-3">• OUR TEAM</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-800 leading-tight mb-4">
                Experienced Minds. Caring Hearts. Focused on You.
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                At Zoe Revive Trust, our dedicated team of professionals brings together years of experience, compassion, and expertise in addiction recovery. We are committed to providing personalized care and support to every individual on their journey to recovery.
              </p>

              <p className="text-base lg:text-lg text-neutral-600 leading-relaxed">
                Our multidisciplinary team includes counselors, therapists, medical professionals, and support staff who work together to create a safe, nurturing environment where healing can flourish.
              </p>
            </div>

            {/* Key Features - More compact grid layout */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sage-800 mb-1">Expert Team</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Certified professionals with extensive experience in addiction treatment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sage-800 mb-1">Compassionate Care</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Empathy, understanding, and genuine care for your wellbeing.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sage-800 mb-1">24/7 Support</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Available around the clock to provide support, guidance, and care when you need it most.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection

