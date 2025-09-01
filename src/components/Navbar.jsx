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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background-color)] shadow-lg border-b border-[var(--border-color)] py-2">
  <div className="container mx-auto px-6 flex items-center justify-between">
    <Link className="flex items-center" to="#">
      <img src={logo} alt="NewsMonkey Logo" className="h-8 mr-2" />

    </Link>
    <button className="lg:hidden focus:outline-none p-2 rounded-md hover:bg-[var(--secondary-color)] transition-colors duration-300" onClick={toggleMenu}>
      <span className="block h-0.5 w-6 bg-[var(--text-color)] mb-1"></span>
      <span className="block h-0.5 w-6 bg-[var(--text-color)] mb-1"></span>
      <span className="block h-0.5 w-6 bg-[var(--text-color)]"></span>
    </button>
    <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`} id="navbarSupportedContent">
      <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 items-center">
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/business' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} to="/business">Business</Link></li>
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/entertainment' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} to="/entertainment">Entertainment</Link></li>
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/general' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} to="/general">General</Link></li>
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/health' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} to="/health">Health</Link></li>
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/science' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} to="/science">Science</Link></li>
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/sports' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} to="/sports">Sports</Link></li>
        <li className="nav-item">
          <Link className={`text-[var(--text-color)] hover:text-[var(--accent-color)] transition duration-300 py-2 px-3 rounded-md ${location.pathname === '/technology' ? 'font-bold bg-[var(--accent-color)] text-white' : ''}`} to="/technology">Technology</Link></li>
        <li className="nav-item ml-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-[var(--secondary-color)] text-[var(--text-color)] focus:outline-none transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
          >
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
