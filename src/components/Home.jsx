import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Nav from './Nav'
import Portfolio from './Portfolio'
import Skills from './Skills'

const Home = () => {
  return (
    <>
        <Nav/>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home