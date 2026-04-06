import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import GlowCardsSection from './components/GlowCardsSection'
import AuthorSection from './components/AuthorSection'
import TestimonialsSection from './components/TestimonialsSection'
import OfferSection from './components/OfferSection'
import Footer from './components/Footer'
import NeonFlow from './components/NeonFlow'
import CursorGlow from './components/CursorGlow'
import EmailModal from './components/EmailModal'
import './index.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="dark">
      <CursorGlow />
      <NeonFlow className="min-h-screen">
        <Header />
        <main>
          <Hero onCtaClick={openModal} />
          <ProblemSection />
          <GlowCardsSection />
          <AuthorSection />
          <TestimonialsSection />
          <OfferSection onCtaClick={openModal} />
        </main>
        <Footer />
      </NeonFlow>
      <EmailModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App
