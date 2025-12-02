import { motion } from 'framer-motion'

const SolutionsSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Our PROGRAM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-sage-800 mb-6">
              Our PROGRAM
            </h3>
            
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              At Zoe Revive, we are dedicated to providing comprehensive and compassionate care to individuals struggling with alcohol addiction. Our mission is to empower our clients to achieve lasting recovery through evidence-based therapies and holistic approaches.
            </p>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our team of experienced medical professionals and therapists are committed to providing individualized care and support to each client. We believe in treating the whole person, not just the addiction, and our treatment approach reflects this philosophy.
            </p>
          </motion.div>

          {/* Our GOAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-sage-600 rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Our GOAL
            </h3>
            
            <p className="text-lg text-white/90 leading-relaxed mb-4">
              Our goal is to provide a supportive and non-judgmental environment where our clients can feel safe and empowered to take control of their recovery. At Zoe Revive, we value compassion, respect, and dignity.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              We believe that every individual deserves a chance to achieve lasting recovery, and we are committed to supporting our clients every step of the way. If you or someone you love is struggling with alcohol addiction, we encourage you to reach out to us today to learn more about our programs and services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection

