import { motion } from 'framer-motion'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen bg-slate-950 text-slate-200 antialiased"
    >
      <div className="page-shell">
        <Hero />
        <Projects />
      </div>
    </motion.div>
  )
}