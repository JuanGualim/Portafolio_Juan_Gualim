const interests = [
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>),
    title: 'Diseno de Bases de Datos',
    desc: 'Modelado relacional, integridad de datos, optimizacion de consultas y diseno de estructuras escalables.',
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>),
    title: 'Arquitectura Backend',
    desc: 'Diseno de APIs, autenticacion, logica de negocio y organizacion de sistemas mantenibles.',
  },
  {
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>),
    title: 'Sistemas Empresariales',
    desc: 'Desarrollo de soluciones para gestion operativa, control de informacion y procesos de negocio.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="text-blue-500 dark:text-blue-400 text-sm font-mono">01.</span>
          <span className="text-gray-400 dark:text-white/30 text-sm font-medium uppercase tracking-widest">Sobre mi</span>
          <div className="flex-1 h-px bg-gray-200 dark:bg-white/5" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Pienso en sistemas,<br />
              <span className="text-gray-400 dark:text-white/40">no solo en codigo.</span>
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-white/50 text-base leading-relaxed">
              <p>Actualmente curso el segundo semestre de mi tercer año de Ingenieria en Ciencias de la Computacion. Mi principal interes esta en el diseno de bases de datos y la arquitectura backend.</p>
              <p>Disfruto construir sistemas que resuelvan problemas reales y que tengan una base solida de datos. Para mi, una buena aplicacion comienza con un buen modelo de datos.</p>
              <p>Mi objetivo es desarrollar experiencia profesional en analisis de bases de datos, backend y sistemas empresariales. Tambien me interesa colaborar en proyectos grandes y trabajar con equipos internacionales.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {interests.map((item, i) => (
              <div key={i} className="group flex gap-4 p-4 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02] hover:border-blue-300 dark:hover:border-blue-500/20 hover:bg-blue-50 dark:hover:bg-blue-500/5 transition-all duration-200">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400">{item.icon}</div>
                <div>
                  <h3 className="text-gray-800 dark:text-white font-medium text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
