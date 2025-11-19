import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import { useState } from 'react'

function Navbar() {
  const navigate = useNavigate()
  const { theme, toggleTheme, colors } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <nav className={`${colors.bg} ${colors.border} border-b sticky top-0 z-50 shadow-md relative`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link to="/" className={`text-2xl font-bold ${colors.accent}`}>
          KT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('skills')}
            className={`${colors.text} ${colors.hover} transition`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className={`${colors.text} ${colors.hover} transition`}
          >
            Experience
          </button>
          <Link to="/projects" className={`${colors.text} ${colors.hover} transition`}>
            Projects
          </Link>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`${colors.text} ${colors.hover} transition`}
          >
            Contact
          </button>
          
          <button
            onClick={toggleTheme}
            className={`${colors.text} ${colors.hover} p-2 rounded-lg transition`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden ${colors.text} text-2xl`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 ${colors.card} ${colors.border} border-t shadow-lg z-50`}>
          <div className="flex flex-col p-4 space-y-4">
            <button 
              onClick={() => { scrollToSection('skills'); setMobileMenuOpen(false); }}
              className={`${colors.text} ${colors.hover} transition text-left py-2`}
            >
              Skills
            </button>
            <button 
              onClick={() => { scrollToSection('experience'); setMobileMenuOpen(false); }}
              className={`${colors.text} ${colors.hover} transition text-left py-2`}
            >
              Experience
            </button>
            <Link 
              to="/projects" 
              onClick={() => setMobileMenuOpen(false)}
              className={`${colors.text} ${colors.hover} transition py-2`}
            >
              Projects
            </Link>
            <button 
              onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
              className={`${colors.text} ${colors.hover} transition text-left py-2`}
            >
              Contact
            </button>
            <button
              onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
              className={`${colors.text} ${colors.hover} transition text-left py-2`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar