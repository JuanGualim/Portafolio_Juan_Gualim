export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
          Disponible para oportunidades
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
          Juan Gabriel
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600">
            Gualim Molina
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 dark:text-white/50 font-medium mb-4 tracking-wide">
          Backend Developer &amp; Database Enthusiast
        </p>
        <p className="max-w-2xl mx-auto text-gray-400 dark:text-white/40 text-base sm:text-lg leading-relaxed mb-10">
          Estudiante de Ingenieria en Ciencias de la Computacion apasionado por el diseno de bases de datos,
          la arquitectura backend y el desarrollo de aplicaciones web enfocadas en resolver problemas reales de negocio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#projects" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-sm">
            Ver proyectos
          </a>
          <a href="https://github.com/JuanGualim" target="_blank" rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white font-medium transition-all text-sm flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 dark:text-white/20 text-xs">
          <span>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 dark:from-white/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
