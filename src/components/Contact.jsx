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
  
  <p className={`text-xl ${colors.text} mb-12 text-center`}>
    I'm currently looking for New Grad Software Engineer opportunities starting Summer 2026.
  </p>

  {/* Two column layout */}
  <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
    
    {/* LEFT SIDE - Contact Info */}
<div>
  
  {/* Email */}
  <div className="mb-6">
    <div className={`flex items-start gap-3`}>
      <span className={`${colors.accent} font-medium min-w-[80px]`}>Email:</span>
      <a 
        href="mailto:khushitalaviya0912@gmail.com"
        className={`${colors.text} hover:opacity-80 transition`}
      >
        khushitalaviya0912@gmail.com
      </a>
    </div>
  </div>

  {/* Location */}
  <div className="mb-6">
    <div className={`flex items-start gap-3`}>
      <span className={`${colors.accent} font-medium min-w-[80px]`}>Location:</span>
      <p className={`${colors.text}`}>
        Jersey City, NJ
      </p>
    </div>
  </div>
  
</div>

{/* MIDDLE - OR divider */}
<div className="hidden md:flex absolute left-[45%] transform -translate-x-1/2 items-center justify-center">
  <div className="w-12 h-12 flex items-center justify-center">
    <span className={`${colors.text} font-bold text-xl`}>OR</span>
  </div>
</div>
    {/* RIGHT SIDE - Form */}
    <div>
      
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
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-2 gap-4">
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
              placeholder="your@email.com"
            />
          </div>
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
      
    </div>
    
  </div>
  
</section>
  )
}

export default Contact