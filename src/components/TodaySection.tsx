import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TodaySection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-sage-800 rounded-3xl p-12 lg:p-16 text-center shadow-2xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Don't Lose Yourself to Alcohol or Drugs.<br />Win Yourself Back.
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-6">
            Feeling stuck with alcohol or drug use? Lost control? Losing health, peace or relationships?
          </p>
          
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            You don't have to fight this alone—help exists. You're not alone—recovery is possible. Choose yourself today and begin a life free from addiction.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-sage-50 bg-sage-600 rounded-full hover:bg-sage-700 transition-colors duration-200 shadow-lg shadow-sage-600/25 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 focus:ring-offset-sage-800"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TodaySection

