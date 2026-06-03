export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 font-bold text-xs">JG</div>
          <div>
            <p className="text-gray-700 dark:text-white/70 text-sm font-medium">Juan Gabriel Gualim Molina</p>
            <p className="text-gray-400 dark:text-white/30 text-xs">Backend Developer &amp; Database Enthusiast</p>
          </div>
        </div>
        <a href="mailto:juangaguamo@gmail.com" className="text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white/60 transition-colors text-sm">juangaguamo@gmail.com</a>
        <p className="text-gray-300 dark:text-white/20 text-xs">{new Date().getFullYear()} - Construido con React + Vite</p>
      </div>
    </footer>
  )
}
