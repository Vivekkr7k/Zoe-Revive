import { motion } from 'framer-motion'

const RecoveryProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-sage-800 mb-4">
            3-Fold Recovery Process
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A comprehensive approach to healing body, mind, and spirit
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Physical Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
                alt="Person exercising in nature"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-sage-600">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-sage-800 mb-4">Physical Recovery</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Physical recovery starts with stopping alcohol or drug use. This lets the body begin to heal from the harms caused by addiction.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Getting proper nutrition and sleep to restore energy and health</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Starting regular exercise, which can improve mood and rebuild strength</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Addressing any medical issues with a doctor's support</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-600 italic">
              These steps help someone feel better, think more clearly, and handle stress.
            </p>
          </motion.div>

          {/* Mental Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop"
                alt="Person in therapy session"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-sage-600">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-sage-800 mb-4">Mental Recovery</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Mental recovery means working on thoughts, feelings, and behaviors.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Therapy or counseling to help with anxiety, depression, or past traumas</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Learning new coping skills for stress and triggers</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Making positive choices, like focusing on healthy relationships and interests</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-600 italic">
              Mental healing improves confidence, self-control, and emotional stability.
            </p>
          </motion.div>

          {/* Spiritual Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative mb-6">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                alt="Person meditating in nature"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-sage-600">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-sage-800 mb-4">Spiritual Recovery</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Spiritual recovery is about finding meaning, hope, and connection.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Exploring faith, spiritual beliefs, or attending support groups (like AA)</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Finding a higher power or inner strength to give motivation</p>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-600 text-sm">Practicing meditation, prayer, or reflection for inner peace</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-600 italic">
              Spiritual growth helps people feel less alone and gives courage to keep moving forward, even when recovery is hard.
            </p>
          </motion.div>
        </div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-sage-100 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-xl font-semibold text-sage-800 leading-relaxed">
            Focusing on all three areas—physical, mental, and spiritual—gives a strong foundation for lasting recovery and a happier life beyond addiction.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RecoveryProcess

