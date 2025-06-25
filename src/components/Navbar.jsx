import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation()
    return (
        <nav className="bg-white text-black p-4 flex justify-center gap-8 shadow-lg rounded-b-xl">
            {['/', '/projects', '/about'].map(path => (
                <Link
                key={path} 
                to={path} 
                className={
                    location.pathname === path ? 'font-bold underline' : 'hover:underline'
                }>
                    {path === '/' ? 'Home' : path.replace('/', '')}
                </Link>
            ))}
        </nav>
    )
}

