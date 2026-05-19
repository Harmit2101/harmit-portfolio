interface HeroSectionProps {
  darkMode: boolean
}

export function HeroSection({
  darkMode,
}: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <span
              className={`mb-8 text-xs font-medium tracking-[0.5em] ${
                darkMode
                  ? 'text-cyan-300'
                  : 'text-slate-500'
              }`}
            >
              FULL STACK DEVELOPER
            </span>

            <h1
              className={`max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl ${
                darkMode
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              Harmit Vaiwala
            </h1>

            <p
              className={`mt-8 max-w-2xl text-lg leading-9 ${
                darkMode
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              I design and build premium frontend
              experiences focused on performance,
              clean architecture and elegant
              interaction design.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() =>
                  scrollToSection('projects')
                }
                className={`rounded-full px-8 py-4 text-sm font-semibold transition ${
                  darkMode
                    ? 'bg-white text-slate-900 hover:bg-slate-200'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                View Projects
              </button>

              <button
                onClick={() =>
                  scrollToSection('contact')
                }
                className={`rounded-full border px-8 py-4 text-sm font-semibold transition ${
                  darkMode
                    ? 'border-white/10 text-white hover:bg-white/10'
                    : 'border-slate-300 text-slate-900 hover:bg-slate-100'
                }`}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div
            className={`rounded-[2rem] border p-8 sm:p-10 ${
              darkMode
                ? 'border-white/10 bg-white/[0.02]'
                : 'border-slate-200 bg-white/70'
            }`}
          >
            <span
              className={`text-xs font-medium tracking-[0.5em] ${
                darkMode
                  ? 'text-cyan-300'
                  : 'text-slate-500'
              }`}
            >
              APPROACH
            </span>

            <h2
              className={`mt-8 text-4xl font-semibold leading-tight lg:text-5xl ${
                darkMode
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              Elegant systems.
              <br />
              Premium interfaces.
            </h2>

            <p
              className={`mt-8 text-lg leading-9 ${
                darkMode
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }`}
            >
              I focus on refined interaction,
              scalable frontend systems and smooth
              user experiences across every device.
            </p>

            <div className="mt-10 space-y-4">
              {[
                'React-first architecture',
                'Type-safe reusable components',
                'Performance-aware UI systems',
              ].map((item) => (
                <div
                  key={item}
                  className={`rounded-2xl border px-6 py-5 text-sm ${
                    darkMode
                      ? 'border-white/10 bg-[#0b1023]'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}