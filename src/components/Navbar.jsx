export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center gap-8 py-4 bg-black bg-opacity-60 backdrop-blur z-50 text-yellow-300">
            <a href="#hero" className="hover:underline" aria-label="Hero">🏴‍☠</a>
            <a href="#about" className="hover:underline" aria-label="About">📜</a>
            <a href="#contact" className="hover:underline" aria-label="Contact">📬</a>
        </nav>
    );
}
