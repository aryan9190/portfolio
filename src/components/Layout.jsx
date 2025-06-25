import Navbar from './Navbar'
import { motion } from 'framer-motion'

export default function Layout({children}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 text-white">
            <Navbar />
            <motion.main
             className="p-4" 
             initial={{opacity: 0}} 
             animate={{opacity: 1}}
             transition={{duration: 0.5}}
            >
                {children}
            </motion.main>
        </div>
    )
}