import { useState } from 'react'
import { useTheme } from '../ThemeContext'

function Projects() {
  const { colors } = useTheme()
  const [selectedProject, setSelectedProject] = useState(null)
  
  const projects = [
    {
      title: "AI Price Estimator",
      description: "AI-powered valuation platform for luxury watches and jewelry using fine-tuned GPT-4o, achieving 90-95% accuracy with live market prices. Built with Java Spring Boot backend, AngularJS frontend, and deployed on AWS EC2 with PostgreSQL database.",
      tech: ["Java", "Spring Boot", "AngularJS", "OpenAI GPT-4o", "AWS EC2", "PostgreSQL"],
      image: "/images/aiestimator.png",
      liveLink: "https://estimate.forty7.com/",
      githubLink: "" // Leave empty if no repo
    },
    {
      title: "Job Search App",
      description: "Full-stack job search platform with React frontend and Spring Boot backend, featuring 15+ RESTful APIs and containerized deployment using Docker. Implemented email notifications using Spring Mail for application updates.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "Spring Mail"],
      image: "/images/jobsearch.png",
      liveLink: "",
      githubLink: ""
    },
    {
      title: "Flight Fare Prediction",
      description: "Machine learning model predicting flight fares with 82% accuracy, processing 11,000+ records using Python and Random Forest Regressor. Utilized Pandas and NumPy for data preprocessing and feature engineering.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest"],
      image: "/images/flightfare.png",
      liveLink: "https://colab.research.google.com/drive/1XbL9oASvXc4yjL4LRTP_F4eYgMLFlmp2?usp=sharing%20",
      githubLink: ""
    }
  ]

  const duplicatedProjects = [...projects, ...projects]

  return (
    <div className="min-h-screen py-20">
      
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h1 className={`text-3xl font-bold ${colors.text} mb-4`}>Projects</h1>
        <p className={`text-xl ${colors.text}`}>Some of my work</p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div 
          className="flex gap-8 px-8 animate-scroll hover:pause-animation"
          style={{ width: 'fit-content' }}
        >
          
          {duplicatedProjects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className={`${colors.card} ${colors.border} border rounded-lg p-6 shadow-lg min-w-[350px] max-w-[350px] flex-shrink-0 cursor-pointer hover:scale-105 transition-transform`}
            >
              
              <img 
                src={project.image} 
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              
              <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={`${colors.accentBg} text-white px-3 py-1 rounded-full text-sm`}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className={`${colors.text} text-sm`}>
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              
            </div>
          ))}
          
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className={`${colors.card} rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8`}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className={`float-right ${colors.text} hover:opacity-80 text-2xl`}
            >
              ×
            </button>

            {/* Project image */}
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            {/* Title */}
            <h2 className={`text-3xl font-bold ${colors.text} mb-4`}>
              {selectedProject.title}
            </h2>
            
            {/* Description */}
            <p className={`${colors.text} text-lg mb-6 leading-relaxed`}>
              {selectedProject.description}
            </p>
            
            {/* Tech stack */}
            <div className="mb-6">
              <h3 className={`${colors.accent} font-bold mb-3`}>Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className={`${colors.accentBg} text-white px-3 py-2 rounded-lg text-sm`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
              <div className="flex justify-between items-center">
                
                {/* Left side - Demo link */}
                <div>
                  {selectedProject.liveLink ? (
                    <a 
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.accent} hover:opacity-80 transition font-medium text-sm`}
                    >
                      Demo 
                    </a>
                  ) : (
                    <span className={`${colors.text} opacity-60 italic`}>
                      Demo coming soon
                    </span>
                  )}
                </div>

                {/* Right side - GitHub icon */}
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.text} hover:opacity-80 transition`}
                    aria-label="View on GitHub"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                
              </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Projects