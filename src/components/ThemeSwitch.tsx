import React from 'react';

type Theme = 'light' | 'dark';

interface ThemeSwitchProps {
  theme: Theme;
  onToggle: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ theme, onToggle }) => (
  <button
    onClick={onToggle}
    className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-vintage-light-border dark:border-vintage-dark-border bg-vintage-light-card dark:bg-vintage-dark-card text-vintage-light-accent dark:text-vintage-dark-accent shadow-vintage hover:bg-vintage-light-accent/20 dark:hover:bg-vintage-dark-accent/20 transition-colors text-xs focus:outline-none focus:ring-2 focus:ring-vintage-light-accent dark:focus:ring-vintage-dark-accent"
    title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    <span className="text-lg" aria-hidden="true">
      {theme === 'dark' ? '🌙' : '☀️'}
    </span>
  </button>
);

export default ThemeSwitch; 