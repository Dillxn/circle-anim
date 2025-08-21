'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'auto';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme('light');
    }
  }, []);

  function applyTheme(newTheme: Theme) {
    const root = document.documentElement;

    if (newTheme === 'auto') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', newTheme);
    }

    localStorage.setItem('theme', newTheme);
  }

  function cycleTheme() {
    const next: Theme =
      theme === 'auto' ? 'light' : theme === 'light' ? 'dark' : 'auto';
    setTheme(next);
    applyTheme(next);
  }

  const icons = {
    auto: <Monitor className="h-4 w-4 text-gray-600 dark:text-gray-300" />,
    light: <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />,
    dark: <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />,
  };

  const positions: Record<Theme, string> = {
    auto: 'translate-x-0',
    light: 'translate-x-6',
    dark: 'translate-x-12',
  };

  return (
    <div
      className="group fixed top-4 right-4 z-50"
    >
      {/* invisible hover zone buffer */}
      <div className="absolute -left-16 top-0 h-10 w-20"></div>

      <button
        onClick={cycleTheme}
        className="relative flex h-6 w-[4.5rem] items-center rounded-full bg-gray-200 dark:bg-gray-700 px-1 shadow-inner
                   translate-x-[calc(100%+1rem)] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
      >
        {/* icons behind the slider */}
        <div className="flex w-full justify-between px-1">
          <Monitor className="h-3.5 w-3.5 text-gray-400" />
          <Sun className="h-3.5 w-3.5 text-gray-400" />
          <Moon className="h-3.5 w-3.5 text-gray-400" />
        </div>

        {/* sliding thumb */}
        <span
          className={`absolute left-1 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow transition-transform ${positions[theme]}`}
        >
          {icons[theme]}
        </span>
      </button>
    </div>
  );
}
