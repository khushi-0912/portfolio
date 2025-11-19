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
      bg: 'bg-white',                  // Pure white background
      text: 'text-[#1a1f2e]',          // Dark navy text (same as dark mode bg)
      accent: 'text-[#4b5563]',        // ← Dark gray
      accentBg: 'bg-[#4b5563]',        // ← Dark gray
      accentBgDark: 'bg-[#f3f4f6]',    // Light gray
      border: 'border-[#e5e7eb]',      // Light gray border
      card: 'bg-[#f9fafb]',            // Very light gray for cards
      hover: 'hover:bg-[#f3f4f6]'      // Subtle hover
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