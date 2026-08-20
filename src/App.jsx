import Seo from './components/Seo.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Welcome from './components/Welcome.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Seo
        title="Al Qosour Restaurant | مطعم القصور – Damascus, Syria"
        description="Al Qosour Restaurant in Damascus, Syria. Authentic Arabian flavours, fresh food, fast delivery and a warm welcome on Baghdad Street."
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Location />
        <Contact />
        <Welcome />
      </main>
      <Footer />
    </>
  )
}

export default App