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
import './index.css'

function App() {
  return (
    <div className="dark">
      <CursorGlow />
      <NeonFlow className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <ProblemSection />
          <GlowCardsSection />
          <AuthorSection />
          <TestimonialsSection />
          <OfferSection />
        </main>
        <Footer />
      </NeonFlow>
    </div>
  )
}

export default App
