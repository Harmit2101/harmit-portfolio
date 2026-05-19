interface ContactSectionProps {
  darkMode: boolean
}

export function ContactSection({
  darkMode,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-32 px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <div
        className={`mx-auto grid max-w-7xl gap-10 rounded-[2rem] border p-8 sm:p-10 lg:grid-cols-2 lg:p-14 ${
          darkMode
            ? 'border-white/10 bg-white/[0.02]'
            : 'border-slate-200 bg-white/70'
        }`}
      >
        <div>
          <span
            className={`text-xs font-medium tracking-[0.5em] ${
              darkMode
                ? 'text-cyan-300'
                : 'text-slate-500'
            }`}
          >
            CONTACT
          </span>

          <h2
            className={`mt-8 text-4xl font-semibold leading-tight sm:text-5xl ${
              darkMode
                ? 'text-white'
                : 'text-slate-900'
            }`}
          >
            Let’s build
            <br />
            something modern.
          </h2>

          <p
            className={`mt-8 max-w-lg text-lg leading-9 ${
              darkMode
                ? 'text-slate-400'
                : 'text-slate-600'
            }`}
          >
            Available for selected freelance
            projects and full stack / frontend - engineering / developing
            opportunities worldwide.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <span
              className={`text-sm ${
                darkMode
                  ? 'text-slate-500'
                  : 'text-slate-500'
              }`}
            >
              Email
            </span>

            <h3
              className={`mt-3 text-2xl font-semibold break-all ${
                darkMode
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              vhmvaiwala@gmail.com
            </h3>
          </div>

          <div>
            <span
              className={`text-sm ${
                darkMode
                  ? 'text-slate-500'
                  : 'text-slate-500'
              }`}
            >
              Phone
            </span>

            <h3
              className={`mt-3 text-2xl font-semibold ${
                darkMode
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              +91 9106147748
            </h3>
          </div>

          <div>
            <span
              className={`text-sm ${
                darkMode
                  ? 'text-slate-500'
                  : 'text-slate-500'
              }`}
            >
              Website
            </span>

            <h3
              className={`mt-3 text-2xl font-semibold ${
                darkMode
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              hmcoding.com
            </h3>
          </div>

          <p
            className={`pt-4 text-sm ${
              darkMode
                ? 'text-slate-500'
                : 'text-slate-500'
            }`}
          >
            Based in India • Working worldwide
          </p>
        </div>
      </div>
    </section>
  )
}