import { useTheme } from '../ThemeContext'
function Projects() {
  const { colors } = useTheme()
  // Array of your projects - you'll fill in the details
  const projects = [
    {
      title: "AI Price Estimator",
      description: "AI-powered valuation platform for luxury watches and jewelry using fine-tuned GPT-4o, achieving 90-95% accuracy with live market prices.",
      tech: ["Java", "Spring Boot", "AngularJS", "OpenAI GPT-4o", "AWS EC2", "Supabase", "AWS Amplify", "CI/CD Pipelines"],
      image: "/images/aiestimator.png",
      liveLink: "https://estimate.forty7.com/", // Add your link here
      githubLink: "" // Add your link here
    },
    {
      title: "Job Search App",
      description: "Full-stack job search platform with React frontend and Spring Boot backend, featuring 15+ RESTful APIs and containerized deployment using Docker.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "Spring Mail"],
      image: "/images/jobsearch.png",
      liveLink: "",
      githubLink: ""
    },
    {
      title: "Flight Fare Prediction",
      description: "Machine learning model predicting flight fares with 82% accuracy, processing 11,000+ records using Python and Random Forest Regressor.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest"],
      image: "/images/flightfare.png",
      liveLink: "https://colab.research.google.com/drive/1XbL9oASvXc4yjL4LRTP_F4eYgMLFlmp2?usp=sharing%20",
      githubLink: ""
    }
  ]

    // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects]

return (
    <div className="min-h-screen py-20">
      
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <h1 className={`text-5xl font-bold ${colors.text} mb-4`}>Projects</h1>
        <p className={`text-xl ${colors.text}`}>A collection of my work</p>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div 
          className="flex gap-8 px-8 animate-scroll hover:pause-animation"
          style={{
            width: 'fit-content'
          }}
        >
          
          {duplicatedProjects.map((project, index) => (
            <div 
              key={index}
              className={`${colors.card} ${colors.border} border rounded-lg p-6 shadow-lg min-w-[350px] max-w-[350px] flex-shrink-0`}
            >
              
              
              {/* Project image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              
              <h3 className={`text-2xl font-bold ${colors.text} mb-3`}>
                {project.title}
              </h3>
              
              <p className={`${colors.text} mb-4`}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
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
              
              <div className="flex gap-4">
                {project.liveLink && (
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.accent} hover:opacity-80 font-medium`}
                  >
                    Live Demo →
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colors.text} hover:opacity-80 font-medium`}
                  >
                    GitHub →
                  </a>
                )}
              </div>
              
            </div>
          ))}
          
        </div>
      </div>
      
    </div>
  )
}

export default Projects