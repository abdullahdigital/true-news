import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from '../img/logo.png'

const Navbar=()=>{
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
      <div>
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[var(--background-color)]/80 border-b border-[var(--border-color)]">
          <div className="container-premium flex h-14 items-center justify-between">
            <Link className="flex items-center gap-2" to="/" aria-label="News homepage">
              <img src={logo} alt="News brand" className="h-7" />
              <span className="font-semibold text-[var(--text-color)]">News</span>
            </Link>
            <button className="lg:hidden focus:outline-none p-2 rounded-[var(--radius-sm)] hover:bg-[var(--neutral-100)] transition-colors" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
              <span className="block h-0.5 w-6 bg-[var(--text-color)] mb-1"></span>
              <span className="block h-0.5 w-6 bg-[var(--text-color)] mb-1"></span>
              <span className="block h-0.5 w-6 bg-[var(--text-color)]"></span>
            </button>
            <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`} id="navbar">
              <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 items-center">
                <li>
                  <Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} aria-current="page" to="/">Home</Link>
                </li>
                <li><Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/business' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} to="/business">Business</Link></li>
                <li><Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/entertainment' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} to="/entertainment">Entertainment</Link></li>
                <li><Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/general' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} to="/general">General</Link></li>
                <li><Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/health' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} to="/health">Health</Link></li>
                <li><Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/science' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} to="/science">Science</Link></li>
                <li><Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/sports' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} to="/sports">Sports</Link></li>
                <li><Link className={`px-3 py-2 rounded-[var(--radius-sm)] transition-colors ${location.pathname === '/technology' ? 'text-white brand-gradient' : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'}`} to="/technology">Technology</Link></li>
                <li className="ml-2">
                  <button onClick={toggleTheme} className="p-2 rounded-full bg-[var(--neutral-100)] text-[var(--text-color)] elevate-sm transition-transform hover:-translate-y-0.5" aria-label="Toggle theme">
                    {theme === 'light' ? '🌙' : '☀️'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }


export default Navbar
