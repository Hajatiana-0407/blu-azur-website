import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './index.css'
import DestinationHighlights from './pages/DestinationHighlights'
import Feature from './pages/Feature'
import Hero from './pages/Hero'
import Location from './pages/Location'


const App = () => {
  return (
    <div className='h-screen'>

      {/* Entete */}
      <Header />
      <section id='about'>
        <Hero />
        <Feature />
        <DestinationHighlights />
      </section>

      <section id='location'>
        <Location  />
      </section>
      <Footer />
    </div>
  )
}

export default App