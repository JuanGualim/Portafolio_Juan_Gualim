import { useState } from 'react'

const filters = ['Todos', 'Backend', 'Base de Datos', 'Full Stack']

const projects = [
  {
    id: 1, featured: true,
    title: 'Teleprogreso Management System',
    subtitle: 'Sistema Empresarial',
    description: 'Sistema empresarial completo para gestion de empleados, control de asistencia, asignacion de tareas, administracion de activos y control de materiales.',
    highlights: ['Gestion de empleados','Control de asistencia','Gestion de tareas','Gestion de activos','Control de inventario','JWT Authentication','Arquitectura asincrona','PostgreSQL + PostGIS','Docker Compose'],
    tech: ['FastAPI','PostgreSQL','SQLAlchemy','React','Docker'],
    github: 'https://github.com/Gotkissss/Proyecto-Software-Teleprogreso',
    categories: ['Backend','Base de Datos','Full Stack'],
  },
  {
    id: 2, featured: false,
    title: 'Sistema de Inventario y Ventas',
    subtitle: 'Aplicacion Web',
    description: 'Aplicacion web para gestionar inventario, clientes, ventas y reportes empresariales con stored procedures y arquitectura por capas.',
    highlights: ['Reportes analiticos','Clientes elite','Productos mas vendidos','Stored Procedures','Arquitectura por capas'],
    tech: ['Node.js','Express','Sequelize','MySQL','React','Tailwind'],
    github: 'https://github.com/JuanGualim/Proyecto_2_DB1',
    categories: ['Backend','Base de Datos','Full Stack'],
  },
  {
    id: 3, featured: false,
    title: 'Series Tracker',
    subtitle: 'API REST + Frontend',
    description: 'Aplicacion para gestionar series, progreso de episodios y valoraciones personales. Backend en Go con frontend independiente y deploy distribuido.',
    highlights: ['Backend en Go','API REST','Frontend independiente','Deploy distribuido','Integracion cliente-servidor'],
    tech: ['Go','React','REST API'],
    github: 'https://github.com/JuanGualim/Proyecto1_Web_frontend',
    githubBack: 'https://github.com/JuanGualim/Proyecto1_Web_backend',
    categories: ['Backend','Full Stack'],
  },
]

const techColors = {
  FastAPI: 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-300 dark:border-green-500/20',
  PostgreSQL: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/20',
  SQLAlchemy: 'bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-500/20',
  React: 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/20',
  Docker: 'bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-300 dark:border-sky-500/20',
  'Node.js': 'bg-lime-100 dark:bg-lime-500/10 text-lime-700 dark:text-lime-400 border-lime-300 dark:border-lime-500/20',
  Express: 'bg-gray-100 dark:bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-500/20',
  Sequelize: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-500/20',
  MySQL: 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-500/20',
  Tailwind: 'bg-teal-100 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-300 dark:border-teal-500/20',
  Go: 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/20',
  'REST API': 'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-300 dark:border-violet-500/20',
}

function GHIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const filtered = activeFilter === 'Todos' ? projects : projects.filter(p => p.categories.includes(activeFilter))
  const featured = filtered.find(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-blue-500 dark:text-blue-400 text-sm font-mono">02.</span>
          <span className="text-gray-400 dark:text-white/30 text-sm font-medium uppercase tracking-widest">Proyectos</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
        </div>
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Lo que he construido</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  activeFilter === f
                    ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-500/30'
                    : 'bg-gray-50 dark:bg-white/[0.03] text-gray-500 dark:text-white/40 border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10'
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <div className="mb-6 rounded-2xl border border-blue-200 dark:border-blue-500/20 bg-gradient-to-br from-blue-50 dark:from-blue-500/5 to-transparent p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-200 dark:border-blue-500/30">Proyecto Destacado</span>
                  <span className="text-gray-400 dark:text-white/30 text-xs">{featured.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{featured.title}</h3>
              </div>
              <a href={featured.github} target="_blank" rel="noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white text-xs font-medium transition-all">
                <GHIcon /> GitHub
              </a>
            </div>
            <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-6 max-w-3xl">{featured.description}</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 dark:text-white/20 text-xs uppercase tracking-widest mb-3">Caracteristicas</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {featured.highlights.map(h => (
                    <span key={h} className="flex items-center gap-1.5 text-gray-500 dark:text-white/50 text-xs">
                      <span className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />{h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gray-400 dark:text-white/20 text-xs uppercase tracking-widest mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map(t => (
                    <span key={t} className={`inline-flex px-2 py-0.5 rounded-md text-xs font-medium border ${techColors[t] || 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 border-gray-200 dark:border-white/10'}`}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          {rest.map(project => (
            <div key={project.id} className="rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:border-gray-300 dark:hover:border-white/10 hover:bg-white dark:hover:bg-white/[0.04] p-5 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-gray-400 dark:text-white/25 text-xs mb-1 block">{project.subtitle}</span>
                  <h3 className="text-gray-800 dark:text-white font-semibold text-sm">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white/80 transition-colors"><GHIcon /></a>
                  {project.githubBack && <a href={project.githubBack} target="_blank" rel="noreferrer" className="text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white/80 transition-colors"><GHIcon /></a>}
                </div>
              </div>
              <p className="text-gray-500 dark:text-white/40 text-xs leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span key={t} className={`inline-flex px-2 py-0.5 rounded-md text-xs font-medium border ${techColors[t] || 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 border-gray-200 dark:border-white/10'}`}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
