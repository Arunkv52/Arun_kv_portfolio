import Footer from '../components/layout/footer/Footer'
import Header from '../components/layout/header/Header'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import HeroSection from './HeroSection'
import Skills from './Skills'
import LatestWork from './LatestWork'
import Contact  from './Contact'

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <LatestWork />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
