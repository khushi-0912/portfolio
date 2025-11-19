import Navbar from './components/Navbar' // Import the Navbar component
import Hero from './components/Hero'   // Import the Hero component
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'  // Import the Contact component
import Footer from './components/Footer'   // Import the Footer component
import Experience from './components/Experience'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './ThemeContext.jsx'
function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </>
  )
}
function App() {
  const { colors } = useTheme()
  
  return (
    <BrowserRouter>
      <div className={`min-h-screen ${colors.bg}`}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App