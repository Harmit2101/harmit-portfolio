import { projects } from '../constants/projects'

interface ProjectsSectionProps {
  darkMode: boolean
}

export function ProjectsSection({
  darkMode,
}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="scroll-mt-32 px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <span
          className={`text-xs font-medium tracking-[0.5em] ${
            darkMode
              ? 'text-cyan-300'
              : 'text-slate-500'
          }`}
        >
          SELECTED WORK
        </span>

        <h2
          className={`mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl ${
            darkMode
              ? 'text-white'
              : 'text-slate-900'
          }`}
        >
          Building products
          <br />
          with clarity and scale.
        </h2>

        <div className="mt-14 space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col justify-between gap-8 rounded-[2rem] border p-8 lg:flex-row lg:items-center lg:p-12 ${
                darkMode
                  ? 'border-white/10 bg-white/[0.02]'
                  : 'border-slate-200 bg-white/70'
              }`}
            >
              <div className="max-w-3xl">
                <span
                  className={`text-xs font-medium tracking-[0.5em] ${
                    darkMode
                      ? 'text-cyan-300'
                      : 'text-slate-500'
                  }`}
                >
                  {project.category.toUpperCase()}
                </span>

                <h3
                  className={`mt-6 text-3xl font-semibold ${
                    darkMode
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-6 text-lg leading-9 ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-600'
                  }`}
                >
                  {project.description}
                </p>
              </div>

              {project.link === '#' ? (
                <div
                  className={`rounded-full px-8 py-4 text-sm font-semibold ${
                    darkMode
                      ? 'bg-white/10 text-slate-400'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {project.buttonText}
                </div>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full px-8 py-4 text-sm font-semibold transition ${
                    darkMode
                      ? 'bg-white text-slate-900 hover:bg-slate-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  {project.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}