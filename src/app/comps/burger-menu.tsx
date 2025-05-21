import { useState } from 'react'
import Link from 'next/link'

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-5 h-5 focus:outline-none"
      >
        <div
          className={`transform transition-transform duration-300 ease-in-out bg-black h-0.5 w-full absolute top-1/2 left-0 ${
            isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
          }`}
        />
        <div
          className={`transform transition-opacity duration-300 ease-in-out bg-black h-0.5 w-full absolute top-1/2 left-0 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`transform transition-transform duration-300 ease-in-out bg-black h-0.5 w-full absolute top-1/2 left-0 ${
            isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
          }`}
        />
      </button>
      <div
        className={`${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        } absolute top-16 right-0 bg-[#d7cfbb] p-4 rounded-lg shadow-lg origin-top transition-transform duration-300 z-9999`}
        style={{ transformOrigin: 'top' }}
      >
        <nav>
          <ul className="space-y-2">
            {['Home', 'Contact', 'About', 'Projects'].map((item) => (
              <li key={item}>
                <Link
                  href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                  className="block px-3 py-2 rounded hover:bg-stone-300 transition-colors text-black"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
