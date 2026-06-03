export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-500 dark:text-blue-400 text-sm font-mono">06.</span>
          <span className="text-gray-400 dark:text-white/30 text-sm font-medium uppercase tracking-widest">Contacto</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Hablemos</h2>
          <p className="text-gray-500 dark:text-white/40 text-base leading-relaxed mb-10">
            Estoy abierto a oportunidades de trabajo, colaboraciones o simplemente conversar sobre tecnologia, bases de datos y sistemas backend.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="mailto:juangaguamo@gmail.com"
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-medium transition-all text-sm shadow-sm hover:shadow-lg hover:shadow-blue-500/25">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              juangaguamo@gmail.com
            </a>
            <a href="https://github.com/JuanGualim" target="_blank" rel="noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white font-medium transition-all text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              github.com/JuanGualim
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
