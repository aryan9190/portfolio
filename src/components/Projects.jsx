import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        axios.get('https://api.github.com/users/aryan9190/repos')
        .then(res => setRepos(res.data))
        .catch(() => setRepos([]));
    }, []);

    return (
        <section id="projects" className="py-32 px-6 text-center">
            <h2 className="text-4xl font-fraktur text-yellow-400 mb-6">💎 Plundered Code</h2>
            <p className="text-gray-300 mb-10">The treasure I've unearthed on GitHub.</p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:frid-cols-3">
                {repos.map((repo, i) => (
                    <motion.div key={repo.id} className="bg-[#121212] border border-yellow-500 rounded-lg p-5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once:true }} >
                        <h3 className="text-xl font-fraktur text-yellow-300 mb-1">{repo.name}</h3>
                        <p className="text-gray-400 text-sm mb-3">{repo.description}</p>
                        <div>🪙 {repo.stargazers_count} gold &nbsp; 👲 {repo.forks_count} crew</div>
                        <a href={repo.html_url} target="_blank" className="mt-3 inline-block text-yellow-400 underline">Board the Ship</a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
