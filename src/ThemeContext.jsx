import { createContext, useContext, useState, useEffect } from 'react'
//This class is being used to manage themes (light and dark) across the application via a click.
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Check if user had a saved preference, default to light
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || 'light'
  })

  // Save theme preference whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const colors = {
    light: {
      bg: 'bg-[#FBF8F3]',           // cream background
      text: 'text-[#4A3829]',        // brown text
      accent: 'text-[#8B6F47]',      // lighter brown accent
      accentBg: 'bg-[#8B6F47]',      // brown background for buttons
      border: 'border-[#D4C5B9]',    // light brown border
      card: 'bg-white',              // white cards
      hover: 'hover:bg-[#F5EFE7]'    // subtle hover
    },
    dark: {
    bg: 'bg-[#1a1f2e]',              // Dark navy blue (softer than black)
    text: 'text-[#e4e4e7]',          // Off-white (easy on eyes)
    accent: 'text-[#60a5fa]',        // Soft blue accent
    accentBg: 'bg-[#60a5fa]',        // Soft blue for buttons
    accentBgDark: 'bg-[#2d3548]',    // Slightly lighter navy
    border: 'border-[#374151]',      // Gray border (visible but subtle)
    card: 'bg-[#252b3b]',            // Lighter navy for cards
    hover: 'hover:bg-[#2d3548]'      // Subtle hover
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: colors[theme] }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}