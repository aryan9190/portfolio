import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Waves from './components/Waves';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ParallaxBackground from './components/ParallaxBackground.jsx';
import Particles from './components/Particles';

export default function App() {
    return (
        <div className="bg-gradient-to-br from-[#0d0d0d] to-[#1f1f2e] text-white font-fell scroll-smooth relative overflow-x-hidden">
            <div className="fixed top-2 right-2 z-50 bg-yellow-300 text-black px-3 py-1 rounded shadow-lg font-mono text-xs animate-pulse">🛠️ WIP</div>
            <ParallaxBackground />
            <Particles />
            <Navbar />
            <Hero />
            <Waves />
            <About />
            <Contact />
            <Projects />
            <Footer />
        </div>
    );
}
