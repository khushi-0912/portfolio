import { useTheme } from '../ThemeContext'
function Footer() {
    const { colors } = useTheme()
  return (
    <footer className={`${colors.card} ${colors.border} border-t py-8`}>
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className={`${colors.text}`}>
            © 2025 Khushi Talaviya. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://linkedin.com/in/khushi-talaviya"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.text} hover:opacity-80 transition`}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/khushi-0912"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.text} hover:opacity-80 transition`}
            >
              GitHub
            </a>
            <a 
              href="mailto:khushitalaviya0912@gmail.com"
              className={`${colors.text} hover:opacity-80 transition`}
            >
              Email
            </a>
          </div>
          
        </div>
        
      </div>
    </footer>
  )
}

export default Footer