import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './index.css'
import Feature from './pages/Feature'
import Hero from './pages/Hero'


const App = () => {
  return (
    <div className='h-screen'>

      {/* Entete */}
      <Header />
      <section id='about'>
        {/* Section Hero */}
        <Hero />

        {/* Section Feature */}
        <Feature />
        
      </section>
      <Footer />
    </div>
  )
}

export default App