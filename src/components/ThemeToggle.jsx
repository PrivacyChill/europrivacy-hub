import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // State to track the current theme ('light' or 'dark')
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // On component mount, check local storage for saved theme preference
    const savedTheme = localStorage.getItem('theme');

    // Check for system preference if no saved theme
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Determine the initial theme
    let initialTheme = 'light';
    if (savedTheme) {
        initialTheme = savedTheme;
    } else if (systemPrefersDark) {
        initialTheme = 'dark';
    }

    setTheme(initialTheme);
    // Apply the class to the body
    document.body.classList.toggle('dark-mode', initialTheme === 'dark');

    // Listen for system theme changes (optional, but good UX)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
        if (!localStorage.getItem('theme')) { // Only react to system changes if no preference is saved
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
            document.body.classList.toggle('dark-mode', newTheme === 'dark');
        }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Cleanup listener on component unmount
    return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };

  }, []); // Empty dependency array means this effect runs once on mount

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Apply or remove the dark-mode class
    document.body.classList.toggle('dark-mode', newTheme === 'dark');

    // Save preference to local storage
    localStorage.setItem('theme', newTheme);
  };

  return (
    // The button element. The CSS classes 'theme-toggle-button', 'sun-icon',
    // and 'moon-icon' are expected based on the stylesheet provided previously.
    // We use ARIA attributes for accessibility.
    <button
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      aria-live="polite" // Announces theme change to screen readers
    >
      {/* Sun Icon (for light mode) */}
      {/* You can replace the SVG paths with your own icons if needed */}
      <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>

      {/* Moon Icon (for dark mode) */}
      <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>
  );
};

export default ThemeToggle;
