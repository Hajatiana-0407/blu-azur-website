import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './index.css'
import Hero from './pages/Hero'


const App = () => {
  return (
    <div className='h-screen'>

      {/* Entete */}
      <Header />
      <section id='about'>
        <Hero />
      </section>
      <Footer />
    </div>
  )
}

export default App