interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export function Navbar({
  darkMode,
  toggleDarkMode,
}: NavbarProps) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 px-5 pt-5 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-4 sm:px-7 ${
          darkMode
            ? 'border-white/10 bg-[#050816]/80 backdrop-blur-xl'
            : 'border-slate-200 bg-white/80 backdrop-blur-xl'
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3"
        >
          <div className="h-3 w-3 rounded-full bg-cyan-400" />

          <span
            className={`text-sm font-semibold tracking-[0.4em] ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            HARMIT
          </span>
        </button>

        <div className="hidden items-center gap-10 md:flex">
          <button
            onClick={() => scrollToSection('projects')}
            className={`text-sm transition ${
              darkMode
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className={`text-sm transition ${
              darkMode
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className={`text-sm transition ${
              darkMode
                ? 'text-slate-300 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Contact
          </button>
        </div>

        <button
          onClick={toggleDarkMode}
          className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
            darkMode
              ? 'border-white/10 bg-white/10 text-white hover:bg-white/20'
              : 'border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200'
          }`}
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  )
}