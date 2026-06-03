import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre mi', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Tecnologias', href: '#technologies' },
  { label: 'Filosofia', href: '#philosophy' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bg = scrolled
    ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5'
    : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm">JG</div>
            <span className="text-white/80 font-medium text-sm hidden sm:block">Juan Gabriel</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                }`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
              aria-label="Toggle theme">
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
            <button className="md:hidden w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white/70">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0A0A]/95 backdrop-blur-md">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
