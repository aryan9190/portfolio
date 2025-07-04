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
