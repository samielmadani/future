import { useEffect, useState } from 'react'
import Link from 'next/link'
import { RefreshCw } from "lucide-react"


const DEFAULT_PRIMARY_COLOR = 'rgb(215, 207, 187)'
const DEFAULT_SECONDARY_COLOR = 'rgb(86, 84, 73)'
const DEFAULT_DARK_COLOR = 'rgb(17 18 13)' // Set your default dark color here

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [primaryColor, setPrimaryColor] = useState(DEFAULT_PRIMARY_COLOR)
  const [secondaryColor, setSecondaryColor] = useState(DEFAULT_SECONDARY_COLOR)
  const [darkColor, setDarkColor] = useState(DEFAULT_DARK_COLOR) // New state for dark color

  useEffect(() => {
    // Load saved colors from localStorage
    const savedPrimaryColor = localStorage.getItem('primaryColor')
    const savedSecondaryColor = localStorage.getItem('secondaryColor')
    const savedDarkColor = localStorage.getItem('darkColor') // Load dark color

    if (savedPrimaryColor) {
      updateColor(savedPrimaryColor, setPrimaryColor, '--primary')
    }
    if (savedSecondaryColor) {
      updateColor(savedSecondaryColor, setSecondaryColor, '--secondary')
    }
    if (savedDarkColor) { // Check for dark color
      updateColor(savedDarkColor, setDarkColor, '--darkk')
    }
  }, [])

  const resetColors = () => {
    updateColor(DEFAULT_PRIMARY_COLOR, setPrimaryColor, '--primary')
    updateColor(DEFAULT_SECONDARY_COLOR, setSecondaryColor, '--secondary')
    updateColor(DEFAULT_DARK_COLOR, setDarkColor, '--darkk') // Reset dark color
    // Clear localStorage
    localStorage.removeItem('primaryColor')
    localStorage.removeItem('secondaryColor')
    localStorage.removeItem('darkColor') // Remove dark color from localStorage
  }

  const updateColor = (color: string, setter: (color: string) => void, cssVar: string) => {
    setter(color)
    document.documentElement.style.setProperty(cssVar, color)
    // Save to localStorage
    try {
      localStorage.setItem(cssVar === '--primary' ? 'primaryColor' : cssVar === '--secondary' ? 'secondaryColor' : 'darkColor', color) // Update key for dark color
    } catch (error) {
      console.error('Error saving color to localStorage:', error)
    }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-5 h-5 focus:outline-none"
      >
        <div
          className={`transform transition-transform duration-300 ease-in-out html-background h-0.5 w-full absolute top-1/2 left-0 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`}
        />
        <div
          className={`transform transition-opacity duration-300 ease-in-out html-background h-0.5 w-full absolute top-1/2 left-0 ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <div
          className={`transform transition-transform duration-300 ease-in-out html-background h-0.5 w-full absolute top-1/2 left-0 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
            }`}
        />
      </button>
      <div
        className={`${isOpen ? 'scale-y-100' : 'scale-y-0'
          } absolute top-16 right-0 background-primary p-4 rounded-lg shadow-lg origin-top transition-transform duration-300 z-9999`}
        style={{ transformOrigin: 'top' }}
      >
        <nav>
          <ul className="space-y-2">
            {['Home', 'About', 'Contact'].map((item) => (
              <li key={item}>
                {/* {item === 'CV' ? (
                  <a
                    href="https://drive.google.com/file/d/1uVR0KNA822k-DwyS4ZxC6k0068X9wA3t/view?usp=drive_link" // Replace with the actual link to your CV
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 rounded hover:bg-stone-300 transition-colors primary-font"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="navbar2">{item}</span>
                  </a> */}
                
                  <Link
                    href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                    className="block px-3 py-2 rounded hover:bg-stone-300 transition-colors primary-font"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="navbar2">{item}</span>
                  </Link>
                
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-1">
            <ColorPicker
              label="Primary"
              color={primaryColor}
              onChange={(color) => updateColor(color, setPrimaryColor, '--primary')}
            />
            <ColorPicker
              label="Secondary"
              color={secondaryColor}
              onChange={(color) => updateColor(color, setSecondaryColor, '--secondary')}
            />
            <ColorPicker
              label="Other"
              color={darkColor} // Add dark color picker
              onChange={(color) => updateColor(color, setDarkColor, '--darkk')}
            />
            <button
              style={{ color: '#000' }}
              onClick={resetColors}
              title="Reset to Default Colors"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}


function ColorPicker({ label, color, onChange }: { label: string; color: string; onChange: (color: string) => void }) {
  return (
    <div className="flex flex-col items-center">
      <strong className="text-black" style={{ fontSize: '14px' }}>{label}</strong>
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
        id={`${label.toLowerCase()}ColorPicker`}
      />
      <label
        htmlFor={`${label.toLowerCase()}ColorPicker`}
        className="block w-8 h-8 rounded-full cursor-pointer border-2 border-black"
        style={{ backgroundColor: color }}
        title={`${label} Color`}
      />
    </div>
  )
}