const principles = [
  {
    number: '01',
    title: 'Pensar primero en los datos',
    desc: 'Creo que una aplicacion solida comienza con una base de datos bien disenada. El modelo de datos define la arquitectura, no al reves.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>),
  },
  {
    number: '02',
    title: 'Resolver problemas reales',
    desc: 'Me interesa construir herramientas que aporten valor a procesos y operaciones reales. El software existe para resolver algo, no para existir.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>),
  },
  {
    number: '03',
    title: 'Construir para crecer',
    desc: 'Busco crear sistemas mantenibles, escalables y faciles de extender. El codigo que no se puede modificar es tecnicamente deuda.',
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-500 dark:text-blue-400 text-sm font-mono">05.</span>
          <span className="text-gray-400 dark:text-white/30 text-sm font-medium uppercase tracking-widest">Filosofia</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
        </div>
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Como abordo el desarrollo de software</h2>
          <p className="text-gray-500 dark:text-white/40 text-base leading-relaxed">Tres principios que guian como pienso sobre los sistemas que construyo.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] p-6 hover:border-blue-200 dark:hover:border-blue-500/20 hover:bg-blue-50/50 dark:hover:bg-blue-500/[0.03] transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400">{p.icon}</div>
                <span className="text-gray-200 dark:text-white/10 font-mono font-bold text-xl">{p.number}</span>
              </div>
              <h3 className="text-gray-800 dark:text-white font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
