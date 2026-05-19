interface BackgroundEffectsProps {
  darkMode: boolean
}

export function BackgroundEffects({
  darkMode,
}: BackgroundEffectsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {darkMode ? (
        <>
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),transparent_35%)]" />
        </>
      ) : (
        <>
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-sky-200/50 blur-3xl" />

          <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-100/40 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),transparent_40%)]" />
        </>
      )}
    </div>
  )
}