import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProjectDetail() {
    const { id } = useParams()
    const [repo, setRepo] = useState(null)
    const [readme, setReadme] = useState('')

    useEffect(() => {
        axios.get(`https://api.github.com/repos/aryan9190/${id}`)
        .then(res => setRepo(res.data))
        .catch(err => console.error('Error fetching repo details:',err))

        axios.get(`https://api.github.com/repos/aryan9190/${id}/readme`, {headers: { Accept: 'application/vnd.github.v3.raw' }
        })
        .then(res => setReadme(res.data))
        .catch(() => setReadme('README not available') )
    }, [id])

    if (!repo) return <p>Loading projects details...</p>

    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">{repo.name}</h1>
            <p className="text-lg">{repo.description || 'No description available.'}</p>
            <p>⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}</p>
            <a href={repo.html_url} className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">
                View on GitHub 🡕
            </a>
            <div className="mt-6 p-4 bg-white text-black rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">README.md</h2>
                <pre className="whitespace-pre-wrap text-sm">{readme}</pre>
            </div>
        </div>
    )
}