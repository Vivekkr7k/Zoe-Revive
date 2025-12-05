import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Education = () => {
  const topics = [
    {
      title: 'Understanding Addiction',
      description: 'Learn about the nature of addiction, its causes, and how it affects the brain and body. Understanding addiction is the first step toward recovery.',
      icon: '🧠',
      points: [
        'What is addiction and how does it develop?',
        'The science behind addiction and brain chemistry',
        'Physical and psychological effects of substance abuse',
        'Recognizing signs and symptoms',
      ],
    },
    {
      title: 'Treatment Approaches',
      description: 'Explore different treatment methodologies and evidence-based approaches that have proven effective in addiction recovery.',
      icon: '💊',
      points: [
        'Medical detoxification and supervised withdrawal',
        'Cognitive-Behavioral Therapy (CBT)',
        'Twelve Step Program philosophy',
        'Holistic and integrated treatment approaches',
      ],
    },
    {
      title: 'Recovery Process',
      description: 'Understand the stages of recovery, what to expect, and how to navigate each phase of your journey toward lasting sobriety.',
      icon: '🌱',
      points: [
        'Stages of recovery: detox, rehabilitation, maintenance',
        'Building coping skills and resilience',
        'Setting realistic goals and expectations',
        'Celebrating milestones and progress',
      ],
    },
    {
      title: 'Relapse Prevention',
      description: 'Learn strategies to prevent relapse, recognize warning signs, and develop a strong support system for long-term recovery.',
      icon: '🛡️',
      points: [
        'Identifying triggers and high-risk situations',
        'Developing healthy coping mechanisms',
        'Building a relapse prevention plan',
        'Maintaining long-term sobriety',
      ],
    },
    {
      title: 'Family & Support',
      description: 'Discover how family members and loved ones can support recovery, and learn about family therapy and support groups.',
      icon: '👨‍👩‍👧‍👦',
      points: [
        'How families can support recovery',
        'Family therapy and education',
        'Setting healthy boundaries',
        'Support groups for families',
      ],
    },
    {
      title: 'Mental Health & Wellness',
      description: 'Understand the connection between mental health and addiction, and learn about dual diagnosis treatment and holistic wellness.',
      icon: '🧘',
      points: [
        'Co-occurring mental health disorders',
        'Stress management and mindfulness',
        'Physical health and exercise in recovery',
        'Nutrition and self-care practices',
      ],
    },
  ]

  const resources = [
    {
      category: 'Research & Studies',
      items: [
        { name: 'NIH - Alcohol Use Disorder Research', url: 'https://www.ncbi.nlm.nih.gov/books/NBK549783/' },
        { name: 'WHO - Alcohol Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/alcohol' },
        { name: 'NIAAA - National Institute on Alcohol Abuse', url: 'https://www.niaaa.nih.gov/' },
        { name: 'Mayo Clinic - Alcohol Use Disorder', url: 'https://www.mayoclinic.org/diseases-conditions/alcohol-use-disorder' },
      ],
    },
    {
      category: 'Educational Videos',
      items: [
        { name: 'Recovery Documentaries', url: 'https://www.youtube.com/results?search_query=alcohol+addiction+recovery+documentary' },
        { name: 'Alcohol Addiction Recovery Stories', url: 'https://www.youtube.com/results?search_query=alcohol+recovery+success+stories' },
        { name: 'Understanding Alcoholism - Educational Content', url: 'https://www.youtube.com/results?search_query=understanding+alcoholism+education' },
      ],
    },
    {
      category: 'Support Organizations',
      items: [
        { name: 'Alcoholics Anonymous (AA)', url: 'https://www.aa.org/' },
        { name: 'Narcotics Anonymous (NA)', url: 'https://www.na.org/' },
        { name: 'National Council on Alcoholism', url: 'https://www.ncadd.org/' },
        { name: 'Al-Anon Family Groups', url: 'https://al-anon.org/' },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-white via-white/30 to-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-[#83997d] text-sm font-semibold mb-4">• EDUCATION</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#83997d] mb-6">
                Education & Resources
              </h1>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Comprehensive educational resources and information to support your recovery journey. Knowledge is power in the fight against addiction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Educational Topics */}
        <section className="relative py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#83997d] mb-6">
                Key Topics & Learning Areas
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Explore essential topics to deepen your understanding of addiction and recovery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-5xl mb-4">{topic.icon}</div>
                  <h3 className="text-2xl font-bold text-[#83997d] mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {topic.description}
                  </p>
                  <ul className="space-y-2">
                    {topic.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-neutral-600">
                        <svg
                          className="w-5 h-5 text-[#83997d] mr-2 flex-shrink-0 mt-0.5"
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
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-white via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#83997d] mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Valuable resources, research, and support organizations to further your education
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl p-8 shadow-lg"
                  style={{ backgroundColor: '#83997d' }}
                >
                  <h3 className="text-xl font-bold text-white mb-6">
                    {resource.category}
                  </h3>
                  <ul className="space-y-3">
                    {resource.items.map((item, idx) => (
                      <li key={idx}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-white/80 underline transition-colors duration-200 flex items-start"
                        >
                          <svg
                            className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-20 bg-[#83997d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Begin Your Recovery Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Education is an important first step, but taking action is what leads to recovery. Our team is here to support you every step of the way.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-full hover:bg-white/20 transition-colors duration-200 shadow-lg"
                  style={{ backgroundColor: '#83997d' }}
                >
                  Get Started Today
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

export default Education

