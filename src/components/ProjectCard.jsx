import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProjectCard({ id, title, description}) {
    return (
        <motion.div 
          className="bg-white text-black rounded-xl p-4 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whiteTap={{ scale: 0.98 }}
        >
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm mt-1 mb-2">{description}</p>
            <Link to={`/projects/${id}`} className="text-blue-600 underline">
                View Details
            </Link>
        </motion.div>
    )
}