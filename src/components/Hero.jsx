import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 brand-gradient opacity-20" />
      <img
        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
        alt="Newspaper headlines background"
        className="w-full h-[40vh] sm:h-[48vh] md:h-[56vh] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-color)]/90 via-[var(--background-color)]/40 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="container-premium w-full pb-10">
          <div className="glass-surface elevate-md rounded-[var(--radius-lg)] p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-color)]">Daily Headlines</h1>
            <p className="mt-3 text-[var(--text-color)]">Curated top stories across business, technology, health and more.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#categories" className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius-md)] text-white brand-gradient elevate-sm transition-transform duration-300 hover:translate-y-[-2px]">Browse Categories</a>
              <a href="/general" className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius-md)] bg-[var(--surface-color)] text-[var(--text-color)] border border-[var(--border-color)] elevate-sm transition-transform duration-300 hover:translate-y-[-2px]">Top Headlines</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
