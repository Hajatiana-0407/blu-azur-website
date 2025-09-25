import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './index.css'
import DestinationHighlights from './pages/DestinationHighlights'
import Discover from './pages/Discover'
import Feature from './pages/Feature'
import Hero from './pages/Hero'
import Location from './pages/Location'


const App = () => {
  return (
    <div className='h-screen'>
      <Header />
      
      <section id='about'>
        <Hero />
        <Feature />
        <DestinationHighlights />
      </section>

      <section id='location'>
        <Location />
        <Discover />
      </section>

      <Footer />
    </div>
  )
}

export default App