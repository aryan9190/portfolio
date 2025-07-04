import {motion} from 'framer-motion';

export default function Hero() {
    return (
        <div id="hero" className="flex flex-col justify-center items-center min-h-screen tex-center px-4 pt-20">
            <motion.h1 className="text-6xl md:text-8xl font-fraktur text-yellow-300 pirate-glow drop-shadow-lg" initial={{ y: -80, opacity:0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >
                🏴‍☠ Ahoy, Matey!
            </motion.h1>

            <motion.p className="mt-6 text-xl md:text-2xl max-w-2xl text-gray-300 font-fall" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} >
                I be Aryan, a digital bucaneer crafting treasures with code, pixels & steel.
            </motion.p>

            <motion.button className="mt-8 bg-yellow-500 hover:bg-yello-600 text-black font-bold py-2 px-6 rounded-xl shadow-xl transition transform hover:scale-105" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Set Sail 
            </motion.button>
        </div>
    );
}
