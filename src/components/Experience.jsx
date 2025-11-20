import { useState } from 'react'
import { useTheme } from '../ThemeContext'

function Experience() {
  const { colors } = useTheme()
  const [activeTab, setActiveTab] = useState('work')

  const data = {
    education: [
      {
        title: "Master of Science in Computer Science",
        institution: "New Jersey Institute of Technology",
        location: "Newark, NJ",
        dates: "2024 - 2026"
      },
      {
        title: "Bachelor of Engineering in Computer Science",
        institution: "Narsee Monjee Institute of Management Studies",
        location: "Shirpur, India",
        dates: "2020 - 2024"
      }
    ],
    work: [
        {
        title: "Teaching Assistant (Java Programming)",
        company: "New Jersey Institute of Technology",
        location: "Newark, NJ",
        dates: "August 2025 - Present",
      },
      {
        title: "Research Assistant",
        company: "New Jersey Institute of Technology",
        location: "Newark, NJ",
        dates: "April 2025 - June 2025",
      },
      {
        title: "Full Stack Java Developer Intern",
        company: "BNP Paribas",
        location: "Remote",
        dates: "Jan 2024 - July 2024"
      }
    ]
  }

  const currentData = data[activeTab] || []

  return (
    <section id="experience" className={`${colors.bg} py-20`}>
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-5xl font-bold ${colors.text} mb-2`}>
            Experience
          </h2>
          <p className={`${colors.text} opacity-60`}>my journey</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-12 mb-16">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 pb-2 border-b-2 transition ${
              activeTab === 'education' 
                ? `${colors.accent} border-current` 
                : `${colors.text} opacity-50 border-transparent hover:opacity-100`
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
            <span className="font-medium">education</span>
          </button>

          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 pb-2 border-b-2 transition ${
              activeTab === 'work' 
                ? `${colors.accent} border-current` 
                : `${colors.text} opacity-50 border-transparent hover:opacity-100`
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
  </svg>
            <span className="font-medium">work</span>
          </button>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

            {/* Timeline items */}
            <div className="space-y-12">
              {currentData.map((item, index) => (
                <div key={index} className="relative">
                  
                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#1a1f2e] z-10" />

                  {/* Content - alternating sides */}
                  <div className={`flex ${index % 2 === 0 ? 'justify-start pr-1/2' : 'justify-end pl-1/2'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      
                      <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                        {item.title}
                      </h3>
                      
                      <p className={`${colors.accent} font-medium mb-1`}>
                        {item.company || item.institution}
                      </p>
                      
                      <p className={`${colors.text} opacity-60 text-sm mb-2`}>
                        {item.location}
                      </p>
                      
                      <p className={`${colors.text} opacity-60 text-sm mb-3`}>
                        📅 {item.dates}
                      </p>

                      {item.description && (
                        <p className={`${colors.text} text-sm`}>
                          {item.description}
                        </p>
                      )}
                      
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience