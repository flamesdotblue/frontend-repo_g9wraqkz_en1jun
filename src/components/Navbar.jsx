import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-[#0E6FFF] shadow-inner" />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SkillSwap</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#explore" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Explore</a>
            <a href="#offer" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Offer a Skill</a>
            <a href="#how" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">How it Works</a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Contact</a>
          </div>

          <div className="flex items-center space-x-2">
            <button onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#auth" className="hidden sm:inline-flex items-center space-x-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200">
              <User size={16} />
              <span>Sign In</span>
            </a>
            <button className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#explore" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Explore</a>
            <a href="#offer" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Offer a Skill</a>
            <a href="#how" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">How it Works</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Contact</a>
            <a href="#auth" className="block px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">Sign In</a>
          </div>
        )}
      </nav>
    </header>
  );
}
