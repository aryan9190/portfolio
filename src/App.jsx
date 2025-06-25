import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from '.pages/About'
import Projects from '.pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Layout from './components/Layout'

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>
        </Layout>
    )
}