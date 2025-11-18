import { useTheme } from '../ThemeContext'
function Skills() {
  
  const { colors } = useTheme()
  // Organize skills by category
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "Python", "TypeScript", "SQL", "PHP"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Spring MVC", "React", "Node.js", "AngularJS", "Hibernate", "JPA"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "H2"]
    },
    {
      category: "Tools & Cloud",
      skills: ["AWS", "Docker", "Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"]
    },
    {
      category: "Concepts",
      skills: ["REST APIs", "CI/CD", "Agile", "SDLC", "Microservices"]
    }
  ]

  return (
    <section id="skills" className={`${colors.card} py-20`}>
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className={`text-4xl font-bold ${colors.text} mb-12 text-center`}>
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {skillCategories.map((category, index) => (
            <div key={index} className={`${colors.card} rounded-lg p-6 ${colors.border} border`}>
              
              <h3 className={`text-xl font-bold ${colors.accent} mb-4`}>
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`${colors.text} ${colors.hover} px-4 py-2 rounded-lg text-sm font-medium ${colors.border} border`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
            </div>
          ))}
          
        </div>
        
      </div>
    </section>
  )
}

export default Skills