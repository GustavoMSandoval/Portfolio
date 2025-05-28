import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AboutSection } from './components/sections/About';
import { TechnologiesSection } from './components/sections/Technologies';

function App() {

  return (
    <>
      <Navbar/>
      <AboutSection/>
      <TechnologiesSection/>
      <Footer/>
    </>
  )
}

export default App
