const mainTech = [
  { name: 'PostgreSQL', abbr: 'PG', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20', desc: 'Base de datos principal' },
  { name: 'FastAPI', abbr: 'FA', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20', desc: 'Backend APIs' },
  { name: 'SQLAlchemy', abbr: 'SA', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20', desc: 'ORM Python' },
  { name: 'React', abbr: 'RE', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-200 dark:border-cyan-500/20', desc: 'Frontend' },
  { name: 'Docker', abbr: 'DO', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20', desc: 'Contenedores' },
]
const otherTech = ['Node.js','Express','MySQL','Go','Tailwind CSS','Git','GitHub','Railway','Vercel']

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-500 dark:text-blue-400 text-sm font-mono">03.</span>
          <span className="text-gray-400 dark:text-white/30 text-sm font-medium uppercase tracking-widest">Tecnologias</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10">Stack tecnico</h2>
        <div className="mb-6">
          <p className="text-gray-400 dark:text-white/20 text-xs uppercase tracking-widest mb-4">Tecnologias principales</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {mainTech.map(tech => (
              <div key={tech.name} className={`rounded-xl border p-4 ${tech.bg} hover:scale-[1.02] transition-all cursor-default`}>
                <div className={`text-2xl font-bold ${tech.color} mb-1 font-mono`}>{tech.abbr}</div>
                <div className="text-gray-800 dark:text-white font-medium text-sm">{tech.name}</div>
                <div className="text-gray-400 dark:text-white/30 text-xs mt-1">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-400 dark:text-white/20 text-xs uppercase tracking-widest mb-4">Otras tecnologias</p>
          <div className="flex flex-wrap gap-2">
            {otherTech.map(tech => (
              <span key={tech} className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 text-gray-600 dark:text-white/50 text-sm hover:text-gray-900 dark:hover:text-white/80 hover:border-gray-300 dark:hover:border-white/10 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
