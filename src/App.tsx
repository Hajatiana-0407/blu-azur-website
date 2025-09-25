import { useEffect } from 'react'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import './index.css'
import Activity from './pages/Activity'
import Booking from './pages/Booking'
import DestinationHighlights from './pages/DestinationHighlights'
import Discover from './pages/Discover'
import Feature from './pages/Feature'
import Hero from './pages/Hero'
import Location from './pages/Location'
import { useAppContext } from './context/AppContext'


const App = () => {
  const { setActiveOnglet } = useAppContext();

  // Intersection Observer pour détecter la section active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveOnglet(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
    };
  }, []);



  return (
    <div className='h-screen bg-black'>
      <Header />

      <section id='about'>
        <Hero />
        <Feature />
        <DestinationHighlights />
      </section>

      <section id='location'>
        <Location />
      </section>

      <section id='activity'>
        <Discover />
        <Activity />
      </section>

      <section id='booking'>
        <Booking />
      </section>
      <Footer />
    </div>
  )
}

export default App