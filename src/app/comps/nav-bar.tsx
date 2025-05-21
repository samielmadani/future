"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import myLogo from '../images/mylogo.png'
import { RefreshCw } from "lucide-react"

const DEFAULT_PRIMARY_COLOR = 'rgb(215, 207, 187)'
const DEFAULT_SECONDARY_COLOR = 'rgb(86, 84, 73)'
const DEFAULT_DARK_COLOR = 'rgb(17 18 13)' // Set your default dark color here

export function NavBar() {
  const [spin, setSpin] = useState(false)
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

    // Start the spinning animation
    setSpin(true)
    const timer = setTimeout(() => {
      setSpin(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

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

  const resetColors = () => {
    updateColor(DEFAULT_PRIMARY_COLOR, setPrimaryColor, '--primary')
    updateColor(DEFAULT_SECONDARY_COLOR, setSecondaryColor, '--secondary')
    updateColor(DEFAULT_DARK_COLOR, setDarkColor, '--darkk') // Reset dark color
    // Clear localStorage
    localStorage.removeItem('primaryColor')
    localStorage.removeItem('secondaryColor')
    localStorage.removeItem('darkColor') // Remove dark color from localStorage
  }

  return (
    <div className="flex justify-between w-full items-center z-50 relative p-4">
      <Link href="/" className="flex items-center">
        <Image
          src={myLogo}
          alt="Logo"
          width={48}
          height={48}
          className={`rounded-full ${spin ? 'animate-spin' : ''}`}
        />
      </Link>
      <nav className="hidden md:block">
        <div className="flex items-center gap-12">

          <div className="flex items-center space-x-4">
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
          <ul className="flex space-x-4 primary-font">
            {['Home', 'About', 'Contact'].map((item) => (
              <li key={item}>
                {/* {item === 'CV' ? (
                  <a
                    href="https://drive.google.com/file/d/1uVR0KNA822k-DwyS4ZxC6k0068X9wA3t/view?usp=drive_link" // Replace with the actual link to your CV
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded transition-colors"
                  >
                    <p className="navbar">{item}</p>
                  </a> */}
                 
                  <Link
                    href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                    className="px-3 py-2 rounded transition-colors"
                  >
                    <p className="navbar">{item}</p>
                  </Link>
                
              </li>
            ))}
          </ul>
        </div>
      </nav>
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
