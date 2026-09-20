import { motion } from 'framer-motion'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen bg-slate-950 text-slate-200 antialiased"
    >
      <header className="site-header">
        <div className="nav-inner">
          <a href="#home" className="brand" aria-label="Go to home section">
            <span className="brand-mark">J</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={item === 'Home' ? 'nav-link active' : 'nav-link'}
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="theme-toggle" aria-label="Theme switcher" type="button">
            <span className="toggle-dot" />
          </button>
        </div>
      </header>

      <div className="page-shell">
        <Hero />
        <Projects />

        <section id="contact" className="contact-section">
          <div className="contact-box">
            <p className="eyebrow">Let’s build something meaningful</p>
            <h3>Available for AI product and full-stack development work.</h3>
            <div className="contact-actions">
              <a href="mailto:jyothish24092004@gmail.com">jyothish24092004@gmail.com</a>
              <a href="https://github.com/JyothishBoyina" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}