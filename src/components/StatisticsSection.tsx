import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const StatisticsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = gsap.utils.toArray<HTMLElement>('.stat-item')
      
      stats.forEach((stat) => {
        const number = stat.querySelector('.stat-number')
        const target = parseInt(stat.dataset.target || '0')
        
        if (number) {
          ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            onEnter: () => {
              const obj = { value: 0 }
              gsap.to(obj, {
                value: target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: () => {
                  if (number) {
                    number.textContent = Math.floor(obj.value).toString()
                  }
                },
              })
            },
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const statistics: Array<{ number: string; label: string; suffix: string }> = []

  return (
    <section ref={sectionRef} className="relative min-h-[10vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop"
          alt="Therapist providing care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sage-800/70" />
      </div>

      {/* Statistics Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-item text-center"
              data-target={stat.number}
            >
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                <span className="stat-number">0</span>
                {stat.suffix}
              </div>
              <p className="text-lg lg:text-xl text-white/90 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection

