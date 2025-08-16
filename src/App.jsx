import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutSection } from './components/sections/About';
import { TechnologiesSection } from './components/sections/Technologies';
import ProjectsSection from './components/sections/Projects';

function App() {

  return (
    <>
      <Navbar/>
      <AboutSection/>
      <ProjectsSection/>
      <TechnologiesSection/>
      <Footer/>
    </>
  )
}

export default App
