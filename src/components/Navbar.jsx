import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const { pathname } = useLocation();
    const navLinkClass = (path) => `hover:underline ${pathname === path ? 'font-bold underline text-yellow-300' : '' }`;
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center gap-8 py-4 bg-black bg-opacity-60 backdrop-blur z-50 text-yellow-300">
            <Link to="/" className={navLinkClass('/')}>🏴‍☠</Link>
            <Link to="/about" className={navLinkClass('/about')}>📜</Link>
            <Link to="/projects" className={navLinkClass('/projects')}>💎</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>📬</Link>
        </nav>
    );
}