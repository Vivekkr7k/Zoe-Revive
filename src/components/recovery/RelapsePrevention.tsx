import { motion } from 'framer-motion'

const RelapsePrevention = () => {
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
            Relapse Prevention
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Understanding triggers and building a strong prevention plan
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop"
              alt="Person writing in journal for recovery"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-800/60 to-transparent" />
          </div>
        </motion.div>

        {/* Common Triggers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-sage-800 mb-8">Common Triggers for Relapse</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-sage-50 rounded-xl p-6 border-l-4 border-sage-600">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-sage-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h4 className="font-semibold text-sage-800">Stress</h4>
              </div>
              <p className="text-neutral-600 text-sm">
                Stress from work, school, or personal issues
              </p>
            </div>

            <div className="bg-sage-50 rounded-xl p-6 border-l-4 border-sage-600">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-sage-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h4 className="font-semibold text-sage-800">Social Settings</h4>
              </div>
              <p className="text-neutral-600 text-sm">
                Social settings where alcohol or drugs are present, like parties or celebrations
              </p>
            </div>

            <div className="bg-sage-50 rounded-xl p-6 border-l-4 border-sage-600">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-sage-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="font-semibold text-sage-800">People & Places</h4>
              </div>
              <p className="text-neutral-600 text-sm">
                Certain friends or places linked to past drinking or drug use
              </p>
            </div>

            <div className="bg-sage-50 rounded-xl p-6 border-l-4 border-sage-600">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-sage-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <h4 className="font-semibold text-sage-800">Strong Emotions</h4>
              </div>
              <p className="text-neutral-600 text-sm">
                Strong emotions, such as sadness, anger, or even excitement
              </p>
            </div>

            <div className="bg-sage-50 rounded-xl p-6 border-l-4 border-sage-600">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-sage-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-semibold text-sage-800">Boredom</h4>
              </div>
              <p className="text-neutral-600 text-sm">
                Boredom or having nothing meaningful to do
              </p>
            </div>
          </div>
        </motion.div>

        {/* Practical Ways to Help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-gradient-to-br from-sage-50 to-white rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-sage-800 mb-8">Practical Ways to Help</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Build Awareness</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Talk together about triggers so the person can spot risky people, places, or moods early on. Encouraging honest conversations helps them feel prepared.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Encourage a Plan</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Help them make a simple "action plan" for what to do if a trigger appears—like calling a friend, taking a walk, or leaving an uncomfortable situation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Suggest Healthy Habits</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Support routines with enough sleep, nutritious food, exercise, and positive hobbies to boost their mood and fight stress in healthy ways.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Offer Supportive Company</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Join them in sober activities and help set boundaries, for example, by reminding them it's okay to say "no" at events or leave places where alcohol or drugs are served.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-600 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-sage-700 mb-2">Connect with Resources</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Encourage joining support groups (such as Alcoholics Anonymous) or talking with a counselor or sponsor for extra help when triggers feel overwhelming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-sage-100 rounded-xl">
            <p className="text-sage-800 font-semibold leading-relaxed">
              By helping someone recognize triggers, build healthy coping skills, and seek support, family and friends can make it easier for their loved one to stay on track and recover with confidence.
            </p>
          </div>
        </motion.div>

        {/* Relapse Prevention Plan Template */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border-2 border-sage-200 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-sage-800 mb-8 text-center">
            Relapse Prevention Plan (Sample Template)
          </h3>
          
          <div className="space-y-8">
            <div className="bg-sage-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                My Warning Signs
              </h4>
              <p className="text-neutral-600 mb-3">
                List feelings, thoughts, or places that make you want to drink or use drugs (e.g., stress, parties, certain people).
              </p>
              <div className="bg-white rounded-lg p-4 min-h-[100px] border-2 border-dashed border-sage-300">
                <p className="text-neutral-400 italic">Write your warning signs here...</p>
              </div>
            </div>

            <div className="bg-sage-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                My Coping Strategies
              </h4>
              <p className="text-neutral-600 mb-3">
                Write down safe actions to try when you feel triggered (e.g., call a friend, go for a walk, practice deep breathing, listen to music).
              </p>
              <div className="bg-white rounded-lg p-4 min-h-[100px] border-2 border-dashed border-sage-300">
                <p className="text-neutral-400 italic">Write your coping strategies here...</p>
              </div>
            </div>

            <div className="bg-sage-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                My Support Network
              </h4>
              <p className="text-neutral-600 mb-3">
                Name 2-3 people you trust who you can reach out to if you feel vulnerable (include phone numbers if needed).
              </p>
              <div className="bg-white rounded-lg p-4 min-h-[100px] border-2 border-dashed border-sage-300">
                <p className="text-neutral-400 italic">Write your support network here...</p>
              </div>
            </div>

            <div className="bg-sage-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Safe Places or Activities
              </h4>
              <p className="text-neutral-600 mb-3">
                List favorite hobbies or locations where you feel safe and alcohol or drugs are not present (e.g., sports, parks, movies, volunteering).
              </p>
              <div className="bg-white rounded-lg p-4 min-h-[100px] border-2 border-dashed border-sage-300">
                <p className="text-neutral-400 italic">Write your safe places and activities here...</p>
              </div>
            </div>

            <div className="bg-sage-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Emergency Contacts
              </h4>
              <p className="text-neutral-600 mb-3">
                Add details for a counselor, support group, or helpline (e.g., "AA sponsor: [Name, Number]").
              </p>
              <div className="bg-white rounded-lg p-4 min-h-[100px] border-2 border-dashed border-sage-300">
                <p className="text-neutral-400 italic">Write your emergency contacts here...</p>
              </div>
            </div>

            <div className="bg-sage-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-sage-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Reminders for Myself
              </h4>
              <p className="text-neutral-600 mb-3">
                Write 1-2 positive messages about your recovery, like "I am strong enough to get through this," or "Asking for help is a sign of courage."
              </p>
              <div className="bg-white rounded-lg p-4 min-h-[100px] border-2 border-dashed border-sage-300">
                <p className="text-neutral-400 italic">Write your positive reminders here...</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-sage-100 rounded-xl text-center">
            <p className="text-sage-800 font-semibold">
              Encourage the person in recovery to fill this in, keep it with them, and update as needed to stay motivated and prepared.
            </p>
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-sage-800 mb-6">Additional Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-sage-700 mb-3">Support Groups & Helplines</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>
                  <a href="https://www.aa.org/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    Alcoholics Anonymous (AA)
                  </a>
                </li>
                <li>
                  <a href="https://www.na.org/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    Narcotics Anonymous (NA)
                  </a>
                </li>
                <li>
                  <a href="https://al-anon.org/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    Al-Anon Family Groups
                  </a>
                </li>
                <li>
                  <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    SAMHSA National Helpline: 1-800-662-HELP
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sage-700 mb-3">Educational Materials</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>
                  <a href="https://archive.org/details/documentaries" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    Internet Archive - Recovery Documentaries
                  </a>
                </li>
                <li>
                  <a href="https://www.ted.com/talks" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    TED Talks on Recovery & Mental Health
                  </a>
                </li>
                <li>
                  <a href="https://www.niaaa.nih.gov/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-600 underline">
                    NIAAA - National Institute on Alcohol Abuse
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

export default RelapsePrevention

