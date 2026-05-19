import { useEffect, useState } from 'react'

import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { IntroSection } from './components/IntroSection'
import { ContactSection } from './components/ContactSection'
import { BackgroundEffects } from './components/BackgroundEffects'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
  })

  useEffect(() => {
    const media = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )

    const listener = (
      e: MediaQueryListEvent,
    ) => {
      setDarkMode(e.matches)
    }

    media.addEventListener(
      'change',
      listener,
    )

    return () => {
      media.removeEventListener(
        'change',
        listener,
      )
    }
  }, [])

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? 'bg-[#020617] text-slate-100'
          : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      <BackgroundEffects darkMode={darkMode} />

      <div className="relative z-10">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() =>
            setDarkMode((prev) => !prev)
          }
        />

        <main>
          <HeroSection darkMode={darkMode} />

          <ProjectsSection darkMode={darkMode} />

          <IntroSection darkMode={darkMode} />

          <ContactSection darkMode={darkMode} />
        </main>
      </div>
    </div>
  )
}

export default App