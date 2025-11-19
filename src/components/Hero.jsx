import { useTheme } from '../ThemeContext'

function Hero() {
  const { colors } = useTheme()
  
  return (
    <section className={`${colors.card} py-32`}>
      
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Main intro */}
        <div className="text-center mb-16">
          <p className={`${colors.accent} font-medium mb-4`}>
            Hi, I'm
          </p>
          
          <h1 className={`text-5xl font-bold ${colors.text} mb-5`}>
            <span className="typing-animation">Khushi Talaviya</span>
          </h1>
          
          <h2 className={`text-3xl ${colors.text} mb-8`}>
            Full-Stack Software Engineer
          </h2>
          
          <p className={`text-xl ${colors.text} max-w-3xl mx-auto mb-12`}>
            I'm a Computer Science graduate student at NJIT, graduating in May 2026. 
            I specialize in building scalable backend systems with Java and Spring Boot, 
            and creating modern web applications with React, Angular. 
          </p>
          
          <div className="flex gap-4 justify-center mb-16">
            <a 
              href="#projects" 
              className={`${colors.accentBg} text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition`}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={`border-2 ${colors.border} ${colors.text} px-8 py-3 rounded-lg font-medium ${colors.hover} transition`}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Quick facts */}
        <div className={`grid grid-cols-2 md:grid-cols-2 gap-6 ${colors.card} ${colors.border} border rounded-lg p-8`}>
          <div className="text-center">
            <div className={`text-3xl font-bold ${colors.accent} mb-2`}>May 2026</div>
            <div className={`text-sm ${colors.text}`}>Graduation</div>
          </div>
          
          <a 
  href="https://leetcode.com/u/Khushi_0912/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-center hover:scale-105 transition cursor-pointer"
>
  <div className={`text-3xl font-bold ${colors.accent} mb-2`}>80+</div>
  <div className={`text-sm ${colors.text}`}>LeetCode Solved</div>
</a>
          
          {/* <div className="text-center">
            <div className={`text-3xl font-bold ${colors.accent} mb-2`}>3</div>
            <div className={`text-sm ${colors.text}`}>Projects Deployed</div>
          </div> */}
          
        </div>
        
      </div>
      
    </section>
  )
}

export default Hero