import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Hero />
      <Gallery />
      <Services />
      <Packages />
      <About />
      <Footer />
    </div>
  );
}

export default App;