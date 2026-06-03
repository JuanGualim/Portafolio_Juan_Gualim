const events = [
  { year: '2024', title: 'Primeros pasos', desc: 'Primeros proyectos web y fundamentos de desarrollo. Introduccion a bases de datos relacionales y logica de programacion.' },
  { year: '2025', title: 'Profundizacion tecnica', desc: 'Profundizacion en bases de datos y backend. Diseno de APIs REST, modelado relacional avanzado y primeros sistemas completos.' },
  { year: '2026', title: 'Sistemas empresariales', desc: 'Desarrollo de sistemas empresariales completos y arquitecturas mas robustas. Integracion de Docker, autenticacion y despliegue en produccion.' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-500 dark:text-blue-400 text-sm font-mono">04.</span>
          <span className="text-gray-400 dark:text-white/30 text-sm font-medium uppercase tracking-widest">Trayectoria</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">Como llegue aqui</h2>
        <div className="relative">
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gray-200 dark:bg-white/5 hidden sm:block" />
          <div className="flex flex-col gap-8">
            {events.map((event, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-20 flex-col items-center gap-2 hidden sm:flex">
                  <div className="w-3 h-3 rounded-full border-2 border-blue-500 bg-white dark:bg-[#0A0A0A] group-hover:bg-blue-500 transition-colors z-10" />
                  <span className="text-blue-500 dark:text-blue-400 font-mono font-bold text-sm">{event.year}</span>
                </div>
                <div className="flex-1 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] p-5 hover:border-gray-300 dark:hover:border-white/10 group-hover:bg-white dark:group-hover:bg-white/[0.04] transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="sm:hidden text-blue-500 dark:text-blue-400 font-mono font-bold text-sm">{event.year}</span>
                    <h3 className="text-gray-800 dark:text-white font-semibold text-base">{event.title}</h3>
                  </div>
                  <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
