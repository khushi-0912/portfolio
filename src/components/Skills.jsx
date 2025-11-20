import { useTheme } from '../ThemeContext'
function Skills() {
  
  const { colors } = useTheme()
  // Organize skills by category
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "BootStrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "AngularJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" }
      ]
    },
    {
      category: "Tools & Cloud",
      skills: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ]
    },
    // {
    //   category: "Concepts",
    //   skills: ["REST APIs", "CI/CD", "Agile", "SDLC", "Microservices"]
    // }
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
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`flex items-center gap-2 ${colors.text} ${colors.hover} px-4 py-2 rounded-lg ${colors.border} border`}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
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