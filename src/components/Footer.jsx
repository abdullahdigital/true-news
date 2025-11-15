import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-[var(--border-color)] bg-[var(--surface-color)]">
      <div className="container-premium py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h4 className="text-[var(--text-color)] font-semibold">About</h4>
          <p className="mt-2 text-[var(--neutral-600)]">Real-time headlines aggregated into a clean, modern interface.</p>
        </div>
        <div>
          <h4 className="text-[var(--text-color)] font-semibold">Categories</h4>
          <ul className="mt-2 text-[var(--neutral-600)] space-y-1">
            <li><a href="/business">Business</a></li>
            <li><a href="/technology">Technology</a></li>
            <li><a href="/health">Health</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[var(--text-color)] font-semibold">Follow</h4>
          <div className="mt-2 flex gap-3">
            <a href="#" className="p-2 rounded-[var(--radius-sm)] bg-[var(--neutral-100)] elevate-sm">X</a>
            <a href="#" className="p-2 rounded-[var(--radius-sm)] bg-[var(--neutral-100)] elevate-sm">IG</a>
            <a href="#" className="p-2 rounded-[var(--radius-sm)] bg-[var(--neutral-100)] elevate-sm">YT</a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border-color)] py-4 text-center text-[var(--neutral-500)]">© {new Date().getFullYear()} News. All rights reserved.</div>
    </footer>
  )
}

export default Footer
