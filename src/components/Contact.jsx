import { useState } from 'react'
import { useTheme } from '../ThemeContext'
function Contact() {
  const { colors } = useTheme()
  // useState is used to basically refresh the component when the status changes
  const [status, setStatus] = useState('')
  // We initialize status as an empty string and setStatus is the variable we use to update the status. Once the status has 
  // been updated the useState hook will re-render the component to reflect the changes in the UI.
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent the browse to go on formFree's page.
    const form = e.target
    
    try {
      const response = await fetch('https://formspree.io/f/xblqlrzb', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }
  
    return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      
      <h2 className={`text-4xl font-bold ${colors.text} mb-12 text-center`}>
        Get In Touch
      </h2>
      
      <div className="max-w-2xl mx-auto">
        
        <p className={`text-xl ${colors.text} mb-8 text-center`}>
          I'm currently looking for New Grad Software Engineer opportunities starting Summer 2025. 
          Feel free to reach out!
        </p>
        
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            ✗ Something went wrong. Please try again or email me directly.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label htmlFor="name" className={`block text-sm font-medium ${colors.text} mb-2`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full px-4 py-3 ${colors.border} border rounded-lg focus:ring-2 focus:ring-offset-0 ${colors.bg} ${colors.text}`}
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${colors.text} mb-2`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full px-4 py-3 ${colors.border} border rounded-lg focus:ring-2 focus:ring-offset-0 ${colors.bg} ${colors.text}`}
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className={`block text-sm font-medium ${colors.text} mb-2`}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className={`w-full px-4 py-3 ${colors.border} border rounded-lg focus:ring-2 focus:ring-offset-0 ${colors.bg} ${colors.text}`}
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label htmlFor="message" className={`block text-sm font-medium ${colors.text} mb-2`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className={`w-full px-4 py-3 ${colors.border} border rounded-lg focus:ring-2 focus:ring-offset-0 resize-none ${colors.bg} ${colors.text}`}
              placeholder="Your message..."
            />
          </div>
          
          <button
            type="submit"
            className={`w-full ${colors.accentBg} text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition`}
          >
            Send Message
          </button>
          
        </form>
        
        <div className={`mt-12 pt-8 ${colors.border} border-t`}>
          <p className={`text-center ${colors.text} mb-4`}>Or connect with me on:</p>
          <div className="flex gap-6 justify-center">
            
            <a 
              href="https://linkedin.com/in/khushi-talaviya"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.text} hover:opacity-80 transition`}
            >
              💼 LinkedIn
            </a>
            
            <a 
              href="https://github.com/khushi-0912"
              target="_blank"
              rel="noopener noreferrer"
              className={`${colors.text} hover:opacity-80 transition`}
            >
              💻 GitHub
            </a>
            
          </div>
        </div>
        
      </div>
      
    </section>
  )
}

export default Contact