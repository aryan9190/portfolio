import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground';
import Particles from './components/Particles';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1f1f2e] text-white font-fell scroll-smooth relative overflow-x-hidden">
      <div className="fixed top-2 right-2 z-[9999] bg-yellow-300 text-black px-3 py-1 rounded shadow-lg font-mono text-xs animate-pulse">
        WIP
      </div>
      <ParallaxBackground />
      <Particles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
