// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Scroll />
      <HeroSection />
      <Skills />
      <Gallery />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;