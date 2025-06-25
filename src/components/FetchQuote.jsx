import { useEffect, useState } from 'react'
import axios from  'axios'
import { motion } from 'framer-motion'

export default function FetchQuote() {
    const [quote, setQuote] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => setQuote(res.data))
    }, [])

    return (
        <motion.div 
          className="mt-6 bg-indigo-600 p-4 rounded-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ delay: 0.3 }}
        >
            {quote ? (
                <>
                    <h3 className="text-xl font-bold">{quote.title}</h3>
                    <p>{quote.body}</p>
                </>
            ) : (
                <p>Loading quote...</p>
            )}
        </motion.div>
    )

}