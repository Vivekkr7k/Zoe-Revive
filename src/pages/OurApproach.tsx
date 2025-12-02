import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const OurApproach = () => {
  const schedule = [
    { time: '06:00 – 06:15 am', activity: 'Wake Up & Bed Tea' },
    { time: '06:30 – 07:00 am', activity: 'Prayer and Meditation' },
    { time: '07:00 – 07:30 am', activity: 'Yoga' },
    { time: '07:30 – 08:00 am', activity: 'Walk' },
    { time: '08:00 – 08:30 am', activity: 'Personal Hygiene' },
    { time: '08:30 – 09:00 am', activity: 'Breakfast' },
    { time: '09:00 – 09:45 am', activity: 'Silent Hour / Reflection' },
    { time: '10:00 – 11:00 am', activity: 'Counsellor Classroom Session' },
    { time: '11:00 – 11:15 am', activity: 'Tea and Snack Break' },
    { time: '11:15 – 12:30 pm', activity: 'Step Study Workshop' },
    { time: '12:30 – 01:00 pm', activity: 'Lunch Break' },
    { time: '01:00 – 02:00 pm', activity: 'Reflection Time' },
    { time: '02:00 – 03:00 pm', activity: 'Step Session' },
    { time: '03:00 – 04:30 pm', activity: 'Personality Development, Speaker Sharing/AV Sessions & Tea' },
    { time: '04:30 – 06:00 pm', activity: 'Indoor and Outdoor Games' },
    { time: '06:00 – 07:00 pm', activity: 'Personal Hygiene' },
    { time: '07:00 – 08:00 pm', activity: 'In-house Recovery Meeting & Tea' },
    { time: '08:15 – 09:00 pm', activity: 'Thoughts and Feelings Session' },
    { time: '09:00 – 09:30 pm', activity: 'Dinner' },
    { time: '09:30 – 10:30 pm', activity: 'TV, News, Music' },
    { time: '10:30 – 10:45 pm', activity: 'Prayers & Lights Out' },
  ]

  const aspects = [
    {
      title: 'Physical',
      description: 'Detoxification, medical supervision, and physical therapy to help regain strength and health.',
    },
    {
      title: 'Mental',
      description: 'Counseling, therapy, and mental health support to overcome psychological dependence and build resilience.',
    },
    {
      title: 'Spiritual',
      description: 'Mindfulness, meditation, and spiritual guidance to foster inner peace and hope.',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-neutral-50 via-sage-50/30 to-sage-100/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-800 mb-6">
                Our Treatment Approach
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Holistic Recovery Programme */}
        <section className="relative py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-800 mb-6">
                Holistic Recovery Programme
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                At Zoe Revive Trust, we provide a comprehensive programme treating the body, mind, and soul. Our approach is grounded in the Twelve Step philosophy approved by WHO, which has demonstrated the highest recovery rate globally.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Recovery is not just abstaining but also involves changing one's attitude, lifestyle, personality, character, and thinking, to sustain lifelong recovery and become a respected member of society.
              </p>
            </motion.div>

            {/* Daily Programme Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-sage-800 mb-8">
                Daily Programme Schedule
              </h3>
              <div className="bg-sage-50 rounded-2xl p-6 lg:p-8">
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-sage-200 last:border-b-0"
                    >
                      <span className="text-sage-700 font-semibold text-sm sm:text-base min-w-[140px] sm:min-w-[180px]">
                        {item.time}
                      </span>
                      <span className="text-neutral-700 text-sm sm:text-base">
                        –&gt; {item.activity}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Physical, Mental, Spiritual */}
            <div className="grid md:grid-cols-3 gap-8">
              {aspects.map((aspect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-sage-100 rounded-2xl p-8 text-center"
                >
                  <h4 className="text-2xl font-bold text-sage-800 mb-4">
                    {aspect.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {aspect.description}
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

export default OurApproach

