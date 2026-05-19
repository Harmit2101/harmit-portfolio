interface IntroSectionProps {
  darkMode: boolean
}

export function IntroSection({
  darkMode,
}: IntroSectionProps) {
  return (
    <section
      id="about"
      className="scroll-mt-32 px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div
          className={`rounded-[2rem] border p-8 sm:p-10 lg:p-14 ${
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
            ABOUT
          </span>

          <h2
            className={`mt-8 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${
              darkMode
                ? 'text-white'
                : 'text-slate-900'
            }`}
          >
            Designing modern interfaces with
            clarity and purpose.
          </h2>

          <div className="mt-10 grid gap-8 text-lg leading-9 sm:grid-cols-2">
            <p
              className={
                darkMode
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }
            >
              I focus on building frontend
              experiences that feel polished,
              scalable and intuitive across every
              screen size.
            </p>

            <p
              className={
                darkMode
                  ? 'text-slate-400'
                  : 'text-slate-600'
              }
            >
              My work combines modern React
              architecture, thoughtful interaction
              design and maintainable engineering
              practices.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            {
              title: 'Frontend Architecture',
              description:
                'Creating scalable component systems with clean structure and reusable patterns.',
            },
            {
              title: 'UI / UX Focus',
              description:
                'Creating elegant interfaces with smooth interaction, spacing consistency and modern layouts.',
            },
            {
              title: 'Performance Mindset',
              description:
                'Optimizing responsiveness, rendering flow and overall frontend experience across devices.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-[2rem] border p-8 sm:p-10 ${
                darkMode
                  ? 'border-white/10 bg-white/[0.02]'
                  : 'border-slate-200 bg-white/70'
              }`}
            >
              <h3
                className={`text-2xl font-semibold ${
                  darkMode
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-6 text-lg leading-9 ${
                  darkMode
                    ? 'text-slate-400'
                    : 'text-slate-600'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}