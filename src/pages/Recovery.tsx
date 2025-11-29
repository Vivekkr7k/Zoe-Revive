import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatIsAlcoholism from '../components/recovery/WhatIsAlcoholism'
import RecoveryProcess from '../components/recovery/RecoveryProcess'
import FamilyFriendsSupport from '../components/recovery/FamilyFriendsSupport'
import RelapsePrevention from '../components/recovery/RelapsePrevention'

const Recovery = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <WhatIsAlcoholism />
        <RecoveryProcess />
        <FamilyFriendsSupport />
        <RelapsePrevention />
      </main>
      <Footer />
    </div>
  )
}

export default Recovery

