import { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios.get('https:/api.github.com/users/aryan9190/repos')
        .then(res => setProjects(res.data))
        .catch(err => console.error('Error fetching repos:', err))
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">GitHub Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map(repo => (
                    <ProjectCard 
                       key={repo.id}
                       id={repo.name}
                       title={repo.name}
                       description={repo.description || 'No description'}/>
                ))}
            </div>
        </div>
    )
}