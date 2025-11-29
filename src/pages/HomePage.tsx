import Header from '../components/Header'
import Hero from '../components/Hero'
import JourneySection from '../components/JourneySection'
import SolutionsSection from '../components/SolutionsSection'
import OurApproachSection from '../components/OurApproachSection'
import WhatWeDoSection from '../components/WhatWeDoSection'
import HowItWorksSection from '../components/HowItWorksSection'
import StatisticsSection from '../components/StatisticsSection'
import TeamSection from '../components/TeamSection'
import TodaySection from '../components/TodaySection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import ConsultationSection from '../components/ConsultationSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <JourneySection />
        <SolutionsSection />
        <OurApproachSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        <StatisticsSection />
        <TeamSection />
        <TodaySection />
        <TestimonialsSection />
        <FAQSection />
        <ConsultationSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
