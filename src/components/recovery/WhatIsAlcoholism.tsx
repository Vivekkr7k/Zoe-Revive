import { motion } from 'framer-motion'

const WhatIsAlcoholism = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-50 via-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-sage-800 mb-4">
            What's Alcoholism?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Understanding the full impact of alcohol and drug addiction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
              alt="Person in recovery looking at sunrise"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-800/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-700 leading-relaxed">
              Alcoholism is when a person cannot control their drinking, even if it causes problems in their life. It is an illness that affects people in three important ways: physically, mentally, and spiritually.
            </p>
          </motion.div>
        </div>

        {/* Three Aspects */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Physical Aspects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-sage-800 mb-4">Physical Aspects</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              When someone is addicted to alcohol or drugs, their body gets used to having these substances and may need more and more to feel the same effects. This is known as "tolerance." If the person stops drinking or using suddenly, they might feel sick, shaky, or anxious—these are called "withdrawal symptoms."
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              For instance, a person might get headaches, feel weak, or have trouble sleeping if they don't drink. Over time, alcohol and drugs can harm organs like the liver and make someone look tired and unhealthy, such as not caring about personal hygiene.
            </p>
          </motion.div>

          {/* Mental and Emotional Aspects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-sage-800 mb-4">Mental and Emotional Aspects</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Alcoholism and drug addiction often make people feel sad, anxious, or angry. Some may drink or use to forget their problems or to relax, but this can make mental health issues worse.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              For instance, someone might feel very low in confidence, lose interest in things they used to enjoy, or start missing school and activities. Alcohol and drugs can change the way a person thinks, making it harder to remember things, solve problems, or act responsibly, such as forgetting promises or behaving in risky ways.
            </p>
          </motion.div>

          {/* Spiritual Aspects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-sage-800 mb-4">Spiritual Aspects</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Spiritual health is about feeling hopeful, connected to others, and having a sense of purpose. Alcoholism and drug addiction can make people feel lonely, guilty, or like they've lost their way.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              For instance, someone might stop caring about what is important to them or stop participating in things that once gave them joy. They may also feel powerless or believe they can't change, which can make recovery even harder.
            </p>
          </motion.div>
        </div>

        {/* Real Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-sage-100 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-sage-800 mb-6">So What Happens?</h3>
          <div className="space-y-4 text-neutral-700">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-2" />
              <p className="leading-relaxed">
                A person who was once active in sports stops playing because drinking or drug use makes them tired and uninterested.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-2" />
              <p className="leading-relaxed">
                Someone tells lies about their drinking or drug use to friends or family, showing emotional changes like denial.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-2 h-2 bg-sage-600 rounded-full mt-2" />
              <p className="leading-relaxed">
                A teen who used to enjoy going to religious gatherings or fun clubs now avoids them because they feel embarrassed or hopeless.
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg font-semibold text-sage-800">
            Alcoholism and drug addiction are not just about using too much; they're problems that touch the whole person—body, mind, and spirit. With support and the right help, recovery is possible.
          </p>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-sage-800 mb-6">Educational Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-sage-700 mb-3">Articles & Research</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>
                  <a href="https://www.ncbi.nlm.nih.gov/books/NBK549783/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    Alcohol Use Disorder - NIH Research
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/alcohol" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    WHO Fact Sheet on Alcohol
                  </a>
                </li>
                <li>
                  <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    SAMHSA National Helpline Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sage-700 mb-3">Documentaries & Videos</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>
                  <a href="https://archive.org/details/documentaries" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    Internet Archive - Public Domain Documentaries
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/results?search_query=alcohol+addiction+recovery+documentary" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    Recovery Documentaries on YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.ted.com/talks" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    TED Talks on Addiction & Recovery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatIsAlcoholism

