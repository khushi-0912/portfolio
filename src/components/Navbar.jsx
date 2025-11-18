import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

function Navbar() {
  const navigate = useNavigate()
  const { theme, toggleTheme, colors } = useTheme()

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
    <nav className={`${colors.bg} ${colors.border} border-b sticky top-0 z-50 shadow-md`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link to="/" className={`text-2xl font-bold ${colors.accent}`}>
          KT
        </Link>

        <div className="flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('skills')}
            className={`${colors.text} ${colors.hover} transition`}
          >
            Skills
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
          
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`${colors.text} ${colors.hover} p-2 rounded-lg transition`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
