interface CardProps {
  children: React.ReactNode
  darkMode: boolean
  className?: string
}

export function SectionCard({
  children,
  darkMode,
  className = '',
}: CardProps) {
  return (
    <div
      className={`rounded-[32px] border p-8 transition-all duration-300 ${
        darkMode
          ? 'border-slate-800 bg-[#091427]'
          : 'border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)]'
      } ${className}`}
    >
      {children}
    </div>
  )
}

interface ButtonProps {
  children: React.ReactNode
  primary?: boolean
  darkMode: boolean
  href?: string
}

export function PillButton({
  children,
  primary,
  darkMode,
  href,
}: ButtonProps) {
  const classes = primary
    ? 'bg-sky-500 text-black hover:bg-sky-400'
    : darkMode
    ? 'border border-slate-700 bg-[#020817] text-white hover:border-slate-500'
    : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100'

  return (
    <a
      href={href}
      className={`inline-flex rounded-full px-6 py-3 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </a>
  )
}

interface TagProps {
  children: React.ReactNode
  darkMode: boolean
}

export function Tag({ children, darkMode }: TagProps) {
  return (
    <div
      className={`rounded-3xl border px-5 py-4 text-sm ${
        darkMode
          ? 'border-slate-800 bg-[#020817] text-white'
          : 'border-slate-200 bg-slate-50 text-slate-800'
      }`}
    >
      {children}
    </div>
  )
}