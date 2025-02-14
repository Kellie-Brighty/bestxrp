import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.body.className = 'bg-xrp-blue text-white';
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      {/* <Tokenomics /> */}
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App; 