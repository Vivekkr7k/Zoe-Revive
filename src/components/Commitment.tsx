import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

interface CommitmentPoint {
  title: string
  description: string
  icon: string
}

const commitments: CommitmentPoint[] = [
  {
    title: 'Holistic Care',
    description: 'We address the whole person—mind, body, and spirit—with integrated treatment approaches that honor your unique journey.',
    icon: '🌱',
  },
  {
    title: 'Personalized Plans',
    description: 'Every recovery path is different. Our expert team creates tailored treatment plans designed specifically for your needs and goals.',
    icon: '🎯',
  },
  {
    title: 'Lifelong Support',
    description: 'Recovery doesn\'t end at discharge. We provide ongoing support and resources to ensure your continued success and wellbeing.',
    icon: '🤝',
  },
]

const Commitment = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.commitment-card')

      cards.forEach((card) => {
        const content = card.querySelector('.commitment-content')
        
        // Set initial state
        gsap.set(card, { opacity: 0 })
        if (content) {
          gsap.set(content, { opacity: 0, y: 30 })
        }

        // Create scroll-triggered animation for each card
        ScrollTrigger.create({
          trigger: card,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              duration: 0.8,
              ease: 'power2.out',
            })
            if (content) {
              gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
              })
            }
          },
          onLeave: () => {
            gsap.to(card, {
              opacity: 0.4,
              duration: 0.5,
            })
          },
          onEnterBack: () => {
            gsap.to(card, {
              opacity: 1,
              duration: 0.6,
            })
            if (content) {
              gsap.to(content, {
                opacity: 1,
                y: 0,
                duration: 0.6,
              })
            }
          },
        })

        // Pin each card when it reaches the top
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: '+=100vh',
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Three pillars that guide everything we do
          </p>
        </motion.div>

        <div ref={containerRef} className="space-y-0">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="commitment-card min-h-screen flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="commitment-content max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-8xl mb-8"
                >
                  {commitment.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6"
                >
                  {commitment.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
                >
                  {commitment.description}
                </motion.p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Commitment

